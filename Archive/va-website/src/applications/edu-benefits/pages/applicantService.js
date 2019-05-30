import _ from 'lodash/fp';

import * as toursOfDuty from '../definitions/toursOfDuty.jsx';

/**
 * Returns the applicantService page. This is for dependent applicants.
 *
 * Note: This is a function only to keep it consistent with the other pages, not
 *  because it really needs to be.
 */
export default function applicantServicePage(currentSchema) {
  return {
    title: 'Applicant service',
    path: 'applicant/service',
    initialData: {
    },
    uiSchema: {
      'ui:title': 'Applicant service',
      'view:applicantServed': {
        'ui:title': 'Have you ever served on active duty in the armed services?',
        'ui:widget': 'yesNo'
      },
      toursOfDuty: _.merge(toursOfDuty.uiSchema, {
        'ui:options': {
          expandUnder: 'view:applicantServed'
        },
        'ui:required': form => _.get('view:applicantServed', form),
        items: {
          serviceStatus: { 'ui:title': 'Type of separation or discharge' }
        }
      })
    },
    schema: {
      type: 'object',
      // If answered 'Yes' without entering information, it’s the same as
      //  answering 'No' as far as the back end is concerned.
      required: ['view:applicantServed'],
      properties: {
        'view:applicantServed': {
          type: 'boolean'
        },
        toursOfDuty: toursOfDuty.schema(currentSchema, {
          fields: [
            'serviceBranch',
            'dateRange',
            'serviceStatus'
          ],
          required: ['serviceBranch', 'dateRange.from']
        })
      }
    }
  };
}
