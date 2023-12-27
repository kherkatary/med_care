import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
import { Button, LoginForm } from '../../Components'


const Login = () => {
  const background="https://img.freepik.com/free-photo/hospital-hallway-with-motion-effect_23-2150829891.jpg?t=st=1703675164~exp=1703678764~hmac=2ece85c52c44dd90fcdcf434618c64585271b46130ae26b971ed3d38fc81e7f2&w=1480";
  return (
    <div className='login'>
      <div className="display" style={{backgroundImage: `url("${background}")`}}>
        <div className="info centerElements"> <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, et?</h3></div>
        
      </div>
      <div className="logForm centerElements">
        <LoginForm type="Login"/>
      </div>
    </div>

  )
}

export default Login