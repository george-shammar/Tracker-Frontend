import React from 'react';
import '../stylesheets/nav.css';

const Nav = () => {
    return (
        <div className="footer-nav">
          <div>
            <i class="fas fa-chart-line"></i>
            <p>Healthtrack</p>
          </div>
          <div>
            <i class="far fa-chart-bar"></i>
            <p>Add metrics</p>
          </div>
          <div>
            <i className="far fa-user"></i>
          </div>
        </div>
    );
  }
  
  export default Nav;