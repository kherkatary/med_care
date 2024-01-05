import React from 'react'
import './Contact.scss'
import { Link } from 'react-router-dom'
import TileDescriptor from '../../Components/TileDesc/TileDesc'


const Contact = () => {
  return (
    <div className='contact'>
      <div className="overall-items-contact">
        <div className="left-side-div">
        </div>
        <div className="right-side-div">
          <p className='contact-heading'>CONTACT US</p>
          <form>
            <div id="div-input">
              <input type="text" id="Name" name="user_name" placeholder='Name'/>
            </div>

            <div id="div-input">    
              <input type="mail" id="mail" name="user_email"  placeholder='Mail'/>
            </div>

            <div id="div-input">
              <input type='text' id="phn_no" name="ph_num" placeholder='Phone Number'/>
            </div>

            <div id="div-input">
              <textarea id="msg" name="user_message" placeholder='Message'></textarea>
            </div>

            <div id="div-input">
              <button type="submit">Send </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Contact
