/**
 * Checks if the given element is focused on the page.
 *
 * ```
 *    this.demoTest = function (client) {
 *      client.checkActiveElement(".should_be_focused", callback);
 *    };
 * ```
 *
 * @method checkActiveElement
 * @param {string} selector The selector (CSS / Xpath) used to locate the element.
 * @param {function} [callback] Optional callback function to be called when the command finishes.
 * @api commands
 */
exports.command = function checkActiveElement(selector, callback) {
  return this.execute((sel) => {
    return document.querySelector(sel) === document.activeElement;
  }, [selector], callback);
};
