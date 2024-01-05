import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
import { Button } from '../../Components'
const Login = () => {
  return (
    <div className='login'>
      <p>Login Page</p>
      <Link to="/"><Button title="Home"/></Link>
    </div>

  )
}

export default Login