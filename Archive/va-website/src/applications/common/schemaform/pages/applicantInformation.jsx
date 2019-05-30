import _ from 'lodash/fp';
import applicantDescription from '../components/ApplicantDescription';

import currentOrPastDateUI from '../definitions/currentOrPastDate';
import fullNameUI from '../definitions/fullName';

import { relationshipLabels, genderLabels } from '../../../../platform/static-data/labels';
import * as personId from '../definitions/personId';


const defaults = (prefix) => {
  return {
    fields: [
      `${prefix}FullName`,
      `${prefix}SocialSecurityNumber`,
      'view:noSSN',
      `${prefix}DateOfBirth`,
      'gender',
      'relationship'
    ],
    required: [
      `${prefix}FullName`,
      `${prefix}DateOfBirth`,
      'relationship'
    ],
    labels: {},
    isVeteran: false
  };
};


/**
 * Returns an applicantInformation page based on the options passed.
 *
 * @param {Object} schema   The full schema for the form
 * @param {Object} options  Options to override the defaults above
 */
export default function applicantInformation(schema, options) {
  // Use the defaults as necessary, but override with the options given
  const prefix = (options && options.isVeteran) ? 'veteran' : 'relative';
  const mergedOptions = _.assign(defaults(prefix), options);
  const { fields, required, labels } = mergedOptions;

  const possibleProperties = _.assign(schema.properties, {
    'view:noSSN': {
      type: 'boolean'
    }
  });

  return {
    path: 'applicant/information',
    title: 'Applicant information',
    initialData: {},
    uiSchema: _.assign({
      'ui:order': fields,
      'ui:description': applicantDescription,
      [`${prefix}FullName`]: fullNameUI,
      [`${prefix}DateOfBirth`]: _.assign(currentOrPastDateUI('Date of birth'),
        {
          'ui:errorMessages': {
            pattern: 'Please provide a valid date',
            futureDate: 'Please provide a valid date'
          }
        }
      ),
      gender: {
        'ui:widget': 'radio',
        'ui:title': 'Gender',
        'ui:options': {
          labels: labels.gender || genderLabels
        }
      },
      relationship: {
        'ui:widget': 'radio',
        'ui:title': 'What’s your relationship to the Servicemember whose benefit is being transferred to you?',
        'ui:options': {
          labels: labels.relationship || relationshipLabels
        }
      }
    }, personId.uiSchema(prefix, 'view:noSSN')),
    schema: {
      type: 'object',
      definitions: _.pick([
        'fullName',
        'relationship',
        'ssn',
        'gender',
        'date',
        'vaFileNumber'
      ], schema.definitions),
      required,
      properties: _.pick(fields, possibleProperties)
    }
  };
}
