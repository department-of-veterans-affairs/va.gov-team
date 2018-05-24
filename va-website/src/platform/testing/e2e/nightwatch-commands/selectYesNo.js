/**
 * Selects the appropriate option for yesNo widgets.
 *
 * @param {string} fieldName The name of the field without Yes or No
 *                           e.g. root_spouseInfo_divorcePending
 * @param {bool} condition Determines whether to select Yes or No
 */
exports.command = function selectYesNo(fieldName, condition) {
  // Using [id="foo"] for when there are colons in the name
  // I don't know why that's necessary, but it fails using just #
  const target = `input[id="${fieldName}${condition ? 'Yes' : 'No'}"]`;
  if (this.options.desiredCapabilities.browserName === 'internet explorer') {
    this.sendKeys(target, this.Keys.SPACE);
  } else {
    this.click(target);
  }
};
