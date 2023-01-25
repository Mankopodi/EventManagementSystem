import React, { useState, useEffect } from "react";
import axios from "axios";
import { Token } from "../../tokens/constant";

function ViewRescheduleOfEvents() {
  const [Bookings, setBookings] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [value, setValue] = useState(0);
  const [eventDate, setDate] = useState();

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

  //modal function(getting id)
  function handleClick(id) {
    setSelectedId(id);
  }
  // updating function
  const updateDate = () => {

    const eventData = {
      data: {
        eventDate: eventDate
      },
    };
    console.log(selectedId)
  
    axios
      .put(`http://localhost:1337/api/bookings/${selectedId}`, eventData, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      }).finally(()=>{
        fetchData();
      })
  };

  return (
    <div>
      <div className="min-h-screen overflow-scroll ">
        <div className="overflow-x-auto ">
          <h1 className="flex justify-center text-4xl font-bold mb-4">
            Bookings
          </h1>
          {/* <button className="btn btn-accent mb-8" style={{color:'white'}}>booking</button> */}
          <table className="table w-full">
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
                <th>Reschedule</th>
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
                    <td>{book.attributes?.eventDate}</td>
                    <td>{book.attributes.Venue}</td>
                    <td>{book.attributes.Package}</td>
                    {/* The button to open modal */}
                    <label
                      htmlFor="my-modal-6"
                      className="btn btn-accent ml-1 mt-1"
                      onClick={() => handleClick(book.id)}
                    >
                      Reschedule
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal-6"
                      className="modal-toggle"
                    />
                    <div className="modal modal-bottom sm:modal-middle shadow-xl">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">
                          Reschedule the date for your event.
                        </h3>
                        <p className="py-4">
                          <div className="form-control">
                            <label className="label">
                              <span
                                className="label-text"
                                style={{ color: "black" }}
                              >
                                Date:
                              </span>
                            </label>
                            <label className="input-group">
                              <span>Date</span>
                              <input
                                type="date"
                                placeholder="10"
                                onChange={(e) => setDate(e.target.value)}
                                className="input input-bordered"
                              />
                            </label>
                          </div>
                        </p>
                        <div className="modal-action">
                          <label
                            htmlFor="my-modal-6"
                            className="btn btn-accent "
                            onClick={updateDate}
                          >
                            Update
                          </label>
                        </div>
                      </div>
                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewRescheduleOfEvents;
