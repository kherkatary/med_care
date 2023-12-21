import "./Footer.scss"
import NewsPreview from "../footerComponents/NewsPreview";
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

          <Link className="link">FAQs</Link>
          <Link className="link">Doctors</Link>
          <Link className="link">Book an Apointment</Link>
          <Link className="link">Services</Link>
          <Link className="link">Contact Us</Link>
          <Link className="link">Emergency Cases</Link>
          <Link className="link">Testimonials</Link>
        </div>

      </div>
      <div className="fourth containerStyles">
        <h3>CONTACT US</h3>
        <div className="contact">
        <div className="contactMethod">
          <div className="contactLogo"><Icon icon="ion:alarm-outline" color="white" width="50" /></div>
          <div className="contactInfo">Monday - Friday 08:00 - 21:00 Saturday & Sunday - CLOSED</div>
        </div>

        <div className="contactMethod">
          <div className="contactLogo"><Icon icon="carbon:location" color="white" width="50" /></div>
          <div className="contactInfo">Lamas Carbajal Str, no 14-18 41770 Montellano</div>
        </div>

        <div className="contactMethod">
          <div className="contactLogo"><Icon icon="material-symbols:mail-outline" color="white" width="50" /></div>
          <div className="contactInfo">0080 673 729 766 contact@business.com</div>
        </div>

        </div>
        
      </div>


    </div>
  )
}

export default Footer