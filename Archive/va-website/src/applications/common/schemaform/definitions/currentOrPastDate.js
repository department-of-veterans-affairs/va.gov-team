import { validateCurrentOrPastDate } from '../validation';

export default function uiSchema(title = 'Date') {
  return {
    'ui:title': title,
    'ui:widget': 'date',
    'ui:validations': [
      validateCurrentOrPastDate
    ],
    'ui:errorMessages': {
      pattern: 'Please provide a valid current or past date'
    }
  };
}
