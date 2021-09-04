import React, { useState }from 'react';
import { useDispatch } from 'react-redux';
import { newUser } from '../action/index';
// import {Redirect} from 'react-router-dom';
// import { Link } from 'react-router-dom';
import App from './App';
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
        // return  <Redirect  to="/App" />
        // <Link to="/App"></Link>
    };
  
    return (
    <div className="wrapper fadeInDown">
        <div className="formContent">
        <div className="health">
            <span className="material-icons logo">maps_ugc</span>
            <p>Health<span className="p-subtitle">Track</span></p>
        </div>
        <h3 className="sign-in">Sign In</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" className="fadeIn second" name="login" placeholder="username" value={username} onChange={changeUsername} required />
                <button className="fadeIn fourth" type="submit" name="button" >Log In</button>
            </form>
          
      </div>
    </div>
    ) 
}

export default SignIn;