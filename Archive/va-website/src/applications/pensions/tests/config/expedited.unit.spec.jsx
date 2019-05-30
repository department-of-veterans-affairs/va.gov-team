import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

const definitions = formConfig.defaultDefinitions;

describe('Pensions expedited', () => {
  const { schema, uiSchema } = formConfig.chapters.additionalInformation.pages.expedited;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        definitions={definitions}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input,select').length).to.equal(2);
  });
  it('should render warning on Yes', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        definitions={definitions}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);
    formDOM.fillData('#root_noRapidProcessingYes', 'Y');
    expect(formDOM.querySelector('.usa-alert-info').textContent).to.contain('will be submitted as');
  });
  it('should render warning on No', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        definitions={definitions}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);
    formDOM.fillData('#root_noRapidProcessingNo', 'N');
    expect(formDOM.querySelector('.usa-alert-info').textContent).to.contain('doesn’t qualify');
  });
  it('should submit', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={definitions}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.submitForm();
    expect(onSubmit.called).to.be.true;
  });
});
