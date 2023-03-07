import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import './packages.css'

export default function Addpackage() {

    let navigate = useNavigate();

  const [packageName, setPackageName] = useState()
  const [packageDescription, setPackageDescription] = useState()
  const [price, setPrice] = useState()

  const onSubmit = async (e) => {
    e.preventDefault();
    // let customizeEventsPackages = {data: {
    //     data:{	      
    //       packageName: packageName,
    //       package_description: packageDescription,
    //   	  Price:price,
    //         }}}
    //       await axios.post(`process.env.React_App_URl/api/customize-events-packages`, customizeEventsPackages).then ( res => console.log('posting data', )).catch(err => console.log(err))
      
    let customizeEventsPackages = {data: {
      packageName: packageName,
      package_description: packageDescription,
      Price:price,
    }}
    await axios.post(`${process.env.React_App_URl}/api/customize-events-packages`, customizeEventsPackages).then ( res => console.log('posting data', res)).catch(err => console.log(err))
    

    
    navigate("/dash/packages");
    
  };
  return (
    <div className="container">
      <div className=" cardinput row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Package</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
             
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your package name"
                name="name"
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your decription"
                name="description"
                value={packageDescription}
                onChange={(e) => setPackageDescription(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/dash/packages">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}



