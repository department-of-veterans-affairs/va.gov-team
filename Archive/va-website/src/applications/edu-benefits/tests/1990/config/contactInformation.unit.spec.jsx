import React from 'react';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';
import { getFormDOM, DefinitionTester } from '../../../../../platform/testing/unit/schemaform-utils';

import formConfig from '../../../1990/config/form.js';

describe('Edu 1990 contactInformation', () => {
  const { schema, uiSchema } = formConfig.chapters.personalInformation.pages.contactInformation;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input, select').length).to.equal(13);
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

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(6);
  });

  it('should submit form with information', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.fillData('#root_veteranAddress_street', '123 Cherry Lane');
    formDOM.fillData('#root_veteranAddress_city', 'Rockville');
    formDOM.fillData('#root_veteranAddress_state', 'NY');
    formDOM.fillData('#root_veteranAddress_postalCode', '12312');
    formDOM.fillData('#root_view\\:otherContactInfo_email', 'abc@def.com');
    formDOM.fillData('#root_view\\:otherContactInfo_view\\:confirmEmail', 'abc@def.com');
    formDOM.submitForm();
    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(0);
  });
});
