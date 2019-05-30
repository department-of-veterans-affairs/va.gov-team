import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';
import Form from '@department-of-veterans-affairs/react-jsonschema-form';

import { DefinitionTester } from '../../../../src/platform/testing/unit/schemaform-utils.jsx';
import uiSchema from '../../../../src/applications/common/schemaform/definitions/phone';
import { phone as schema } from 'vets-json-schema/dist/definitions.json';

describe('Schemaform definition phone', () => {
  it('should render phone', () => {
    const phoneUiSchema = uiSchema();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        uiSchema={phoneUiSchema}/>
    );

    const formDOM = findDOMNode(form);

    const input = formDOM.querySelector('input');
    const phoneClasses = phoneUiSchema['ui:options'].widgetClassNames.split(' ');
    phoneClasses.forEach(className => {
      expect(input.classList.contains(className)).to.be.true;
    });
    expect(input.type).to.equal('tel');
  });
  it('should render phone title', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        uiSchema={uiSchema('My phone')}/>
    );

    const formDOM = findDOMNode(form);

    expect(formDOM.querySelector('label').textContent).to.equal('My phone');
  });
  it('should render phone error', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        uiSchema={uiSchema()}/>
    );

    const formDOM = findDOMNode(form);
    ReactTestUtils.Simulate.change(formDOM.querySelector('input'), {
      target: {
        value: 'asdf'
      }
    });
    ReactTestUtils.findRenderedComponentWithType(form, Form).onSubmit({
      preventDefault: f => f
    });

    expect(formDOM.querySelector('.usa-input-error-message')).to.not.be.null;
  });
});
