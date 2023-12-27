import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import './LoginForm.scss'
const LoginForm = ({ type }) => {
    const [col, setCol] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    return (
        <div className='loginForm'>
            <h1 className='formHeading'>{type}</h1>
            <div className='formInput'>

                <div className={col == 1 ? "inputBox centerElements highlight" : "inputBox centerElement"}>
                    <Icon icon="material-symbols:mail-outline" width={20} color="blue" />
                    <input className='email' value={email} onChange={(e) => { setEmail(e.target.value) }} onClick={() => { setCol(1) }} type="email" placeholder='Email' />
                </div>

                <div className={col == 2 ? "inputBox centerElements highlight" : "inputBox centerElement"}>
                    <Icon icon="mdi:password-outline" width={20} color="blue" />
                    <input className='email' value={pass} onChange={(e) => { setPass(e.target.value) }} onClick={() => { setCol(2) }} type="password" placeholder='Password' />
                </div>
                <div className="btn">
                    <button className='submitBtn'>{type}</button>
                    <p>
                    <a className='forgotPassword' href="https://www.youtube.com/watch?v=8d0f9G7lmzg">Forgot password?</a>
                    </p>
                </div>



            </div>
            <div className="oAuth centerElements">
            <Icon className='oAuthIcons' icon="flat-color-icons:google" color="blue" width="40" />
            <Icon className='oAuthIcons' icon="logos:facebook" color="blue" width="35" />
            </div>
        </div>
    )
}

export default LoginForm