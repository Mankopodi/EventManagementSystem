import React from "react";

function homes() {
  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 gap-2 first-letter:justify-center justify-items-center">
      <div className="card w-96  shadow-xl image-full mt-16">
        <div className="card-body">
          <h2 className="card-title">Report for All Events</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-accent">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card w-96  shadow-xl image-full mt-16">
        <div className="card-body">
          <h2 className="card-title">Report for All Venues</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-accent">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card w-96  shadow-xl image-full mt-16">
        <div className="card-body">
          <h2 className="card-title">Review and Ratings</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-accent">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="card w-96  shadow-xl image-full mt-16">
        <div className="card-body">
          <h2 className="card-title">Event Packages</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-accent">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homes;
