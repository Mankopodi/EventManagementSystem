import React, { useEffect, useState } from "react";
import axios from "axios";
import { Token } from "../../tokens/constant";
import { useNavigate } from "react-router-dom";
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';

function ReportEventsHalll() {
  const [Bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  //Download 
  function printDocument(){
    const doc = new jsPDF(); 
    //get Data html
    const pdfTable = document.getElementById('divToPrint');
    //html to pdf format
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(documentDefinition).open();
}


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
      <div className="  min-h-screen overflow-scroll">
      <div className="overflow-x-auto">
        <h1
          className="flex justify-center text-4xl font-bold bg-blend-color mb-4 mt-4"
          style={{ color: "black" }}
        >
          Get Reports
        </h1>
        <table className="table w-full" >
          <thead>
            <tr>
              <th>Group Name</th>
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
                <tr key={book.id} >
                  <td className="text-black">{book.attributes.GroupName}</td>
                  <td className="text-black">{book.attributes.EventType}</td>
                  <td className="text-black">{book.attributes.NumberOfGuests}</td>
                  <td className="text-black">{book.attributes.eventDate}</td>
                  <td className="text-black">{book.attributes.Venue}</td>
                  <td  style={{color:'black'}}><button class="btn btn-accent" style={{color:'black'}}   onClick={() => navigate("/dashboard/report")}>Report</button></td>
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

export default ReportEventsHalll;
