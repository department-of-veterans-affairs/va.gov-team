/**
 * Module for Redux store related startup functions
 * @module platform/startup/store
 * @see module:platform/startup
 */
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import scheduledDowntime from '../monitoring/DowntimeNotification/reducer';
import feedback from '../site-wide/feedback/reducers';
import announcements from '../site-wide/announcements/reducers';
import navigation from '../site-wide/user-nav/reducers';
import login from '../user/authentication/reducers';
import profile from '../user/profile/reducers';

/**
 * Reducer object containing all of the site-wide reducers
 * @type {object}
 */
export const commonReducer = {
  user: combineReducers({ login, profile }),
  navigation,
  feedback,
  scheduledDowntime,
  announcements
};

/**
 * Creates a Redux store and merges the provided reducer with commonReducer. It also
 * sets up the Redux devtools in development and adds redux-thunk as middleware.
 *
 * @param {Object} [appReducer={}] An object with reducer functions as properties
 * @returns {Store} The Redux store with a combined reducer from the commonReducer and
 * appReducer.
 */
export default function createCommonStore(appReducer = {}) {
  const reducer = Object.assign({}, appReducer, commonReducer);
  const useDevTools = __BUILDTYPE__ === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__;

  return createStore(combineReducers(reducer), compose(
    applyMiddleware(thunk), useDevTools ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f));
}

