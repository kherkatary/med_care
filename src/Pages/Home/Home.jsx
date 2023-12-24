import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import { Button } from '../../Components'
import Navbar from '../../Components/Navbar/Navbar'
import Carousel from '../../Components/Carousel/Carousel'

const Home = () => {
  return (
    <div className='home'>
     <Carousel />

    </div>
  )
}

export default Home