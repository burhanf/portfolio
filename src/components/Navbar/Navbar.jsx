import "./Navbar.css";
import burhan from "../../assets/burhan.svg";
import { useState, useRef } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img className="icon-size" src={burhan} alt="Arabic Burhan" />
      <img
        src={menu_open}
        onClick={openMenu}
        alt="open menu"
        className="nav-mob-open"
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt="closed menu"
          onClick={closeMenu}
          className="nav-mob-close"
        />

        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu == "home" ? <img src={underline} alt="underline" /> : <></>}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu == "about" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#experience">
            <p onClick={() => setMenu("experience")}>Experience</p>
          </AnchorLink>{" "}
          {menu == "experience" ? (
            <img src={underline} alt="underline" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p onClick={() => setMenu("projects")}>Projects</p>
          </AnchorLink>{" "}
          {menu == "projects" ? <img src={underline} alt="underline" /> : <></>}
        </li>
      </ul>

      <ul>
        <a
          href="https://www.linkedin.com/in/burhanfaquiri/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="nav-connect">Let&apos;s Connect!</div>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
