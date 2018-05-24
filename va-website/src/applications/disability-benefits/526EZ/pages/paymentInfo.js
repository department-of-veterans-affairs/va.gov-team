import _ from 'lodash';
import React from 'react';

import fullSchema526EZ from 'vets-json-schema/dist/21-526EZ-schema.json';

import ReviewCardField from '../components/ReviewCardField';

export const accountLabels = {
  CHECKING: 'Checking account',
  SAVINGS: 'Savings account',
  NOBANK: 'I don’t have a bank account'
};

const accountTitleLabels = {
  CHECKING: 'Checking Account',
  SAVINGS: 'Savings Account',
  NOBANK: 'No Bank Account'
};

const NOBANK = 'NOBANK';

const paymentInformationViewField = ({ formData }) => {
  const {
    accountType,
    accountNumber,
    routingNumber,
    bankName
  } = formData.directDeposit;
  let accountNumberString;
  let routingNumberString;
  let bankNameString;
  const mask = <span>•••••-</span>;

  if (accountType !== NOBANK) {
    accountNumberString = (
      <p>
        Account number: {mask}
        {accountNumber.slice(5)}
      </p>
    );
    routingNumberString = (
      <p>
        Routing number: {mask}
        {routingNumber.slice(5)}
      </p>
    );
    bankNameString = <p>Bank name: {bankName}</p>;
  }
  return (
    <div>
      <p>
        <strong>{accountTitleLabels[accountType]}</strong>
      </p>
      {accountNumberString}
      {routingNumberString}
      {bankNameString}
    </div>
  );
};

export const uiSchema = {
  'ui:title': 'Payment information',
  'ui:field': ReviewCardField,
  'ui:options': {
    viewComponent: paymentInformationViewField
  },
  directDeposit: {
    accountType: {
      'ui:title':
      'Please tell us where we should deposit your disability payment.',
      'ui:widget': 'radio',
      'ui:options': {
        hideTitle: true,
        labels: accountLabels
      }
    },
    accountNumber: {
      'ui:title': 'Account number',
      'ui:options': {
        hideIf: formData => formData.directDeposit.accountType === NOBANK
      }
    },
    routingNumber: {
      'ui:title': 'Routing number',
      'ui:options': {
        hideIf: formData => formData.directDeposit.accountType === NOBANK
      }
    },
    bankName: {
      'ui:title': 'Bank name',
      'ui:options': {
        hideIf: formData => formData.directDeposit.accountType === NOBANK
      }
    },
    'view:noBank': {
      'ui:description': (<p>The Department of Treasury requires all federal benefit payments be made by electronic funds transfer (EFT), also called direct deposit. If you don’t have a bank account, you must get your payment through Direct Express Debit MasterCard. To request a Direct Express Debit MasterCard you must apply at <a href="https://www.usdirectexpress.com">www.usdirectexpress.com</a> or by telephone at <a href="tel:1-800-333-1795">1-800-333-1795</a>. If you chose not to enroll, you must contact representatives handling waiver requests for the Department of Treasury at 1-888-224-2950. They’ll address any questions or concerns you may have and encourage your participation in EFT.</p>),
      'ui:options': {
        hideIf: formData => formData.directDeposit.accountType !== NOBANK
      }
    },
    'ui:options': {
      hideTitle: true
    }
  }
};

export const schema = {
  type: 'object',
  properties: {
    directDeposit: _.merge(fullSchema526EZ.definitions.directDeposit, {
      type: 'object',
      properties: {
        'view:noBank': {
          type: 'object',
          properties: {}
        }
      }
    })
  }
};

