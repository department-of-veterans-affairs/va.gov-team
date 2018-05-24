import { validateDateRange } from '../validation';
import dateUI from './date';

export default function uiSchema(from = 'From', to = 'To', rangeError = 'To date must be after From date') {
  return {
    'ui:validations': [
      validateDateRange
    ],
    'ui:errorMessages': {
      pattern: rangeError,
    },
    from: dateUI(from),
    to: dateUI(to)
  };
}
