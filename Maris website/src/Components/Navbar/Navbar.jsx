import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo1.png";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
      <img src={logo} alt="" className="logo" />        
        <ul>
          <li>Home</li>
          <li>Who are we</li>
          <li>Services</li>
          <li>Track</li>
          <li>Bookings</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
