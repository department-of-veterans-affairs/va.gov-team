import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';
import { getFormDOM, DefinitionTester } from '../../../../../platform/testing/unit/schemaform-utils';

import formConfig from '../../../1990/config/form.js';

describe('Edu 1990 secondaryContact', () => {
  const { schema, uiSchema } = formConfig.chapters.personalInformation.pages.secondaryContact;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input, select').length).to.equal(9);
  });
  it('should hide address fields when address is shared', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);
    formDOM.setCheckbox('#root_secondaryContact_view\\:address_sameAddress', true);

    expect(formDOM.querySelectorAll('input, select').length).to.equal(3);
  });
  it('should submit without information', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.submitForm();
    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(0);
  });
});
