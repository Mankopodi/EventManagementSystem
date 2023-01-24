

import Packages from './customers/packages/packages';
import PushNotification from './customers/pushNotification/pushNotification'     
import './App.css';
import LandingPage from './landingPage/landingpage';
import Dashboard from './eventPlanner/dashboard/dashboard';
import Homes from './eventPlanner/homes/homes';
import Bookings from '../src/customers/bookings/bookings';
import Pack from './customers/pack/pack';
 import History from './customers/history/history';
 import Navbar from './customers/navbar/navbar';
import Home from '../src/customers/home/home';
import Viewbookings from './customers/bookings/viewbookings';


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
      <Packages /> 
    <PushNotification />
    </div>
  );
}

export default App;
