import '../../platform/polyfills';
import './sass/messaging.scss';

import React from 'react';
import { createHistory } from 'history';
import { Router, useRouterHistory } from 'react-router';
import { Provider } from 'react-redux';

import startReactApp from '../../platform/startup/react';
import createCommonStore from '../../platform/startup/store';
import startSitewideComponents from '../../platform/site-wide';

import routes from './routes.jsx';
import reducer from './reducers';
import manifest from './manifest.json';
import { updateRoute } from './actions';

const store = createCommonStore(reducer);

startSitewideComponents(store);

const history = useRouterHistory(createHistory)({
  basename: manifest.rootUrl
});

history.listen((location) => store.dispatch(updateRoute(location)));

startReactApp(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>
);
