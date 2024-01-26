import React from "react";
import "./Appointment_img_icon.scss";
import BookAppointment from "../BookAppointment/BookAppointment";
import Icons from "../Icons/Icons";

const Appointment_img_icon=()=> {
    return (<>
        <div className="appointment_img">
            <div><BookAppointment /></div>
            <div className="doctor_img"><img src="/doctorG.webp" alt="" /></div>
        </div>
        <div className="icons">
            <Icons />
        </div>

    </>
    );
}
export default Appointment_img_icon;