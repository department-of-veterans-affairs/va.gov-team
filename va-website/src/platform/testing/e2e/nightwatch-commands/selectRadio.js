/**
 * Selects the appropriate option for yesNo widgets.
 *
 * @param {string} fieldName The name of the field without Yes or No
 *                            e.g. root_spouseInfo_divorcePending
 * @param {bool} value       The value to select
 */
exports.command = function selectRadio(fieldName, value) {
  const target = `input[name^="${fieldName}"][value="${value}"]`;
  if (this.options.desiredCapabilities.browserName === 'internet explorer') {
    this.sendKeys(target, this.Keys.SPACE);
  } else {
    this.click(target);
  }
};
