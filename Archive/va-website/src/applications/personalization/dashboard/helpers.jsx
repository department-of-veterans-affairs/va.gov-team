import React from 'react';
import Raven from 'raven-js';

export const formBenefits = {
  '21P-527EZ': 'Veterans pension benefits',
  '21P-530': 'burial benefits',
  '1010ez': 'health care',
  '22-1990': 'education benefits',
  '22-1990E': 'education benefits',
  '22-1990N': 'education benefits',
  '22-1995': 'education benefits',
  '22-5490': 'education benefits',
  '22-5495': 'education benefits',
  '40-10007': 'pre-need determination of eligibility in a VA national cemetery'
};

export const formTitles = Object.keys(formBenefits).reduce((titles, key) => {
  let formNumber;
  if (key === '40-10007') {
    formNumber = '';
  } else if (key === '1010ez') {
    formNumber = ' (10-10EZ)';
  } else {
    formNumber = ` (${key})`;
  }
  const formTitle = `${formBenefits[key]}${formNumber}`;
  titles[key] = formTitle; // eslint-disable-line no-param-reassign
  return titles;
}, {});

export const formLinks = {
  '21P-527EZ': '/pension/application/527EZ/',
  '21P-530': '/burials-and-memorials/application/530/',
  '1010ez': '/health-care/apply/application/',
  '22-1990': '/education/apply-for-education-benefits/application/1990/',
  '22-1990E': '/education/apply-for-education-benefits/application/1990E/',
  '22-1990N': '/education/apply-for-education-benefits/application/1990N/',
  '22-1995': '/education/apply-for-education-benefits/application/1995/',
  '22-5490': '/education/apply-for-education-benefits/application/5490/',
  '22-5495': '/education/apply-for-education-benefits/application/5495/',
  '40-10007': '/burials-and-memorials/pre-need/form-10007-apply-for-eligibility/'
};

export const trackingPrefixes = {
  '21P-527EZ': 'pensions-527EZ-',
  '21P-530': 'burials-530-',
  '1010ez': 'hca-',
  '22-1990': 'edu-',
  '22-1990E': 'edu-1990e-',
  '22-1990N': 'edu-1990n-',
  '22-1995': 'edu-1995-',
  '22-5490': 'edu-5490-',
  '22-5495': 'edu-5495-',
  '40-10007': 'preneed-'
};

export const sipEnabledForms = new Set([
  '1010ez',
  '21P-527EZ',
  '21P-530',
  '22-1990',
  '22-1990E',
  '22-1990N',
  '22-1995',
  '22-5490',
  '22-5495',
  '40-10007'
]);

export function isSIPEnabledForm(savedForm) {
  const formNumber = savedForm.form;
  if (!formTitles[formNumber] || !formLinks[formNumber]) {
    Raven.captureMessage('vets_sip_list_item_missing_info');
    return false;
  }
  if (!sipEnabledForms.has(formNumber)) {
    throw new Error(`Could not find form ${trackingPrefixes[formNumber]} in list of sipEnabledForms`);
  }
  return true;
}

export const disabledForms = {
  '21P-527EZ': <div><span className="error">We’re sorry. We can’t give you access to your saved form right now. We’re working on ways to make it easier for you to apply for benefits online. Please check back later or apply by mail.</span><a href="/pension/apply/">Find out how to apply by mail</a>.</div>,
  '21P-530': <div><span className="error">We’re sorry. We can’t give you access to your saved form right now. We’re working on ways to make it easier for you to apply for benefits online. Please check back later or apply by mail.</span><a href="/burials-and-memorials/survivor-and-dependent-benefits/burial-costs/">Find out how to apply by mail</a>.</div>
};
