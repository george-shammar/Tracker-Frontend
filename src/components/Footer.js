import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/footer.css';

const Footer = () => {
    return (
        <div className="nav">
          <Link to="/home">
          <div className="health-nav">
            <span className="material-icons logo-nav">maps_ugc</span>
            <p>Health<span className="p-subtitle">Track</span></p>
          </div>
          </Link>
        </div>
    );
  }
  
  export default Footer;