import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";

import LandingPage from "./landingPage/landingpage";
import Registration from "./Auth/Register";
import Login from "./Auth/Login";
//customer
import Navbar from "./customers/navbar/navbar";
import Home from "../src/customers/home/home";
import Bookings from "../src/customers/bookings/bookings";
import Viewbookings from "./customers/bookings/viewbookings";
import Pack from "./customers/pack/pack";
import History from "./customers/history/history";
import Ratings from './customers/ratings&Ratings/rating';
import Packages from './customers/packages/packages';

import ForgotPasswordPage from "./Auth/forgot password";
import InjectedCheckoutForm from "./customers/payment/payment";

import ProductReview1 from "./eventPlanner/ratings&Ratings/rating";
import CRUD from "./eventPlanner/ratings&Ratings/addReview";
import Modal from "./eventPlanner/ratings&Ratings/Modal";

// event planner
import Dashboard from "./eventPlanner/dashboard/dashboard";
import Homes from "./eventPlanner/homes/homes";

function App() {

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)

    },5000)

  },[ ])
  return (
    <div className="App">

      {
        loading?
        <CircleLoader
        color={"#308070"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        position="center"
      />
      :
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}> </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="/viewbookings" element={<Viewbookings />}></Route>
          <Route path="/bookings" element={<Bookings />}></Route>
          <Route path="/pack" element={<Pack />}></Route>
          <Route path="history" element={<History />}></Route>
          <Route path="rating" element={<Ratings />}></Route>
          <Route path="packages" element={<Packages />}></Route>


          <Route
            path="/forgot-password"
            element={<ForgotPasswordPage />}
          ></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/payment" element={<InjectedCheckoutForm />}></Route>
          <Route path="/review" element={<ProductReview1 />}></Route>
          <Route path="/addreview" element={<CRUD />}></Route>
          <Route path="/modal" element={<Modal />}>
            Modal
          </Route>
        </Routes>
      </Router>
      }

      
    </div>
  );
}

export default App;
