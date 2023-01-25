
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Token } from "../../tokens/constant";

function History() {

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

  return (
    <div className="min-h-screen">
      <div className="overflow-x-auto">
        <h1
          className="flex justify-center text-4xl font-bold mb-4"
          style={{ color: "white" }}
        >
          Booking History
        </h1>
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
                  <td>{book.attributes.FirstName}</td>
                  <td>{book.attributes.LastName}</td>
                  <td>{book.attributes.Email}</td>
                  <td>{book.attributes.PhoneNumber}</td>
                  <td>{book.attributes.GroupName}</td>
                  <td>{book.attributes.EventType}</td>
                  <td>{book.attributes.NumberOfGuests}</td>
                  <td>{book.attributes.eventDate}</td>
                  <td>{book.attributes.Venue}</td>
                  <td>{book.attributes.Package}</td>
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
