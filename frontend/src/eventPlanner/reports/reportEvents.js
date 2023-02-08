import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ReportEvents() {
  const { state } = useLocation();

  console.log(state);

  return (
    <div className="min-h-screen">
      <div>
        <h1
          className="flex justify-center text-4xl font-bold mt-8"
          style={{ color: "black" }}
        >
          Report of the event
        </h1>
      </div>
      <div className="info mt-4">
        <h1 className="font-semibold ml-20" style={{ color: "black" }}>
          Name of the Event:
        </h1>
        <h1 className="font-semibold ml-20" style={{ color: "black" }}>
          Date of the Event:
        </h1>
        <h1 className="font-semibold ml-20" style={{ color: "black" }}>
          Venue of the Event:
        </h1>
        <h1 className="font-semibold ml-20" style={{ color: "black" }}>
          {" "}
          Total Number Of Guests:
        </h1>
      </div>

      <div className="desc mt-8">
        <h1
          className="flex justify-center font-bold text-3xl "
          style={{ color: "black" }}
        >
          Objective of the event
        </h1>
        <textarea className="flex justify-center ml-56 max-h-64 mt-2" style={{ color: "black" }} id="w3review" name="w3review" rows="4" cols="110">
         
        </textarea>
       
      </div>
    </div>
  );
}

export default ReportEvents;
