import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import CircleLoader from "react-spinners/CircleLoader";

// public
import LandingPage from "./landingPage/landingpage";
import Registration from "./Auth/Register";
import Login from "./Auth/Login";
import ForgotPasswordPage from "./Auth/forgot password";
// import InjectedCheckoutForm from "./customers/payment/payment";

//customer
import Navbar from "./customers/navbar/navbar";

import Bookings from "../src/customers/bookings/bookings";
import Viewbookings from "./customers/bookings/viewbookings";
import Pack from "./customers/pack/pack";
import History from "./customers/history/history";
//import Ratings from "./customers/ratings&Ratings/rating";
import Packages from "./customers/packages/packages";
import EditUser from "./customers/packages/EditUser";
import Form from "./customers/bookings/form";
import Payment from "./customers/payment/Payment copy";
import PushNotification from "./customers/pushNotification/pushNotification";
import Contact from "./customers/contact us/contact";

// event planner
import Dashboard from "./eventPlanner/dashboard/dashboard";

import ProductReview1 from "./eventPlanner/ratings&Ratings/rating";
import CRUD from "./eventPlanner/ratings&Ratings/addReview";
import Modal from "./eventPlanner/ratings&Ratings/Modal";
import EventCrud from "./eventPlanner/eventCrud/eventCrud";
import ReportEvents from "./eventPlanner/reportEvents/eventreport";
import ReportEventHall from "./eventPlanner/reportEventsHalll/reportEventsHalll";
import ViewBooks from "./eventPlanner/viewBooks/viewBooking";
import ViewRescheduleOfEvents from "./eventPlanner/ViewRescheduleOfEvents/ViewRescheduleOfEvents";
import Contacts from "./eventPlanner/contacts/contact";
import  PushNotifications  from "./eventPlanner/pushNotifications/pushNotifications";

// admin
import ManageCustomerEventPlaner from "./admin/manageCustomer&EventPlaner/manageCustomerEventPlaner";
import Admindashboard from "./admin/admindashboard/admindashboard";
import Homepage from "./admin/homepage/homepage";
import ManageEvent from "./admin/manageEvent/manageEvent";
import Profile from "./admin/profile/profile";
import Addpackage from "./customers/packages/addpackage";
import Reports from "./admin/reports/reports";
import { getToken } from "./helpers";
import Packs from "./admin/packs/packs";



function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <CircleLoader
            color={"#308070"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            position="center"
          />
        </div>
      ) : (
        <Router>
          <Routes>
            {/* PUBLIC ROUTES*/}

            <Route path="/" element={<LandingPage />}></Route>

            {/* AUTHENTICATION ROUTES */}
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Registration />}></Route>
            <Route
              path="forgot-password"
              element={<ForgotPasswordPage />}
            ></Route>

            {/* CUSTOMER ROUTES */}

            <Route path="/dash" element={<Navbar />}>
            <Route path="pack" element={<Pack />}></Route>
              <Route path="form" element={<Form />}></Route>
              <Route path="viewbookings" element={<Viewbookings />}></Route>
              <Route path="multiform" element={<multStep />}></Route>
              <Route path="bookings" element={<Bookings />}></Route>
              <Route path="history" element={<History />}></Route>
              <Route path="review" element={<ProductReview1 />}></Route>
              <Route path="packages" element={<Packages />}></Route>
              <Route path="Payment" element={<Payment />}></Route>
              <Route path="EditUser/:id" element={<EditUser />}></Route>
              <Route path="Addpackage" element={<Addpackage />}></Route>
              <Route path="Addpackage" element={<Addpackage />}></Route>
              <Route path="ProductReview1" element={<ProductReview1 />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route
                path="pushNotification"
                element={<PushNotification />}
              ></Route>
              <Route path="contact" element={<Contact />}></Route>
            </Route>

            {/* EVENT PLANNER */}
            <Route path="/dashboard" element={<Dashboard />}>
              

              <Route path="addreview" element={<CRUD />}></Route>
              <Route path="modal" element={<Modal />}></Route>
              <Route
                path="ViewRescheduleOfEvents"
                element={<ViewRescheduleOfEvents />}
              ></Route>

              <Route path="eventCrud" element={<EventCrud />}></Route>
              
              <Route path="reportevents" element={<ReportEvents />}></Route>

              <Route
                path="reporteventhall"
                element={<ReportEventHall />}
              ></Route>
              <Route path="viewbooks" element={<ViewBooks />}></Route>
              <Route path="contact" element={<Contact />}></Route>
              <Route path="pack" element={<Pack />}></Route>
              <Route path="reportevent" element={<ReportEvents />}></Route>
              <Route path="reporthall" element={<ReportEventHall />}></Route>
              <Route path="ProductReview1" element={<ProductReview1 />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="contacts" element={<Contacts />}></Route>
              <Route
                path="pushNotifications"
                element={<PushNotifications />}
              ></Route>
            </Route>
            <Route path="Homepage" element={<Homepage />}></Route>

            {/* ADMIN ROUTES */}
            <Route
              path="/admindash"
              element={
                !getToken() ? <Admindashboard /> : <Navigate to={"/login"} />
              }
            >
              <Route
                path="manageCustomerEventPlaner"
                element={<ManageCustomerEventPlaner />}
              ></Route>
              <Route path="homepage" element={<Homepage />}></Route>
              <Route path="viewbooks" element={<ViewBooks />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="history" element={<History />}></Route>
             
              <Route path="ProductReview1" element={<ProductReview1 />}></Route>
              <Route path="ManageEvent" element={<ManageEvent />}></Route>
              <Route path="reportevent" element={<ReportEvents />}></Route>
              <Route path="notifications" element={<PushNotification />}></Route>
              <Route path="report" element={<Reports />}></Route>
              <Route path="packs" element={<Packs />}></Route>
             
            </Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
