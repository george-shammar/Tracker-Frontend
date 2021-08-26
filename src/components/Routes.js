import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';

const Routes = () => (
  <BrowserRouter>
    <div>
      <nav>
        <Nav />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default Routes;