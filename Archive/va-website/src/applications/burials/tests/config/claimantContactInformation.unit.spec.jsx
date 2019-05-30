import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';

describe('Burials claimant contact information', () => {
  const { schema, uiSchema } = formConfig.chapters.additionalInformation.pages.claimantContactInformation;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input, select, textarea').length).to.equal(8);
  });
  it('should render official position', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{
          relationship: {
            isEntity: true
          }
        }}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

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
    const formDOM = findDOMNode(form);
    submitForm(form);
    expect((formDOM.querySelectorAll('.usa-input-error')).length).to.equal(4);
    expect(onSubmit.called).not.to.be.true;
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

    formDOM.fillData('#root_claimantAddress_street', '101 Elm st');
    formDOM.fillData('#root_claimantAddress_city', 'Northampton');
    formDOM.fillData('#root_claimantAddress_state', 'MA');
    formDOM.fillData('#root_claimantAddress_postalCode', '01060');

    submitForm(form);
    expect((formDOM.querySelectorAll('.usa-input-error')).length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
