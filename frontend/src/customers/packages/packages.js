import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// import TodoItem from './TodoItem';
// import '../../customers/packages/packages.css';

function Packages() {

  const navigate = useNavigate();
  const [customizeEventsPackages, setCustomizeEventsPackages] = useState([]);

  useEffect(() => {
    getCustomizeEventsPackages();
 }, []);

 function getCustomizeEventsPackages() {
     fetch(`http://localhost:1337/api/customize-events-packages`)
       .then(res => res.json())
       .then(customizeEventsPackages => {
        setCustomizeEventsPackages(customizeEventsPackages.data);
         console.log(customizeEventsPackages)
        //  console.log( 'getting user: ', id)
       })
   }


  return (
    <>
    <div className='customCard'> 
  {customizeEventsPackages.map((customizeEventsPackage) => (
      <div class="card w-96 bg-base-100 shadow-xl" key={customizeEventsPackage.id}>
      {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
      <div class="card-body">
        <h2 class="card-title"> {customizeEventsPackage.attributes.packageName} </h2>
        <p style={{color: 'black'}}> {customizeEventsPackage.attributes.package_description}  </p>
        <p style={{color: 'black'}}>R {customizeEventsPackage.attributes.Price} </p>
        <div class="card-actions justify-end">
          {/* <!-- The button to open modal --> */}
        <label for="my-modal-5" class="btn" onClick={() => navigate("EditUser",{replace:true})}>open modal</label>
        </div>
      </div>
    </div>
    
    ))}

  </div>
  


  </>
  )
  
}

export default Packages



