
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Token } from "../../tokens/constant";

function History() {

  const [Bookings, setBookings] = useState([]);
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen">
      
      <div className="overflow-x-auto">
        <h1
          className="flex justify-center text-4xl font-bold mB-1"
          style={{ color: "white" }}
        >
          Booking History
        </h1>
        <button className="btn btn-primary mb-2" onClick={() => navigate("/home",{replace:true})}>BACK</button>

        <table className="table w-full">
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
          <tbody>
            {Bookings.map((book) => {
              return (
                <tr>
                  <td style={{ color: "black" }}>{book.attributes.FirstName}</td>
                  <td style={{ color: "black" }}>{book.attributes.LastName}</td>
                  <td style={{ color: "black" }}>{book.attributes.Email}</td>
                  <td style={{ color: "black" }}>{book.attributes.PhoneNumber}</td>
                  <td style={{ color: "black" }}>{book.attributes.GroupName}</td>
                  <td style={{ color: "black" }}>{book.attributes.EventType}</td>
                  <td style={{ color: "black" }}>{book.attributes.NumberOfGuests}</td>
                  <td style={{ color: "black" }}>{book.attributes.eventDate}</td>
                  <td style={{ color: "black" }}>{book.attributes.Venue}</td>
                  <td style={{ color: "black" }}>{book.attributes.Package}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
