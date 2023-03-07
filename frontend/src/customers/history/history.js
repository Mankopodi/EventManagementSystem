import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Token } from "../../tokens/constant";
import { ERROR, SUCCESS } from "../../enviroments/toast";
//import Modal from "./modal";

function History() {
  const [Bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const bookid = useRef();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get(`${process.env.React_App_URl}/api/bookings?sort[1]=id%3AASC`, {
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

  useEffect(() => {
    getBook();
  }, []);

  function getBook() {
    fetch(`${process.env.React_App_URl}/api/bookings`)
      .then((res) => res.json())
      .then((book) => {
        setBook(book);
        console.log(book);
      });
  }
  // cancelling a booking

  const cancelBooking = (book) => {
    setLoading(true);
    bookid.current = book.id;
    let newBlock = !book.attributes.Status;

    const blocked = {
      data: {
        Status: newBlock,
      },
    };

    console.log(newBlock);
    console.log(book)
    console.log(book.attributes.Status)

    axios
      .put(`process.env.React_App_URl/api/bookings/${bookid.current}`, blocked, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((book) => {
        if (newBlock) {
          SUCCESS("Booked");
        } else {
          SUCCESS("unBooking");
        }
  
      })
      .catch((error) => {
        // ERROR(error.response.book.error.message);
        console.log(error);
      })
      .finally(() => {
        fetchData();
        setLoading(false)
      });
  };

  return (
    <div className="min-h-screen">
      <div>{loading ? 'loading.....': ''}</div>
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
              <th className="text-white ">First Name</th>
              <th className="text-white ">Last Name</th>
              <th className="text-white ">Email</th>
              <th className="text-white ">Event Type</th>
              <th className="text-white ">Number of Guests</th>
              <th className="text-white ">Date</th>
              <th className="text-white"> Cancellation</th>
          
              <th className="text-white ">Reviews </th>
            </tr>
          </thead>
          <tbody>
            {Bookings.map((book) => {
              return (
                <tr>
                  <td className="text-black">{book.attributes.FirstName}</td>
                  <td className="text-black">{book.attributes.LastName}</td>
                  <td className="text-black">{book.attributes.Email}</td>
                  <td className="text-black">{book.attributes.EventType}</td>
                  <td className="text-black">
                    {book.attributes.NumberOfGuests}
                  </td>
                  <td className="text-black">{book.attributes.eventDate}</td>
                  <th>
                    {book.attributes.Status ? (
                      <button
                        className="btn btn-outline btn-error"
                        onClick={() => cancelBooking(book)}
                      >
                        Canceled
                      </button>
                    ) : (
                      <button
                        className="btn btn-outline btn-success"
                        onClick={() => cancelBooking(book)}
                      >
                        Booked
                      </button>
                    )}

                    {/* */}
                  </th>
                  
                  <td>
                    <label htmlFor="my-modal" className="btn btn-accent">
                      Review
                    </label>
                  </td>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my-modal"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                      <div tabindex="0" class=" justify-items-center">
                        <div className="collapse-title text-xl font-medium ">
                          <p className="uppercase">
                            {book.attributes.EventType}
                          </p>
                        </div>

                        <div className="rating rating-lg flex justify-center ">
                          <input
                            type="radio"
                            name="rating-8"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-8"
                            className="mask mask-star-2 bg-orange-400"
                            checked
                          />
                          <input
                            type="radio"
                            name="rating-8"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-8"
                            className="mask mask-star-2 bg-orange-400"
                          />
                          <input
                            type="radio"
                            name="rating-8"
                            className="mask mask-star-2 bg-orange-400"
                          />
                        </div>

                        <div>
                          <textarea
                            className="textarea textarea-info w-96 flex justify-center"
                            placeholder="Add Comment Optional..!"
                          ></textarea>
                        </div>
                      </div>
                      <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">
                          post!
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
  );
}

export default History;
