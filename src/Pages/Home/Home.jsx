import React from 'react'
import "./Home.scss"
import { Link } from 'react-router-dom'
import { Button } from '../../Components'

const Home = () => {
  return (
    <div className='home'>
    <div>This is Home Page</div>
    <Link to="/login"> <Button title="to Login Page"/></Link>
    
    <Button title="Submit"/>

    </div>
  )
}

export default Home