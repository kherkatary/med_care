import React, { PureComponent } from 'react'
import './Appointment.scss'
const Appointment = ({ title }) => {
    return (
        <div className="Appointment" >
            <h4>Book an appointment</h4>
             <div className='inputss'>
            <input type="name" placeholder="Name" className="input" id="name" />
            <input type="number" placeholder="Phone" className="input" id="no" />
            <input type="email" placeholder="Email" className="input" id="mail" />
            </div>
            <button id="make">Make an Appointmnet</button>

        </div>
    )
}
export default Appointment