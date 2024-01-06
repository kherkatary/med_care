import React from "react";
// import Carousel from '../Carousel/Carousel';

import "./Testimonial.scss";

const Testimonial = () => {
  return (
    <div className="container f-white">
      <div className="t ">
        <div className="bgcolor-blue">
          <div className="tc testimonials">
            <img src="./stethoscope.png" alt="stethescope" />
            <h2>Clients Testimonials</h2>
          </div>
          <div className="tc lines">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sunt
            sequi rem molestias assumenda, saepe sint hic nobis debitis nam
            molestiae unde, excepturi, officia obcaecati id voluptatibus commodi
            animi dicta possimus alias iure ipsam illum. Ipsum placeat veniam
            mollitia ea.
          </div>
          <div className="tc">
            <img src="./testimonials2.jpg" alt="testimonials" />
            <div>
              <h4>Julia Smith</h4>
              <h5>Patient</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="numbers">
        <div className="mr">
          <h2>
            <span className="counter"> 8723</span>
          </h2>
          <h6>Patients since opening</h6>
        </div>
        <div className="mr">
          <h2>
            <span className="counter"> 120</span>
          </h2>
          <h6>Doctors Available</h6>
        </div>
        <div className="mr">
          <h2>
            <span className="counter"> 20</span>
          </h2>
          <h6>Years of Experience</h6>
        </div>
        <div className="mr">
          <h2>
            <span className="counter"> 83</span>
          </h2>
          <h6>Pro bono works</h6>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
