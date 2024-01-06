import React from "react";
import "./Appointment_doc_images.scss"
import BookAppointment from "../BookAppointment";
import Doc_icons from "../Doc_icons"

const Appointment_doc_images=()=>{
    return(
        <div>
            <div className="container">
                <div className="book_appointment"><BookAppointment/></div>
                <div className="images"><img src="./doctorG.wep" alt="doctor" /></div>
            </div>
            <div className="doc_icons"><Doc_icons/></div>
        </div>
    )
}

export default Appointment_doc_images;