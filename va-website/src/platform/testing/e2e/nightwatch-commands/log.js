/**
 * Logs a message to the console for debugging purposes. This is useful for
 *  logging as the browser is running through the test due to the way nightwatch
 *  runs all the code beforehand.
 *
 * @param {string} [message=''] The message you want to log to the console
 */
exports.command = function log(message = '') {
  console.log(message); // eslint-disable-line no-console

  // Needs to call some nightwatch function anyhow to queue this
  // http://nightwatchjs.org/guide/#extending
  this.perform(() => {});

  return this;
};
