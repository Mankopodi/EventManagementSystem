import React, { useEffect, useState } from "react";
import axios from "axios";
import {Token } from "../../tokens/constant";

function Homepage() {

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
      <h2 className=" flex justify-center text-4xl font-bold mt-4 " style={{color:'black'}}>Dashboard</h2>
      <div className="stats mt-20 ml-6  ">
        <div className="stat">
          <div className="stat-title font-bold" style={{color:'black'}} >Total Number of Bookings</div>
          <div className="stat-value">{Bookings.length}</div>
       
        </div>
      </div>
    </div>
  );
}

export default Homepage;
