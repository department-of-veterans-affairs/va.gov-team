/**
 * Checks a checkbox
 *
 * @param {string} selector The css selector for the checkbox to fill
 */
exports.command = function fillCheckbox(selector) {
  this.sendKeys(selector, this.Keys.SPACE);
};
