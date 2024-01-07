import React from "react";
import "./BookAppointment.scss"

const BookAppointment=()=>{
    return(
        <div>
            <div className="appointmentContainer">
                <h2>Book an Appointment</h2>
                <div className="input-boxes">
                    <input type="text" placeholder="Name" className="user-input"/>
                    <select name="speciality" id="doctor_speciality" className="user-input">
                        <option value="" disabled selected hidden>Speciality</option>
                        <option value="Heart">Heart</option>
                        <option value="Psychology">Psychology</option>
                        <option value="Bones">Bones</option>
                    </select>
                    <input type="text" placeholder="Phone" className="user-input"/>
                    <select name="doctor" id="selected_doctor" className="user-input">
                        <option value="" disabled selected hidden>Select Doctor</option>
                        <option value="sumit">Sumit</option>
                        <option value="Sandeep">Sandeep</option>
                        <option value="Indra">Indra</option>
                        <option value="Bishal">Bishal</option>
                        <option value="Hrishyak">Hrishyak</option>
                    </select>
                    <input type="email" placeholder="Email" className="user-input"/>
                    <input type="date" placeholder="mm/dd/yyyy" className="user-input"/>
                </div>
                <span><button className="btn">Make an Appointment</button></span>

            </div>
        </div>
    )
}

export default BookAppointment;