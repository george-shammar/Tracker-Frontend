import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/nav.css';

const Nav = () => (
  <div className="footer-nav">
    <div className="foot left">
      <i className="fas fa-chart-line white" />
      <p><Link to="/App" className="white font">Healthtrack</Link></p>
    </div>
    <div className="foot">
      <i className="far fa-chart-bar white center" />
      <p><Link to="/Measurement" className="white font">Add metrics</Link></p>
    </div>
    <div className="foot right">
      <i className="far fa-user white" />
      <p><Link to="/" className="white font">Log Out</Link></p>
    </div>
  </div>
);

export default Nav;
