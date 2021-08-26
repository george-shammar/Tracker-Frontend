import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
          <Link to="/">
          <div className="health">
                    <span className="material-icons logo">maps_ugc</span>
                    <p>Health<span className="p-subtitle">Track</span></p>
          </div>
          </Link>
          <Link to="/sign-in">Log Out</Link>
        </div>
    );
  }
  
  export default Nav;