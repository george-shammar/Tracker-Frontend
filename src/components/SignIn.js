import React from 'react';
import '../stylesheets/SignIn.css';

const SignIn = () => {
    return (
        
            <div className="wrapper fadeInDown">
                <div id="formContent">
                <h2 className="active"> Sign In </h2>
                <h2 class="inactive underlineHover">Sign Up </h2>
                <form>
                    <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"></input>
                    <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"></input>
                    <input type="submit" class="fadeIn fourth" value="Log In"></input>
                </form>
                </div>
                <div id="formFooter">
                    <a class="underlineHover" href="#">Forgot Password?</a>
                </div>
            </div>
        
    )
}

export default SignIn;