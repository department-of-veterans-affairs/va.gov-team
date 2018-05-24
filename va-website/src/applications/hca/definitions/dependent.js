import _ from 'lodash/fp';
import fullNameUI from '../../common/schemaform/definitions/fullName';
import currentOrPastDateUI from '../../common/schemaform/definitions/currentOrPastDate';
import ssnUI from '../../common/schemaform/definitions/ssn';
import currencyUI from '../../common/schemaform/definitions/currency';
import { validateDependentDate } from '../validation';

const incomeFields = [
  'grossIncome',
  'netIncome',
  'otherIncome'
];

export const createDependentSchema = (hcaSchema) => {
  const s = _.merge(hcaSchema.definitions.dependent, {
    required: [
      'dependentRelation',
      'socialSecurityNumber',
      'dateOfBirth',
      'becameDependent',
      'dependentEducationExpenses',
      'disabledBefore18',
      'cohabitedLastYear'
    ]
  });

  s.properties = _.omit(incomeFields, s.properties);

  return s;
};

export const createDependentIncomeSchema = (hcaSchema) => {
  const dependent = hcaSchema.definitions.dependent;
  return _.assign(dependent, {
    properties: _.pick(incomeFields, dependent.properties),
    required: incomeFields
  });
};

export const uiSchema = {
  'ui:order': [
    'fullName',
    'dependentRelation',
    'socialSecurityNumber',
    // Put the birth date before dependent date; it’s opposite in the schema
    'dateOfBirth',
    'becameDependent',
    'disabledBefore18',
    'attendedSchoolLastYear',
    'dependentEducationExpenses',
    'cohabitedLastYear',
    'receivedSupportLastYear'
  ],
  fullName: fullNameUI,
  dependentRelation: {
    'ui:title': 'Dependent’s relationship to you?'
  },
  socialSecurityNumber: _.merge(ssnUI, {
    'ui:title': 'Dependent’s Social Security number'
  }),
  dateOfBirth: currentOrPastDateUI('Dependent’s date of birth'),
  becameDependent: _.assign(currentOrPastDateUI('Date they became your dependent?'), {
    'ui:validations': [
      validateDependentDate
    ]
  }),
  disabledBefore18: {
    'ui:title': 'Was your dependent permanently and totally disabled before the age of 18?',
    'ui:widget': 'yesNo'
  },
  attendedSchoolLastYear: {
    'ui:title': 'If your dependent is between 18 and 23 years of age, did they attend school during the last calendar year?',
    'ui:widget': 'yesNo'
  },
  dependentEducationExpenses: currencyUI('Expenses your dependent paid for college, vocational rehabilitation, or training (e.g., tuition, books, materials)'),
  cohabitedLastYear: {
    'ui:title': 'Did your dependent live with you last year?',
    'ui:widget': 'yesNo'
  },
  receivedSupportLastYear: {
    'ui:title': 'If your dependent didn’t live with you last year, did you provide support? (Please count all support contributions even if they weren’t paid in regular and set amounts. Support can include tuition or medical bill payments.)',
    'ui:widget': 'yesNo',
    // TODO: Fix this once the bug mentioned below is fixed
    // Hide by default, only showing after hideIf is run and overrides this
    'ui:hidden': true,
    'ui:options': {
      // Not being invoked until the data is changed...which means this is open
      //  by default
      hideIf: (formData, index) => _.get(`dependents[${index}].cohabitedLastYear`, formData) !== false
    }
  },
};

export const dependentIncomeUiSchema = {
  grossIncome: currencyUI('Gross annual income from employment'),
  netIncome: currencyUI('Net income from farm, ranch, property or business'),
  otherIncome: currencyUI('Other income amount'),
  'ui:options': {
    updateSchema: (formData, schema, ui, index) => {
      const name = _.get(`dependents.[${index}].fullName`, formData);
      if (name) {
        return {
          title: `${name.first} ${name.last} income`
        };
      }

      return schema;
    }
  }
};
