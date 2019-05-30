import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('Hca financial disclosure', () => {
  const { schema, uiSchema } = formConfig.chapters.householdInformation.pages.financialDisclosure;
  const definitions = formConfig.defaultDefinitions;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        uiSchema={uiSchema}
        definitions={definitions}/>
    );
    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input').length).to.equal(2);
  });

  it('should not submit empty form', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={definitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(1);
    expect(onSubmit.called).to.be.false;
  });

  it('should submit with valid data', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={definitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_discloseFinancialInformationYes'), {
      target: {
        value: 'Y'
      }
    });

    submitForm(form);
    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
  it('should show a warning if No is selected', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={definitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);
    expect(Array.from(formDOM.querySelectorAll('.usa-alert-info')).length).to.equal(1);

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_discloseFinancialInformationNo'), {
      target: {
        value: 'N'
      }
    });

    expect(Array.from(formDOM.querySelectorAll('.usa-alert-info')).length).to.equal(2);
  });
});
