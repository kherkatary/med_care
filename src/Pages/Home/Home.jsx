import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import { Button ,Navbar,Testimonial, BookAppointment} from '../../Components'
import Carousel from '../../Components/Carousel/Carousel'

const Home = () => {
  return (
    <div className='home'>
     <Carousel />
     <Testimonial/>
     <BookAppointment/>

    </div>
  )
}

export default Home