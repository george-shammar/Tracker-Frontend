import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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