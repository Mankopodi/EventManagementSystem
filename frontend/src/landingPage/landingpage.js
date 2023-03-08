import React from "react";
import "./landingpage.css";
import event from "../assets/images/event.png";
import {useNavigate} from 'react-router-dom';
import pp from '../assets/images/pp.jpeg';


function Landingpage() {

  const navigate = useNavigate();
  return (
    <div
    className="bg_image"
    style={{
      backgroundImage: "url(" + pp + ")",
      backgroundSize: "cover",
      height: "100vh",
      color: "#f5f5f5",
    }}
  >
      <div className="navbar ">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl" style={{color:'green'}}>Event Management System</a>
        </div>

        <div className="navbar-end">
          {/* <a className="btn btn-accent" >Signin</a> */}
        </div>
      </div>
      <div className="hero min-h-screen ">


        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={event} className="rounded-lg shadow-l" alt="event"/>
          <div>
            <h1 className="text-5xl font-bold" style={{color:'green'}}>Looking For An Event Manager</h1>
            <p className="py-6 font-bold mt-10"  style={{color:'green'}}> Event management is the process of creating and maintaining an
              event. This process spans from the very beginning of planning all
              the way to post-event strategizing. At the start, an event manager
              makes planning decisions, such as the time, location, and theme of
              their event. During an event, event managers oversee the event
              live and make sure things run smoothly. After an event, event
              managers are tasked with reviewing event data, submitting KPI and
              ROI findings, and staying on the ball for any post-event
              offerings.</p>
            <button className="btn btn-accent" style={{color:'green'}} onClick={() => navigate("login",{replace:true})}>Signin</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Landingpage;
