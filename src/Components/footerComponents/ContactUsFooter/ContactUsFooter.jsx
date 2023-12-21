import React from 'react'
import './contactUsFooter.scss'
import { Icon } from '@iconify/react';

const ContactUsFooter = () => {
  return (
    <div className="fourth containerStyles">
        <h3>CONTACT US</h3>
        <div className="contact">
        <div className="contactMethod">
          <div className="contactLogo"><Icon icon="ion:alarm-outline" color="white" width="50" /></div>
          <div className="contactInfo">Monday - Friday 08:00 - 21:00 Saturday & Sunday - CLOSED</div>
        </div>

        <div className="contactMethod">
          <div className="contactLogo"><Icon icon="carbon:location" color="white" width="50" /></div>
          <div className="contactInfo">Lamas Carbajal Str, no 14-18 41770 Montellano</div>
        </div>

        <div className="contactMethod">
          <div className="contactLogo"><Icon icon="material-symbols:mail-outline" color="white" width="50" /></div>
          <div className="contactInfo">0080 673 729 766 contact@business.com</div>
        </div>

        </div>
        
      </div>
  )
}

export default ContactUsFooter