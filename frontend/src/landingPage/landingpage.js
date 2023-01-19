import React from "react";
import "./landingpage.css";
import event from "../assets/images/event.jpeg";


function landingpage() {
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <a href={landingpage} className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>

        <div className="navbar-end">
          <a href={landingpage} className="btn">Get started</a>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">


        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={event} className="max-w-lg rounded-lg shadow-2xl" alt="event"/>
          <div>
            <h1 className="text-5xl font-bold">Looking For An Event Manager</h1>
            <p className="py-6"> Event management is the process of creating and maintaining an
              event. This process spans from the very beginning of planning all
              the way to post-event strategizing. At the start, an event manager
              makes planning decisions, such as the time, location, and theme of
              their event. During an event, event managers oversee the event
              live and make sure things run smoothly. After an event, event
              managers are tasked with reviewing event data, submitting KPI and
              ROI findings, and staying on the ball for any post-event
              offerings.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default landingpage;
