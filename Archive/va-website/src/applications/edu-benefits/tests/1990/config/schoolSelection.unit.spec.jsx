import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, getFormDOM } from '../../../../../platform/testing/unit/schemaform-utils.jsx';

import formConfig1990 from '../../../1990/config/form';

describe('Edu 1990 schoolSelection', () => {
  const { schema, uiSchema } = formConfig1990.chapters.schoolSelection.pages.schoolSelection;

  // They should all render
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        definitions={formConfig1990.defaultDefinitions}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    const inputs = formDOM.querySelectorAll('input, select, textarea');

    expect(inputs.length).to.equal(8);
  });

  it('should have 1 required input', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        definitions={formConfig1990.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);
    formDOM.submitForm();

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(1);
    expect(onSubmit.called).to.not.be.true;
  });
  it('should reveal address', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        definitions={formConfig1990.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);
    formDOM.fillData('#root_educationProgram_educationType', 'college');

    expect(formDOM.querySelectorAll('input,select,textarea').length).to.equal(14);
  });
  it('should hide non va assistance question', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        onSubmit={onSubmit}
        data={{
          currentlyActiveDuty: {
            yes: true
          }
        }}
        definitions={formConfig1990.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input,select,textarea').length).to.equal(6);
  });
});
