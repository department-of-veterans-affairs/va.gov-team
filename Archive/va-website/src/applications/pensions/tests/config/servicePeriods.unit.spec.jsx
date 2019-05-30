import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('Pensions service periods', () => {
  const { schema, uiSchema } = formConfig.chapters.militaryHistory.pages.servicePeriods;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input,select').length).to.equal(7);
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

    formDOM.submitForm();

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(3);
    expect(onSubmit.called).to.be.false;
  });

  it('should display warning if the veteran did not serve during a wartime period', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    formDOM.fillData('#root_servicePeriods_0_serviceBranch', 'Army');
    formDOM.fillDate('root_servicePeriods_0_activeServiceDateRange_from', '1983-1-1');
    formDOM.fillDate('root_servicePeriods_0_activeServiceDateRange_to', '1984-1-1');

    expect(formDOM.querySelectorAll('.usa-alert').length).to.equal(1);
  });

  it('should not display warning if the veteran did serve during a wartime period', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    formDOM.fillData('#root_servicePeriods_0_serviceBranch', 'Army');
    formDOM.fillDate('root_servicePeriods_0_activeServiceDateRange_from', '1995-1-1');
    formDOM.fillDate('root_servicePeriods_0_activeServiceDateRange_to', '2004-1-1');

    expect(formDOM.querySelectorAll('.usa-alert').length).to.equal(0);
  });

  it('should add another service period', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input, select').length).to.equal(7);

    formDOM.fillData('#root_servicePeriods_0_serviceBranch', 'Army');
    formDOM.fillDate('root_servicePeriods_0_activeServiceDateRange_from', '2002-1-1');
    formDOM.fillDate('root_servicePeriods_0_activeServiceDateRange_to', '2003-1-1');

    ReactTestUtils.Simulate.click(formDOM.querySelector('.va-growable-add-btn'));

    expect(formDOM.querySelector('.va-growable-background').textContent)
      .to.contain('Army');
  });

  it('should submit with valid data', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    formDOM.fillData('#root_servicePeriods_0_serviceBranch', 'Army');
    formDOM.fillDate('root_servicePeriods_0_activeServiceDateRange_from', '2002-1-1');
    formDOM.fillDate('root_servicePeriods_0_activeServiceDateRange_to', '2003-1-1');

    formDOM.submitForm();

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
