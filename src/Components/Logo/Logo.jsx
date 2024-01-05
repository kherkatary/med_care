import React from 'react'
import './Logo.scss'

export default function Logo(props) {
  return (
    <div className='logo'>
      <div className="logo-image">
         <img src="/favicon.png" alt="" />
      </div>
      <div className="site-heading">
       <p className='logo-title'>MEDICA</p>
       <p className='logo-desc'>HEALTH & MEDICAL</p>
      </div>
    </div>
  )
}
