/**
 * Fills the address form elements.
 *
 * @param {string} baseName The start of the field name for the address elements
 * @param {object} address The address object
 */
exports.command = function fillAddress(baseName, address) {
  this
    .selectDropdown(`${baseName}_country`, address.country)
    .fill(`input[name="${baseName}_street"]`, address.street)
    .fill(`input[name="${baseName}_street2"]`, address.street2)
    .fill(`input[name="${baseName}_city"]`, address.city)
    .selectDropdown(`${baseName}_state`, address.state)
    .fill(`input[name="${baseName}_postalCode"]`, address.postalCode);

  return this;
};
