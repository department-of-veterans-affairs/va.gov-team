/**
 * Clears the current value and if |value| is specified,
 *  enters the |value| in.
 *
 * @param {string} selector The css selector for the element to fill
 * @param {string|number} value The value to fill in the element with
 */
exports.command = function fill(selector, value, callback) {
  this.removeText(selector);
  if (typeof value !== 'undefined') {
    // When callback is passed as undefined, setValue assumes selector is the locating strategy
    if (typeof callback !== 'undefined') {
      this.setValue(selector, value, callback);
    } else {
      this.setValue(selector, value);
    }
  }

  return this;
};
