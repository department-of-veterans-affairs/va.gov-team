import EmploymentPeriodView from '../../../edu-benefits/components/EmploymentPeriodView';

const uiSchema = {
  items: {
    postMilitaryJob: {
      'ui:title': 'When did you do this work?',
      'ui:widget': 'yesNo',
      'ui:options': {
        labels: {
          Y: 'Before military service',
          N: 'After military service'
        },
        yesNoReverse: true
      }
    },
    name: {
      'ui:title': 'Main job'
    },
    months: {
      'ui:title': 'Number of months worked'
    },
    licenseOrRating: {
      'ui:title': 'Licenses or rating'
    }
  },
  'ui:options': {
    itemName: 'Employment Period',
    viewField: EmploymentPeriodView,
    hideTitle: true
  }
};

export default uiSchema;
