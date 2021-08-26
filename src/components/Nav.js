import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/nav.css';

const Nav = () => {
    return (
        <div className="nav">
          <Link to="/">
          <div className="health-nav">
            <span className="material-icons logo-nav">maps_ugc</span>
            <p>Health<span className="p-subtitle">Track</span></p>
          </div>
          </Link>
          <Link to="/sign-in" className="log-out">Log Out</Link>
        </div>
    );
  }
  
  export default Nav;