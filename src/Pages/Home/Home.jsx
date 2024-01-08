import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import { Button ,Navbar,Testimonial, Appointment_img_icon} from '../../Components'
import Carousel from '../../Components/Carousel/Carousel'

const Home = () => {
  return (
    <div className='home'>
     <Carousel />
     <Testimonial/>
     <Appointment_img_icon/>

    </div>
  )
}

export default Home