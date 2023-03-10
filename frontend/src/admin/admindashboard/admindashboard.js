

import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { FiPackage, FiUsers } from 'react-icons/fi';
import { TbBrandBooking } from 'react-icons/tb';
import { HiDocumentReport } from 'react-icons/hi';
//import { MdReviews } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';
import { Outlet } from 'react-router-dom';
//import { removeToken } from "../../helpers";
import { useNavigate } from "react-router-dom";
//import { AUTH_TOKEN } from '../../tokens/constant';
import { GrNotification } from "react-icons/gr";

import ok from "../../assets/ok.jpeg";

function Admindashboard() {
  const navigate = useNavigate();
  function logout() {
   
    localStorage.removeItem("authToken")
    navigate("/", { replace: true });
  }

  return (
    <div
    className="bg_image"
    style={{
      backgroundImage: "url(" + ok + ")",
      backgroundSize: "cover",
      height: "100vh",
      color: "#f5f5f5",
    }}>
      <section>
        <div className="flex justify-end">
          <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden nav" ></label>
        </div>

        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col  justify-center">
            <Outlet />

          </div>

          <div className="drawer-side ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80  text-base-content colg">
              <div className="font-bold text-4xl named " style={{ color: 'black' }}>
              EventCentral
              </div>

              <div className="push mb-8">

                <li style={{ color: 'black' }} onClick={() => navigate("/admindash/homepage")}>
                  <a>
                    <AiOutlineHome style={{ fontSize: "1.5em" }} />
                    Statistics
                  </a>
                </li>
                <li style={{ color: 'black' }} onClick={() => navigate("/admindash/packs")}>
                  <a >
                    <FiPackage style={{ fontSize: "1.5em" }} />
                    Packages
                  </a>
                </li>
                <li style={{ color: 'black' }} onClick={() => navigate("/admindash/history")}>
                  <a >
                    <TbBrandBooking style={{ fontSize: "1.5em" }} />
                    Booked Events
                  </a>
                </li>
                <li  style={{color:'black'}}  onClick={() => navigate("/admindash/report")}>
                  <a >
                    <HiDocumentReport style={{ fontSize: "1.5em" }} />
                    Reports
                  </a>
                </li>
                <li style={{ color: 'black' }} onClick={() => navigate("/admindash/ManageEvent")} >
                  <a >
                    <FiUsers style={{ fontSize: "1.5em" }} />
                    Users
                  </a>
                </li>
                {/* <li style={{color:'black'}}  onClick={() => navigate("/admindash/ProductReview1")} >
                  <a >
                    <MdReviews style={{ fontSize: "1.5em" }} />
                    Reviews & Ratings
                  </a>
                </li> */}
                <li style={{color:'black'}}  onClick={() => navigate("/admindash/notifications")} >
                  <a>
                    <GrNotification style={{ fontSize: "1.5em" }} />
                    Notification
                  </a>
                </li>
                <li style={{ color: 'black' }} onClick={() => navigate("/admindash/profile")} >
                  <a>
                    <CgProfile style={{ fontSize: "1.5em" }} />
                    Profile
                  </a>
                </li>
                <li style={{ color: 'black' }} onClick={logout}>
                  <a >
                    <BiLogOut style={{ fontSize: "1.5em" }} />
                    Logout
                  </a>
                </li>
              </div>
            </ul>
          </div>

        </div>

      </section>

    </div>
  )
}

export default Admindashboard;
