import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Body/Home/Home';
import Schedule from './Components/Schedule/Schedule';
import Login from './Components/Register/Login';
import Signup from './Components/Register/Signup';
import Admindashboard from './Components/Admin/AdminDashboard/Admindashboard';

function App() {


  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/schedule" element={<Schedule/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path = '/Admin_Dashboard' element={<Admindashboard/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;


