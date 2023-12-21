import React from 'react'
import './About.scss'
import { TileDesc } from '../../Components'

const About = () => {
  return (
    <div>
        <TileDesc name="About Us"/>
        <div style={{backgroundImage: `url("https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=1800&t=st=1703188160~exp=1703188760~hmac=c40d0fcdda0d443539490d44a10b6cc9892c8870bcbb6e411a82f19e1a990f31")`}}
         className="quote_div">
            <div className="quote">
            <h1>We have the best doctors in the country</h1>
            <p>Phasellus at nunc orcidonec ipsum metus, pharetra quis nunc sit amet</p>
            </div>
            <div className="aptBtn centerUsingFlex">
                <button>Make an Appointment</button>
            </div>
        </div>

    </div>
  )
}

export default About