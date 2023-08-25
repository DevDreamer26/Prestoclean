import React from 'react'
import Adminnavbar from '../Adminnavbar/Adminnavbar'
import './Admindashboard.css'

export default function Admindashboard() {
  return (
    <div>
        <Adminnavbar/>
        <div className='admincontainer'>
            <div className='card-align'>
            
            <div className='ordercard'>
                <div className='header'>
                    Total Orders
                </div>
                <p>123455</p>
            </div>
            <div className='ordercard'>
                <div className='header'>
                    Total Orders
                </div>
                <p>123455</p>
            </div>
            <div className='ordercard'>
                <div className='header'>
                    Total Orders
                </div>
                <p>123455</p>
            </div>
            <div className='ordercard'>
                <div className='header'>
                    Total Orders
                </div>
                <p>123455</p>
            </div>
            <div className='ordercard'>
                <div className='header'>
                    Total Orders
                </div>
                <p>123455</p>
            </div>
            </div>
            
            

        </div>
    </div>
  )
}
