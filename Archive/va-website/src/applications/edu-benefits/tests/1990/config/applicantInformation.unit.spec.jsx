import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';
import moment from 'moment';

import { DefinitionTester, getFormDOM } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../1990/config/form.js';

describe('Edu 1990 applicantInformation', () => {
  const { schema, uiSchema } = formConfig.chapters.applicantInformation.pages.applicantInformation;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input, select').length).to.equal(10);
  });

  it('should not submit form without information', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);
    formDOM.submitForm();

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(4);
  });

  it('should only allow ages >= 17 years', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    // 17th birthday is tomorrow
    const dob = moment().subtract(17, 'years').add(1, 'day');
    formDOM.fillDate('root_veteranDateOfBirth', dob.format('YYYY-MM-DD'));
    formDOM.submitForm();
    expect(formDOM.querySelectorAll('.usa-input-error #root_veteranDateOfBirthMonth').length).to.equal(1);

    // 17th birthday is today
    // Happy birthday!
    formDOM.fillDate('root_veteranDateOfBirth', dob.subtract(1, 'day').format('YYYY-MM-DD'));
    formDOM.submitForm();
    expect(formDOM.querySelectorAll('.usa-input-error #root_veteranDateOfBirthMonth').length).to.equal(0);
  });
});
