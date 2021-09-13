import React from 'react';
import { Link } from 'react-router-dom';
import SearchTerm from '../containers/Search';
import '../stylesheets/home.css';
const bloodSugar = 'https://st.depositphotos.com/1008836/1993/i/950/depositphotos_19931429-stock-photo-glass-blood-drop-isolated.jpg'
const bloodPressure = 'https://media.istockphoto.com/vectors/anatomical-heart-isolated-heart-diagnostic-center-sign-human-heart-vector-id1177145926?k=20&m=1177145926&s=612x612&w=0&h=30PszSkc9jmobfif-KVcCaauGUDAWlGspthpmtMsI54=';

const Home = () => {

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
                <h5>Track your patient's health</h5>
                <SearchTerm onSearch={onSearchTermChangeHandler} onClear={onClearSearchTermHandler} />
                <div className="metrics">
                    <p>Date</p>
                    <p>Blood Pressure</p>
                    <p>Blood Glucose</p>
                </div>
            </div>
        </div>
    )
}

export default Home;