import React from 'react';
import PropTypes from 'prop-types';
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

Tracker.propTypes = {
  tracker: PropTypes.instanceOf(Object).isRequired,
};

export default Tracker;
