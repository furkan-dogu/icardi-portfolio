import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to={"/"}>home</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"/about"}>about</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"/projects"}>projects</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={"/contact"}>contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
