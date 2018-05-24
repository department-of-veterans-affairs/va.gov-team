import _ from 'lodash/fp';

import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import { schoolSelectionOptionsFor as optionsFor } from '../../pages/schoolSelection.js';

import formConfig1990e from '../../1990e/config/form';
import formConfig1990n from '../../1990n/config/form';
import formConfig5490 from '../../5490/config/form';

// Actually use the configs from the forms
const configs = {
  '1990n': formConfig1990n,
  '1990e': formConfig1990e,
  '5490': formConfig5490 // eslint-disable-line
};

// Describe the tests for each form
Object.keys(optionsFor).forEach((formName) => {
  describe(`Edu ${formName} schoolSelection`, () => {
    // This is a bit fragile; requires the chapter and page name to be schoolSelection
    const { schema, uiSchema } = configs[formName].chapters.schoolSelection.pages.schoolSelection;

    // They should all render
    it('should render', () => {
      const form = ReactTestUtils.renderIntoDocument(
        <DefinitionTester
          schema={schema}
          data={{}}
          definitions={configs[formName].defaultDefinitions}
          uiSchema={uiSchema}/>
      );

      const formDOM = findDOMNode(form);

      const inputs = Array.from(formDOM.querySelectorAll('input, select, textarea'));

      // Should have a better test than this...
      // Perhaps adding up all the elements based on optionsFor[formName].fields
      expect(inputs).to.not.be.empty;
    });


    // Either test for required inputs or not, depending on the required option
    const requiredInputs = !_.isEmpty(optionsFor[formName].required);

    it(`should have${requiredInputs ? '' : ' no'} required inputs`, () => {
      const onSubmit = sinon.spy();
      const form = ReactTestUtils.renderIntoDocument(
        <DefinitionTester
          schema={schema}
          onSubmit={onSubmit}
          data={{}}
          definitions={configs[formName].defaultDefinitions}
          uiSchema={uiSchema}/>
      );
      const formDOM = findDOMNode(form);
      submitForm(form);

      if (requiredInputs) {
        expect(Array.from(formDOM.querySelectorAll('.usa-input-error'))).to.not.be.empty;
        expect(onSubmit.called).to.not.be.true;
      } else {
        expect(Array.from(formDOM.querySelectorAll('.usa-input-error'))).to.be.empty;
        expect(onSubmit.called).to.be.true;
      }
    });

    // TODO: Test filling in the required data
  });
});
