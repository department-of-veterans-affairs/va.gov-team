import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('Hca VA facility', () => {
  const { schema, uiSchema } = formConfig.chapters.insuranceInformation.pages.vaFacility;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input,select').length)
      .to.equal(5);
    // when there's no state selected, the facility list is empty except for
    // a placeholder option
    expect(formDOM.querySelectorAll('select')[1].querySelectorAll('option').length).to.equal(1);
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

    const formDOM = findDOMNode(form);

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(2);
    expect(onSubmit.called).to.be.false;
  });

  it('should set center list by state', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        data={{
          'view:preferredFacility': {
            'view:facilityState': 'MA'
          }
        }}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('select')[1].querySelectorAll('option').length).to.equal(23);
  });

  it('should submit with valid data', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        data={{
          'view:preferredFacility': {
            'view:facilityState': 'MA',
            vaMedicalFacility: '631'
          }
        }}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);
    ReactTestUtils.Simulate.change(formDOM.querySelectorAll('select')[1], {
      target: {
        value: '631'
      }
    });
    ReactTestUtils.Simulate.change(formDOM.querySelectorAll('select')[0], {
      target: {
        value: 'MA'
      }
    });

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
