import React from 'react';
import './Hero.css';
// import heroImg from '../../img/pexels-photo-424184.jpeg';
import heroImg2 from '../../img/tanker-removebg-preview.png';


const Hero = () => {
  return (
    <div className="hero">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/about">About</a></li>
          <li className="nav-item"><a href="/services">Services</a></li>
          <li className="nav-item"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="hero-content">
        <div className="hero-text-container">
          <div className="hero-text-container">
            <h1>Quality fuel at <br/> Your doorstep</h1>
            <p>FAAD runs a @24/7 fuel supply and procurement <br/> service to over 200 offices, homes, schools and, <br/> events.</p>
            <button className="heroBtn">PLACE ORDER</button>
          </div>
        </div>
        <div className="hero-image-container">
            <img className="hero-image" src= {heroImg2} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Hero