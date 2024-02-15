import React from "react";
import { Appointment_img_icon, Testimonial } from "../../Components";
import Carousel from "../../Components/Carousel/Carousel";
import Contentinfo from "../../Components/Contentinfo/Contentinfo";
import IntroToAdd from "../../Components/IntroToAdd/IntroToAdd";

import MedicaIntro from "../../Components/MedicaIntro/MedicaIntro";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <IntroToAdd />
      <MedicaIntro />
      <Contentinfo />
  
      <Testimonial />
      <Appointment_img_icon />
    </div>
  );
};

export default Home;
