import React from "react";
import { TbBrandBooking } from "react-icons/tb";
import { FiPackage } from "react-icons/fi";
import { MdReviews } from "react-icons/md";
import { RiFolderHistoryFill } from "react-icons/ri";

function home() {
  return (
    <div className="min-h-screen">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 gap-2 first-letter:justify-center justify-items-center">
        <div className="card w-96  shadow-xl image-full mt-16">
          <div className="card-body">
            <h2 className="card-title">Bookings</h2>
            <TbBrandBooking style={{ fontSize: "2em" }} />
            <p>Make a booking for your event.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">Book</button>
            </div>
          </div>
        </div>

        <div className="card w-96  shadow-xl image-full mt-16">
          <div className="card-body">
            <h2 className="card-title">Booking History</h2>
            <RiFolderHistoryFill style={{ fontSize: "2em" }} />
            <p>Make a booking for your event.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">View</button>
            </div>
          </div>
        </div>

        <div className="card w-96  shadow-xl image-full mt-16">
          <div className="card-body">
            <h2 className="card-title">Event Packages</h2>
            <FiPackage style={{ fontSize: "2em" }} />
            <p>
              Find out more about Event packages that you might prefer depending
              on your event in details
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">View</button>
            </div>
          </div>
        </div>

        <div className="card w-96  shadow-xl image-full mt-16">
          <div className="card-body">
            <h2 className="card-title">Review and Ratings</h2>
            <MdReviews style={{ fontSize: "2em" }} />
            <p>
              Checkout the Rate and Reviews for our event management system.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
