/**
 * Clears a value in the element at the given selector
 *
 * @param {string} selector The css selector for the element to clear
 * @param {function} callback Function called after clearing is finished
 */
exports.command = function clearElement(selector, callback) {
  this.execute((sel) => {
    document.querySelector(sel).value = '';
  }, [selector], callback);
  return this;
};
