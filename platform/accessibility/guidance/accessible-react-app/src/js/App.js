import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Routes from './routing/Routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const history = createBrowserHistory();

    return (
      <Router history={history}>
        <Routes />
      </Router>
    );
  }
}

export default App;
