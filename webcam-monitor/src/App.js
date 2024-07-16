import { useState, useEffect, useRef } from "react"

// MUI
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import MicOffIcon from '@mui/icons-material/MicOff';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

let animationFrameId

function App() {
  const [loadingStream, setLoadingStream] = useState(true)
  const [mediaStream, setMediaStream] = useState(null)
  const [muted, setMuted] = useState(false)
  const [audioLevel, setAudioLevel] = useState(0)
  const [audioDevices, setAudioDevices] = useState([])
  const [videoDevices, setVideoDevices] = useState([])
  const videoRef = useRef(null)

  const getAudioDevices = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices()
      const audioDevices = devices.filter(device => device.kind === 'audioinput')
      setAudioDevices(audioDevices)
      console.log(audioDevices, "audio devices")
    } catch (error) {
      console.error('Error enumerating audio devices:', error)
    }
  }

  const getVideoDevices = async () => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices()
      const videoDevices = devices.filter(device => device.kind === 'videoinput')
      setVideoDevices(videoDevices)
    } catch (error) {
      console.error('Error enumerating video devices:', error)
    }
  }


  const handleCameraToggle = () => {
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => {
        console.log(track, "track")
        track.stop()
      })
      setMediaStream(null)
    } else {
      getAudioVideoFeed()
    }
  }

  const handleMuteToggle = () => {
    if (mediaStream) {
      const audioTracks = mediaStream.getAudioTracks()
      audioTracks.forEach(track => {
        track.enabled = !track.enabled
      })
      setMuted(!muted)
    }
  }

  const getAudioVideoFeed = async () => {
    setLoadingStream(true)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      setMediaStream(stream)

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
        // console.log(average, "average audio level")
        setAudioLevel(average)

        animationFrameId = requestAnimationFrame(getAudioLevel)
      }

      getAudioLevel()

    } catch (error) {
      console.error('Error accessing camera:', error)
      const cameraPermission = await navigator.permissions.query({ name: 'camera' })
      const audioPermission = await navigator.permissions.query({ name: 'microphone' })

      if (cameraPermission.state === 'denied' || audioPermission.state === 'denied') {
        alert('Please enable camera and microphone access to use video call feature.')
      }
    }
    setLoadingStream(false)
  }

  useEffect(() => {
    getAudioDevices()
    getVideoDevices()
    getAudioVideoFeed()

    // Clean up the camera stream when the component unmounts
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach(track => {
          track.stop()
        })
      }
    }
  }, [])

  useEffect(() => {
    if (videoRef.current && mediaStream) {
      videoRef.current.srcObject = mediaStream
      videoRef.current.play().catch(error => console.error("Error playing the video stream:", error))
    }
  }, [mediaStream])


  return (
    <div className='vc-preview-modal-container'>
      <div className="vc-preview__row-one">
        {loadingStream && <div className="vc-preview__loading">Loading...</div>}

        {!mediaStream || muted ? (
          <div className="audio-video-indicator">
            {muted ? "Join with mic off" : "Join with cam off"}
          </div>
        ) : null}

        <div className="vc-preview__row-one__controls">
          <div></div>
          <div className='vc-preview__row-one__controls__center'>
            <button onClick={handleCameraToggle} className='vc-preview__video-toggle'>
              {mediaStream ? <VideocamOutlinedIcon /> : <VideocamOffOutlinedIcon />}
            </button>
            <button onClick={handleMuteToggle} className='vc-preview__audio-toggle'>
              <div className="audio-level-indicator" style={{ height: `${audioLevel}%` }}></div>
              {muted ? <MicOffIcon /> : <MicOutlinedIcon />}
            </button>
          </div>
          <div></div>
        </div>

        {mediaStream && (
          <div className="vc-preview__camera-feed">
            <video ref={videoRef} autoPlay />
          </div>
        )}
      </div>
      <div className="vc-preview__row-two">
        <div className="vc-select-wrapper">
          <select className='vc-select'>
            {videoDevices?.map((device, index) => (
              <option key={index} value={device.label}>{device.label}</option>
            ))}
          </select>

          <VideocamOutlinedIcon className='function-icon' />
          <KeyboardArrowDownIcon className='down-arrow' />
        </div>

        <div className="vc-select-wrapper">
          <select className='vc-select'>
            {audioDevices?.map((device, index) => (
              <option key={index} value={device.label}>{device.label}</option>
            ))}
          </select>

          <MicOutlinedIcon className='function-icon' />
          <KeyboardArrowDownIcon className='down-arrow' />
        </div>

        {/* <div className="vc-select-wrapper">
          <select className='vc-select'>
            <option value="Speaker 1">Speaker 1</option>
            <option value="Speaker 2">Speaker 2</option>
          </select>

          <VolumeUpIcon className='function-icon' />
          <KeyboardArrowDownIcon className='down-arrow' />
        </div> */}

        <button disabled={loadingStream} className="vc-preview__row-two__cta">
          Join
        </button>
      </div>
    </div>
  );
}

export default App;
