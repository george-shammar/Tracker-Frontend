import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/tracker.css';

const Tracker = ({ tracker }) => (
  <div className="tracker">
    <div className="card">
      <i className="fas heart fa-heartbeat" />
      <div>
        <p className="text-unit">Blood Pressure:</p>
        <div className="display">
          <p className="figure">{tracker.blood_pressure}</p>
          <p className="unit-two">mmHg</p>
        </div>
      </div>
    </div>
    <div className="card">
      <i className="fas heart fa-signal" />
      <div>
        <p className="text-unit">Blood Glucose:</p>
        <div className="display">
          <p className="figure">{tracker.blood_glucose}</p>
          <p className="unit-two">mmol/L</p>
        </div>
      </div>
    </div>
  </div>

);

Tracker.propTypes = {
  tracker: PropTypes.instanceOf(Object).isRequired,
};

export default Tracker;
