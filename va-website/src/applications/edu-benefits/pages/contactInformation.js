import _ from 'lodash/fp';

import schemaDefinitions from 'vets-json-schema/dist/definitions.json';

import { validateMatch } from '../../common/schemaform/validation';

import {
  preferredContactMethodLabels
} from '../utils/labels';

const {
  preferredContactMethod
} = schemaDefinitions;

import phoneUI from '../../common/schemaform/definitions/phone';
import * as address from '../../common/schemaform/definitions/address';

export default function createContactInformationPage(schema, addressField = 'veteranAddress') {
  const { homePhone, mobilePhone } = schema.properties;

  return {
    title: 'Contact information',
    path: 'personal-information/contact-information',
    initialData: {},
    uiSchema: {
      preferredContactMethod: {
        'ui:title': 'How would you like to be contacted if we have questions about your application?',
        'ui:widget': 'radio',
        'ui:options': {
          labels: preferredContactMethodLabels
        }
      },
      [addressField]: address.uiSchema(),
      'view:otherContactInfo': {
        'ui:title': 'Other contact information',
        'ui:description': 'Please enter as much contact information as possible so we can get in touch with you, if necessary.',
        'ui:validations': [
          validateMatch('email', 'view:confirmEmail')
        ],
        email: {
          'ui:title': 'Email address'
        },
        'view:confirmEmail': {
          'ui:title': 'Re-enter email address',
          'ui:options': {
            hideOnReview: true
          }
        },
        homePhone: _.assign(phoneUI('Primary telephone number'), {
          'ui:required': (form) => form.preferredContactMethod === 'phone'
        }),
        mobilePhone: phoneUI('Secondary telephone number')
      }
    },
    schema: {
      type: 'object',
      definitions: {
        phone: schema.definitions.phone
      },
      properties: {
        preferredContactMethod,
        [addressField]: address.schema(schema, true),
        'view:otherContactInfo': {
          type: 'object',
          required: ['email', 'view:confirmEmail'],
          properties: {
            email: {
              type: 'string',
              format: 'email'
            },
            'view:confirmEmail': {
              type: 'string',
              format: 'email'
            },
            homePhone,
            mobilePhone
          }
        }
      }
    }
  };
}
