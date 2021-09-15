import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Tracker from './Tracker';
import {  useSelector, useDispatch } from 'react-redux';
import { loadData, selectFilteredTrackers } from '../action/index';
import '../stylesheets/home.css';
const bloodSugar = 'https://st.depositphotos.com/1008836/1993/i/950/depositphotos_19931429-stock-photo-glass-blood-drop-isolated.jpg'
const bloodPressure = 'https://media.istockphoto.com/vectors/anatomical-heart-isolated-heart-diagnostic-center-sign-human-heart-vector-id1177145926?k=20&m=1177145926&s=612x612&w=0&h=30PszSkc9jmobfif-KVcCaauGUDAWlGspthpmtMsI54=';

const Home = () => {
  const allTrackers = useSelector(selectFilteredTrackers);
    const dispatch = useDispatch();

    const onFirstRender = () => {
      dispatch(loadData());
    };

    useEffect(onFirstRender, []);
    
    return (
        <div className="home">
            <p>Add Metrics</p>
            <div className="add-metrics">
                <div className="heart">
                    <p><img className="heart-img" src={bloodPressure} alt=''/><Link to="/Measurement">Blood Pressure</Link></p>
                </div>
                <div  className="heart">
                    <p><img className="heart-img" src={bloodSugar} alt=''/><Link to="/Measurement">Blood Glucose</Link></p>
                </div>
            </div>

            <hr />
            <div>
                <h5>Your health track</h5>
                {allTrackers > 0 ? (
                  
                <div>
                   {allTrackers.data.map((tracker) => (
                     <Tracker tracker={tracker} key={tracker.id} />
                    ))}
         
                </div>
                
                ) : (
                <p> Loading data...</p>
              )} 
            </div>
            
        </div>
    )
}

export default Home;