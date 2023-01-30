import React from "react";

function contact() {
  return (
    <div className="min-h-screen">
      <div id="contact" className="hero min-h-screen bg-base-200">
        <div className="max-w-2xl">
          <h1 className="flex justify-start font-bold text-5xl">Contact</h1>
          <div className="hero-content flex flex-col lg:flex-row">
            <div className="flex flex-col justify-center all">
              <div className="flex flex-row cnt">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-map-pin"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="11" r="3"></circle>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </i>
                <span className="font-bold">Location:</span>
                <span className="cont">Johannesburg</span>
              </div>
              <div className="flex flex-row cnt">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mail"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <polyline points="3 7 12 13 21 7"></polyline>
                  </svg>
                </i>
                <span className="font-bold">Email:</span>
                <a href="mailto:kgopotsomaloma@icloud.com" className="cont">
                  kgopotsomaloma170@gmail.com
                </a>
              </div>
              <div className="flex flex-row cnt">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone-calling"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <line x1="15" y1="7" x2="15" y2="7.01"></line>
                    <line x1="18" y1="7" x2="18" y2="7.01"></line>
                    <line x1="21" y1="7" x2="21" y2="7.01"></line>
                  </svg>
                </i>
                <span className="font-bold">Call:</span>
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
