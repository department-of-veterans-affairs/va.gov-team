import _ from 'lodash/fp';

import * as educationProgram from '../definitions/educationProgram';
import dateUI from '../../common/schemaform/definitions/date';
import { civilianBenefitsLabel } from '../utils/labels';


// Exported like this so we can share the fields between the formConfig and the tests.
export const schoolSelectionOptionsFor = {
  '1990n': {
    fields: [
      'educationProgram',
      'educationObjective'
    ]
  },
  '5490': { // eslint-disable-line
    fields: [
      'educationProgram',
      'educationObjective',
      'educationStartDate',
      'restorativeTraining',
      'vocationalTraining',
      'trainingState',
      'educationalCounseling'
    ],
    required: ['educationType']
  },
  '1990e': {
    fields: [
      'educationProgram',
      'educationObjective'
    ],
    required: ['educationType']
  }
};

export default function createSchoolSelectionPage(schema, options) {
  const { fields, required, title } = options;

  const possibleUISchemaFields = {
    educationProgram: educationProgram.uiSchema,
    educationObjective: {
      'ui:title': 'Education or career goal (for example, “Get a bachelor’s degree in criminal justice” or “Get an HVAC technician certificate” or “Become a police officer.”)',
      'ui:widget': 'textarea'
    },
    nonVaAssistance: {
      'ui:title': 'If you are on Active Duty only: are you getting, or do you expect to get any money (including, but not limited to, federal tuition assistance) from the Armed Forces or public health services for any part of your coursework or training?',
      'ui:widget': 'yesNo'
    },
    educationStartDate: dateUI('The date your training began or will begin'),
    restorativeTraining: {
      'ui:title': ' Are you looking for Special Restorative Training because of a disability? Special Restorative Training could include speech and voice therapy, language retraining, lip reading, or Braille reading and writing.',
      'ui:widget': 'yesNo'
    },
    vocationalTraining: {
      'ui:title': 'Are you looking for Special Vocational Training or specialized courses because a disability prevents you from pursuing an education program?',
      'ui:widget': 'yesNo'
    },
    trainingState: {
      'ui:title': 'In what state do you plan on living while taking courses or training?'
    },
    educationalCounseling: {
      'ui:title': 'Would you like to get vocational and educational counseling?',
      'ui:widget': 'yesNo'
    },
    civilianBenefitsAssistance: {
      'ui:title': civilianBenefitsLabel,
      'ui:widget': 'yesNo'
    },
    currentlyActiveDuty: {
      nonVaAssistance: {
        'ui:title': 'Are you getting, or do you expect to get any money (including, but not limited to, federal tuition assistance) from the Armed Forces or public health services for any part of your coursework or training?',
        'ui:widget': 'yesNo',
        'ui:options': {
          hideIf: formData => _.get('currentlyActiveDuty.yes', formData) === true
        }
      }
    }
  };
  const pickFields = _.pick(fields);

  const schemaProperties = pickFields(schema.properties);

  if (schemaProperties.currentlyActiveDuty) {
    schemaProperties.currentlyActiveDuty = {
      type: 'object',
      properties: {
        nonVaAssistance: schema.definitions.currentlyActiveDuty.properties.nonVaAssistance
      }
    };
  }

  // educationProgram.schema is a function, so pull out the schema
  if (schemaProperties.educationProgram) {
    schemaProperties.educationProgram =
      educationProgram.schema(
        schema,
        required
      );
  }

  const uiSchema = pickFields(possibleUISchemaFields);
  uiSchema['ui:order'] = fields;
  if (title) {
    uiSchema['ui:title'] = title;
  }

  return {
    title: title || 'School selection',
    path: 'school-selection',
    uiSchema,
    schema: {
      definitions: {
        date: schema.definitions.date,
        educationType: schema.definitions.educationType,
        civilianBenefitsAssistance: schema.properties.civilianBenefitsAssistance
      },
      type: 'object',
      properties: schemaProperties
    }
  };
}
