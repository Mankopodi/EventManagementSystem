import React, { useState, useEffect } from "react";
import axios from "axios";
import { Token1 } from "../../tokens/constant";
import { useNavigate } from "react-router-dom";
import '../pack/pack.css'

function Pack() {

  const [Pack, setPack] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
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
        <h2 className=" flex justify-center text-4xl font-bold mt-2 mb-2" style={{color:'black'}}>Packages</h2>
        <table className="table w-full">
          <thead className="color">
            <tr className="color">
              <th>Name</th>
              <th>Category</th>
              <th>Items</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
          {Pack.map((packages) => {
              return (
                <tr key={packages.id} >
                  <td className="text-black font-bold">{packages.attributes.packages}</td>
                  <td className="text-black">{packages.attributes.category}</td>
                  <td className="text-black">{packages.attributes.itms}</td>
                  <td className="text-black">{packages.attributes.Amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
  
  );
}

export default Pack;
