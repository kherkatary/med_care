import React from "react";

const Upper = () => {
    return (
        <div className="container">
            <div className="box" id="box1">
                <h4>For Emergencies</h4>
                <h3>+0080 954 4557 884</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi unde quasi error minus cumque perferendis quia in minima molestias? Ullam aperiam voluptates alias repellat accusamus, vel ducimus? Iste ipsum omnis cum dicta ad facere officiis?</p>
                <button className="read1">Read More</button>
            </div>
            <div className="box" id="box2">
                <h4>For Emergencies</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi unde quasi error minus cumque perferendis quia in minima molestias? Ullam aperiam voluptates alias repellat accusamus, vel ducimus? Iste ipsum omnis cum dicta ad facere officiis?</p>
                <button className="read1">Read More</button>
            </div>
            <div className="box" id="box3">
                <h4>Book an appointment</h4>
                <input type="name" className="inputts" placeholder="Name" />
                <input type="number" className="inputts" placeholder="Phone" />
                <input type="email" className="inputts" placeholder="Email" />
                <button className="MakeApnt"> Make an Appointment</button>
            </div>

        </div>
    )
}

export default Button