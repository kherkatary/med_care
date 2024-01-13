import React, { PureComponent } from 'react'
import './Doctors.scss'
const Docs = ({ title }) => {
    return (

        <div className="Doct">
            <h4>The Doctors</h4>
            <p className="DocPara">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero amet perspiciatis fuga laudantium voluptas. Quis, ab similique aliquam, pariatur at incidunt sint minima quos a odio voluptate tempore Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quisquam.
            </p>
            <button className='readMorebtn' id="ReadDoc">Read More</button>
        </div>

    )
}

export default Docs