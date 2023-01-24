

import Packages from './customers/packages/packages';
import PushNotification from './customers/pushNotification/pushNotification'
import './App.css';
import LandingPage from './landingPage/landingpage';
import Dashboard from './eventPlanner/dashboard/dashboard';
import Homes from './eventPlanner/homes/homes';
import Bookings from '../src/customers/bookings/bookings';
// import Pack from './customers/pack/pack';
import History from './customers/history/history';
import Navbar from './customers/navbar/navbar';
import Home from '../src/customers/home/home';
import Viewbookings from './customers/bookings/viewbookings';

import Payment from "./customers/payment/Payment copy";
import Completion from "./customers/payment/CheckoutForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Auth/Login";
import Registration from "./Auth/Register";
import ForgotPasswordPage from "./Auth/forgot password";
// import InjectedCheckoutForm from "./customers/payment/payment";
import ProductReview1 from "./eventPlanner/ratings&Ratings/rating";
import CRUD from "./eventPlanner/ratings&Ratings/addReview";
import Modal from "./eventPlanner/ratings&Ratings/Modal";

import "./App.css";
// import LandingPage from "./landingPage/landingpage";
// import Dashboard from "./eventPlanner/dashboard/dashboard";
// import Homes from "./eventPlanner/homes/homes";
// import Bookings from "../src/customers/bookings/bookings";
// import Pack from "./customers/pack/pack";
// import History from "./customers/history/history";
// import Navbar from "./customers/navbar/navbar";
// import Home from "../src/customers/home/home";
// import Viewbookings from "./customers/bookings/viewbookings";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route
            path="/forgot-password"
            element={<ForgotPasswordPage />}
          ></Route>
          <Route path="/register" element={<Registration />}></Route>
          {/* <Route path="/payment" element={<InjectedCheckoutForm />}></Route> */}
          <Route path="/review" element={<ProductReview1 />}></Route>
          <Route path="/addreview" element={<CRUD />}></Route>

          <Route path="/LandingPage" element={<LandingPage />}></Route>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/Homes" element={<Homes />}></Route>
          <Route path="/Bookings" element={<Bookings />}></Route>
          <Route path="/History" element={<History />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Navbar" element={<Navbar />}></Route>
          <Route path="/Viewbookings" element={<Viewbookings />}></Route>
          <Route path="/Packages" element={<Packages />}></Route>
          <Route path="/PushNotification" element={<PushNotification />}></Route>
          <Route path="/addreview" element={<CRUD />}></Route>
          <Route path="/" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />


          <Route path="/modal" element={<Modal />}>
            Modal
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
