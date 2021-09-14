import React from 'react';
import '../stylesheets/tracker.css';

const Tracker = ({tracker}) => {
    return (
        <div className="tracker">
               <p>Blood Pressure: {tracker.blood_pressure}</p>
               <p>Blood Glucose: {tracker.blood_glucose}</p>
               <br />
        </div>

       
    )
}

export default Tracker;