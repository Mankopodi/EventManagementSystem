import React, { useEffect, useState } from "react";
import axios from "axios";
import { Description, Token } from "../../tokens/constant";
import jsPDF from "jspdf";
import pdfMake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import htmlToPdfmake from "html-to-pdfmake";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
//import {TiTick} from 'react-icons/ti'
import './report.css';

function Eventreport() {
  const navigate = useNavigate();

  //Download
  function printDocument() {
    const doc = new jsPDF();
    //get Data html
    const pdfTable = document.getElementById("divToPrint");
    //html to pdf format
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(documentDefinition).open();
  }

  const [Bookings, setBookings] = useState([]);
  const [getBook, setIndivBook] = useState();
  const [area, setArea] =useState()
  const [getReport, setReport] = useState();
  const [id,setId] = useState()

  const [data, setData] = useState({})

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
  // useEffect(() => {
  //   PostData();
  // }, []);

 function poster(){
console.log(area)

let data ={
  data:{
  booking: id,
  Description: area
}
}
   axios
    .post(`${process.env.React_App_URl}/api/reports`,data, { 
      headers: {
        Authorization: `Bearer e5ed32fc8c4b1937dd99c1b5b8980f636c274368bcab44ff2b2465d6be5ecc36ffd7792fb24c5277eab871de142c102f3a10b7ef64d7d441730b2cf7e0dc06c896350ae80b5aa295404abb4966897c361b591fcfeb53290307ded37c524090e190f67ab1c6dfa585ed92a09fd222cc8f05f7cbc76244ab98ae8b7928313c5479`,
      },
    })
    .then((res) => {
      navigate("/dashboard/reportevent");
      console.log(res.data.data);
      setReport(res.data.data);
    })
    .catch((err) => {
      console.log(err);
      swal("Success!", "Your report submission was successful.", "success");
    });
 }
   


  const getBookDetails = (params) => {
    console.log(params);
    setIndivBook(params);
    setData(params)
    setId(params.id)
    
  };



  return (
    <div className="min-h-screen">
      <div className="  min-h-screen overflow-scroll">
        <div className="overflow-x-auto">
          <h1
            className="flex justify-center text-4xl font-bold bg-blend-color mb-4 mt-4"
            style={{ color: "black" }}
          >
            Get Reports
          </h1>
          <table className="table w-full mr-8 ml-4">
            <thead>
              <tr>
              <th>First Name</th>
                <th>Event Type</th>
                <th>Number of Guests</th>
                <th>Date</th>
                <th>Venue</th>
                <th>Report</th>
              </tr>
            </thead>
            <tbody>
              {Bookings.map((book) => {
                return (
                  <tr key={book.id}>
                     <td className="text-black">{book.attributes.FirstName}</td>
                    <td className="text-black">{book.attributes.EventType}</td>
                    <td className="text-black">
                      {book.attributes.NumberOfGuests}
                    </td>
                    <td className="text-black">{book.attributes.eventDate}</td>
                    <td className="text-black">{book.attributes.Venue}</td>
                    <td style={{ color: "black" }}>
                      <button
                        className="btn btn-accent"
                        style={{ color: "black" }}
                        onClick={() => getBookDetails(book)}
                      >
                        Report
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Donwload individual data */}
      <div>
        <div className="min-h-screen">
          <div>
            <h1
              className="flex justify-center text-4xl font-bold mt-8"
              style={{ color: "black" }}
            >
              Report of the event
            </h1>
          </div>
          <div className="info mt-4">
            <h1 className="font-semibold ml-20" style={{ color: "black" }}>
              Name of the Event:
              {data?.attributes?.EventType}
            </h1>
            <h1 className="font-semibold ml-20" style={{ color: "black" }}>
              Date of the Event:
              {data?.attributes?.eventDate}
            </h1>
            <h1 className="font-semibold ml-20" style={{ color: "black" }}>
              Venue of the Event:
              {data?.attributes?.Venue}
            </h1>
            <h1 className="font-semibold ml-20" style={{ color: "black" }}>
              {" "}
              Total Number Of Guests:
              {data?.attributes?.NumberOfGuests}
            </h1>
          </div>

          <div className="desc mt-8">
            <h1
              className="flex justify-center font-bold text-3xl "
              style={{ color: "black" }}
            >
              Objective of the event
            </h1>

            <textarea
              className="flex justify-center textarea textarea-accent ml-4 mt-4"
              style={{ color: "black" }}
              id="w3review"
              name="w3review"
              rows="15"
              cols="130"
              onChange={(e)=>{setArea(e.target.value)}}
            >
              {/* {rep?.attributes?.Description} */}
            </textarea>
          </div>
          <button className=" ml-6 btn btn-accent" onClick={poster}>submit</button>
          {/* <div className="popup" id="popup">
            < TiTick style={{ fontSize: "1.5em", color: 'black' }}/>
            <h2 style={{ color: "black" }} >Thank You.</h2>
            <p>Your report has been successfully submitted. Thanks</p>
            <button type="button" style={{ color: "black" }} >OK</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Eventreport;
