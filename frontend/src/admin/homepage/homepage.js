import React, { useEffect, useState } from "react";
import axios from "axios";
import { Token } from "../../tokens/constant";

function Homepage() {
  const [Bookings, setBookings] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get(`${process.env.React_App_URl}/api/bookings`, {
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
      <h2
        className=" flex justify-start text-4xl font-bold mt-4 italic"
        style={{ color: "black" }}
      >
        Dashboard
      </h2>
      <div className="grid md:grid-cols-1 sm:grid-cols-0 xs:grid-cols-0 lg:grid-cols-0 gap-2 first-letter:justify-start justify-items-start">
        <div className="stats mt-20 ml-6  ">
          <div className="stat w-60 h-40 bg-base-100">
            <div className="stat-title font-bold" style={{ color: "black" }}>
              Total Number of Bookings
            </div>
            <div className="stat-value">{Bookings.length}</div>
          </div>
        </div>

        <div className="stats mt-20 ml-6  ">
          <div className="stat w-60 h-40 bg-base-100">
            <div className="stat-title font-bold" style={{ color: "black" }}>
              Total Number of reports
            </div>
            <div className="stat-value"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
