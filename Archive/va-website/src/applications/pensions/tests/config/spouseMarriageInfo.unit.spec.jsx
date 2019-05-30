import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('Pensions spouse info', () => {
  const { schema, uiSchema, depends } = formConfig.chapters.householdInformation.pages.spouseInfo;

  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{
          marriages: [{
            spouseFullName: {
              first: 'Jane',
              last: 'Doe'
            }
          }]
        }}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input,select').length).to.equal(9);
    expect(formDOM.querySelectorAll('legend')[1].textContent).to.contain('Jane Doe');
    expect(formDOM.querySelector('label[for="root_spouseSocialSecurityNumber"]').textContent).to.contain('Jane Doe');
  });

  it('should render spouse address and contrib fields', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{
          marriages: [{
            spouseFullName: {
              first: 'Jane',
              last: 'Doe'
            }
          }]
        }}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input,select').length).to.equal(9);

    formDOM.fillData('#root_liveWithSpouseNo', 'N');

    expect(formDOM.querySelectorAll('input,select').length).to.equal(17);

    submitForm(form);
    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(10);
  });

  it('should render file number', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{
          marriages: [{
            spouseFullName: {
              first: 'Jane',
              last: 'Doe'
            }
          }]
        }}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input,select').length).to.equal(9);

    formDOM.fillData('#root_spouseIsVeteranYes', 'Y');

    expect(formDOM.querySelectorAll('input,select').length).to.equal(10);
  });

  it('should not submit empty form', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(5);
    expect(onSubmit.called).to.be.false;
  });

  it('should submit with valid data', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    formDOM.fillData('#root_spouseDateOfBirthMonth', '2');
    formDOM.fillData('#root_spouseDateOfBirthDay', '2');
    formDOM.fillData('#root_spouseDateOfBirthYear', '2000');
    formDOM.fillData('#root_spouseSocialSecurityNumber', '234432444');
    formDOM.fillData('#root_spouseIsVeteranNo', 'N');
    formDOM.fillData('#root_liveWithSpouseYes', 'Y');
    formDOM.fillData('#root_spouseMarriages', '1');

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('depends should return true if married', () => {
    const result = depends({ maritalStatus: 'Married' });

    expect(result).to.be.true;
  });
});
