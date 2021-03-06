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
            <NavLink to="/Featured">Featured Restaurants</NavLink>
          </li>
          <li>
            <NavLink to="/SignUp">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
