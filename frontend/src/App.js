
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Auth/Login';
import Registration from './Auth/Register';
import ForgotPasswordPage from './Auth/forgot password'

import "./App.css";

function App() {
  return (
    <div >
  
      <Router>
        <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/forgot-password' element={<ForgotPasswordPage/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
         
        </Routes>
      </Router>

    
    </div>

   

  );
}

export default App;
