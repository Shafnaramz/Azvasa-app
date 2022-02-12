// import  Filter from "./components/FilterBar";
// import CardData from "./components/Data";
// import VehicleHome from "./components/vehicle/vehiclehome"

// import {} from '@material-ui/core';
import { BrowserRouter as Router, Route, Link , Routes } from "react-router-dom";
import Login from './components/Login';
import Forgot from './components/forgot';
import ForgotMob from './components/forgotmob';
import Otp from './components/Otp';
import SetUp from './components/SetUp';
import Update from './components/Update';

import "./App.css";



function MyApp (){

  return(
    <div>
     <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="forgot" element={<Forgot />} />
      <Route path="forgotmob" element={<ForgotMob />} />
      <Route path="otp" element={<Otp />} />
      <Route path="setup" element={<SetUp />} />
      <Route path="update" element={<Update />} />
      
    </Routes>
  </Router>,
    </div>
  );
}
export default MyApp;
