import yearUI from '../../common/schemaform/definitions/year';
import currencyUI from '../../common/schemaform/definitions/currency';
import ScholarshipPeriodField from '../components/ScholarshipPeriodField';

export default {
  'ui:title': 'ROTC scholarships',
  'ui:options': {
    itemName: 'Scholarship Period',
    viewField: ScholarshipPeriodField
  },
  items: {
    year: yearUI,
    amount: currencyUI('Scholarship amount')
  }
};
