import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';
import Form from '@department-of-veterans-affairs/react-jsonschema-form';

import { DefinitionTester } from '../../../../src/platform/testing/unit/schemaform-utils.jsx';
import uiSchema from '../../../../src/applications/common/schemaform/definitions/bankAccount';
import { bankAccount } from 'vets-json-schema/dist/definitions.json';

describe('Schemaform definition bankAccount', () => {
  it('should render bankAccount', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={bankAccount}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);

    const inputs = Array.from(formDOM.querySelectorAll('input'));

    expect(inputs[0].id).to.equal('root_accountType_0');
    expect(inputs[1].id).to.equal('root_accountType_1');
    expect(inputs[0].type).to.equal('radio');
    expect(inputs[1].type).to.equal('radio');
    expect(inputs[2].id).to.equal('root_accountNumber');
    expect(inputs[3].id).to.equal('root_routingNumber');
  });
  it('should render bankAccount with routing number error', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={bankAccount}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);
    const find = formDOM.querySelector.bind(formDOM);
    ReactTestUtils.Simulate.change(find('#root_routingNumber'), {
      target: {
        value: '123456789'
      }
    });

    ReactTestUtils.findRenderedComponentWithType(form, Form).onSubmit({
      preventDefault: f => f
    });
    expect(find('.usa-input-error-message').textContent).to.equal(`Error ${uiSchema.routingNumber['ui:errorMessages'].pattern}`);
  });
});
