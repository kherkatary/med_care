import React,{ useState, Component } from "react";
import "./Navbar.scss"
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [visible, setVisible] = useState(false);


   return (
      <>
      <header>   
         <img src='./white-logo.png' alt="" />

         <nav className="nav-links">
            <ul className="max-width-links">
               <li><Link to="/" className="home-menu">HOME</Link></li>
               <li><Link to="/#">ABOUT US</Link></li>
               <li><Link to="/#">SERVICES</Link></li>
               <li> <Link to="/news">NEWS</Link></li>
               <li><Link to="/contact">CONTACT</Link></li>
               <li><Link to="/login">LOG IN</Link></li>

            </ul>
         </nav>
         <button className="navbar-button" onClick={()=>setVisible(!visible)}><IoMenu /> Menu</button>
      </header>

      <div className="show-nav-links">
         {
            visible &&  <div className="div-links">
            
               <ul className="min-width-links">
               <li><Link to="/" className="home-menu">HOME</Link></li>
               <li><Link to="/#">ABOUT US</Link></li>
               <li><Link to="/#">SERVICES</Link></li>
               <li> <Link to="/news">NEWS</Link></li>
               <li><Link to="/contact">CONTACT</Link></li>
               <li><Link to="/login">LOG IN</Link></li>

               </ul>
            </div> 
         }
         </div>

        
      </>
   )
}

export default Navbar