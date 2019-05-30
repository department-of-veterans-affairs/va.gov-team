import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../5490/config/form';

describe('Edu 5490 secondaryContact', () => {
  const { schema, uiSchema } = formConfig.chapters.personalInformation.pages.secondaryContact;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input,select').length).to.equal(9);
  });
  it('should hide address when checked', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);
    expect(formDOM.querySelectorAll('input,select').length).to.equal(9);

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_secondaryContact_sameAddress'), {
      target: {
        checked: true
      }
    });

    expect(formDOM.querySelectorAll('input,select').length).to.equal(3);
  });
});
