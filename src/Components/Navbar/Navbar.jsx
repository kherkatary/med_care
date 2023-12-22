import React,{ useState, Component } from "react";
import "./Navbar.scss"
import { IoMenu } from "react-icons/io5";



const Navbar = () => {
    const [visible, setVisible] = useState(false);


   return (
      <>
      <header>   
         <img src='./white-logo.png' alt="" />

         <nav className="nav-links">
            <ul className="max-width-links">
               <li><a href="/#" className="home-menu">HOME</a></li>
               <li><a href="/#">PAGES</a></li>
               <li><a href="/about">ABOUT US</a></li>
               <li><a href="/#">SERVICES</a></li>
               <li><a href="/#">NEWS</a></li>
               <li><a href="/#">CONTACT</a></li>

            </ul>
         </nav>
         <button className="navbar-button" onClick={()=>setVisible(!visible)}><IoMenu /> Menu</button>
      </header>

      <div className="show-nav-links">
         {
            visible &&  <div className="div-links">
            
               <ul className="min-width-links">
                  <li><a href="/#" className="home-menu">HOME</a></li>
                  <li><a href="/#">PAGES</a></li>
                  <li><a href="/#">ABOUT US</a></li>
                  <li><a href="/#">SERVICES</a></li>
                  <li><a href="/#">NEWS</a></li>
                  <li><a href="/#">CONTACT</a></li>

               </ul>
            </div> 
         }
         </div>

        
      </>
   )
}

export default Navbar