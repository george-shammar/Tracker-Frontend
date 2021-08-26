import React from 'react';
import '../stylesheets/SignIn.css';

const SignIn = () => {
    return (
            <div className="wrapper fadeInDown">
                <div className="formContent">
                <p><span className="material-icons logo">maps_ugc</span>health <span className="p-subtitle">Track</span></p>
                <form className="form">
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="username"></input>
                    <input type="submit" className="fadeIn fourth" value="Log In"></input>
                </form>
                </div>
            </div>
    ) 
}

export default SignIn;