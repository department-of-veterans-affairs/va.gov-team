import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../5495/config/form.js';

describe('Edu 5495 applicantInformation', () => {
  const { schema, uiSchema } = formConfig.chapters.applicantInformation.pages.applicantInformation;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input, select').length).to.equal(11);
  });
  it('should show errors when required fields are empty', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);
    submitForm(form);
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error')).length).to.equal(4);
    expect(onSubmit.called).not.to.be.true;
  });
  it('should conditionally show file number', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const noSSNBox = ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input')
      .find(input => input.id === 'root_view:noSSN');

    ReactTestUtils.Simulate.change(noSSNBox, {
      target: {
        checked: true
      }
    });

    const formDOM = findDOMNode(form);
    expect(formDOM.querySelector('#root_relativeVaFileNumber')).not.to.be.null;
  });
});
