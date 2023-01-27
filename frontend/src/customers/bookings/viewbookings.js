//import React, { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
//import axios from "axios";
//import { Token } from "../../tokens/constant";

function Viewbookings() {
const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-scroll">
      <div className="overflow-x-auto">
        <h1
          className="flex justify-center text-4xl font-bold mb-4"
          style={{ color: "white" }}
        >
          Bookings
        </h1>
        <button className="btn btn-accent mb-8" style={{color:'white'}} onClick={() => navigate("/bookings",{replace:true})}>Make a booking</button>
        <table className="table w-full" style={{ color: "white" }}>
          <thead>
            <tr>
              <th>First Nmae</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Group Name</th>
              <th>Event Type</th>
              <th>Number of Guests</th>
              <th>Date</th>
              <th>Venue</th>
              <th>Packages</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default Viewbookings;
