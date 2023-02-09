import React, { useEffect, useState } from "react";
import axios from "axios";
import { Token } from "../../tokens/constant";
//import { HiPhone } from "react-icons/hi";
//import { BiRename } from "react-icons/bi";
//import { MdEmail } from "react-icons/md";

function ReportEventsHalll() {
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
    <div className="min-h-screen ">
      <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold" style={{ color: "black" }}>
              Name of the event:
            </span>
          </label>
          <label className="label">
           
            <input
              type="text"
              placeholder=""
              className="input input-bordered input-primary w-full"
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold" style={{ color: "black" }}>
              Date of the event:
            </span>
          </label>
          <label className="label">
          
            <input
              type="text"
              placeholder=""
              className="input input-bordered input-primary "
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold" style={{ color: "black" }}>
              Venue of the Event:
            </span>
          </label>
          <label className="label">
           
            <input
              type="text"
              placeholder=""
              className="input input-bordered input-primary w-full"
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold" style={{ color: "black" }}>
              Total number of Guests:
            </span>
          </label>
          <label className="label">
          
            <input
              type="tel"
              placeholder=""
              className="input input-bordered input-primary w-full"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-tex font-bold" style={{ color: "black" }}>
              Objective of the event
            </span>
          </label>
          <label className="label">
            <input
              type="email"
              placeholder=""
              className="input input-bordered input-primary w-full"
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default ReportEventsHalll;
