import React from "react";
import { animated, useSpring } from "react-spring"; 

import "./Testimonial.scss";

function CountingNumbers({ n, head }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  <h4>{head}</h4>;
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

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
        <div className="numbers_div">
          <CountingNumbers n={8723} />
          <p className="patient_count"> Patients since opening </p>
        </div>
        <div className="numbers_div">
          <CountingNumbers n={120} />
          <p className="patient_count"> Doctors Available</p>
        </div>
        <div className="numbers_div">
          <CountingNumbers n={20} />
          <p className="patient_count">Years of Experience</p>
        </div>
        <div className="numbers_div">
          <CountingNumbers n={83} />
          <p className="patient_count">Pro bono works</p>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
