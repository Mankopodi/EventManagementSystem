import React from "react";
//import {useNavigate} from 'react-router-dom';

import Home from "../home/home";


function navbar() {

  //const navigate = useNavigate;

  return (
    <div className="min-h-screen">
      <div className="navbar ">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
            >
              <li>
                <a>Home</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Notifications</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-accent  normal-case text-xl" style={{color:'white'}}>
            Event Management System
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold" style={{color:'white'}}>
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a>Profile</a>
            </li>
            <li>
              <a>Notifications</a>
            </li>
            <li tabIndex={0}>
              <a>Logout</a>
            </li>
          </ul>
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
