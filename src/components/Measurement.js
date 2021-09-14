import React, { useState }from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import Nav from './Nav';
import '../stylesheets/measurement.css';
import { useHistory } from "react-router-dom";

const Measurement = () => {
    const [blood_pressure, setBloodPressure] = useState();
    const [blood_glucose, setBloodGlucose] = useState();
    const dispatch = useDispatch();


    const recordBp = (e) => {
        const data = e.target.value;
        setBloodPressure(data);
    };

    const recordBg = (e) => {
        const data = e.target.value;
        setBloodGlucose(data);
    };

    const handleSubmit = (e) => {
        const blood_pressure = { blood_pressure };
        const blood_glucose = { blood_glucose };
        dispatch(newTracker(blood_pressure, blood_glucose));
        setBloodPressure();
        setBloodGlucose();
        e.preventDefault();
        history.push("/App");
    };

    return (
        <div>
            <Header />
            <div className="wrapper fadeInDown">
            <p>Record your health metrics</p>
                <div className="formContent">
                <form className="form" onSubmit={handleSubmit}>
                    <input type="number" className="fadeIn second" name="login" placeholder="Blood Pressure" value={blood_pressure} onChange={recordBp}></input>
                    <input type="number" className="fadeIn second" name="login" placeholder="Blood Sugar" value={blood_glucose} onChange={recordBg}></input>
                    <button type="button" className="fadeIn fourth">Submit</button>
                </form>
                </div>
            </div>
            <Nav />
        </div>
    )
    
}

export default Measurement;