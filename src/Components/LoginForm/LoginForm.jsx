import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import './LoginForm.scss'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
const LoginForm = ({ type }) => {
    const route= type;
    useEffect(() => {
        
        checkType()
    })

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [phone, setPhone] = useState("")
    const [regis, setRegis] = useState("none");
    const [msg, setMsg] = useState();

    const checkType = () => {
        if (type === "Register") { setRegis("block") }
    }

    const submit = async () => {
        try {
            const res = await fetch(`http://localhost:8080/api/v1/auth/${route.toLowerCase()}`, {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: pass
                }),
                headers: {
                    'Content-Type': 'application/json'
                }

            });
            const result = await res.json()
            if(result?.success) toast.success(result?.message);
            else toast.error(result?.message)
            console.log(result);
            setMsg(result?.message);

        } catch (err) { console.log(`Login Error: ${err}`) }

    }


    return (
        <div className='loginForm'>
            <h1 className='formHeading'>{type} login:Status: {msg}</h1>
            <div className='formInput'>

                <div className="inputBox centerElement" style={{ display: regis }}>
                    <Icon icon="icon-park-outline:edit-name" width={20} color="blue" />
                    <input className='name' value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='Name' />
                </div>


                <div className="inputBox centerElement" style={{ display: regis }}>
                    <Icon icon="ph:phone" width={20} color="blue" />
                    <input className='name' value={phone} onChange={(e) => { setPhone(e.target.value) }} type="text" placeholder='Phone' />
                </div>


                <div className="inputBox centerElement">
                    <Icon icon="material-symbols:mail-outline" width={20} color="blue" />
                    <input className='email' value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='Email' />
                </div>

                <div className="inputBox centerElement">
                    <Icon icon="mdi:password-outline" width={20} color="blue" />
                    <input className='password' value={pass} onChange={(e) => { setPass(e.target.value) }} type="password" placeholder='Password' />
                </div>
                <div className="btn">
                    <button className='submitBtn' onClick={submit}  >{type}</button>
                    <div>
                        <a className='hotLink' href="https://www.youtube.com/watch?v=8d0f9G7lmzg">Forgot password?</a>
                        {
                            type === "Register" ? <Link to='/login' className='hotLink'><p>Login</p></Link> :
                                <Link to='/register' className='hotLink'><p>Register</p></Link>
                        }

                    </div>
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