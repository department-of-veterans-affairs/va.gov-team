/**
 * Module for functions related to starting up and application
 * @module platform/startup
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router, useRouterHistory, browserHistory } from 'react-router';
import { createHistory } from 'history';

import createCommonStore from './store';
import startSitewideComponents from '../site-wide';
import startReactApp from './react';

/**
 * Starts an application in the default element for standalone React
 * applications. It also sets up the common store, starts the site-wide
 * components (like the header menus and login widget), and wraps the provided
 * routes in the Redux and React Router boilerplate common to most applications.
 *
 * @param {object} appInfo The UI and business logic of your React application 
 * @param {Route|array<Route>} appInfo.routes The routes for the application
 * @param {ReactElement} appInfo.component A React element to render. Only used if routes
 * is not passed
 * @param {object} appInfo.reducer An object containing reducer functions. Will have
 * combineReducers run on it after being merged with the common, cross-site reducer.
 * @param {string} appInfo.url The base url for the React application
 */
export default function startApp({ routes, component, reducer, url }) {
  const store = createCommonStore(reducer);

  let history = browserHistory;
  if (url) {
    if (url.endsWith('/')) {
      throw new Error('Root urls should not end with a slash. Check your manifest.json file and application entry file.');
    }
    history = useRouterHistory(createHistory)({
      basename: url
    });
  }

  startSitewideComponents(store);

  let content = component;
  if (routes) {
    content = (
      <Router history={history}>
        {routes}
      </Router>
    );
  }

  startReactApp(
    <Provider store={store}>
      {content}
    </Provider>
  );
}
