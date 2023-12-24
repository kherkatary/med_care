import { useEffect, useState } from 'react'
import './Quote.scss'
const Quote = ({ heading, subHeading, bgImage, buttonTitle }) => {

    useEffect(() => {
        BGSetter();
    })

    const [bg_Image, setBg] = useState("https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg?w=1380&t=st=1703229609~exp=1703230209~hmac=8ea399a4767d9159a19245c74f0413fbe1b000e29686cd91c6bbc815be7012eb")

    const BGSetter = () => {
        if (bgImage != null) {
            setBg(bgImage)
        }
    }

    return (
        <div style={{ backgroundImage: `url("${bg_Image}")` }} className="quoteContainer">
            <div 
                className="quote_div centerUsingFlex">
                <div className="quote">
                    <h1>{heading}</h1>
                    <p>{subHeading}</p>
                </div>
                <div className="aptBtn centerUsingFlex">
                    <button>{buttonTitle}</button>
                </div>
            </div>
        </div>
    )
}

export default Quote
