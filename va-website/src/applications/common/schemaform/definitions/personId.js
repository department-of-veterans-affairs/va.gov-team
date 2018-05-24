import _ from 'lodash/fp';

import ssnUI from './ssn';

export function schema(currentSchema) {
  return {
    type: 'object',
    properties: {
      veteranSocialSecurityNumber: currentSchema.definitions.ssn,
      'view:noSSN': {
        type: 'boolean'
      },
      vaFileNumber: currentSchema.definitions.vaFileNumber
    }
  };
}

export function uiSchema(
  prefix = 'veteran',
  noSSN = 'view:veteranId.view:noSSN',
  labelText = 'I don’t have a Social Security number') {
  const fileNumberProp = (prefix === 'veteran') ? 'va' : 'relativeVa';

  return {
    [`${prefix}SocialSecurityNumber`]: _.assign(ssnUI, {
      'ui:required': (formData) => !_.get(noSSN, formData)
    }),
    'view:noSSN': {
      'ui:title': labelText,
      'ui:options': {
        hideOnReview: true
      }
    },
    [`${fileNumberProp}FileNumber`]: {
      'ui:required': (formData) => !!_.get(noSSN, formData),
      'ui:title': 'VA file number',
      'ui:errorMessages': {
        pattern: 'Your VA file number must be between 7 to 9 digits'
      },
      'ui:options': {
        expandUnder: 'view:noSSN'
      }
    }
  };
}
