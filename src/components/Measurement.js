import React from 'react';
import Header from './Header';
import Nav from './Nav';
import '../stylesheets/measurement.css';

const Measurement = () => {
    return (
        <div>
            <Header />
            <div className="wrapper fadeInDown">
            <p>Record your health metrics</p>
                <div className="formContent">
                <div className="form">
                    <input type="number" className="fadeIn second" name="login" placeholder="Blood Pressure"></input>
                    <input type="number" className="fadeIn second" name="login" placeholder="Blood Sugar"></input>
                    <button type="button" className="fadeIn fourth">Submit</button>
                </div>
                </div>
            </div>
            <Nav />
        </div>
    )
    
}

export default Measurement;