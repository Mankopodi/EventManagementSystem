import React from 'react';
import {TbBrandBooking} from 'react-icons/tb';
import {IoIosNotifications} from 'react-icons/io';
import { CgProfile} from 'react-icons/cg';
import {IoMdLogOut} from 'react-icons/io';
import {MdEmail} from 'react-icons/md';
import {SiEventstore} from 'react-icons/si';



function dashboard() {

  function Reschedule() {
    document
      .getElementById("reschedule")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function Notigications() {
    document
      .getElementById("resume")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function Emails() {
    document
      .getElementById("skills")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function Profile() {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function Logout() {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }


  return (
    <div>
       <section>
        <div className="flex justify-end">
          <label htmlFor="my-drawer-2"  className="btn btn-ghost drawer-button lg:hidden nav" ></label>
        </div>

        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col  justify-center">
          {/* <main>
            <section id="home"><Home /></section>
            </main> */}
          </div>

          <div className="drawer-side ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content colg">
              <div className=" push down">
                
                <div className=" font-bold text-5xl named">
                 EMS <SiEventstore style={{fontSize: "1.5em"}} />
                </div>
              <div className=' mt-32'>
                <li id="scroll">
                  <a href="reschedule" onClick={() => Reschedule()}>
                  <TbBrandBooking style={{fontSize: "1.5em"}} />
                    Reschedule Booking
                  </a>
                </li>
                <li id="scroll">
                  <a href="notifications" onClick={() => Notigications()}>
                  <IoIosNotifications style={{fontSize: "1.5em"}} />
                    Notifications
                  </a>
                </li>
                <li id="scroll">
                  <a href="email" onClick={() => Emails()}>
                  <MdEmail style={{fontSize: "1.5em"}} />
                    Emails
                  </a>
                </li>
                <li id="scroll">
                  <a href="profile" onClick={() => Profile()}>
                  <CgProfile style={{fontSize: "1.5em"}} />
                    Profile
                  </a>
                </li>
                <li id="scroll">
                  <a href="logout" onClick={() => Logout()}>
                  <IoMdLogOut style={{fontSize: "1.5em"}} />
                    Logout
                  </a>
                </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default dashboard
