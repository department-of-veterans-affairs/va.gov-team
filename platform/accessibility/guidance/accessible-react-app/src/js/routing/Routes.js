import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Awards from '../pages/Awards';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => <Home title="Welcome to AnyCorp" />}
    />
    <Route
      exact
      path="/about"
      render={() => <About title="Learn About AnyCorp" />}
    />
    <Route
      exact
      path="/awards"
      render={() => <Awards title="AnyCorp Celebrates the Wins" />}
    />
  </Switch>
);

export default hot(Routes);
