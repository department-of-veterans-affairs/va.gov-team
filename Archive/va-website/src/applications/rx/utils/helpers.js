import moment from 'moment';

import environment from '../../../platform/utilities/environment';
import { glossary } from '../config';

import { apiRequest as commonApiClient } from '../../../platform/utilities/api';

export function formatDate(date, options = {}) {
  const momentDate = moment(date);

  const isValidDate =
    momentDate.isValid() &&
    (!options.validateInPast ||
    momentDate.isSameOrBefore(moment().endOf('day')));

  return isValidDate
    ? momentDate.format(options.format || 'MMM DD, YYYY')
    : 'Not available';
}

export function getModalTerm(term) {
  const allTerms = glossary.Prescription.concat(glossary.Refill);
  const content = allTerms.filter((obj) => {
    return obj.term === term;
  });
  return content;
}

export function apiRequest(resource, optionalSettings = {}, success, error) {
  const baseUrl = `${environment.API_URL}/v0/prescriptions`;
  const url = resource[0] === '/'
    ? [baseUrl, resource].join('')
    : resource;

  return commonApiClient(url, optionalSettings, success, error);
}
