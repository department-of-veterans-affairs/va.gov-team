/**
 * This application creates a widget for notifying users of new features on Vets.gov
 *
 * @module platform/site-wide/announcement
 */

import './sass/style.scss';

import React from 'react';
import { Provider } from 'react-redux';

import startReactApp from '../../startup/react';
import Announcement from './containers/Announcement';

/**
 * Sets up the Announcement widget with the given store at announcement-root
 *
 * @param {Redux.Store} store The common store used on the site
 */
export default function startAnnouncement(store) {
  const annoucementRoot = document.getElementById('announcement-root');

  startReactApp((
    <Provider store={store}>
      <Announcement/>
    </Provider>
  ), annoucementRoot);
}
