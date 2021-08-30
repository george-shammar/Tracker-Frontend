import React from 'react';
import '../stylesheets/nav.css';

const Nav = () => {
    return (
        <div className="nav">
          <div className="health-nav">
            <span className="material-icons logo-nav">maps_ugc</span>
            <p>Health<span className="p-subtitle">Track</span></p>
          </div>
        </div>
    );
  }
  
  export default Nav;