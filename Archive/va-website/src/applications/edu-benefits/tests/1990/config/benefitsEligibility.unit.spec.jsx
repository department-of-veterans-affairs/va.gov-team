import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, getFormDOM } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../1990/config/form.js';

describe('Edu 1990 benefitsEligibility', () => {
  const { schema, uiSchema } = formConfig.chapters.benefitsEligibility.pages.benefitsEligibility;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input').length).to.equal(4);
  });

  it('should not submit form without information', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);
    formDOM.submitForm();

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(1);
  });

  it('should submit with required information', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    // Should only require one
    formDOM.setCheckbox('#root_view\\:selectedBenefits_chapter33', true);

    formDOM.submitForm();
    expect(formDOM.querySelectorAll('.usa-input-error #root_veteranDateOfBirthMonth').length).to.equal(0);
  });
});
