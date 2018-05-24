/**
 * An alias for window.dataLayer.push made available under the window so that it is accessible in content files.
 * @module module:record-event
 * @see https://developers.google.com/tag-manager/devguide
 * @see module:platform/monitoring/record-event
 * @param {object} data - The event data that will be sent to GA.
 */
window.dataLayer = [] || window.dataLayer;
window.recordEvent = function(data) {
  return window.dataLayer.push(data);
}
