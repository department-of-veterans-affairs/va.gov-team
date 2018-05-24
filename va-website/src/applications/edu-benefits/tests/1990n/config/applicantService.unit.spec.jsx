import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../1990n/config/form';

describe('Edu 1990n applicantService', () => {
  const { schema, uiSchema } = formConfig.chapters.applicantInformation.pages.applicantService;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const fields = Array.from(findDOMNode(form).querySelectorAll('input, select'));

    expect(fields.length).to.equal(10);
  });

  it('should expand tours and other questions', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    let fields = Array.from(findDOMNode(form).querySelectorAll('input, select'));
    expect(fields.length).to.equal(10);

    const currentlyActiveDuty = formDOM.querySelector('#root_currentlyActiveDuty_yesYes');
    ReactTestUtils.Simulate.change(currentlyActiveDuty, {
      target: {
        checked: true
      }
    });

    fields = Array.from(findDOMNode(form).querySelectorAll('input, select'));

    expect(fields.length).to.equal(14);
  });
});
