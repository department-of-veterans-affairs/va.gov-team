import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, getFormDOM, submitForm } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../1990/config/form';

describe('Edu 1990 contributions', () => {
  const { schema, uiSchema } = formConfig.chapters.militaryHistory.pages.contributions;
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

    expect(formDOM.querySelectorAll('input').length).to.equal(5);
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
  it('should reveal warning', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        onSubmit={onSubmit}
        data={{
          'view:benefitsRelinquishedContainer': {
            benefitsRelinquished: 'chapter30'
          }
        }}
        uiSchema={uiSchema}
        definitions={definitions}/>
    );
    const formDOM = getFormDOM(form);
    formDOM.setCheckbox('#root_reserveKicker', true);

    expect(formDOM.querySelectorAll('.usa-alert-warning').length).to.equal(1);
  });
  it('should reveal date fields', () => {
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
    formDOM.setCheckbox('#root_view\\:activeDutyRepayingPeriod', true);

    expect(formDOM.querySelectorAll('input').length).to.equal(7);
  });
});
