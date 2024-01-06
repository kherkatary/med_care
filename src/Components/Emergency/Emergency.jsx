import React, { PureComponent } from 'react'
import "./Emergency.scss"
const Emergency = ({ title }) => {
    return (

        <div className='Emer'>
            <h4>For Emergencies</h4>
            <h3>+0080 954 4557 884</h3>
            <p className="EmerPara">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero amet perspiciatis fuga laudantium voluptas. Quis, ab similique aliquam, pariatur at incidunt sint minima quos a odio voluptate tempore magni.
            </p>
            <button className='readMorebtn' id="ReadEmer">Read More</button>

        </div>

    )
}

export default Emergency