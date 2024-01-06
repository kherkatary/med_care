import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import { Button ,Navbar,Testimonial,Appointment_doc_images} from '../../Components'
import Carousel from '../../Components/Carousel/Carousel'

const Home = () => {
  return (
    <div className='home'>
     <Carousel />
     <Testimonial/>
     <Appointment_doc_images/>

    </div>
  )
}

export default Home