import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import _ from 'lodash/fp';

import { DefinitionTester, getFormDOM } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../1990/config/form.js';

describe('Edu 1990 benefitsRelinquishment', () => {
  const { schema, uiSchema, initialData } = formConfig.chapters.benefitsEligibility.pages.benefitsRelinquishment;
  const defaultData = _.merge(initialData, {
    // Not sure this is needed, strictly speaking, but this page _does_ depend on it
    'view:selectedBenefits': {
      chapter30: true
    }
  });

  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={defaultData}
        uiSchema={uiSchema}
        definitions={formConfig.defaultDefinitions}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input').length).to.equal(4);
  });

  it('should require benefitsRelinquished', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={defaultData}
        uiSchema={uiSchema}
        onSubmit={onSubmit}
        definitions={formConfig.defaultDefinitions}/>
    );
    const formDOM = getFormDOM(form);

    // Submit with no information and expect an error message
    formDOM.submitForm();
    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(1);
    expect(onSubmit.called).to.be.false;

    // Fill in the information
    formDOM.selectRadio('benefitsRelinquished', 'unknown');

    // Submit and the message should be gone
    formDOM.submitForm();
    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('should show nested content', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={defaultData}
        uiSchema={uiSchema}
        definitions={formConfig.defaultDefinitions}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.selectRadio('benefitsRelinquished', 'chapter1607');
    // Should now be the original 4 + 3 for the date picker
    expect(formDOM.querySelectorAll('input, select').length).to.equal(7);
  });

  it('should require benefitsRelinquishedDate', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={defaultData}
        uiSchema={uiSchema}
        definitions={formConfig.defaultDefinitions}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.selectRadio('benefitsRelinquished', 'chapter1607');
    // Input an invalid date since it defaults to today
    formDOM.fillData('#root_view\\:benefitsRelinquishedContainer_benefitsRelinquishedDateYear', '100');
    formDOM.submitForm();

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(1);
  });

  it('should submit with benefitsRelinquishedDate', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={defaultData}
        uiSchema={uiSchema}
        onSubmit={onSubmit}
        definitions={formConfig.defaultDefinitions}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.selectRadio('benefitsRelinquished', 'chapter1607');
    formDOM.submitForm();

    expect(onSubmit.called).to.be.true;
  });
});
