/**
 * Fills in a date.
 *
 * @param {String} fieldName The name the field without the Month, Day, or Year
 *                           e.g. root_spouseInfo_remarriageDate
 * @param {String} dateString The date as a string
 *                            e.g. 1990-1-28
 */
exports.command = function fillDate(fieldName, dateString) {
  const date = dateString.split('-');
  this
    .selectDropdown(`${fieldName}Month`, parseInt(date[1], 10).toString())
    .selectDropdown(`${fieldName}Day`, parseInt(date[2], 10).toString())
    .fill(`input[name="${fieldName}Year"]`, parseInt(date[0], 10).toString());

  return this;
};
