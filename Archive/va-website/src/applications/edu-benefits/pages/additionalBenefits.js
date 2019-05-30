import _ from 'lodash/fp';

import { civilianBenefitsLabel } from '../utils/labels';

const defaults = {
  fields: [
    'nonVaAssistance',
    'civilianBenefitsAssistance'
  ],
  required: []
};


/**
 * Returns an additionalBenefits page based on the options passed.
 *
 * @param {Object} schema   The full schema for the form
 * @param {Object} options  Options to override the defaults above
 */
export default function additionalBenefits(schema, options) {
  // Use the defaults as necessary, but override with the options given
  const mergedOptions = _.assign(defaults, options);
  const { fields, required } = mergedOptions;

  return {
    path: 'applicant/additional-benefits',
    title: 'Additional Benefits',
    initialData: {},
    uiSchema: {
      'ui:title': 'Additional benefits',
      'ui:order': fields,
      nonVaAssistance: {
        'ui:title': 'Are you getting, or do you expect to get any money from the Armed Forces or public health services for any part of your coursework or training? (Including, but not limited to, Federal Tuition Assistance.)',
        'ui:widget': 'yesNo'
      },
      civilianBenefitsAssistance: {
        'ui:title': civilianBenefitsLabel,
        'ui:widget': 'yesNo'
      },
      civilianBenefitsSource: {
        'ui:title': 'What is the source of these funds?',
        'ui:required': (formData) => formData.civilianBenefitsAssistance,
        'ui:options': {
          expandUnder: 'civilianBenefitsAssistance'
        }
      },
      seniorRotcScholarshipProgram: {
        'ui:title': 'Are you in a senior ROTC scholarship program right now that pays your tuition, fees, books, and supplies? (Covered under Section 2107 of Title 10, U.S. Code)',
        'ui:widget': 'yesNo'
      }
    },
    schema: {
      type: 'object',
      required,
      properties: _.pick(fields, schema.properties)
    }
  };
}
