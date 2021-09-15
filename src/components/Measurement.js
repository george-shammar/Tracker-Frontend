import React, { useState }from 'react';
import { useDispatch } from 'react-redux';
import Header from './Header';
import Nav from './Nav';
import '../stylesheets/measurement.css';
import { newTracker } from '../action/index';

const Measurement = () => {
    const [blood_pressure, setBloodPressure] = useState();
    const [blood_glucose, setBloodGlucose] = useState();
    const [tracker, setTracker] = useState({});
    const dispatch = useDispatch();

    const recordBp = (e) => {
        const data = e.target.value;
        setBloodPressure(data);
        return data;
    };

    const recordBg = (e) => {
        const data = e.target.value;
        setBloodGlucose(data);
        return data;
    };

    const handleSubmit = (e) => {
        const bp = recordBp(e);
        const bg = recordBg(e);
        const user_id = 1;
        dispatch(newTracker(bp, bg, user_id));
        setTracker({});
        e.preventDefault();
        console.log("submit");
    }

    return (
        <div>
            <Header />
            <div className="wrapper fadeInDown">
            <p>Record your health metrics</p>
                <div className="formContent">
                <form className="form">
                    <input type="number" className="fadeIn second" name="login" placeholder="Blood Pressure" value={blood_pressure} onChange={recordBp}></input>
                    <input type="number" className="fadeIn second" name="login" placeholder="Blood Sugar" value={blood_glucose} onChange={recordBg}></input>
                    <button type="button" className="fadeIn fourth" onClick={handleSubmit}>Submit</button>
                </form>
                </div>
            </div>
            <Nav />
        </div>
    )
    
}

export default Measurement;