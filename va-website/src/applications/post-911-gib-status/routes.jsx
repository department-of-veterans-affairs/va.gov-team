import React from 'react';
import { Route, IndexRoute } from 'react-router';

import PrintPage from './containers/PrintPage';
import StatusPage from './containers/StatusPage';
import IntroPage from './containers/IntroPage';
import Post911GIBStatusApp from './containers/Post911GIBStatusApp';

const routes = (
  <Route path="/">
    <IndexRoute key="/" component={IntroPage}/>
    <Route
      component={Post911GIBStatusApp}
      key="/main">
      <Route
        component={StatusPage}
        key="/status"
        path="/status"/>
      <Route
        component={PrintPage}
        key="/print"
        path="/print"/>
    </Route>
  </Route>
);

export default routes;
