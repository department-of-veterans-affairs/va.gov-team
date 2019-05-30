/**
 * Change select value and trigger change event programatically. This
 * is necessary because long select boxes tend to render offscreen,
 * causing Selenium to fail in unexpected ways.
 *
 * @param {string} name The name of the dropdown field (not the whole selector)
 * @param {string} value The value to set the dropdown to
 */
exports.command = function selectDropdown(name, value) {
  const select = `select[name='${name}']`;
  this.execute((clientSelect, clientValue) => {
    /* eslint-disable */
    var evt;
    // IE stinks
    if (navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0) {
      evt = document.createEvent('HTMLEvents');
      evt.initEvent('change', true, false);
    } else {
      evt = new Event('change', { bubbles: true });
    }
    var element = document.querySelector(clientSelect);
    element.value = clientValue;
    element.dispatchEvent(evt);
    return element.value;
    /* eslint-enable */
  },
  [select, value]);

  return this;
};
