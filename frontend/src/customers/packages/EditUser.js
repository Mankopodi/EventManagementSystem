import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();
  console.log(id)

  // const navigate = useNavigate();
  // const [customizeEventsPackages, setCustomizeEventsPackages] = useState([]);

  const [customizeEventsPackages, setCustomizeEventsPackages] = useState({
    data: {
      packageName: "",
      package_description: "",
      Price: "",
    }
  });

  const [packageName, SetPackageName] = useState('');
  const [package_description, setPackageDescription] = useState('');
  const [price, setPrice] = useState('');

  // const { packageName, package_description, Price } = customizeEventsPackages;


  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      data:{
        packageName: packageName,
        package_description: package_description,
        Price: price
      }
    }
    await axios.put(`http://localhost:1337/api/customize-events-packages/${id}`, data,
    
      {
        headers: {
          Authorization: `Bearer c7a61c554aa7331445f294df5da34e8afee07ab1316bd3159db9ced055ea776e6da53ca3ae540479906c4d3031842064082a1558ae62450943900406470cd281ae13e86e1d11e504c2674c8569aad678e2f875b0d5104433ae614a1ff6d00d296af2c6f1c613969a060e9c36172802c282a90156a5302944b4a0d3c2b38d029b`
        }
        
      }).then((data)=>{
        console.log(data)
      }).catch((err)=>{
        console.log(err)
      })
    // navigate("/");
    
  };
  // console.log(id)


  const loadUser = async () => {
    const result = await axios.get(`http://localhost:1337/api/customize-events-packages/${id}?populate=*`,
    {
      headers: {
        Authorization: `Bearer c7a61c554aa7331445f294df5da34e8afee07ab1316bd3159db9ced055ea776e6da53ca3ae540479906c4d3031842064082a1558ae62450943900406470cd281ae13e86e1d11e504c2674c8569aad678e2f875b0d5104433ae614a1ff6d00d296af2c6f1c613969a060e9c36172802c282a90156a5302944b4a0d3c2b38d029b`
      }
      
    });
    setCustomizeEventsPackages(result.data.data);
    console.log(result.data.data.attributes)

    SetPackageName(result.data.data.attributes.packageName);
    setPackageDescription(result.data.data.attributes.package_description);
    setPrice(result.data.data.attributes.Price);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Package name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your package name"
                name="name"
                value={packageName}
                onChange={(e) => SetPackageName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Package description
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Package description"
                name="username"
                value={package_description}
                onChange={(e) => setPackageDescription(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Price
              </label>
              <input
                type={"decimal"}
                className="form-control"
                placeholder="R 200"
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