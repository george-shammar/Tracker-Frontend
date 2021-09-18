import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import '../stylesheets/measurement.css';
import { newTracker } from '../action/index';

/* eslint-disable */
const Measurement = () => {
  const [blood_pressure, setBloodPressure] = useState();
  const [blood_glucose, setBloodGlucose] = useState();
  const [tracker, setTracker] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const recordBp = (e) => {
    const data = e.target.value;
    setBloodPressure(data);
  };

  const recordBg = (e) => {
    const data = e.target.value;
    setBloodGlucose(data);
  };

  const handleSubmit = (e) => {
    const bpp = document.getElementById('bp').value;
    const bgg = document.getElementById('bg').value;
    const user_id = 3;
    dispatch(newTracker(bpp, bgg, user_id));
    setTracker({});
    e.preventDefault();
    history.push('/App');
  };

  return (
    <div>
      <Header />
      <div className="wrapper fadeInDown">
        <p>Record your health metrics</p>
        <div className="formContent">
          <form className="form">
            <input type="number" id="bp" className="fadeIn second" name="login" placeholder="Blood Pressure" onChange={recordBp} />
            <input type="number" id="bg" className="fadeIn second" name="login" placeholder="Blood Sugar" onChange={recordBg} />
            <button type="button" className="fadeIn fourth" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Measurement;
