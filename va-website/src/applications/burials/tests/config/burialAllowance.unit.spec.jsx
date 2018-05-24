import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';

describe('Burials burial allowance', () => {
  const { schema, uiSchema, depends } = formConfig.chapters.benefitsSelection.pages.burialAllowance;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{ locationOfDeath: { location: 'vaMedicalCenter' } }}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input, select, textarea').length).to.equal(3);
  });

  it('should show warning when ineligible for non-service connected death allowance', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        onSubmit={onSubmit}
        data={{ burialDate: '2013-11-05' }}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);
    formDOM.fillData('#root_burialAllowanceRequested_1', 'nonService');
    expect(formDOM.querySelectorAll('.usa-alert-warning').length).to.equal(1);
  });

  it('should not show vaMC option when neither vaMC nor nursing home selected as burial location', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        onSubmit={onSubmit}
        data={{ locationOfDeath: { location: 'stateVeteransHome' } }}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);
    expect(formDOM.querySelectorAll('input, select, textarea').length).to.equal(2);
  });

  it('should show errors when required fields are empty', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        onSubmit={onSubmit}
        data={{ locationOfDeath: { location: 'vaMedicalCenter' } }}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);
    submitForm(form);
    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(1);
    expect(onSubmit.called).not.to.be.true;
  });

  it('should show actual burial cost text field', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{ locationOfDeath: { location: 'vaMedicalCenter' } }}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.fillData('#root_burialAllowanceRequested_2', 'vaMC');

    expect(formDOM.querySelectorAll('input, select, textarea').length).to.equal(4);
  });

  it('should show previously received question', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{
          locationOfDeath: {
            location: 'vaMedicalCenter'
          },
          relationship: {
            type: 'spouse'
          }
        }}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input, select, textarea').length).to.equal(5);
    expect(formDOM.querySelector('#root_previouslyReceivedAllowanceYes')).is.not.null;
  });

  it('should show unclaimed question', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{
          locationOfDeath: {
            location: 'vaMedicalCenter'
          },
          relationship: {
            type: 'other'
          }
        }}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input, select, textarea').length).to.equal(5);
    expect(formDOM.querySelector('#root_benefitsUnclaimedRemainsYes')).is.not.null;
  });

  it('should submit when all required fields are filled in', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        onSubmit={onSubmit}
        data={{ locationOfDeath: { location: 'vaMedicalCenter' } }}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.fillData('#root_burialAllowanceRequested_2', 'vaMC');

    submitForm(form);
    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('should show page only if burialAllowance was chosen', () => {
    expect(depends({
      'view:claimedBenefits': {
        burialAllowance: true
      }
    })).to.be.true;

    expect(depends({
      'view:claimedBenefits': {}
    })).to.be.false;
  });
});
