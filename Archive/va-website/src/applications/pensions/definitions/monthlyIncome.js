import { additionalSourcesUI } from './additionalSources';
import currencyUI from '../../common/schemaform/definitions/currency';

export default {
  'ui:order': [
    'socialSecurity',
    'civilService',
    'railroad',
    'blackLung',
    'serviceRetirement',
    'ssi',
    'additionalSources'
  ],
  socialSecurity: currencyUI('Social Security'),
  civilService: currencyUI('US Civil Service'),
  railroad: currencyUI('US Railroad Retirement'),
  blackLung: currencyUI('Black Lung Benefits'),
  serviceRetirement: currencyUI('Service Retirement'),
  ssi: currencyUI('Supplemental Security Income (SSI) or Public Assistance'),
  additionalSources: additionalSourcesUI
};
