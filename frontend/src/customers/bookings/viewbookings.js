<<<<<<< HEAD
//import React, { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
//import axios from "axios";
//import { Token } from "../../tokens/constant";

function Viewbookings() {
const navigate = useNavigate();
=======
import axios from "axios";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Token } from "../../tokens/constant";


function Viewbookings() {
  const navigate = useNavigate();
  const [Bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("http://localhost:1337/api/bookings", {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setBookings(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    };
>>>>>>> 3fc8b1860297f227c38d83c4ef4f3f5aec2b1ab7

  return (
    <div className="min-h-screen overflow-scroll ">
      <div className="overflow-x-auto">
        <h1
          className="flex justify-center text-4xl font-bold bg-blend-color text-white "
         
        >
          Bookings
        </h1>
<<<<<<< HEAD
        <button className="btn btn-accent mb-8" style={{color:'white'}} onClick={() => navigate("/bookings",{replace:true})}>Make a booking</button>
=======
        <button className="btn btn-accent mb-8" style={{color:'white'}} onClick={() => navigate("/dash/bookings",{replace:true})}>Make a booking</button>
>>>>>>> 3fc8b1860297f227c38d83c4ef4f3f5aec2b1ab7
        <table className="table w-full" style={{ color: "white" }}>
          <thead>
            <tr>
              <th className="text-white " >First Name</th>
              <th className="text-white " >Last Name</th>
              <th className="text-white " >Email</th>
              <th className="text-white " >Phone Number</th>
              <th className="text-white " >Group Name</th>
              <th className="text-white " >Event Type</th>
              <th className="text-white " >Number of Guests</th>
              <th className="text-white " >Date</th>
              <th className="text-white " >Venue</th>
              <th className="text-white " >Packages</th>
              <th className="text-white " >Status</th>
            </tr>
          </thead>
          <tbody>
          {Bookings.map((book) => {
              return (
                <tr key={book.id} >
                  <td className="text-black">{book.attributes.FirstName}</td>
                  <td className="text-black">{book.attributes.LastName}</td>
                  <td className="text-black">{book.attributes.Email}</td>
                  <td className="text-black">{book.attributes.PhoneNumber}</td>
                  <td className="text-black">{book.attributes.GroupName}</td>
                  <td className="text-black">{book.attributes.EventType}</td>
                  <td className="text-black">{book.attributes.NumberOfGuests}</td>
                  <td className="text-black">{book.attributes.eventDate}</td>
                  <td className="text-black">{book.attributes.Venue}</td>
                  <td className="text-black">{book.attributes.Package}</td>
                
                  <td>
                    <div className="form-control ">
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          className="toggle toggle-primary  btn-accent"
                          checked
                        />
                       
                      </label>
                    </div>
                  </td>
                 
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Viewbookings;