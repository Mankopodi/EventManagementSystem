import React from "react";

function reportEvents() {
  return (
    <div className="min-h-screen ">
      <div className="card w-96  shadow-xl  ">
        <div className="card-body" style={{ color: "black" }}>
          <h2 className="card-title">Report for Events</h2>
          <div>
            <p>Name of the Event: </p>
          </div>
          <div>
            <p>Date of the Event: </p>
          </div>

          <div>
            <p>Venue of the Event: </p>
          </div>
          <div>
            <p>Total number of Guests: </p>
          </div>

          <div className="objective">
            <p>Objective of the event. </p>
            <p>fghjkl;kjhgfxcvbnm,.nbvcxfghjkljhgfdcv 
              fghjkl;/.,mnbv 
              wfvgbhcnjmd
              wsfghjk,decodeeghjkld,mnbxd
              fghjklr,mfnbdsnm,
              fguikljhgfdfghjk
              fghjklkjhghjk

            </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default reportEvents;
