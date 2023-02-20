import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Token } from "../../tokens/constant";
import Modal from "./modal";

function History() {
  const [Bookings, setBookings] = useState([]);
  const navigate = useNavigate();

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
      <div className="overflow-x-auto">
        <h1
          className="flex justify-center text-4xl font-bold mt-2 mb-1"
          style={{ color: "black" }}
        >
          Booking History
        </h1>
        {/* <button className="btn btn-primary mb-2" onClick={() => navigate("/dash/home",{replace:true})}>BACK</button> */}

        <table className="table w-full">
          <thead>
            <tr>
              <th className="text-white ">Event Name</th>
              <th className="text-white ">First Name</th>
              <th className="text-white ">Last Name</th>
              <th className="text-white ">Email</th>
              {/* <th className="text-white ">Phone Number</th> */}
              <th className="text-white ">Event Type</th>
              <th className="text-white ">Number of Guests</th>
              <th className="text-white ">Date</th>
              {/* <th className="text-white ">Venue</th> */}
              {/* <th className="text-white ">Packages</th> */}
              <th className="text-white ">Reviews </th>
            </tr>
          </thead>
          <tbody>
            {Bookings.map((book) => {
              return (
                <tr>
                  <td className="text-black">{book.attributes.EventName}</td>
                  <td className="text-black">{book.attributes.FirstName}</td>
                  <td className="text-black">{book.attributes.LastName}</td>
                  <td className="text-black">{book.attributes.Email}</td>
                  {/* <td className="text-black">{book.attributes.PhoneNumber}</td> */}
                  <td className="text-black">{book.attributes.EventType}</td>
                  <td className="text-black">
                    {book.attributes.NumberOfGuests}
                  </td>
                  <td className="text-black">{book.attributes.EventDate}</td>
                  {/* <td className="text-black">{book.attributes.Venue}</td> */}
                  {/* <td className="text-black">{book.attributes.Package}</td> */}
                  <td>
                    <label htmlFor="my-modal" className="btn btn-accent">
                      view Review
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal"
                      className="modal-toggle"
                    />
                    <div className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box">
                        <p className="font-bold text-lg">
                          {book.attributes.EventName.toUpperCase()}
                        </p>


<div className="rating rating-lg">
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
</div>
                       

                        <div tabindex="0" class="collapse">
                          <div class="collapse-title text-xl font-medium">
                            <p>click to add review</p>
                          </div>
                          <div class="collapse-content">
                            <textarea
                              className="textarea textarea-info"
                              placeholder="Bio"
                            ></textarea>
                            <p>
                              tabindex="0" attribute is necessary to make the
                              div focusable
                            </p>
                          </div>
                        </div>
                        <div className="modal-action">
                          <label htmlFor="my-modal" className="btn">
                            Yay!
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
  );
}

export default History;
