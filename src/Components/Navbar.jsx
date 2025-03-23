import React, { useContext } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    })
  }

  const links = (
    <>
      <div className="font-bold flex flex-col items-center md:flex-row gap-3 md:gap-5">
        <NavLink to="/">Home </NavLink>
        <NavLink to="/allmovies">All Movies </NavLink>
        <NavLink to="/addmovie">Add Movie</NavLink>
        <NavLink to="/myfavourite">My Favourites</NavLink>
        <NavLink to="/plans">Plans</NavLink>
        {user ? (
          <div>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} className="tooltip tooltip-right text-xs" data-tip={user.displayName}>
                <img
                  src={user.photoURL}
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 w-28 rounded-box z-1 p-2 shadow-sm"
              >
                <li>
                  <button onClick={handleLogOut}>Log Out</button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-5">
            <NavLink to="/auth/login">Login</NavLink>
            <NavLink to="/auth/register">Register</NavLink>
          </div>
        )}
      </div>
    </>
  );


  return (
    <div className="navbar p-0 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn pl-2 p-0 btn-ghost lg:hidden">
            <FiAlignJustify className="text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          ChorkiFlex
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal py-0 px-1 m-0">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
