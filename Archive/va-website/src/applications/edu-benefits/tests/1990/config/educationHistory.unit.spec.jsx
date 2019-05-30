import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, getFormDOM } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../1990/config/form';

describe('Edu 1990 educationHistory', () => {
  const { schema, uiSchema } = formConfig.chapters.educationHistory.pages.educationHistory;
  const definitions = formConfig.defaultDefinitions;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}
        definitions={definitions}/>
    );

    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input,select,textarea').length).to.equal(16);
  });
  it('should have no required inputs', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}
        definitions={definitions}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.submitForm();

    expect(formDOM.querySelectorAll('.usa-input-error')).to.be.empty;
    expect(onSubmit.called).to.be.true;
  });
});
