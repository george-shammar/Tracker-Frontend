import React from 'react';
import '../stylesheets/header.css';

const Header = () => {
    return (
        <div className="nav">
          <div className="health-nav">
            <span className="material-icons logo-nav">maps_ugc</span>
            <p>Health<span className="p-subtitle">Track</span></p>
          </div>
        </div>
    );
  }
  
  export default Header;