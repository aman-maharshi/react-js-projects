import { useState, useEffect, useRef } from "react"

// MUI
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import InfoIcon from '@mui/icons-material/Info';

let animationFrameId

function App() {
  const [loadingStream, setLoadingStream] = useState(false)
  const [audioStream, setAudioStream] = useState(null)
  const [videoStream, setVideoStream] = useState(null)
  const [muted, setMuted] = useState(false)
  const [audioLevel, setAudioLevel] = useState(0) // INPUT
  const [audioDevices, setAudioDevices] = useState([]) // INPUT
  const [outputAudioDevices, setOutputAudioDevices] = useState([]) // OUTPUT
  const [selectedAudioDevice, setSelectedAudioDevice] = useState(null)
  const [selectedVideoDevice, setSelectedVideoDevice] = useState(null)
  const [selectedOutputAudioDevice, setSelectedOutputAudioDevice] = useState(null)
  const [videoDevices, setVideoDevices] = useState([])
  const [audioAllowed, setAudioAllowed] = useState(false)
  const [videoAllowed, setVideoAllowed] = useState(false)
  const videoRef = useRef(null)

  const stopMediaTracks = (stream) => {
    stream.getTracks().forEach(track => {
      console.log(`stopping track: ${track.kind} - ${track.label}`)
      track.stop()
    })
  }

  const handleCameraToggle = () => {
    if (videoAllowed) {
      if (videoStream) {
        stopMediaTracks(videoStream)
        setVideoStream(null)
      } else {
        getVideoFeed(selectedVideoDevice)
      }
    }
  }

  const handleMuteToggle = () => {
    if (audioAllowed) {
      if (audioStream) {
        const audioTracks = audioStream.getAudioTracks()
        audioTracks.forEach(track => {
          track.enabled = !track.enabled
        })
        setMuted(prev => !prev)
      }
    }
  }

  const getAudioVideoDevices = async () => {
    setLoadingStream(true)
    try {
      const cameraPermission = await navigator.permissions.query({ name: 'camera' })
      const microphonePermission = await navigator.permissions.query({ name: 'microphone' })
      const devices = await navigator.mediaDevices.enumerateDevices()
      const audioDevicesList = devices.filter(device => device.kind === 'audioinput')
      const videoDevicesList = devices.filter(device => device.kind === 'videoinput')
      const outputAudioDevicesList = devices.filter(device => device.kind === 'audiooutput')

      setOutputAudioDevices(outputAudioDevicesList)
      setSelectedOutputAudioDevice(outputAudioDevicesList[0]?.deviceId)

      if (cameraPermission.state === 'granted') {
        setVideoAllowed(true)
        setVideoDevices(videoDevicesList)
        setSelectedVideoDevice(videoDevicesList[0]?.deviceId)
      }

      if (microphonePermission.state === 'granted') {
        setAudioAllowed(true)
        setAudioDevices(audioDevicesList)
        setSelectedAudioDevice(audioDevicesList[0]?.deviceId)
      }

      if (microphonePermission.state === 'denied' || cameraPermission.state === 'denied') {
        setLoadingStream(false)
        alert("Please allow camera and microphone permissions to use this feature")
      }


    } catch (error) {
      console.error('Error accessing audio/video devices:', error)
    }
  }

  const getVideoFeed = async (videoDeviceId) => {
    setLoadingStream(true)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: videoDeviceId } })
      setVideoStream(stream)
    } catch (error) {
      console.error('Error accessing camera:', error)
    }
    setLoadingStream(false)
  }

  const getAudioFeed = async (audioDeviceId) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: { deviceId: audioDeviceId } })
      setAudioStream(stream)

      // Create an AudioContext and an AnalyserNode
      const audioContext = new (window.AudioContext || window.webkitAudioContext)()
      const analyser = audioContext.createAnalyser()
      const source = audioContext.createMediaStreamSource(stream)
      source.connect(analyser)
      analyser.fftSize = 256

      // Buffer to store data
      const bufferLength = analyser.frequencyBinCount
      const dataArray = new Uint8Array(bufferLength)

      // Processing audio data
      const getAudioLevel = () => {
        analyser.getByteFrequencyData(dataArray)
        // console.log(dataArray, "audio data")

        // Volume calculation
        let sum = 0
        for (let i = 0; i < bufferLength; i++) {
          sum += dataArray[i]
        }
        let average = sum / bufferLength

        average = Math.max(0, Math.min(100, average))
        console.log(average, "average audio level")
        setAudioLevel(average)

        animationFrameId = requestAnimationFrame(getAudioLevel)
      }

      getAudioLevel()

    } catch (error) {
      console.error('Error accessing microphone:', error)
    }
  }

  useEffect(() => {
    getAudioVideoDevices()
  }, [])

  useEffect(() => {
    if (selectedAudioDevice && selectedVideoDevice) {
      getAudioFeed(selectedAudioDevice)
    }
    if (selectedVideoDevice) {
      getVideoFeed(selectedVideoDevice)
    }

    // Clean up the camera stream when the component unmounts
    return () => {
      cancelAnimationFrame(animationFrameId)
      if (audioStream) {
        stopMediaTracks(audioStream)
      }
      if (videoStream) {
        stopMediaTracks(videoStream)
      }
    }
  }, [selectedAudioDevice, selectedVideoDevice])

  useEffect(() => {
    if (videoRef.current && videoStream) {
      videoRef.current.srcObject = videoStream
      videoRef.current.play().catch(error => console.error("Error playing the video stream:", error))
    }
  }, [videoStream])





  return (
    <div className='vc-preview-modal-container'>
      <div className="vc-preview__row-one">
        {loadingStream && <div className="vc-preview__loading">Loading...</div>}

        <div className="vc-preview__row-one__controls">
          <div></div>
          <div className='vc-preview__row-one__controls__center'>
            <button onClick={handleCameraToggle} className='vc-preview__video-toggle'>
              {videoStream ? <VideocamOutlinedIcon /> : <VideocamOffOutlinedIcon />}

              {!videoAllowed ? <div className='info-icon'><InfoIcon /></div> : null}
            </button>
            <button onClick={handleMuteToggle} className='vc-preview__audio-toggle'>
              <div className="audio-level-indicator" style={{ height: `${audioLevel}%` }}></div>
              {muted || !audioAllowed ? <MicOffIcon /> : <MicOutlinedIcon />}

              {!audioAllowed ? <div className='info-icon'><InfoIcon /></div> : null}
            </button>
          </div>
          <div></div>
        </div>

        {videoStream && (
          <div className="vc-preview__camera-feed">
            <video ref={videoRef} autoPlay />
          </div>
        )}
      </div>

      <div className="vc-preview__row-two">
        <div className="vc-select-wrapper">
          <select className='vc-select' onChange={e => setSelectedVideoDevice(e.target.value)}>
            {videoDevices?.map((device, index) => (
              <option key={index} value={device.deviceId}>{device.label}</option>
            ))}
            {!videoAllowed ? <option value="">Not allowed</option> : null}
          </select>

          <VideocamOutlinedIcon className='function-icon' />
          <KeyboardArrowDownIcon className='down-arrow' />
        </div>

        <div className="vc-select-wrapper">
          <select className='vc-select' onChange={e => setSelectedAudioDevice(e.target.value)}>
            {audioDevices?.map((device, index) => (
              <option key={index} value={device.deviceId}>{device.label}</option>
            ))}
            {!audioAllowed ? <option value="">Not allowed</option> : null}
          </select>

          <MicOutlinedIcon className='function-icon' />
          <KeyboardArrowDownIcon className='down-arrow' />
        </div>

        <div className="vc-select-wrapper">
          <select className='vc-select' onChange={e => setSelectedOutputAudioDevice(e.target.value)}>
            {outputAudioDevices?.map((device, index) => (
              <option key={index} value={device.deviceId}>{device.label}</option>
            ))}
            {!audioAllowed ? <option value="">Not allowed</option> : null}
          </select>

          <VolumeUpIcon className='function-icon' />
          <KeyboardArrowDownIcon className='down-arrow' />
        </div>
      </div>
    </div>
  );
}

export default App;
