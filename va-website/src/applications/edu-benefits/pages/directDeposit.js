import _ from 'lodash/fp';

import bankAccountUI from '../../common/schemaform/definitions/bankAccount';

const defaults = {
  required: []
};

export default function createDirectDepositPage(schema, options) {
  const mergedOptions = _.assign(defaults, options);
  const { required } = mergedOptions;
  const { bankAccount } = schema.definitions;

  return {
    title: 'Direct deposit',
    path: 'personal-information/direct-deposit',
    initialData: {},
    uiSchema: {
      'ui:title': 'Direct deposit',
      bankAccount: bankAccountUI,
    },
    schema: {
      type: 'object',
      properties: {
        bankAccount: _.merge(bankAccount, {
          required
        })
      }
    }
  };
}
