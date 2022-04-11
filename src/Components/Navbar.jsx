import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/">
          {" "}
          <img
            className="logo"
            src="./Images/Logo.png"
            alt="Grubhub Logo"
            width="180"
            height="90"
          ></img>{" "}
        </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Featured">
              <a href="Featured.html">Featured Restraunts</a>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
