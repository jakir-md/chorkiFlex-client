import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  const links = (
    <>
      <div className="font-bold flex flex-col md:flex-row gap-3 md:gap-5">
        <NavLink to="/home">Home </NavLink>
        <NavLink to="/allmovie">All Movie </NavLink>
        <NavLink to="/addmovie">Add Movie</NavLink>
        <NavLink to="/myfavourite">My Favourites</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FiAlignJustify className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">ChorkiFlex</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
