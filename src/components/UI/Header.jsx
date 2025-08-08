import React from "react";
import "../../css/Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    return setShow(!show);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <div className="main-list">
        <nav className={show ? "menu-mobile" : "menu-web"}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop" className="nav-link-with-icon">
                Shop <FaCaretDown />
              </NavLink>
            </li>
            <NavLink to="/about">About Us</NavLink>
            <li>
            </li>
            <NavLink to="/blog">Blog</NavLink>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </nav>

        <div className="ham-menu">
          <button onClick={handleButtonToggle}>
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
