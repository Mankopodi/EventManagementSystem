import React, { useState, useEffect } from "react";
import axios from "axios";
import { Token } from "../../tokens/constant";

function ViewRescheduleOfEvents() {
  const [Bookings, setBookings] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const [eventDate, setDate] = useState();
  const [NumberOfGuests, setNumberOfGuests] = useState(0);

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

  //modal function(getting id)
  function handleClick(id) {
    setSelectedId(id);
  }
  // updating function
  const updateDate = () => {
    const eventData = {
      data: {
        NumberOfGuests: NumberOfGuests,
        eventDate: eventDate,
      },
    };
    console.log(selectedId);

    axios
      .put(`process.env.React_App_URl/api/bookings/${selectedId}`, eventData, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        fetchData();
      });
  };

  return (
    <div className="">
      <div className="min-h-screen overflow-scroll ">
        <div className="overflow-x-auto ">
          <h1 className="flex justify-center text-4xl font-bold mb-4 text-black" style={{ color: "black" }}>
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
               
                <th>Event Type</th>
                <th>Number of Guests</th>
                <th>Date</th>
                
               
                <th>Reschedule</th>
              </tr>
            </thead>
            <tbody>
              {Bookings.map((book) => {
                return (
                  <tr >
                    <td className="text-black" >{book.attributes.FirstName}</td>
                    <td className="text-black">{book.attributes.LastName}</td>
                    <td className="text-black">{book.attributes.Email}</td>
                    <td className="text-black">{book.attributes.PhoneNumber}</td>
                   
                    <td className="text-black">{book.attributes.EventType}</td>
                    <td className="text-black">{book.attributes.NumberOfGuests}</td>
                    <td className="text-black">{book.attributes?.eventDate}</td>
                   
                    <td>
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
                      <div className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">
                            Reschedule the date for your event.
                          </h3>
                          <div className="space">
                            <div className="form-control">
                              <label className="label ">
                                <span className="label-text"
                                style={{ color: "black" }}>
                                  Number Of Guests:
                                </span>
                              </label>
                              <label className="input-group">
                                
                                <span className="label-text" >Number Of Guests</span>
                                <input
                                  type="number"
                                  placeholder=""
                                  onChange={(e) =>
                                    setNumberOfGuests(e.target.value)
                                  }
                                  className="input input-bordered" style={{color:'black'}}
                                />
                              </label>
                            </div>
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
                                  className="input input-bordered" style={{color:'black'}}
                                />
                              </label>
                            </div>
                          </div>
                          <div className="modal-action">
                            <label
                              htmlFor="my-modal-6"
                              className="btn btn-accent" style={{color:'black'}}
                              onClick={updateDate}
                            >
                              UPDATE
                            </label>
                          </div>
                        </div>
                      </div>
                    </td>
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
