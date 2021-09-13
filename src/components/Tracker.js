import React from 'react';

const Tracker = ({tracker, children}) => {
    return (
        <div>
            <p>Blood Pressure: {tracker.blood_pressure}</p>
            <p>Blood Glucose: {tracker.blood_glucose}</p>
        </div>
    )
}

export default Tracker;