
import axios from "axios";

import React, { useState, useEffect } from "react";
import { Token } from "../../tokens/constant";

function Viewbooking() {
  
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

    function deleteBooking(id) {
      
      console.log( 'delete booking:', id)
   
      axios.delete(`http://localhost:1337/api/bookings/${id}`)
        .then((res) => {
          console.log(res);
          setBookings();
        })
        console.log( 'delete booking: ', id)
    }



  return (
    <div className="  min-h-screen overflow-scroll">
      <div className="overflow-x-auto">
        <h1
          className="flex justify-center text-4xl font-bold bg-blend-color mb-4 mt-4"
          style={{ color: "black" }}
        >
          Bookings
        </h1>
        <table className="table w-full" >
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Group Name</th>
              <th>Event Type</th>
              <th>Number of Guests</th>
              <th>Date</th>
              <th>Venue</th>
              <th>Packages</th>
              <th>Delete</th>
            
              
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
                  <td  style={{color:'black'}}><button class="btn btn-error" style={{color:'black'}} onClick={()=> deleteBooking(Bookings.id)}>Delete</button></td> 
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Viewbooking;
