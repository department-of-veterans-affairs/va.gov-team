import { additionalSourcesUI } from './additionalSources';
import currencyUI from '../../common/schemaform/definitions/currency';

export default {
  'ui:order': [
    'bank',
    'interestBank',
    'ira',
    'stocks',
    'realProperty',
    'additionalSources'
  ],
  bank: currencyUI('Cash/Non-interest bearing accounts'),
  interestBank: currencyUI('Interest bearing accounts'),
  ira: currencyUI('IRAs, KEOGH Plans, etc.'),
  stocks: currencyUI('Stocks, bonds, mutual funds, etc'),
  realProperty: currencyUI('Real Property (not your home, vehicle, furniture, or clothing)'),
  additionalSources: additionalSourcesUI
};
