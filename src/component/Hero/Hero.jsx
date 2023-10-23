import React from 'react';
import './Hero.css';
// import heroImg from '../../img/pexels-photo-424184.jpeg';
import heroImg2 from '../../img/tanker-removebg-preview.png';
import logo1 from "../../img/juliusBergerLogo-removebg-preview.png"
import logo2 from "../../img/marketSquareLogo-removebg-preview.png";
import logo3 from "../../img/kilimagaroLogo-removebg-preview.png";
import logo4 from "../../img/sonicLogo-removebg-preview.png";
import { BiHeadphone } from 'react-icons/bi';


const Hero = () => {
  const logos = [logo1, logo2, logo3, logo4];
  return (
    <div className="hero">
      <nav className="navbar">
        <div className="right-nav">FAAD</div>
        <div className="navItems">
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/about">About</a></li>
          <li className="nav-item"><a href="/services">Services</a></li>
          <li className="nav-item nav-talk"><a href="/contact">Talk to Someone <BiHeadphone className="navbar-icon" /></a></li>
        </ul>
        </div>      
      </nav>
      <div className="hero-content">
        <div className="hero-right-container">
          <div className="hero-text-container">
            <h1>Quality fuel at <br/> Your doorstep</h1>
            <p>FAAD runs a @24/7 fuel supply and procurement <br/> service to over 200 offices, homes, schools and, <br/> events.</p>
            <button className="heroBtn">PLACE ORDER</button>
          </div>
          <div className="client-logos-container">
            {logos.map((logo, index) => (
              <img key={index} src={logo} alt={`Client Logo ${index + 1}`} className="client-logo" />
            ))}
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