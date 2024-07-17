import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./modal.scss"

function AudioVideoSetupModal({ open, handleClose, btnType }) {
  return (
    <div className='audio-video-setup-modal-wrapper'>
      <div className='audio-video-setup-modal-container'>
        <div className='top-row'>
          <div className="top-row__title">
          </div>
          <div onClick={handleClose} className='close-btn'>
            <CloseIcon sx={{ color: "#C6C6C6", fontSize: "2rem" }} />
          </div>
        </div>
        <div className='audio-video-setup-modal-content'>
          <div>
            <img src="/audio-video-modal-img.svg" alt="graphic" />
          </div>
          <div>
            <div className='modal-title-one'>We're blocked from using your {btnType === "audio" ? "microphone" : "camera"}</div>
            <ol className='modal-list'>
              <li className='modal-title-two'>Click the <img src="/browser-controls.svg" alt="controls" /> page info icon in your browser’s address bar</li>
              <li className='modal-title-two'>Turn On {btnType === "audio" ? "Microphone" : "Camera"}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioVideoSetupModal