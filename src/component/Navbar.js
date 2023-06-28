import React from "react";
import logo from "../assets/images/athhlogo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { VscChromeClose } from "react-icons/vsc";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
function Navbar() {
 const [menuopen, setMenuOpen] = useState(false);
 const [backgroundColor, setBackgroundColor] = useState(false);

 useEffect(() => {
  // Add event listener to track scrolling
  window.addEventListener("scroll", handleScroll);

  // Clean up function to remove the event listener on unmount
  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, []);

 function handleScroll() {
  // Get the current scroll position
  const scrollTop = window.pageYOffset;

  // Check if the scroll position is greater than a certain threshold
  if (scrollTop > 50) {
   // Change the background color of the navbar
   setBackgroundColor(true);
  } else {
   // Reset the background color to the initial value
   setBackgroundColor(false);
  }
 }

 return (
  <>
   {menuopen && (
    <div id="sidenavDiv">
     <div id="sidenavTop">
      <div onClick={() => setMenuOpen(false)}>
       <VscChromeClose size={30} />
      </div>
     </div>

     <div id="sidenavMain">
      <NavLink to="/">
       <p data-aos="fade-right" data-aos-duration="300" onClick={() => setMenuOpen(false)}>
        Home
       </p>
      </NavLink>
      <NavLink to="/about">
       <p data-aos="fade-right" data-aos-duration="400" onClick={() => setMenuOpen(false)}>
        About Us
       </p>
      </NavLink>
      <NavLink to="/ourwork">
       <p data-aos="fade-right" data-aos-duration="500" onClick={() => setMenuOpen(false)}>
        Our Work
       </p>
      </NavLink>
      <NavLink to="/services">
       <p data-aos="fade-right" data-aos-duration="600" onClick={() => setMenuOpen(false)}>
        Services
       </p>
      </NavLink>
      <NavLink to="/career">
       <p data-aos="fade-right" data-aos-duration="700" onClick={() => setMenuOpen(false)}>
        Careers
       </p>
      </NavLink>
      <NavLink to="/contact">
       <p data-aos="fade-right" data-aos-duration="800" onClick={() => setMenuOpen(false)}>
        Contact
       </p>
      </NavLink>
     </div>
    </div>
   )}

   <div className={backgroundColor === true ? "navbar_defult sticky" : "navbar_defult"}>
    <Link to="/">
     <div id="navlogoDiv">
      {" "}
      <img src={logo} id="navlogo" alt="componey logo" /> &nbsp;&nbsp;&nbsp; <h2> Athh Tech </h2>{" "}
     </div>
    </Link>
    <div id="navitems">
     <ul>
      <li>
       <NavLink to="/">Home</NavLink>
      </li>
      <li>
       <NavLink to="/about">About us</NavLink>
      </li>
      <li>
       <NavLink to="/ourwork">Our Work</NavLink>
      </li>
      <li>
       <NavLink to="/services">Services</NavLink>
      </li>
      <li>
       <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
       <NavLink to="/blog">Blog</NavLink>
      </li>
     </ul>
    </div>
    {/* <div className="underline"></div> */}
    <div id="navbtnPrnt">
     <Link to="/career">
      <button id="navbtn">Careers</button>
     </Link>
    </div>

    <div id="humbergerBtn" onClick={() => setMenuOpen(true)}>
     <AiOutlineMenu size={30} />
    </div>
   </div>
  </>
 );
}

export default Navbar;
