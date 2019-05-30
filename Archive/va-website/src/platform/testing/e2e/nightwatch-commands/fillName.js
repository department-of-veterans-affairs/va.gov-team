/**
 * Fills the name form elements.
 *
 * @param {string} baseName The start of the field name for the name elements
 * @param {object} name The name object
 */
exports.command = function fillName(baseName, name) {
  this
    .fill(`input[name="${baseName}_first"]`, name.first)
    .fill(`input[name="${baseName}_middle"]`, name.middle)
    .fill(`input[name="${baseName}_last"]`, name.last)
    .selectDropdown(`${baseName}_suffix`, name.suffix);

  return this;
};
