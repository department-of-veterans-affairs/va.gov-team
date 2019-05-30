import { validateDateRange } from '../validation';
import monthYearUI from './monthYear';

export default function uiSchema(from = 'From', to = 'To', rangeError = 'To date must be after From date') {
  return {
    'ui:validations': [
      validateDateRange
    ],
    'ui:errorMessages': {
      pattern: rangeError,
    },
    from: monthYearUI(from),
    to: monthYearUI(to)
  };
}
