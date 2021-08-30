import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from './Home';
// import Nav from './Nav';
import App from './App';
import SignIn from './SignIn';

const Routes = () => (
  <BrowserRouter>
    <div className="route">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/App" component={App} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;