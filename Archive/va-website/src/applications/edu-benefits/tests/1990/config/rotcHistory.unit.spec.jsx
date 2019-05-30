import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, getFormDOM, submitForm } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../1990/config/form';

describe('Edu 1990 rotcHistory', () => {
  const { schema, uiSchema } = formConfig.chapters.militaryHistory.pages.rotcHistory;
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

    expect(formDOM.querySelectorAll('input').length).to.equal(4);
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
    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error')).to.be.empty;
    expect(onSubmit.called).to.be.true;
  });
  it('should be able to add a new period', () => {
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
    formDOM.setYesNo('#root_view\\:seniorRotcYes', 'Y');
    formDOM.fillData('#root_seniorRotc_rotcScholarshipAmounts_0_year', '2000');
    formDOM.fillData('#root_seniorRotc_rotcScholarshipAmounts_0_amount', '200');
    formDOM.click('.va-growable-add-btn');

    expect(formDOM.querySelectorAll('.va-growable-background').length).to.equal(2);
  });
});
