import React from "react";
import { TbBrandBooking } from "react-icons/tb";
import { FiPackage } from "react-icons/fi";
import { MdReviews } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import {useNavigate} from 'react-router-dom';



function Homepage() {

const navigate = useNavigate();

  return (
    <div className="min-h-screen"> 
    

      <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 gap-2 first-letter:justify-center justify-items-center">
        <div className="card w-96  shadow-xl  mt-16">
          <div className="card-body" style={{color:'black'}}>
            <h2 className="card-title">Booked Events</h2>
            <TbBrandBooking style={{ fontSize: "2em" }} />
            <p>History of events booked.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent" onClick={() => navigate("/admindash/viewbookings",{replace:true})}>view</button>
            </div>
          </div>
        </div>

        <div className="card w-96  shadow-xl mt-16">
          <div className="card-body" style={{color:'black'}}>
            <h2 className="card-title">Reports</h2>
            <HiDocumentReport style={{ fontSize: "2em" }} />
            <p>Reports of events.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent" onClick={() => navigate("/admindash/reports",{replace:true})}>View</button>
            </div>
          </div>
        </div>

        <div className="card w-96 shadow-xl  mt-16">
          <div className="card-body" style={{color:'black'}}>
            <h2 className="card-title">Event Packages</h2>
            <FiPackage style={{ fontSize: "2em" }} />
            <p>
              Find out more about Event packages that you might prefer depending
              on your event in details.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent" onClick={() => navigate("/admindash/pack",{replace:true})}>View</button>
            </div>
          </div>
        </div>

        <div className="card w-96  shadow-xl  mt-16">
          <div className="card-body" style={{color:'black'}}>
            <h2 className="card-title">Review and Ratings</h2>
            <MdReviews style={{ fontSize: "2em" }} />
            <p>
              Checkout the Rate and Reviews for our event management system.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent" onClick={() => navigate("/admindash/ratings",{replace:true})}>View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
