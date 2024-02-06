import React, { useRef } from 'react'
import logo from './assets/logo.png'
import mandala from './assets/mandala.png'
import countdown from './assets/countdown.mp4'
import './App.css'

function App() {

  const videoRef = useRef(null); 

  function imageGlitch() {

    const imgElement = document.querySelector('img');

    if (imgElement) {
      imgElement.classList.add('image_effect');
    }

  }

  function imageGlitchRemove() {

    const imgElement = document.querySelector('img');

    if (imgElement) {
      imgElement.classList.remove('image_effect');
    }

  }


  function openWebsite() {
    const videoElement = document.querySelector('video')
    videoElement.classList.add('disp');
    const url = 'https://aantarya.tech/';

    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setTimeout(() => {
          window.open(url, '_self');
        }, 10000);
      });
    }
  }


  return (
    <div className='App'>
      <div className='contents'>
        <img src={logo}></img>

        <button onMouseEnter={imageGlitch} onMouseLeave={imageGlitchRemove} onClick={openWebsite}> LAUNCH
        </button>
      </div>

      <div className='mandalaRotate'>
        <img className='mandala' src={mandala}></img>
      </div>
      <div className='mandalaRotate2'>
        <img className='mandala' src={mandala}></img>
      </div>

      <div className='video'>
        <video ref={videoRef} className='vid_element' src={countdown}/>
      </div>
      
    </div>
  )
}

export default App
