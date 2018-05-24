export function validateYearRange(errors, { yearStarted, yearLeft }) {
  if (yearStarted && yearLeft && yearLeft < yearStarted) {
    errors.yearLeft.addError('Please enter a year that is the same as or after the year you started');
  }
}
