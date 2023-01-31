import React, { useState } from "react";
import axios from "axios";
import { useParams} from "react-router";
// import "./Crud.css";
import Form from 'react-bootstrap/Form';
import   {useNavigate} from "react-router-dom"

function EditForm() {
  const { id } = useParams();
  const [prodId, setProdId] = useState(id);
  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/crud');
  };

  const [customizeEventsPackages, setCustomizeEventsPackages] = useState({
    packageName: "",
    package_description: "",
    price: "",
    // Picture: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setCustomizeEventsPackages({
      ...setCustomizeEventsPackages,
      [event.target.name]: event.target.value,
    });
    console.log(setCustomizeEventsPackages);
  };

  const editId = (id, e) => {
    e.preventDefault();
    
    axios
      .put(`http://localhost:1337/api/customize-events-packages/${id}`, { data:  setCustomizeEventsPackages })
      .then((response) => {
        setProdId(id);
        navigate('/crud');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="edit_form">
      <form onSubmit={(e) => editId(prodId, e)}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control  name="name"
            value={setCustomizeEventsPackages.name}
            onChange={handleChange} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control  name="description"
            value={setCustomizeEventsPackages.description} 
            onChange={handleChange} type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control  name="price"
            value={setCustomizeEventsPackages.price}
            onChange={handleChange} type="text" />
      </Form.Group>
      {/* <Form.Group className="mb-3" >
        <Form.Label>Picture</Form.Label>
        <Form.Control className="try"  name="Picture"
            value={formData.Picture}
            onChange={handleChange} type="text" />
      </Form.Group> */}
       
        <div className="btns">
          <button onClick={handleClick} className="cancel" type="text">Cancel</button>
          <button  className="save" type="submit">Submit</button>
          
        </div>
      </form>
    </div>
  );
}

export default EditForm;
