import { useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Body/Home/Home';
import Schedule from './Components/Schedule/Schedule';
import Login from './Components/Register/Login';
import Signup from './Components/Register/Signup';
import Admindashboard from './Components/Admin/AdminDashboard/Admindashboard';
import OtpLogin from './Components/otp/OtpLogin';

function App() {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);


  const navigate = useNavigate()

  return (
    <>

        <Routes>
          <Route path="/" element={<Home />} />



          <Route
            path="/otplogin"
            element={
              <OtpLogin
              setIsAdminAuthenticated={setIsAdminAuthenticated}

                isAdminAuthenticated={isAdminAuthenticated}
              />
            }
          />
          
          {isAdminAuthenticated ? (
            <Route path="/schedule" element={<Schedule />} />
          ) : (
                navigate("/otplogin")

          )}

          <Route
            path="/Admin_login"
            element={
              <Login
                setIsAdminAuthenticated={setIsAdminAuthenticated}

                isAdminAuthenticated={isAdminAuthenticated}
              />
            }
          />
          <Route path="/signup" element={<Signup />} />


          {isAdminAuthenticated ? (
            <Route path="/Admin_Dashboard" element={<Admindashboard />} />
          ) : (
                navigate("/Admin_login")

          )}

        </Routes>

    </>
  );
}

export default App;


