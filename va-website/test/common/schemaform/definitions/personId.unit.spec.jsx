import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../src/platform/testing/unit/schemaform-utils.jsx';
import * as personId from '../../../../src/applications/common/schemaform/definitions/personId';
import commonDefinitions from 'vets-json-schema/dist/definitions.json';

describe('Edu personId', () => {
  const uiSchema = personId.uiSchema('veteran', 'view:noSSN');
  const schema = personId.schema({ definitions: commonDefinitions });
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);
    const inputs = Array.from(formDOM.querySelectorAll('input, select'));

    expect(inputs.length).to.equal(2);
  });

  it('should conditionally require SSN or file number', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        formData={{}}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);
    submitForm(form);

    // VA file number input is not visible; error is shown for empty SSN input
    expect(formDOM.querySelector('.usa-input-error #root_veteranSocialSecurityNumber')).not.to.be.null;
    expect(formDOM.querySelector('#root_vaFileNumber')).to.be.null;

    // Check no-SSN box
    const noSSNBox = ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input')
      .find(input => input.id === 'root_view:noSSN');
    ReactTestUtils.Simulate.change(noSSNBox,
      {
        target: {
          checked: true
        }
      });

    expect(formDOM.querySelector('.usa-input-error #root_veteranSocialSecurityNumber')).to.be.null;
    expect(formDOM.querySelector('.usa-input-error #root_vaFileNumber')).not.to.be.null;
  });
  it('should submit with no errors when required field is filled', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        formData={{}}
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);
    const find = formDOM.querySelector.bind(formDOM);

    submitForm(form);
    expect(onSubmit.called).to.be.false;
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error'))).not.to.be.empty;

    ReactTestUtils.Simulate.change(find('#root_veteranSocialSecurityNumber'), {
      target: {
        value: '123456788'
      }
    });

    expect(Array.from(formDOM.querySelectorAll('.usa-input-error'))).to.be.empty;
    submitForm(form);
    expect(onSubmit.called).to.be.true;
  });
});
