import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Laundry from '../../../assets/Laundry.jpg'
import iron from "../../../assets/iron.jpg"
import drycleaning from "../../../assets/dry-cleaning.jpg"
import fold from "../../../assets/fold.jpg"
import premium from "../../../assets/premium.jpg"
import homeservice from "../../../assets/home-service.jpg"
import './Home.css'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'

export default function Home() {

  const navigate = useNavigate();
  const [isloggedin, setIsloggedin] = useState(false)


  useEffect(() => {

    if (sessionStorage.access_token) {

      setIsloggedin(true)

    }
  }, []);

  const handleSchedulePickup = () => {
    // useNavigate('/schedule')
    if (isloggedin === true) {
      navigate('/schedule');
      console.log('token is present')
    } else {
      navigate('/login');
      console.log('token is not present')
    }
  };
  const clearsession = () => {
    sessionStorage.clear()
    setIsloggedin(false)
  }






  return (
    <>
    <div className='home-main'>
      <Navbar />
      <div className='home-container'>
        <div className='intro'>
          <div className='intro-text'>
            <div className='intro-topic'><span className='companytitle'>PRESTO CLEAN</span> <br />Freshness Delivered, Every Wear!</div>
            <div>
              <div className='intro-para'>
                <p>
                  Discover the perfect answer to your everyday laundry demands with our top-notch service. Prestoclean is here to revolutionize the way you approach laundry, saving you valuable time and effort.
                </p>
                <p>
                  Imagine the luxury of freeing up more than 4 hours each week – time you can now invest in what truly matters to you.
                </p>
              </div>
              <button className='schedulebutton' onClick={handleSchedulePickup}>Schedule a pickup</button>
            </div>
          </div>
          <div className='intro-image'><img className="intro-image" style={{maxWidth: "650px", height: "auto"}} src={Laundry} alt='washing maching' /></div>


        </div>
        <div className="horizontal-line"></div>

        <div className='section2'>
          <div className='header'>How it works</div>
          <div className='card-align'>
            <div className='card'>
              <h3>Schedule</h3>
              <p className="small">Schedule via our website, we are available for you </p>
            </div>
            <div className='card'>
              <h3>Pickup</h3>
              <p className="small">After you schedule, we will collect from your doorstep</p>
            </div>
            <div className='card'>
              <h3>Clean</h3>
              <p className="small">Your clothes are expertly cleaned according to the PrestoClean service you select.</p>
            </div>
            <div className='card'>
              <h3>Deliver</h3>
              <p className="small">Our Standard turnaround time is 48 Hrs*. We are commited to deliver as earliest as possible</p>
            </div>
          </div>
        </div>
        <div className='color'>
          <p>INDIA’S NO. 1 LAUNDRY & DRY-CLEANING
BRAND </p>
        </div>
        <div className='section3' id='Service'>
          <div className='header'>Our Services</div>
          <div className='card-align'>
            <a className='card' href='/'>
              <img src={fold} />
              <h3>Wash and Fold</h3>
            </a>
            <a className='card' href='/'>
              <img src={iron} />
              <h3>Iron</h3>
            </a>
            <a className='card'>
              <img src={premium} />
              <h3>Premium Laundry</h3>
            </a>
            <a className='card'>
              <img src={homeservice} />
              <h3>Home services</h3>
            </a>
            <a className='card'>
              <img src={drycleaning} />
              <h3>Dry cleaning</h3>
            </a>
          </div>
        </div>
        <div>
          <h1>
            Save many hours in a week when you leave your laundry with us
          </h1>

        </div>




      </div>
      <button onClick={clearsession}>Logout</button>
     
    </div>
    <Footer />
    </>
  )
}



