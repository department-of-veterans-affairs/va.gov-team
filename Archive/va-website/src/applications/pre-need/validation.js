import moment from 'moment';

export function validateSponsorDeathDate(errors, { isDeceased, dateOfBirth, dateOfDeath }) {
  if (dateOfBirth && isDeceased === 'yes' && dateOfDeath && moment(dateOfDeath).isSameOrBefore(moment(dateOfBirth))) {
    errors.dateOfDeath.addError('Date of death must be after date of birth');
  }
}
