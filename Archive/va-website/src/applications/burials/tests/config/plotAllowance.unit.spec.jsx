import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';

describe('Burials plot allowance', () => {
  const { schema, uiSchema, depends } = formConfig.chapters.benefitsSelection.pages.plotAllowance;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input, select, textarea').length).to.equal(5);
  });

  it('should show errors when required fields are empty', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);
    submitForm(form);
    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(3);
    expect(onSubmit.called).not.to.be.true;
  });

  it('should show state cemetery field', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.fillData('#root_federalCemeteryNo', 'N');

    expect(formDOM.querySelectorAll('input, select, textarea').length).to.equal(7);
    expect(formDOM.querySelector('#root_stateCemeteryYes')).not.to.be.null;
  });

  it('should show actual govt contribution text field', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.fillData('#root_govtContributionsYes', 'Y');

    expect(formDOM.querySelectorAll('input, select, textarea').length).to.equal(6);
    expect(formDOM.querySelector('#root_amountGovtContribution')).not.to.be.null;
  });

  it('should submit when all required fields are filled in', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.fillData('#root_placeOfRemains', 'Cemetery');
    formDOM.fillData('#root_federalCemeteryNo', 'N');
    formDOM.fillData('#root_stateCemeteryNo', 'N');
    formDOM.fillData('#root_govtContributionsYes', 'Y');
    formDOM.fillData('#root_amountGovtContribution', '50');

    formDOM.submitForm(form);
    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('should show page only if plotAllowance was chosen', () => {
    expect(depends({
      'view:claimedBenefits': {
        plotAllowance: true
      }
    })).to.be.true;

    expect(depends({
      'view:claimedBenefits': {}
    })).to.be.false;
  });
});
