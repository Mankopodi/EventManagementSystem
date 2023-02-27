import React, { useEffect, useState } from "react";
import axios from "axios";
import { Token } from "../../tokens/constant";
import { Link, useNavigate, useParams } from "react-router-dom";
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import '../../eventPlanner/reportEvents/report.css';

function PushNotification() {

    const [Bookings, setBookings] = useState([]);
    const [Bkings, setBkings] = useState([]);
    const [show, setShow] = useState(true);
    const [displayed, setDisplayed] = useState(false);


    // const [getBook, setIndivBook] = useState();
    // const [area, setArea] = useState()
    // const [getReport, setReport] = useState();
    // const [id, setId] = useState();
    const params = useParams();


    const [data, setData] = useState({})
    const array = [];



    useEffect(
        () => {
            fetchData()
        }, [Bkings]
    )

    const fetchData = async () => {
        await axios
            .get("http://localhost:1337/api/bookings", {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            })
            .then(async (res) => {
                console.log(res.data.data, "res");
                setShow(true)
                // console.table(res.data.data.map((item) => item.attributes.FirstName))
                setBookings(res.data.data)
                const myArray = await res.data.data;
                const filteredArray = [];

                myArray.forEach((element) => {
                    console.log(element);
                    if (element.attributes.seen === false) {
                        filteredArray.push(element);
                        setShow(false)
                        setBkings(filteredArray)
                    }
                });

                console.log(filteredArray, "tested data");


            })
            .catch((err) => {
                console.log(err);
            });

    };


    function upadateSeen(id) {
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
        show ? (
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
                                            <p>First name: {book.attributes.FirstName}</p>
                                            <p>Numbe of guests: {book.attributes.NumberOfGuests}</p>
                                            <p>Event Type: {book.attributes.EventType}</p>
                                            <p>Event Package: {book.attributes.Package}</p>
                                            <p>Venue: {book.attributes.Venue}</p>
                                            {/* <p>{book.attributes.Venue}</p>
                                        <p>{book.attributes.Venue}</p> */}
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary"
                                                    onClick={() => { upadateSeen(book.id) }}
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
        ) : (
            <div className="min-h-screen">
                <div className="  min-h-screen overflow-scroll">
                    <div className="overflow-x-auto">
                        <h1
                            className="flex justify-center text-4xl font-bold bg-blend-color mb-4 mt-4"
                            style={{ color: "black" }}
                        >
                            Get Notifications
                        </h1>
                        <Autocomplete
                            id="highlights-demo"
                            sx={{ width: 300 }}
                            options={Bkings}
                            getOptionLabel={(option) => option.attributes.FirstName}

                            renderInput={(params) => (
                                <TextField {...params} label="Highlights" margin="normal" />
                            )}
                            renderOption={(props, option, { inputValue }) => {
                                console.log("option : ", option, "__search testing");
                                const matches = match(option.attributes.FirstName, inputValue, { insideWords: true });
                                const parts = parse(option.attributes.FirstName, matches);
                                 setBkings(option)
                                return (
                                    <li {...props}>
                                        <div>
                                            {parts.map((part, index) => (
                                                console.log(option.attributes.FirstName,"who is I"),
                                                <span
                                                    key={index}
                                                    style={{
                                                        fontWeight: part.highlight ? 700 : 400,
                                                    }}
                                                >
                                                    {part.text}
                                                </span>
                                            ))}
                                        </div>
                                    </li>
                                );
                            }}
                        />
                        <div className="flex justify-center text-1xl font-bold bg-blend-color mb-4 mt-4">
                            {Bkings.map((book) => {
                                return (
                                    // displayed ? ( 
                                    <>

                                        <div className="card w-96 bg-neutral text-neutral-content m-4 font-bold bg-blend-color" key={book.id} >
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">{book.attributes.FirstName}</h2>
                                                <p>First name: {book.attributes.FirstName}</p>
                                                <p>Numbe of guests: {book.attributes.NumberOfGuests}</p>
                                                <p>Event Type: {book.attributes.EventType}</p>
                                                <p>Event Package: {book.attributes.Package}</p>
                                                <p>Venue: {book.attributes.Venue}</p>
                                                {/* <p>{book.attributes.Venue}</p>
                                        <p>{book.attributes.Venue}</p> */}
                                                <div className="card-actions justify-end">
                                                    <button className="btn btn-primary"
                                                        onClick={() => { upadateSeen(book.id) }}
                                                    >Accept</button>
                                                    <button className="btn btn-ghost">Deny</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    // ):(
                                    //       <>

                                    //     <div className="card w-96 bg-neutral text-neutral-content m-4 font-bold bg-blend-color" key={book.id} >
                                    //         <div className="card-body items-center text-center">
                                    //             <h2 className="card-title">{book.attributes.FirstName}</h2>
                                    //             <p>First name: {book.attributes.FirstName}</p>
                                    //             <p>Numbe of guests: {book.attributes.NumberOfGuests}</p>
                                    //             <p>Event Type: {book.attributes.EventType}</p>
                                    //             <p>Event Package: {book.attributes.Package}</p>
                                    //             <p>Venue: {book.attributes.Venue}</p>
                                    //             {/* <p>{book.attributes.Venue}</p>
                                    //     <p>{book.attributes.Venue}</p> */}
                                    //             <div className="card-actions justify-end">
                                    //                 <button className="btn btn-primary"
                                    //                     onClick={() => { upadateSeen(book.id) }}
                                    //                 >Accept</button>
                                    //                 <button className="btn btn-ghost">Deny</button>
                                    //             </div>
                                    //         </div>
                                    //     </div>
                                    // </>
                                    // )
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        )
    );
}

export default PushNotification;

