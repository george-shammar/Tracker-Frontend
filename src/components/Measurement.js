import React from 'react';
import Header from './Header';
import Nav from './Nav';
import '../stylesheets/measurement.css';

const Measurement = () => {
    return (
        <div>
            <Header />
            <p>Tracker</p>
            <div className="wrapper fadeInDown">
                <div className="formContent">
                <div className="health">
                    <span className="material-icons logo">maps_ugc</span>
                    <p>Health<span className="p-subtitle">Track</span></p>
                </div>
                <div className="form">
                    <input type="text" className="fadeIn second" name="login" placeholder="Blood Pressure"></input>
                    <input type="text" className="fadeIn second" name="login" placeholder="Blood Sugar"></input>
                    <button type="button" className="fadeIn fourth">Submit</button>
                </div>
                </div>
            </div>
            <Nav />
        </div>
    )
    
}

export default Measurement;