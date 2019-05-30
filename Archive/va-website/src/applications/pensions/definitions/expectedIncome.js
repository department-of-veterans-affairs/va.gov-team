import { additionalSourcesUI } from './additionalSources';
import currencyUI from '../../common/schemaform/definitions/currency';

export default {
  'ui:order': [
    'salary',
    'interest',
    'additionalSources'
  ],
  salary: currencyUI('Gross wages and salary'),
  interest: currencyUI('Total dividends and interest'),
  additionalSources: additionalSourcesUI
};
