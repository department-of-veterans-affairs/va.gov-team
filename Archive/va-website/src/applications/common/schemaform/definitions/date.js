import { validateDate } from '../validation';

export default function uiSchema(title = 'Date') {
  return {
    'ui:title': title,
    'ui:widget': 'date',
    'ui:validations': [
      validateDate
    ],
    'ui:errorMessages': {
      pattern: 'Please provide a valid date'
    }
  };
}
