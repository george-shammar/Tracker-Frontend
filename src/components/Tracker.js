import React from 'react';
import '../stylesheets/tracker.css';

const Tracker = ({ tracker }) => (
  <div className="tracker">
    <div className="card">
      <p>Blood Pressure:</p>
      <p>{tracker.blood_pressure}</p>
    </div>
    <div className="card">
      <p>Blood Glucose:</p>
      <p>{tracker.blood_glucose}</p>
    </div>
  </div>

);

export default Tracker;
