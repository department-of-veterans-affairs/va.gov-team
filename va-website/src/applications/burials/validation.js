import moment from 'moment';

export function validateBurialAndDeathDates(errors, page) {
  const { burialDate, deathDate, veteranDateOfBirth } = page;
  if (burialDate && deathDate && moment(burialDate).isBefore(moment(deathDate))) {
    errors.burialDate.addError('Date of burial must be on or after date of death');
  }
  if (deathDate && veteranDateOfBirth && moment(deathDate).isBefore(moment(veteranDateOfBirth))) {
    errors.deathDate.addError('Date of death must be after date of birth');
  }
}
