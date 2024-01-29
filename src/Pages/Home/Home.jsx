import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import { Button, Navbar, Testimonial, AppointmentImgIcon } from '../../Components'
import Carousel from '../../Components/Carousel/Carousel'
import IntroToAdd from '../../Components/IntroToAdd/IntroToAdd'
import MedicaIntro from '../../Components/MedicaIntro/MedicaIntro'
import Contentinfo from '../../Components/Contentinfo/Contentinfo'
import Extra from '../Extra'



const Home = () => {
  return (
    <div className='home'>
      <Carousel />
      <IntroToAdd />
      <MedicaIntro />
      <Extra/>
      <Contentinfo />
      <Testimonial />
      <AppointmentImgIcon />

    </div>
  )
}

export default Home