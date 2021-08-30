import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import SignIn from './SignIn';

const Routes = () => (
  <BrowserRouter>
    <div className="route">
      <nav>
        <Nav />
      </nav>
      <Switch>
        {/* <Route exact path="/" component={SignIn} /> */}
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;