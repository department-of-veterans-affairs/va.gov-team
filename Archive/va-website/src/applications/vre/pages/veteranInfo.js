import _ from 'lodash/fp';

import currentOrPastDateUI from '../../common/schemaform/definitions/currentOrPastDate';
import fullNameUI from '../../common/schemaform/definitions/fullName';
import ssnUI from '../../common/schemaform/definitions/ssn';

export default function createVeteranInfoPage(formSchema, extra) {
  const schema = extra ? extra.schema : {};
  const uiSchema = extra ? extra.uiSchema : {};

  const {
    veteranFullName,
    veteranDateOfBirth,
    veteranSocialSecurityNumber,
    veteranVaFileNumber
  } = formSchema.properties;

  return {
    title: 'Veteran Information',
    path: 'veteran-information',
    uiSchema: _.merge({
      veteranFullName: fullNameUI,
      veteranDateOfBirth: currentOrPastDateUI('Date of birth'),
      veteranSocialSecurityNumber: _.assign(ssnUI, {
        'ui:title': 'Social Security number (must have this or a VA file number)',
        'ui:required': form => !form.veteranVaFileNumber,
      }),
      veteranVaFileNumber: {
        'ui:title': 'VA file number (must have this or a Social Security number)',
        'ui:required': form => !form.veteranSocialSecurityNumber,
        'ui:errorMessages': {
          pattern: 'Your VA file number must be between 7 to 9 digits'
        }
      }
    }, uiSchema),
    schema: {
      type: 'object',
      required: ['veteranDateOfBirth'],
      properties: _.merge({
        veteranFullName,
        veteranDateOfBirth,
        veteranSocialSecurityNumber,
        veteranVaFileNumber,
      }, schema)
    }
  };
}
