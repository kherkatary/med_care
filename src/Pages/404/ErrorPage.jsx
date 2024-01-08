import React, { useEffect } from 'react'
import "./ErrorPage.scss"
import { Player } from '@lottiefiles/react-lottie-player';
import ErrorAnimation from "../../assets/ErrorAnimation.json"
import { Link } from 'react-router-dom';
const ErrorPage = () => {




  return (


    <div className='errorContainer'>
      <Player className='lottieAnimation' src={ErrorAnimation} loop autoplay />
    </div>

  )
}

export default ErrorPage