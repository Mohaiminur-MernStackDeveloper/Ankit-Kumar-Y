import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const MenuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => isActive && "text-blue-800"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/game"
          className={({ isActive }) => isActive && "text-blue-800"}
        >
          Showcasing game
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/jobs"
          className={({ isActive }) => isActive && "text-blue-800"}
        >
          Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/advertising"
          className={({ isActive }) => isActive && "text-blue-800"}
        >
          Advertising
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="border-b w-full">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="font-Inter menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {MenuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl tracking-tighter font-Inter">BlogWebsite</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal text-sm flex items-center justify-center font-Inter tracking-tighter gap-5 px-1">{MenuItems}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
