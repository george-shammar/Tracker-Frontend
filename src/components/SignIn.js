import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/SignIn.css';
  
const SignIn = () => {
    return (
            <div className="wrapper fadeInDown">
                <div className="formContent">
                <div className="health">
                    <span className="material-icons logo">maps_ugc</span>
                    <p>Health<span className="p-subtitle">Track</span></p>
                </div>
                <h3 className="sign-in">Sign In</h3>
                <div className="form">
                    <input type="text" className="fadeIn second" name="login" placeholder="username"></input>
                    <button type="button" className="fadeIn fourth"><Link to="/App">Log In</Link></button>
                </div>
                </div>
            </div>
    ) 
}

export default SignIn;