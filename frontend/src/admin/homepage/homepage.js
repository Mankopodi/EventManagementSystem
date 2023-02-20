import React from "react";

function Homepage() {
  return (
    <div className="min-h-screen">
      <h2 className=" flex justify-center text-4xl font-bold " style={{color:'black'}}>Dashboard</h2>
      <div className="stats  ">
        <div className="stat">
          <div className="stat-title">Total Number of Bookings</div>
          <div className="stat-value">89,400</div>
       
        </div>
      </div>
    </div>
  );
}

export default Homepage;
