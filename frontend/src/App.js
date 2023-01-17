
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Login';
import Registration from './Register';
import ForgotPasswordPage from './password'

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
