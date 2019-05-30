import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';

describe('Burials claimant information', () => {
  const { schema, uiSchema } = formConfig.chapters.claimantInformation.pages.claimantInformation;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input, select, textarea').length).to.equal(9);
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
    const formDOM = findDOMNode(form);
    submitForm(form);
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error')).length).to.equal(3);
    expect(onSubmit.called).not.to.be.true;
  });
  it('should show other text field', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_relationship_type_4'), {
      target: {
        value: 'other'
      }
    });

    expect(formDOM.querySelectorAll('input, select, textarea').length).to.equal(11);
    submitForm(form);
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error')).length).to.equal(3);
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
    const formDOM = findDOMNode(form);

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_claimantFullName_first'), {
      target: {
        value: 'Jane'
      }
    });
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_claimantFullName_last'), {
      target: {
        value: 'Doe'
      }
    });
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_relationship_type_4'), {
      target: {
        value: 'other'
      }
    });
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_relationship_other'), {
      target: {
        value: 'Friend'
      }
    });

    submitForm(form);
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error')).length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
