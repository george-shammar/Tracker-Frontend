import React from 'react';

const Tracker = ({tracker, children}) => {
    return (
        <div>
           <span>
               <p>Blood Pressure: {tracker.blood_pressure}</p>
               <p>Blood Glucose: {tracker.blood_glucose}</p>
               <p>Blood Glucose: {tracker.id}</p>
              <p>user: {tracker.user.username}</p>
           </span> 
            
        </div>
    )
}

export default Tracker;