import React from "react";
//import { CgProfile } from "react-icons/cg";
//import { MdOutlineCircleNotifications } from "react-icons/md";
//import { AiOutlineLogout } from "react-icons/ai";
//import { GoHome } from "react-icons/go";

import Home from "../home/home";

function navbar() {
  return (
    <div className="min-h-screen">
      <div className="navbar bg-base-800">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} style={{color:'white'}} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Notifications</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <a style={{color:'white'}} className="btn btn-ghost normal-case text-xl">Event Management System</a>
        </div>
        
      </div>
      <main>
        <section id="home">
          <Home />
        </section>
      </main>

    </div>
  );
}

export default navbar;
