import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import SignIn from './SignIn';

const Routes = () => (
  <BrowserRouter>
    <div>
      <nav>
        <Nav />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign-in" component={SignIn} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;