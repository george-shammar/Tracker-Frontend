import React from 'react';
import '../stylesheets/home.css';
const bloodSugar = ''
const bloodPressure = 'https://media.istockphoto.com/vectors/anatomical-heart-isolated-heart-diagnostic-center-sign-human-heart-vector-id1177145926?k=20&m=1177145926&s=612x612&w=0&h=30PszSkc9jmobfif-KVcCaauGUDAWlGspthpmtMsI54=';

const Home = () => {
    return (
        <div>
            <p>Add Metrics</p>
            <div className="add-metrics">
                <div className="heart">
                    <img className="heart-img" src={bloodPressure} />
                    <p>Blood Pressure</p>
                </div>
                <div  className="heart">
                <img className="heart-img" src={bloodSugar} />
                <p>Blood Glucose</p>
                </div>
            </div>
        </div>
    )
}

export default Home;