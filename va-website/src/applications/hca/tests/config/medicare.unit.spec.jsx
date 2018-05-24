import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('Hca medicare', () => {
  const { schema, uiSchema } = formConfig.chapters.insuranceInformation.pages.medicare;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input').length)
      .to.equal(4);
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

  it('should reveal required effective date', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input, select').length).to.equal(4);

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_isEnrolledMedicarePartAYes'), {
      target: {
        value: 'Y'
      }
    });
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_isMedicaidEligibleYes'), {
      target: {
        value: 'Y'
      }
    });

    expect(formDOM.querySelectorAll('input, select').length).to.equal(7);

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(1);
    expect(onSubmit.called).to.be.false;
  });

  it('should require past effective date', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_isEnrolledMedicarePartAYes'), {
      target: {
        value: 'Y'
      }
    });

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_medicarePartAEffectiveDateMonth'), {
      target: {
        value: '1'
      }
    });

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_medicarePartAEffectiveDateDay'), {
      target: {
        value: '1'
      }
    });

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_medicarePartAEffectiveDateYear'), {
      target: {
        value: ((new Date()).getFullYear() + 1).toString()
      }
    });

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(2);
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

    const formDOM = findDOMNode(form);

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_isMedicaidEligibleYes'), {
      target: {
        value: 'Y'
      }
    });

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_isEnrolledMedicarePartANo'), {
      target: {
        value: 'N'
      }
    });

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
