/**
 * Focus on the element specified in `selector`.
 *
 * @param {string} selector  CSS selector pointing to the element to focus on
 */
exports.command = function focusOn(selector) {
  this.execute((sel) => {
    document.querySelector(sel).focus();
  }, [selector]);

  return this;
};

