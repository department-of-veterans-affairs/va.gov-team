import { validateCurrentOrPastYear } from '../validation';
import * as ReviewWidget from '../review/widgets.jsx';

const uiSchema = {
  'ui:title': 'Year',
  'ui:reviewWidget': ReviewWidget.TextWidget,
  'ui:validations': [
    validateCurrentOrPastYear
  ],
  'ui:errorMessages': {
    type: 'Please provide a valid year'
  },
  'ui:options': {
    widgetClassNames: 'usa-input-medium'
  }
};

export default uiSchema;
