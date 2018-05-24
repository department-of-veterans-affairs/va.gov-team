import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../1995/config/form';

describe('Edu 1995 dependents', () => {
  const { schema, uiSchema } = formConfig.chapters.personalInformation.pages.dependents;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input').length).to.equal(6);
  });
  it('should have all fields set as required', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);
    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(3);
  });
});
