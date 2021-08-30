import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Nav from './Nav';
import SignIn from './SignIn';

const Routes = () => (
  <BrowserRouter>
    <div className="route">
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/App" component={App} />
      </Switch>
      <nav>
        <Nav />
      </nav>
    </div>
  </BrowserRouter>

);

export default Routes;