import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../5495/config/form.js';

describe('Edu 5495 sponsorInformation', () => {
  const { schema, uiSchema } = formConfig.chapters.sponsorInformation.pages.sponsorInformation;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input, select').length).to.equal(8);
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
  it('should not allow ssn that matches relative ssn', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        onSubmit={onSubmit}
        data={{
          relativeSocialSecurityNumber: '1231233333',
          'view:veteranId': {
            veteranSocialSecurityNumber: '876554434'
          }
        }}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);
    submitForm(form);

    let hasSSNError = Array.from(formDOM.querySelectorAll('.usa-input-error input'))
      .some(input => input.id === 'root_view:veteranId_veteranSocialSecurityNumber');

    expect(hasSSNError).to.be.false;

    const ssnField = Array.from(formDOM.querySelectorAll('input'))
      .find(input => input.id === 'root_view:veteranId_veteranSocialSecurityNumber');

    ReactTestUtils.Simulate.change(ssnField, {
      target: {
        value: '1231233333'
      }
    });

    hasSSNError = Array.from(formDOM.querySelectorAll('.usa-input-error input'))
      .some(input => input.id === 'root_view:veteranId_veteranSocialSecurityNumber');

    expect(hasSSNError).to.be.true;
  });
});
