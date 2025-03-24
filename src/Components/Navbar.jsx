import React, { useContext, useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../Provider/AuthProvider";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <div className="font-bold flex flex-col justify-around text-start items-center md:flex-row gap-3 md:gap-5">
        <NavLink to="/">Home </NavLink>
        <NavLink to="/allmovies">All Movies </NavLink>
        <NavLink to="/addmovie">Add Movie</NavLink>
        <NavLink to="/myfavourite">My Favourites</NavLink>
        <NavLink to="/plans">Plans</NavLink>
        {user ? (
          <div>
            <div className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                className="tooltip tooltip-right text-xs"
                data-tip={user.displayName}
              >
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
          <div className="flex md:flex-row flex-col gap-5">
            <NavLink to="/auth/login">Login</NavLink>
            <NavLink to="/auth/register">Register</NavLink>
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="navbar p-0 bg-base-100 shadow-sm">
      <div className="dropdown">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-2xl rounded-md md:hidden"
          >
            {!isOpen ? (
              <RxHamburgerMenu />
            ) : (
              <RxCross2 className="border rounded-md" />
            )}
          </button>

          {isOpen && (
            <div className="absolute left-0 mt-3 w-40 z-1 bg-white shadow-lg rounded-md">
              <ul className="p-2 flex flex-col">
                <NavLink to="/" className="font-bold px-2 py-1">
                  Home{" "}
                </NavLink>
                <NavLink to="/allmovies" className="font-bold px-2 py-1">
                  All Movies{" "}
                </NavLink>
                <NavLink to="/addmovie" className="font-bold px-2 py-1">
                  Add Movie
                </NavLink>
                <NavLink to="/myfavourite" className="font-bold px-2 py-1">
                  My Favourites
                </NavLink>
                <NavLink to="/plans" className="font-bold px-2 py-1">
                  Plans
                </NavLink>
                {user ? (
                  <div>
                    <div className="dropdown dropdown-hover">
                      <div
                        tabIndex={0}
                        className="tooltip tooltip-right text-xs"
                        data-tip={user.displayName}
                      >
                        <img
                          src={user.photoURL}
                          className="w-8 h-8 rounded-full"
                          alt=""
                        />
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 w-28 rounded-box z-1 px-2 py-1 shadow-sm"
                      >
                        <li>
                          <button onClick={handleLogOut}>Log Out</button>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="flex md:flex-row flex-col">
                    <NavLink to="/auth/login" className="font-bold px-2 py-1">
                      Login
                    </NavLink>
                    <NavLink
                      to="/auth/register"
                      className="font-bold px-2 py-1"
                    >
                      Register
                    </NavLink>
                  </div>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      <Link to="/" className="btn btn-ghost text-xl">
        ChorkiFlex
      </Link>
      <div className="w-11/12 lg:ml-96">
        <ul className="hidden md:flex">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
