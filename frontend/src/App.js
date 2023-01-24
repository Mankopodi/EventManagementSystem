
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Auth/Login';
import Registration from './Auth/Register';
import ForgotPasswordPage from './Auth/forgot password'
import InjectedCheckoutForm from "./customers/payment/payment";
import ProductReview1 from "./eventPlanner/ratings&Ratings/rating"; 
import CRUD from "./eventPlanner/ratings&Ratings/addReview";
import  Modal from "./eventPlanner/ratings&Ratings/Modal";
import "./App.css";


  
      <Router>
        <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/forgot-password' element={<ForgotPasswordPage/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
        <Route path='/payment' element={<InjectedCheckoutForm/>}></Route>
        <Route path='/review' element={<ProductReview1/>}></Route>
        <Route path='/addreview' element={<CRUD/>}></Route>
        <Route path='/modal' element={<Modal/>}>Modal</Route>
        </Routes>
      </Router>


import "./App.css";
import LandingPage from "./landingPage/landingpage";
import Dashboard from "./eventPlanner/dashboard/dashboard";
import Homes from "./eventPlanner/homes/homes";
import Bookings from "../src/customers/bookings/bookings";
import Pack from "./customers/pack/pack";
import History from "./customers/history/history";
import Navbar from "./customers/navbar/navbar";
import Home from "../src/customers/home/home";
import Viewbookings from "./customers/bookings/viewbookings";
function App() {
  return (
    <div className="App">
      <LandingPage />
      <Dashboard />
      <Homes />
      <Bookings />
      <Pack />
      <History />
      <Home />
      <Navbar />
      <Viewbookings />
    </div>

   

  );
}

export default App;
