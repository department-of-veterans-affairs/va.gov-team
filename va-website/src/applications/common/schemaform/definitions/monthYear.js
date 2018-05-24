import { validateMonthYear } from '../validation';

export default function uiSchema(title = 'Date') {
  return {
    'ui:title': title,
    'ui:widget': 'date',
    'ui:options': {
      monthYear: true
    },
    'ui:validations': [
      validateMonthYear
    ],
    'ui:errorMessages': {
      pattern: 'Please provide a valid date'
    }
  };
}
