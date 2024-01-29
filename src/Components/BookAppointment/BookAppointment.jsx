import React, { useState } from "react";
import "./BookAppointment.scss"

const BookAppointment = () => {
    const [name, setName] = useState("");
    const [speciality, setSpeciality] = useState("");
    const [phone, setPhone] = useState("");
    const [doctor, setDoctor] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        speciality: "",
        phone: "",
        doctor: "",
        email: "",
        date: ""
    });

    const submitBook = async (e) => {

        setFormData({
            name: name,
            speciality: speciality,
            phone: phone,
            doctor: doctor,
            email: email,
            date: date
        })

        e.preventDefault();

        try {

            // const book = await fetch("http://localhost:8080/api/v1/book", {
            //     method: "POST",
            //     body: formData
            // });
            console.log(formData)

        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div>
            <form onSubmit={submitBook}>
                <div className="appointmentContainer">
                    <h2>Book an Appointment</h2>
                    <div className="input-boxes">
                        <input type="text" required value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Name" className="user-input" />
                        <select name="speciality" required value={speciality} onChange={e => setSpeciality(e.target.value)} id="doctor_speciality" className="user-input">
                            <option value="" disabled selected hidden>Speciality</option>
                            <option value="Heart">Heart</option>
                            <option value="Psychology">Psychology</option>
                            <option value="Bones">Bones</option>
                        </select>
                        <input type="text" required value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder="Phone" className="user-input" />
                        <select name="doctor"
                            required
                            value={doctor}
                            onChange={e => setDoctor(e.target.value)}
                            id="selected_doctor" className="user-input">
                            <option value="" disabled selected hidden>Select Doctor</option>
                            <option value="sumit">Sumit</option>
                            <option value="Sandeep">Sandeep</option>
                            <option value="Indra">Indra</option>
                            <option value="Bishal">Bishal</option>
                            <option value="Hrishyak">Hrishyak</option>
                        </select>
                        <input type="email" required
                            value={email} onChange={e => setEmail(e.target.value)}
                            placeholder="Email" className="user-input" />
                        <input type="date" value={date} required
                            onChange={e => setDate(e.target.value)}
                            placeholder="mm/dd/yyyy" className="user-input" />
                    </div>
                    <span><button className="btn" onSubmit={submitBook}>Make an Appointment</button></span>

                </div>
            </form>
        </div>
    )
}

export default BookAppointment;