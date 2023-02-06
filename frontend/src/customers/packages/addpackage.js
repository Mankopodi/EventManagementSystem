import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function Addpackage() {

    let navigate = useNavigate();

  const [customizeEventsPackages, setCustomizeEventsPackages] = useState({
    data:{
      packageName: "",
      package_description: "",
      Price: "",
      }
  });

  

  const { packageName, package_description, Price } = customizeEventsPackages;

  const onInputChange = (e) => {
    setCustomizeEventsPackages({ ...customizeEventsPackages, [e.target.packageName]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:1337/api/customize-events-packages`, {
      data:{
        packageName,
        package_description,
        Price,
        }
    }).then ( res => console.log('posting data', )).catch(err => console.log(err))

    
    navigate("/dash/packages");
  };

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
                type={"text"}
                className="form-control"
                placeholder="Enter your package name"
                name="name"
                value={packageName}
                onChange={(e) => customizeEventsPackages(e.target.value)}
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
                name="Package descriptione"
                value={package_description  }
                onChange={(e) => customizeEventsPackages(e.target.value)}
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
                value={Price}
                onChange={(e) => customizeEventsPackages(e.target.value)}
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



