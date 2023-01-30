import React from "react";
import { BsHouse } from "react-icons/bs";
import { MdNotificationsNone } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CgLogOut } from "react-icons/cg";
import { Outlet } from "react-router-dom";
import {HiOutlineMailOpen} from 'react-icons/hi';

import { useNavigate } from "react-router-dom";
// import Home from "../home/home";

function Navbar() {
  const navigate = useNavigate();

  // function logout() {
  //   removeToken();
  //   navigate("/login/", { replace: true });
  // }

  return (
    <div className="">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-accent lg:hidden">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              <li onClick={() => navigate("/dash/home")}>
                <a>
                  <BsHouse style={{ fontSize: "1.5rem" }} />
                  Home
                </a>
              </li>
              
              <li onClick={() => navigate("/dash/pushNotification")}>
                <a>
                  <MdNotificationsNone style={{ fontSize: "1.5rem" }} />
                  Notifications
                </a>
              </li>

              <li onClick={() => navigate("/dash/contact")}>
              <a>
                <HiOutlineMailOpen style={{ fontSize: "1.5rem" }} />
                Email
              </a>
            </li>

              <li onClick={() => navigate("/dash/profile")}>
                <a>
                  <CgProfile style={{ fontSize: "1.5rem" }} />
                  Profile
                </a>
              </li>

              <li>
                <a>
                  <CgLogOut style={{ fontSize: "1.5rem" }} />
                  Logout
                </a>
              </li>
            </ul>
          </div>
          
          <a
            className="btn btn-accent normal-case text-xl ml-2 "
            style={{ color: "white" }}
          >
            Event Management System
          </a>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 justify-end">
            <li onClick={() => navigate("/dash/home")}>
              <a>
                <BsHouse style={{ fontSize: "1.5rem" }} />
                Home
              </a>
            </li>

            <li onClick={() => navigate("/dash/pushNotification")}>
              <a>
                <MdNotificationsNone style={{ fontSize: "1.5rem" }} />
                Notifications
              </a>
            </li>

            <li onClick={() => navigate("/dash/contact")}>
              <a>
                <HiOutlineMailOpen style={{ fontSize: "1.5rem" }} />
                Email
              </a>
            </li>

            <li onClick={() => navigate("/dash/profile")}>
              <a>
                <CgProfile style={{ fontSize: "1.5rem" }} />
                Profile
              </a>
            </li>

            <li>
              <a>
                <CgLogOut style={{ fontSize: "1.5rem" }} />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
     <Outlet/>

    </div>
  );
}

export default Navbar;
