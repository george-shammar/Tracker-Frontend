import React from 'react';
import '../stylesheets/SignIn.css';

const SignIn = () => {
    return (
            <div className="wrapper fadeInDown">
                <div className="formContent">
                <p><span className="material-icons logo">maps_ugc</span>health <span className="p-subtitle">Track</span></p>
                <div className="form">
                    <input type="text" className="fadeIn second" name="login" placeholder="username"></input>
                    <button type="button" className="fadeIn fourth">Log In</button>
                </div>
                </div>
            </div>
    ) 
}

export default SignIn;