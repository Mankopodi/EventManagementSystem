import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const [customizeEventsPackages, setCustomizeEventsPackages] = useState([]);
  const [packageName, setPackageName] = useState()
  const [packageDescription, setPackageDescription] = useState()
  const [price, setPrice] = useState()


  function onSubmit(e) {
    e.preventDefault();
    // let item = newTodo;
    let pos = customizeEventsPackages.id;
    let body = {
      data: {
        packageName,
        packageDescription,
        price,
      }
    };

    fetch(`http://localhost:1337/api/customize-events-packages/${pos}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(() => {
        setPackageName(false);
        setPackageDescription(false);
        setPrice(false);
        // update();
      })
  }

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   let customizeEventsPackages = {data: {
  //     packageName: packageName,
  //     package_description: packageDescription,
  //     Price:price,
  //   }}
  //   await axios.put(`http://localhost:1337/api/customize-events-packages`, 
  //   customizeEventsPackages).then ( res => console.log('posting data', )).catch(err => console.log(err))
  //   navigate("/dash/packages");
    
  // };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
              package name
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
                Package description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your decription"
                name="descriptione"
                value={packageDescription}
                onChange={(e) => setPackageDescription(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Price
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