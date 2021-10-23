import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="NavBar">
        <img src={logo} alt="logo" />
        <div className="nav-links">
          <NavLink to="/" className="home">
            {" "}
            Home
          </NavLink>
          <NavLink to="/alphabets" className="alphabet">
            Alphabet{" "}
          </NavLink>
          <NavLink to="/numbers" className="number">
            Number
          </NavLink>
          <NavLink to="/words" className="word">
            Words
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
