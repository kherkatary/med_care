import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
import { Button } from '../../Components'
import TileDesc from '../../Components/TileDesc/TileDesc'

const Login = () => {
  return (
    <div className='login'>
      <TileDesc name='SERVICES'/>
      <p>Login Page</p>
      <Link to="/"><Button title="Home"/></Link>
    </div>

  )
}

export default Login