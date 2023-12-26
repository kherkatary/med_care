import React from 'react'
import './LoadingScreen.scss'
import { Player } from '@lottiefiles/react-lottie-player'
import Loader from '../../assets/Loader.json'
const LoadingScreen = () => {
  return (
    <div className='loading'>

        <Player src={Loader} className='loaderLottie' autoplay loop/>

    </div>
  )
}

export default LoadingScreen