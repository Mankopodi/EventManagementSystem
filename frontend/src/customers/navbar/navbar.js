import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineCircleNotifications } from 'react-icons/md';
import { AiOutlineLogout } from 'react-icons/ai';
import { SiEventstore } from 'react-icons/si';
import { GoHome } from 'react-icons/go';

import Home from '../home/home';

function navbar() {

    function homes() {
        document
            .getElementById("homes")
            .scrollIntoView({ behavior: "smooth", block: "start" });
    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">EMS <SiEventstore tyle={{ fontSize: "1.5em" }} /> </a>
                </div>

                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>Home < GoHome style={{ fontSize: "1.5em" }} /> </a>
                        </li>

                        <li>
                            <a>Profile < CgProfile style={{ fontSize: "1.5em" }} /> </a>
                        </li>

                        <li>
                            <a>Notifications  < MdOutlineCircleNotifications style={{ fontSize: "1.5em" }} /></a>
                        </li>

                        <li>
                            <a>Logout < AiOutlineLogout style={{ fontSize: "1.5em" }} /></a>
                        </li>
                    </ul>
                </div>
            </div>
            <maim>
                <section id="home"><Home /></section>
            </maim>
        </div>
    )
}

export default navbar;
