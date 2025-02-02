import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // React Icons
import { Link } from 'react-router-dom'; // React Router Link

import './Navbar.css'

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

 
  const handleClick = (event, sectionId) => {
    setClicked((prev)=>!prev)
    event.preventDefault(); // Prevent default anchor behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <nav className="navbarItems">
      <h1 className="navbar-logo">
       Ganesh Pansare
      </h1>
      <div className="menu-icons" onClick={handleClick}>
        {clicked ? <FaTimes /> : <FaBars />} {/* React Icons for menu toggle */}
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        <li>
        <a href="#home" onClick={(e) => handleClick(e, "home")} className="nav-links">
          Home
        </a>
        </li>
        <li>
        <a href="#about" onClick={(e) => handleClick(e, "about")} className="nav-links">
          About
        </a>

        </li>
        <li>
        <a href="#contact" onClick={(e) => handleClick(e, "contact")} className="nav-links">
          Contact
        </a>
        </li>
        <li>
        
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
