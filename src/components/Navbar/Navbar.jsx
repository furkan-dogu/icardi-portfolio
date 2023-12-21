import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/furkan-logo.png"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="nav">
        <img src={logo} alt="logo" className="nav__logo" />
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to={"/"}>home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"/about"}>about</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"/previous"}>previous</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"/contact"}>contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
