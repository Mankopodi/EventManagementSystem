import React, { useEffect, useState } from "react";
import axios from "axios";
import { Token } from "../../tokens/constant";
import { Link, useNavigate, useParams } from "react-router-dom";

// import '../../eventPlanner/reportEvents/report.css';

function PushNotification() {

    const [Bookings, setBookings] = useState([]);
    const [getBook, setIndivBook] = useState();
    const [area, setArea] = useState()
    const [getReport, setReport] = useState();
    const [id, setId] = useState();
    const params = useParams();


    const [data, setData] = useState({})
    const array=[];
    


    useEffect(
        ()=>{
            fetchData()
        },[]
    )

    const fetchData = async () => {
        axios
            .get("http://localhost:1337/api/bookings", {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            })
            .then((res) => {
                console.log(res.data.data, "res");
                console.table(res.data.data.map((item) => item.attributes.FirstName))
                const myArray = res.data.data;
                const filteredArray = [];
                
                myArray.forEach((element) => {
                    console.log(element);
                  if (element.attributes.seen  === false) {
                    filteredArray.push(element);
                    setBookings(filteredArray)
                  }
                });
                
                console.log(filteredArray,"tested data");
                
            })
            .catch((err) => {
                console.log(err);
            });

    };


    function upadateSeen(id)  {
            // e.preventDefault();
          
            console.log(id)
            let body = {
              data: {
                    seen: true,
                  }
            };
        
            fetch(`http://localhost:1337/api/bookings/${id}`, {
              method: "PUT",
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify(body)
            })
              .then((res) => {
                setBookings();
                // update();
                console.log(res);
              })
    }

    // useEffect(() => {
    //     fetchData();
    //     console.log(Bookings, "Bookings");
    // }, [Bookings]);

    return (
        <div className="min-h-screen">
            <div className="  min-h-screen overflow-scroll">
                <div className="overflow-x-auto">
                    <h1
                        className="flex justify-center text-4xl font-bold bg-blend-color mb-4 mt-4"
                        style={{ color: "black" }}
                    >
                        Get Notifications
                    </h1>

                   <div className="flex justify-center text-1xl font-bold bg-blend-color mb-4 mt-4">
                    {Bookings.map((book) => {
                        return (
                            
                                <div className="card w-96 bg-neutral text-neutral-content m-4 font-bold bg-blend-color" key={book.id} >
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{book.attributes.FirstName}</h2>
                                        <p>{}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary" 
                                            onClick={()=>{upadateSeen(book.id) }}
                                            >Accept</button>
                                            <button className="btn btn-ghost">Deny</button>
                                        </div>
                                    </div>
                                </div>
                            
                        )
                    })}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PushNotification;

