import React from "react";

function Homepage() {
  return (
    <div className="min-h-screen">
      <h2 className=" flex justify-center text-4xl font-bold " style={{color:'black'}}>Dashboard</h2>
      <div className="stats shadow ">
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
