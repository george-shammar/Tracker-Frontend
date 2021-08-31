import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
// import Nav from './Nav';
import Home from './Home';
import SignIn from './SignIn';

const Routes = () => (
  <BrowserRouter>
    <div className="route">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/App" component={App} />
        <Route exact path="/Home" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;