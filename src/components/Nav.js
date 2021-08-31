import React from 'react';
import '../stylesheets/nav.css';

const Nav = () => {
    return (
        <div className="footer-nav">
          <div>
            <i className="fas fa-chart-line white"></i>
            <p className="white font">Healthtrack</p>
          </div>
          <div>
            <i className="far fa-chart-bar white center"></i>
            <p className="white font">Add metrics</p>
          </div>
          <div>
            <i className="far fa-user white"></i>
            <p className="white font">Log Out</p>
          </div>
        </div>
    );
  }
  
  export default Nav;