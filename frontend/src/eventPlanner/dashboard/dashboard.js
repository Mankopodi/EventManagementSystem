import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FiPackage } from "react-icons/fi";
import { RiFileHistoryLine } from "react-icons/ri";
import { BsTelephoneInbound } from "react-icons/bs";
//import { MdReviews } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { Outlet } from "react-router-dom";
//import { removeToken } from "../../helpers";
import { useNavigate } from "react-router-dom";
//import PushNotification from "../../customers/pushNotification/pushNotification";
import { GrNotification } from "react-icons/gr";

import ev from "../../assets/ev.jpeg";



function Dashboard() {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("authToken")
    navigate("/", { replace: true });
  }

  return (
    <div
    className="bg_image"
    style={{
      backgroundImage: "url(" + ev + ")",
      backgroundSize: "cover",
      height: "100vh",
      color: "#f5f5f5",
    }}>
      <section>
        <div className="flex justify-end">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden nav"
          ></label>
        </div>

        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col  justify-center">
            <Outlet />
          </div>

          <div className="drawer-side ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80  text-base-content colg">
              <div
                className="font-bold text-4xl named"
                style={{ color: "black" }}
              >
                EventCentral
              </div>

              <div className="down">
                {/* <li
                  style={{ color: "black" }}
                  onClick={() => navigate("/dashboard/homes")}
                >
                  <a>
                    <AiOutlineHome style={{ fontSize: "1.5em" }} />
                    Home
                  </a>
                </li> */}
                <li
                  style={{ color: "black" }}
                  onClick={() => navigate("/dashboard/pack")}
                >
                  <a>
                    <FiPackage style={{ fontSize: "1.5em" }} />
                    Packages
                  </a>
                </li>
                <li
                  style={{ color: "black" }}
                  onClick={() => navigate("/dashboard/ViewRescheduleOfEvents")}
                >
                  <a>
                    <RiFileHistoryLine style={{ fontSize: "1.5em" }} />
                    Reschedule Bookings
                  </a>
                </li>
                <li
                  style={{ color: "black" }}
                  onClick={() => navigate("/dashboard/contacts")}
                >
                  <a>
                    <BsTelephoneInbound style={{ fontSize: "1.5em" }} />
                    Contact
                  </a>
                </li>
                <li
                  style={{ color: "black" }}
                  onClick={() => navigate("/dashboard/reportevent")}
                >
                  <a>
                    <HiOutlineDocumentReport style={{ fontSize: "1.5em" }} />
                    Reports
                  </a>
                </li>
                {/* <li
                  style={{ color: "black" }}
                  onClick={() => navigate("/dashboard/reportevent")}
                >
                  <a>
                    <HiOutlineDocumentReport style={{ fontSize: "1.5em" }} />
                    Report for all Events Venues
                  </a>
                </li> */}
                {/* <li
                  style={{ color: "black" }}
                  onClick={() => navigate("/dashboard/ProductReview1")}
                >
                  <a>
                    <MdReviews style={{ fontSize: "1.5em" }} />
                    Reviews & Ratings
                  </a>
                </li> */}
                <li
                  style={{ color: "black" }}
                  onClick={() => navigate("/dashboard/profile")}
                >
                  <a>
                    <CgProfile style={{ fontSize: "1.5em" }} />
                    Profile
                  </a>
                </li>

                <li style={{color:'black'}}  onClick={() => navigate("/admindash/notifications")} >
                  <a>
                    <GrNotification style={{ fontSize: "1.5em" }} />
                    Notification
                  </a>
                </li>
                <li
                  className="logout mb-20"
                  style={{ color: "black" }}
                  onClick={logout}
                >
                  <a>
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
  );
}

export default Dashboard;
