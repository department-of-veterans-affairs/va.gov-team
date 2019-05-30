import { validateRoutingNumber } from '../validation';

const uiSchema = {
  'ui:order': ['accountType', 'accountNumber', 'routingNumber'],
  accountType: {
    'ui:title': 'Account type',
    'ui:widget': 'radio',
    'ui:options': {
      labels: {
        checking: 'Checking',
        savings: 'Savings'
      }
    }
  },
  accountNumber: {
    'ui:title': 'Account number'
  },
  routingNumber: {
    'ui:title': 'Routing number',
    'ui:validations': [
      validateRoutingNumber
    ],
    'ui:errorMessages': {
      pattern: 'Please enter a valid nine digit routing number'
    }
  }
};

export default uiSchema;
