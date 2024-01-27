import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import { Button ,Navbar,Testimonial, Appointment_img_icon} from '../../Components'
import Carousel from '../../Components/Carousel/Carousel'
import IntroToAdd from '../../Components/IntroToAdd/IntroToAdd'
import MedicaIntro from '../../Components/MedicaIntro/MedicaIntro'
import Contentinfo from '../../Components/Contentinfo/Contentinfo'



const Home = () => {
  return (
    <div className='home'>
      <Carousel />
      <IntroToAdd />
      <MedicaIntro />
      <Contentinfo />    
       <Testimonial/>
     <Appointment_img_icon/>

    </div>
  )
}

export default Home