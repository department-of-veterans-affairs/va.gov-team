import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../5495/config/form.js';

describe('Edu 5495 schoolSelection', () => {
  const { schema, uiSchema } = formConfig.chapters.schoolSelection.pages.newSchool;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input, select, textarea').length).to.equal(3);
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
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error')).length).to.equal(2);
    expect(onSubmit.called).not.to.be.true;
  });
});
