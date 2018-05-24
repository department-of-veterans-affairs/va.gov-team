import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../1990e/config/form';

describe('Edu 1990e sponsorVeteran', () => {
  const { schema, uiSchema } = formConfig.chapters.sponsorVeteran.pages.sponsorVeteran;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const inputs = ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input');
    const selects = ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'select');

    expect(inputs.length).to.equal(10);
    expect(selects.length).to.equal(3);
  });
  it('should conditionally require SSN or file number', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    submitForm(form);

    // Use Array find() for nodes with 'view:' in the ID name, and check for ok (truthiness) instead of null since
    // not found nodes will return undefined instead of null

    // VA file number input is not visible; error is shown for empty SSN input
    const inputs = ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input');
    expect(inputs.find(input => input.id === 'root_view:veteranId_veteranSocialSecurityNumber')).to.be.ok;
    expect(inputs.find(input => input.id === 'root_view:veteranId_vaFileNumber')).not.to.be.ok;

    const errors = ReactTestUtils.scryRenderedDOMComponentsWithClass(form, 'usa-input-error-message');
    expect(errors.find(input => input.id.includes('root_view:veteranId_veteranSocialSecurityNumber'))).to.be.ok;

    // Check no-SSN box
    const noSSNBox = ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input')
      .find(input => input.id === 'root_view:veteranId_view:noSSN');
    ReactTestUtils.Simulate.change(noSSNBox,
      {
        target: {
          checked: true
        }
      });

    // No error is shown for empty SSN input; error is shown for empty file number input
    const newErrors = ReactTestUtils.scryRenderedDOMComponentsWithClass(form, 'usa-input-error-message');
    expect(newErrors.find(input => input.id.includes('root_view:veteranId_veteranSocialSecurityNumber'))).not.to.be.ok;
    expect(newErrors.find(input => input.id.includes('root_view:veteranId_vaFileNumber'))).to.be.ok;
  });
  it('should submit with no errors when all required fields are filled', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);
    const find = formDOM.querySelector.bind(formDOM);
    ReactTestUtils.Simulate.change(find('#root_veteranFullName_first'), {
      target: {
        value: 'Veteran'
      }
    });
    ReactTestUtils.Simulate.change(find('#root_veteranFullName_last'), {
      target: {
        value: 'Veteran'
      }
    });
    const inputs = Array.from(formDOM.querySelectorAll('input'));
    ReactTestUtils.Simulate.change(inputs.find((input) => input.id === 'root_view:veteranId_veteranSocialSecurityNumber'), {
      target: {
        value: '111-22-3333'
      }
    });

    submitForm(form);
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error'))).to.be.empty;
    expect(onSubmit.called).to.be.true;
  });
});
