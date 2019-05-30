/**
 * Module for site wide components
 * @module platform/site-wide
 */

import '../monitoring/sentry.js';
import './legacy/menu';  // Used in the footer.
import './usa-banner-toggle';
import './accessible-VCL-modal';
import addMenuListeners from './accessible-menus';
import startUserNavWidget from './user-nav';
import startFeedbackWidget from './feedback';
import startAnnouncementWidget from './announcements';

/**
 * Start up the site-wide components that live on every page, like
 * the login widget, the header menus, and the feedback widget.
 *
 * @param {Store} commonStore The Redux store being used by this application
 */
export default function startSitewideComponents(commonStore) {
  addMenuListeners(document.querySelector('#vetnav-menu'), true);

  // New navigation menu
  if (document.querySelector('#vetnav')) {
    require('./legacy/mega-menu.js');
  }

  // Prevent some browsers from changing the value when scrolling while hovering
  //  over an input[type="number"] with focus.
  document.addEventListener('wheel', (event) => {
    if (event.target.type === 'number' && document.activeElement === event.target) {
      event.preventDefault();
      document.body.scrollTop += event.deltaY; // Chrome, Safari, et al
      document.documentElement.scrollTop += event.deltaY; // Firefox, IE, maybe more
    }
  });

  startUserNavWidget(commonStore);
  startFeedbackWidget(commonStore);
  startAnnouncementWidget(commonStore);
}
