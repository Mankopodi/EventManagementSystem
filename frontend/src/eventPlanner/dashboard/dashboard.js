import React from "react";
import { TbHome2 } from "react-icons/tb";
import { HiOutlineMailOpen } from "react-icons/hi";
import {CgLogOut} from 'react-icons/cg';
import {BsBookmarkCheckFill} from 'react-icons/bs';
import { Outlet } from "react-router-dom";
import { removeToken } from "../../helpers";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  function logout() {
    removeToken();
    navigate("/login/", { replace: true });
  }

  return (
    <div className="min-h-screen">
      <div className="navbar">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              <li onClick={() => navigate("/dashboard/homes")}>
                <a href="bn" className="text-black">
                  <TbHome2 style={{ fontSize: "1.5rem", color:"black" }} />
                  Home
                </a>
              </li>

              <li onClick={() => navigate("/dashboard/ViewRescheduleOfEvents")}>
              <a href="hj" className="text-black">
                <BsBookmarkCheckFill style={{ fontSize: "1.5rem", color:"black" }} />
                Reschedule Booking
              </a>
            </li>

              <li onClick={() => navigate("/dashboard/contact")}>
                <a  href="ghj" className="text-black">
                  <HiOutlineMailOpen style={{ fontSize: "1.5rem", color:"black" }} />
                  Email
                </a>
              </li>

              <li onClick={logout} >
                <a href="ghj" className="text-black" >
                <CgLogOut style={{ fontSize: "1.5rem", color:"black" }} />
                  Logout</a>
              </li>
            </ul>
          </div>
          <a href="gh" className="btn btn-ghost normal-case text-xl ml-2" style={{ color:"black" }} onClick={() => navigate("/")}>
            Event Management System
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 justify-end">
            <li onClick={() => navigate("/dashboard/homes")}>
              <a href="bnm" className="text-black">
                <TbHome2 style={{ fontSize: "1.5rem", color:"black" }} />
                Home
              </a>
            </li>

            <li onClick={() => navigate("/dashboard/ViewRescheduleOfEvents")}>
              <a href="hhj" className="text-black">
                <BsBookmarkCheckFill style={{ fontSize: "1.5rem",color:"black" }} />
                Reschedule Booking
              </a>
            </li>

            <li onClick={() => navigate("/dashboard/contact")}>
           
              <a href="ghj" className="text-black">
              <HiOutlineMailOpen style={{ fontSize: "1.5rem",color:"black" }} />
              Email</a>
            </li>

            <li onClick={logout} >
              <a href="gh"  className="text-black">
              <CgLogOut style={{ fontSize: "1.5rem", color:"black" }} />
              Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <Outlet/>
    </div>
  );
}

export default Dashboard;
