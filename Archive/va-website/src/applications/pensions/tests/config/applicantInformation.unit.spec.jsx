import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

const definitions = formConfig.defaultDefinitions;

describe('Pensions applicantInformation', () => {
  const { schema, uiSchema } = formConfig.chapters.applicantInformation.pages.applicantInformation;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        definitions={definitions}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input,select').length).to.equal(9);
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
  it('should submit with no errors with all required fields filled in', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={definitions}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);
    submitForm(form);
    const find = formDOM.querySelector.bind(formDOM);
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error'))).not.to.be.empty;

    ReactTestUtils.Simulate.change(find('#root_veteranFullName_first'), {
      target: {
        value: 'Test'
      }
    });
    ReactTestUtils.Simulate.change(find('#root_veteranFullName_last'), {
      target: {
        value: 'Test'
      }
    });
    ReactTestUtils.Simulate.change(find('#root_veteranDateOfBirthMonth'), {
      target: {
        value: '1'
      }
    });
    ReactTestUtils.Simulate.change(find('#root_veteranDateOfBirthDay'), {
      target: {
        value: '1'
      }
    });
    ReactTestUtils.Simulate.change(find('#root_veteranDateOfBirthYear'), {
      target: {
        value: '1980'
      }
    });
    const ssn = ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input')
      .find(input => input.id === 'root_veteranSocialSecurityNumber');
    ReactTestUtils.Simulate.change(ssn, {
      target: {
        value: '123456788'
      }
    });

    expect(Array.from(formDOM.querySelectorAll('.usa-input-error'))).to.be.empty;
    submitForm(form);
    expect(onSubmit.called).to.be.true;
  });
});
