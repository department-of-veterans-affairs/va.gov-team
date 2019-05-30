/**
 * Polyfills used by all applications
 * @name platform/polyfills
 */

import 'babel-polyfill';

// Basic polyfills.
import Modernizr from 'modernizr';

import './canvas-toBlob';

if (!Modernizr.classlist) {
  require('classlist-polyfill'); // DOM element classList support.
}
if (!Modernizr.dataset) {
  require('dataset');  // dataSet accessor support.
}

// Edge 14's fetch implementation throws TypeMismatchErrors seemingly without
// reason. This is fixed in fetch 15, but we should use the (xhr based) polyfill
// for 14.
// https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8546263/
if (navigator.userAgent.includes('Edge/14')) {
  window.fetch = undefined;
}

// This needs to stay as require because import causes it to be executed before the
// above code
require('whatwg-fetch');

