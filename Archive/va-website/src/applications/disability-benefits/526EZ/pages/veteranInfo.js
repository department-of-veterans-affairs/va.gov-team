import { merge } from 'lodash/fp';

import fullSchema526EZ from 'vets-json-schema/dist/21-526EZ-schema.json';

import currentOrPastDateUI from '../../../common/schemaform/definitions/currentOrPastDate';
import fullNameUI from '../../../common/schemaform/definitions/fullName';
import ssnUI from '../../../common/schemaform/definitions/ssn';
import { genderLabels } from '../../../../platform/static-data/labels';

import ReviewCardField from '../components/ReviewCardField';

import {
  veteranInformationViewField,
  VAFileNumberDescription
} from '../helpers';

export const uiSchema = {
  'ui:field': ReviewCardField,
  'ui:title': 'Veteran information',
  'ui:options': {
    viewComponent: veteranInformationViewField
  },
  fullName: fullNameUI,
  socialSecurityNumber: merge(ssnUI, {
    'ui:title': 'Social Security number (must have this or a VA file number)',
    'ui:required': form => !form.vaFileNumber
  }),
  vaFileNumber: {
    'ui:title': 'VA file number (must have this or a Social Security number)',
    'ui:required': form => !form.socialSecurityNumber,
    'ui:help': VAFileNumberDescription,
    'ui:errorMessages': {
      pattern: 'Your VA file number must be between 7 to 9 digits'
    }
  },
  dateOfBirth: currentOrPastDateUI('Date of birth'),
  gender: {
    'ui:title': 'Gender',
    'ui:options': {
      labels: genderLabels
    }
  }
};

export const schema = {
  type: 'object',
  required: ['fullName', 'gender', 'dateOfBirth'],
  properties: {
    fullName: fullSchema526EZ.definitions.fullName,
    socialSecurityNumber: {
      type: 'string'
    },
    vaFileNumber: {
      type: 'string',
      pattern: '^[cC]{0,1}\\d{7,9}$'
    },
    gender: {
      type: 'string',
      'enum': ['F', 'M']
    },
    dateOfBirth: fullSchema526EZ.definitions.date
  }
};

