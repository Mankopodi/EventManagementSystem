import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { BsTrashFill } from "react-icons/fa";
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
      .then((res) => res.json())
      .then((customizeEventsPackages) => {
        setCustomizeEventsPackages(customizeEventsPackages.data);
        console.log(customizeEventsPackages);
        //  console.log( 'getting user: ', id)
      });
  }

  return (
    <>
      <div className="customCard min-h-screen">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 gap-2 first-letter:justify-center justify-items-center">
          {customizeEventsPackages.map((customizeEventsPackage) => (
            <div
              class="card w-96  shadow-xl"
              key={customizeEventsPackage.id}
            >
              {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
              <div class="card-body">
                <h2 class="card-title">
                  {" "}
                  {customizeEventsPackage.attributes.packageName}{" "}
                </h2>
                <p style={{ color: "black" }}>
                  {" "}
                  {customizeEventsPackage.attributes.package_description}{" "}
                </p>
                <p style={{ color: "black" }}>
                  R {customizeEventsPackage.attributes.Price}{" "}
                </p>
                <div class="card-actions justify-end">
                  {/* <!-- The button to open modal --> */}
                  <label
                    for="my-modal-5"
                    class="btn"
                    onClick={() =>
                      navigate("/dash/EditUser/" + customizeEventsPackage.id, {
                        replace: true,
                      })
                    }
                  >
                    {" "}
                    <FaEdit />{" "}
                  </label>
                  <label
                    for="my-modal-5"
                    class="btn"
                    onClick={() =>
                      navigate("/dash/EditUser/" + customizeEventsPackage.id, {
                        replace: true,
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Packages;
