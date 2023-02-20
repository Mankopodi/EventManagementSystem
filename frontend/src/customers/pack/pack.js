import React, { useState, useEffect } from "react";
import axios from "axios";
import { Token1 } from "../../tokens/constant";
import { useNavigate } from "react-router-dom";
import "../pack/pack.css";

function Pack() {
  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  const [Pack, setPack] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    document.getElementById("defaultOpen").click();
  }, []);

  const fetchData = async () => {
    axios
      .get("http://localhost:1337/api/packs", {
        headers: {
          Authorization: `Bearer ${Token1}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setPack(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="overflow-x-auto min-h-screen">
      <h2
        className=" flex justify-center text-4xl font-bold mt-2 mb-2"
        style={{ color: "black" }}
      >
        Packages
      </h2>
      <div class="tab">
        <button
          class="btn btn-accent tablinks"
          onClick={(e) => openCity(e, "London")}
          id="defaultOpen"
        >
          Wedding Packages
        </button>
        
        <button
          class="btn btn-accent tablinks"
          onClick={(e) => openCity(e, "Paris")}
        >
          Party Packages
        </button>

        <button
          class="btn btn-accent tablinks"
          onClick={(e) => openCity(e, "Tokyo")}
        >
          Conference Packages
        </button>
        
        <hr></hr>
      </div>
      {/* <!-- Tab content --> */}
      <div id="London" class="tabcontent">
        <h3 className=" flex justify-center text-1xl font-semibold" style={{ color: "black" }}>Weddings</h3>
        <p>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  
                  <th style={{ color: "white" }}>Premium</th>
                  <th style={{ color: "white" }}>Deluxe</th>
                  <th style={{ color: "white" }}>Classic </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td  style={{ color: "black" }}>jhgfd</td>
                <td  style={{ color: "black" }}>jhgfd</td>
                <td  style={{ color: "black" }}>jhgfd</td>
                </tr>
              </tbody>
            </table>
          </div>
        </p>
      </div>
      <div id="Paris" class="tabcontent">
        <h3 className=" flex justify-center text-1xl font-semibold"  style={{ color: "black" }}>Parties</h3>
        <p><div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th style={{ color: "white" }}>For Adults</th>
                  <th style={{ color: "white" }}>For Kids</th>
                  <th style={{ color: "white" }}>Baby/Bridal Shower</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td  style={{ color: "black" }}>jhgfd</td>
                <td  style={{ color: "black" }}>jhgfd</td>
                <td  style={{ color: "black" }}>jhgfd</td>
                </tr>
              </tbody>
            </table>
          </div></p>
      </div>
      <div id="Tokyo" class="tabcontent">
        <h3 className=" flex justify-center text-1xl font-semibold"  style={{ color: "black" }}>Conferences</h3>
        <p><div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  
                  <th style={{ color: "white" }}>Standard</th>
                  <th style={{ color: "white" }}>Stay-over</th>
              
                </tr>
              </thead>
              <tbody>
              <tr>
                <td  style={{ color: "black" }}>jhgfd</td>
                <td  style={{ color: "black" }}>jhgfd</td>
                
                </tr>
              </tbody>
            </table>
          </div></p>
      </div>{" "}
    </div>
  );
}

export default Pack;
