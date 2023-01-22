import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineCircleNotifications } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { GoHome } from "react-icons/go";

import Home from "../home/home";

function navbar() {


  return (
    <div className="background">
      <div className="navbar bg-base-800">
        <div className="flex-1">
          <a className=" accent normal-case text-xl bg-blend-color-white">
            Event Management System
          </a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="bg-blend-color">
                Home <GoHome style={{ fontSize: "1.5em" , color: "white"}} />{" "}
              </a>
            </li>

            <li>
              <a>
                Profile <CgProfile style={{ fontSize: "1.5em" ,color: "white"}} />{" "}
              </a>
            </li>

            <li>
              <a>
                Notifications{" "}
                <MdOutlineCircleNotifications style={{ fontSize: "1.5em",color: "white" }} />
              </a>
            </li>

            <li>
              <a >
                Logout <AiOutlineLogout style={{ fontSize: "1.5em",color: "white" }} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <maim>
        <section id="home">
          <Home />
        </section>
      </maim>
    </div>
  );
}

export default navbar;
