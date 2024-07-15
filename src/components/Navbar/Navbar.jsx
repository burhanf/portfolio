import React from "react";
import "./Navbar.css";
import burhan from "../../assets/burhan.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="icon-size" src={burhan} alt="Arabic Burhan" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Experience</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>

      <ul>
        <div className="nav-connect">Let&apos;s Connect!</div>
      </ul>
    </div>
  );
};

export default Navbar;
