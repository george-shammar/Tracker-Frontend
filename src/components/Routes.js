import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import SignIn from './SignIn';
import Measurement from './Measurement';

const Routes = () => (
  <BrowserRouter>
    <div className="route">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/App" component={App} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Measurement" component={Measurement} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;
