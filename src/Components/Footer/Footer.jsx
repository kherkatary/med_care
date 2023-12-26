import "./Footer.scss"
import NewsPreview from "../footerComponents/NewsPreview";
import ContactUsFooter from "../footerComponents/ContactUsFooter/ContactUsFooter";
import { Icon } from '@iconify/react';
import data from "../../assets/data.json"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="first">
        <img className="logo" src="./medica.png" alt="medica logo" />
        <p className="footer_des">Phasellus at nunc orci. Donec ipsum metus, pharetra quis nunc sit amet, maximus vehicula nibh. Praesent pulvinar porta elit, a commodo erat accumsan sed. Vivamus vel tristique nibh.</p>
        <div className="footer_icons">
          <Icon icon="mdi:instagram" color="white" />
          <Icon icon="mdi:linkedin" color="white" />
          <Icon icon="ic:baseline-facebook" color="white" />
          <Icon icon="iconoir:x" color="white" />
        </div>

      </div>
      <div className="second containerStyles">
        <h3> LATEST NEWS</h3>
        <div className="newComponents">
          {data?.map(news => (
            <NewsPreview key={news.heading} image={news.image} heading={news.heading} date={news.date} />

          ))}
        </div>
      </div>
      <div className="third containerStyles">
        <h3>USEFULL LINKS</h3>
        <div className="linksContainer">

          <Link to="/teams" className="link">Meet Our Team</Link>
          <Link className="link">Doctors</Link>
          <Link className="link">Book an Apointment</Link>
          <Link className="link">Services</Link>
          <Link className="link">Contact Us</Link>
          <Link className="link">Emergency Cases</Link>
          <Link className="link">Testimonials</Link>
        </div>

      </div>

      <div className="containerStyles">
        <ContactUsFooter bgColor="none"/>
      </div>
    </div>
  )
}

export default Footer