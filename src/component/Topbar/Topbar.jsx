import React from 'react';
import './Topbar.css';
import { IoIosCall } from 'react-icons/io';

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="one">
        <p>24/7 Emergency Fuel Supply</p>
        </div>
        <div className="two">
            <IoIosCall className="topbar-icon" />
            <p>0912345678 / 0876543210</p>
        </div>
        
        
      
    </div>
  )
}

export default Topbar