import React, { useEffect, useState } from "react";
import axios from "axios";
import {Token } from "../../tokens/constant";
import jsPDF from "jspdf";
import pdfMake from "pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import htmlToPdfmake from "html-to-pdfmake";



function Report() {
  //Download
  async function printDocument(params) {
    setIndivBook(params);
    setData(params);
    setRep(params);
    console.log(report);
    report.map((element)=>{
        if (element.id === params.id) {
            getReports(element)
        }
    })


    const doc = new jsPDF();
    //get Data html
    const pdfTable = document.getElementById("divToPrint");
    //html to pdf format
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    await (pdfMake.vfs = pdfFonts.pdfMake.vfs);
    await pdfMake.createPdf(documentDefinition).open();
  }

  const [Bookings, setBookings] = useState([]);
  const [getBook, setIndivBook] = useState();
    const [report, setReport] = useState();
  // variable for Getting the users data
  const [data, setData] = useState({});



const initDAta = {
    id: '',
    attributes:{
        Description:""
    }
}
  const [reports, getReports]= useState(initDAta)
  // variable for getting users description
  const [rep, setRep] = useState({});

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

  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = async () => {
    axios
      .get(`${process.env.React_App_URl}/api/reports`, {
        headers: {
          Authorization: `Bearer e5ed32fc8c4b1937dd99c1b5b8980f636c274368bcab44ff2b2465d6be5ecc36ffd7792fb24c5277eab871de142c102f3a10b7ef64d7d441730b2cf7e0dc06c896350ae80b5aa295404abb4966897c361b591fcfeb53290307ded37c524090e190f67ab1c6dfa585ed92a09fd222cc8f05f7cbc76244ab98ae8b7928313c5479`,
         
        },
      })
      .then((res) => {
        console.log(' data , ' , res.data.data);
        setReport(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  console.log(getBook);

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
          <table className="table w-full mr-4 ml-4">
            <thead>
              <tr>
              <th>First Name </th>
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
                        onClick={() => printDocument(book)}
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
      <div id="divToPrint">
        <div className="min-h-screen">
          <div>
            <h1
              className="flex justify-center text-4xl font-bold mt-8"
              style={{ color: "black" }}
            >
              Report of the event
            </h1>
          </div>
          <div className="info mt-12">
          <h1 className="ml-20 gap-1" style={{ color: "black" }}>
              First Name:
              {data?.attributes?.FirstName}
            </h1>
            <h1 className=" ml-20 gap-1 " style={{ color: "black" }}>
              Name of the Event:
              {data?.attributes?.EventType}
            </h1>
            <h1 className=" ml-20 gap-1" style={{ color: "black" }}>
              Date of the Event:
              {data?.attributes?.eventDate}
            </h1>
            <h1 className=" ml-20 gap-1" style={{ color: "black" }}>
              Venue of the Event:
              {data?.attributes?.Venue}
            </h1>
            <h1 className=" ml-20 gap-1 mt-10" style={{ color: "black" }}>
              {" "}
              Total Number Of Guests:
              {data?.attributes?.NumberOfGuests}
            </h1>
          </div>

          <div className="desc mt-8">
            <h1
              className="flex justify-center font-bold text-3xl mt-4 underline"
              style={{ color: "black" }}
            >
              Objective of the event
            </h1>

           <h1 className="text-black mb-4 " style={{Color: 'black'}}>
               {report?.attributes.Description}
           </h1>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
