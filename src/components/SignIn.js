import React, { useState }from 'react';
import { useDispatch } from 'react-redux';
import { newUser } from '../action/index';
import { Link } from 'react-router-dom';
import '../stylesheets/SignIn.css';
  
const SignIn = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const changeUsername = (e) => {
        const data = e.target.value;
        setUsername(data);
    };

    const handleSubmit = (e) => {
        const user = { username };
        dispatch(newUser(user));
        setUsername('');
        e.preventDefault();
    };

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