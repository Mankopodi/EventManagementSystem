//import React, { useEffect } from "react";
import React from "react";
//import axios from "axios";
//import { Token } from "../../tokens/constant";

function Viewbookings() {
//   const Viewbookings = async() =>{
//     axios.get("http://localhost:1337/api/bookings", {
//       headers: {
//         Authorization: `Bearer ${Token}`,
//       },
//     })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   useEffect(() => {
//     Viewbookings();
//   }, []);

  return (
    <div className="min-h-screen overflow-scroll">
      <div className="overflow-x-auto">
        <h1
          className="flex justify-center text-4xl font-bold mb-4"
          style={{ color: "white" }}
        >
          Bookings
        </h1>
        <button className="btn btn-accent mb-8" style={{color:'white'}}>Make a booking</button>
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
