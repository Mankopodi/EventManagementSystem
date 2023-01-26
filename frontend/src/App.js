 import "./App.css";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import { useState, useEffect } from "react";
 import CircleLoader from "react-spinners/CircleLoader";
 // public
 import LandingPage from "./landingPage/landingpage";
 import Registration from "./Auth/Register";
 import Login from "./Auth/Login";
 import ForgotPasswordPage from "./Auth/forgot password";

//  import InjectedCheckoutForm from "./customers/payment/payment";

 //customer
 import Navbar from "./customers/navbar/navbar";
 import Home from "../src/customers/home/home";
 import Bookings from "../src/customers/bookings/bookings";
 import Viewbookings from "./customers/bookings/viewbookings";
 import Pack from "./customers/pack/pack";
 import History from "./customers/history/history";
 import Ratings from "./customers/ratings&Ratings/rating";
 import Packages from "./customers/packages/packages";
 import Payment from "./customers/payment/Payment copy";

 // event planner
 import Dashboard from "./eventPlanner/dashboard/dashboard";
 import Homes from "./eventPlanner/homes/homes";
 import ProductReview1 from "./eventPlanner/ratings&Ratings/rating";
 import CRUD from "./eventPlanner/ratings&Ratings/addReview";
 import Modal from "./eventPlanner/ratings&Ratings/Modal";
 import EventCrud from "./eventPlanner/eventCrud/eventCrud";
 import EmailCommunication from './eventPlanner/emailComunnication/emailComunnication';
 import ReportEvents from './eventPlanner/reportEvents/reportEvents';
 import ReportEventHall from './eventPlanner/reportEventsHalll/reportEventsHalll';
 import ViewBooks from './eventPlanner/viewBooks/viewBooking';
 import ViewRescheduleOfEvents from "./eventPlanner/ViewRescheduleOfEvents/ViewRescheduleOfEvents";
 function App() {
   const [loading, setLoading] = useState(false);
   useEffect(() => {
     setLoading(true);
     setTimeout(() => {
       setLoading(false);
     }, 3000);
   }, []);
   return (
     <div className="App">
       {loading ? (
         <CircleLoader
           color={"#308070"}
           loading={loading}
           size={150}
           aria-label="Loading Spinner"
           data-testid="loader"
           position="center"
         />
       ) : (
         <Router>
           <Routes>
             {/* PUBLIC ROUTES*/}
             <Route path="/" element={<LandingPage />}></Route>
             {/* AUTHENTICATION ROUTES */}
             <Route path="login" element={<Login />}></Route>
             <Route path="register" element={<Registration />}></Route>
             <Route path="Navbar" element={<Navbar />}> </Route>
             <Route
               path="forgot-password"
               element={<ForgotPasswordPage />}
             ></Route>
             
             {/* CUSTOMER ROUTES */}
             <Route path="navbar" element={<Navbar />}></Route>
             <Route path="home" element={<Home />}></Route>
             <Route path="viewbookings" element={<Viewbookings />}></Route>
             <Route path="bookings" element={<Bookings />}></Route>
             <Route path="pack" element={<Pack />}></Route>
             <Route path="history" element={<History />}></Route>
             <Route path="rating" element={<Ratings />}></Route>
             <Route path="packages" element={<Packages />}></Route>
             <Route path="Payment" element={<Payment />}></Route>

             {/* EVENT PLANNER */}
             {/* <Route path="payment" element={<InjectedCheckoutForm />}></Route> */}
             <Route path="review" element={<ProductReview1 />}></Route>
             <Route path="addreview" element={<CRUD />}></Route>
             <Route path="modal" element={<Modal />}></Route>
             <Route
               path="ViewRescheduleOfEvents"
               element={<ViewRescheduleOfEvents />}
             ></Route>
             <Route path="dashboard" element={<Dashboard />}></Route>
             <Route path="homes" element={<Homes />}></Route>
             <Route path="eventCrud" element={<EventCrud />}></Route>
             <Route path="emailcommunication" element={<EmailCommunication />}></Route>
             <Route path="reportevents" element={<ReportEvents />}></Route>
             <Route path="reporteventhall" element={<ReportEventHall />}></Route>
             <Route path="viewbookings" element={<ViewBooks />}></Route>
             {/* ADMIN ROUTES */}
           </Routes>
         </Router>
       )}
     </div>
   );
 }
 export default App;
