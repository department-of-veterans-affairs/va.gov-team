import React from 'react';
import moment from 'moment';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('Pensions employment history', () => {
  const { depends, schema, uiSchema } = formConfig.chapters.workHistory.pages.employmentHistory;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input,select').length).to.equal(2);
  });

  it('should expand to show all questions', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.setYesNo('#root_view\\:workedBeforeDisabledYes', 'Y');

    expect(formDOM.querySelectorAll('input,select').length).to.equal(18);
  });

  it('should should have no required fields if "no" is selected', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.setYesNo('#root_view\\:workedBeforeDisabledNo', 'N');
    formDOM.submitForm();

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(0);
  });

  it('should not submit empty form', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);
    formDOM.setYesNo('#root_view\\:workedBeforeDisabledYes', 'Y');

    formDOM.submitForm();

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(10);
    expect(onSubmit.called).to.be.false;
  });

  it('should add another job', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);
    formDOM.setYesNo('#root_view\\:workedBeforeDisabledYes', 'Y');

    formDOM.fillData('#root_view\\:history_jobs_0_employer', 'Smith');
    formDOM.fillData('#root_view\\:history_jobs_0_address_street', '101 Elm st');
    formDOM.fillData('#root_view\\:history_jobs_0_address_city', 'Northampton');
    formDOM.fillData('#root_view\\:history_jobs_0_address_state', 'MA');
    formDOM.fillData('#root_view\\:history_jobs_0_address_postalCode', '01060');
    formDOM.fillData('#root_view\\:history_jobs_0_jobTitle', 'Professor');
    formDOM.fillData('#root_view\\:history_jobs_0_dateRange_fromMonth', '1');
    formDOM.fillData('#root_view\\:history_jobs_0_dateRange_fromDay', '1');
    formDOM.fillData('#root_view\\:history_jobs_0_dateRange_fromYear', '2002');
    formDOM.fillData('#root_view\\:history_jobs_0_dateRange_toMonth', '1');
    formDOM.fillData('#root_view\\:history_jobs_0_dateRange_toDay', '1');
    formDOM.fillData('#root_view\\:history_jobs_0_dateRange_toYear', '2003');
    formDOM.fillData('#root_view\\:history_jobs_0_daysMissed', '3');
    formDOM.fillData('#root_view\\:history_jobs_0_annualEarnings', '300');

    formDOM.submitForm();

    expect(onSubmit.called).to.be.true;

    formDOM.click('.va-growable-add-btn');

    expect(formDOM.querySelector('.va-growable-background').textContent)
      .to.contain('Smith');
  });
  it('depends should return true if under 65', () => {
    const result = depends(
      {
        veteranDateOfBirth: moment().startOf('day').subtract(64, 'years').format('YYYY-MM-DD')
      }
    );

    expect(result).to.be.true;
  });
  it('depends should return false if 65', () => {
    const result = depends(
      {
        veteranDateOfBirth: moment().startOf('day').subtract(65, 'years').format('YYYY-MM-DD')
      }
    );

    expect(result).to.be.false;
  });
});
