import React from "react";
import {FiPhoneCall}  from 'react-icons/fi';
import {HiOutlineMailOpen, HiOutlineLocationMarker} from 'react-icons/hi';

function contact() {
  return (
    <div className="">
      <div id="contact" className=" hero min-h-screen ">
        <div className="max-w-2xl">
          <h1 className="flex justify-start font-bold text-5xl" style={{color:'black'}}>Contact</h1>
          <div className="hero-content flex flex-col lg:flex-row">
            <div className="flex flex-col justify-center all">
              <div className="flex flex-row cnt">
                <i>
                 < HiOutlineLocationMarker style={{ fontSize: "1.5em", color:"black" }} />
                </i>
                <span className="font-bold" style={{color:'black'}}>Location:</span>
                <span className="cont" style={{color:'black'}}>Johannesburg</span>
              </div>
              <div className="flex flex-row cnt">
                <i>
                 < HiOutlineMailOpen style={{ fontSize: "1.5em", color:"black" }} />
                </i>
                <span className="font-bold" style={{color:'black'}}>Email:</span>
                <a href="mailto:kgopotsomaloma@icloud.com" className="cont">
                  kgopotsomaloma170@gmail.com
                </a>
              </div>
              <div className="flex flex-row cnt">
                <i>
           < FiPhoneCall style={{ fontSize: "1.5em" , color:"black" }} />
                </i>
                <span className="font-bold" style={{color:'black'}}>Call:</span>
                <a href="tel:+27660374452" className="cont">
                  +27660374452
                </a>
              </div>
            </div>

            <div className="card card-compact w-full bg-base-100 shadow-xl">
              <div className="card-body mt-6">
                <form action="https://formspree.io/f/xaykvbwg" method="POST">
                  <div className="flex flex-col justify-center">
                    <div className="flex lg:flex-col sm:flex-row xs:flex-row md:flex-row">
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        className="input input-bordered input-success w-full mr-2 mb-6"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        name="Email"
                        className="input input-bordered input-success w-full sm:mb-6"
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="text"
                        placeholder="Subject"
                        name="Subject"
                        className="input input-bordered input-success w-full"
                      />
                    </div>
                    <div className="mb-6">
                      <textarea
                        className="textarea textarea-success w-full"
                        placeholder="Bio"
                        name="Message"
                      ></textarea>
                    </div>
                    <div className="mb-6 flex justify-end">
                      <button className="btn btn-primary">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;
