import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';

describe('Burials veteran information', () => {
  const { schema, uiSchema } = formConfig.chapters.veteranInformation.pages.veteranInformation;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input, select, textarea').length).to.equal(10);
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
    formDOM.submitForm();
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error')).length).to.equal(5);
    expect(onSubmit.called).not.to.be.true;
  });

  it('should require one of ssn or file number', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.submitForm();

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(5);
    formDOM.fillData('#root_veteranSocialSecurityNumber', '134445555');

    formDOM.submitForm();

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(3);
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

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_veteranFullName_first'), {
      target: {
        value: 'Jane'
      }
    });
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_veteranFullName_last'), {
      target: {
        value: 'Doe'
      }
    });

    formDOM.fillData('#root_veteranSocialSecurityNumber', '123443344');
    formDOM.fillData('#root_veteranDateOfBirthMonth', '2');
    formDOM.fillData('#root_veteranDateOfBirthDay', '2');
    formDOM.fillData('#root_veteranDateOfBirthYear', '2001');

    formDOM.submitForm();
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error')).length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
