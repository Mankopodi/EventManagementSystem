import React from "react";
import "./landingpage.css";
import ems from "../assets/images/ems.jpeg";

function landingpage() {
  return (
    <div className="landing">
      <div class="landing-page">
        <div class="container">
          <div class="header-area">
            <div class="logo">
              Event <b>Management</b> <b>System</b>
            </div>
            <ul class="links">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Sign in</li>
            </ul>
          </div>
          <div class="info">
            <h1>Looking For An Event Management System</h1>
            <p>
              Event management is the process of creating and maintaining an
              event. This process spans from the very beginning of planning all
              the way to post-event strategizing. At the start, an event manager
              makes planning decisions, such as the time, location, and theme of
              their event. During an event, event managers oversee the event
              live and make sure things run smoothly. After an event, event
              managers are tasked with reviewing event data, submitting KPI and
              ROI findings, and staying on the ball for any post-event
              offerings.
            </p>
            <button>Get Started</button>
          </div>
          <div class="image">
            <img src={ems} alt="image" />
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  );
}

export default landingpage;
