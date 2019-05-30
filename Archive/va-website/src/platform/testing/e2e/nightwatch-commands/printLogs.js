/**
 * Outputs to the console all the console.log()s called from the browser since
 *  the last client.printLogs() was called.
 *
 * NOTE: This only works from log level WARNING and above right now. This has to
 *  do with the selenium log level, methinks, and I'm not sure how to change that.
 *  To "log" from within the browser, use console.warn() for now.
 *  Also, this doesn't work with console.warn('foo:', foo). To output a variable,
 *  be sure to include it in a string template: console.warn(`foo: ${JSON.stringify(foo)}`)
 *  It's obnoxious, but that's the only way I've found that works well.
 *
 * @param {String} level     The level of logs to print. Note: This can cause
 *                           some logs to be skipped. For all log levels, See
 *                           https://github.com/SeleniumHQ/selenium/wiki/Logging#log-levels
 *                           If no level is provided, all levels are output.
 * @param {bool}   [printAll=false]  Prints all the logs from 0 on. In case some logs
 *                           got skipped because of log level specificity.
 */
exports.command = function printLogs(level, printAll = false) {
  if (!this.nextLogIndex) {
    this.nextLogIndex = 0;
  }

  // Print a list of all the entries the client has logged.
  this.getLog('browser', (logList) => {
    if (logList.length > this.nextLogIndex) {
      // Print only the new entries if printAll isn't specified
      logList.slice(printAll ? 0 : this.nextLogIndex).forEach(message => {
        if (!level || message.level === level.toUpperCase()) {
          console.log(`[${message.level}] Browser logged at ${message.timestamp}:`, message.message); // eslint-disable-line no-console
        }
      });

      // Make sure we start at the next new line.
      this.nextLogIndex = logList.length;
    }
  });

  return this;
};
