import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';
import moment from 'moment';

import { DefinitionTester, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('Hca serviceInformation', () => {
  const { schema, uiSchema } = formConfig.chapters.militaryService.pages.serviceInformation;
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

    expect(formDOM.querySelectorAll('input').length).to.equal(2);
    expect(formDOM.querySelectorAll('select').length).to.equal(6);
  });

  it('should not submit empty form', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={definitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    formDOM.submitForm();

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(4);
    expect(onSubmit.called).to.be.false;
  });

  it('should submit with valid data', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={definitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.fillData('#root_lastServiceBranch', 'army');
    formDOM.fillDate('root_lastEntryDate', '2010-1-1');
    formDOM.fillDate('root_lastDischargeDate', '2011-1-1');
    formDOM.fillData('#root_dischargeType', 'honorable');

    formDOM.submitForm();
    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('should hide and not require discharge status if discharge date is in the future', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={definitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.fillData('#root_lastServiceBranch', 'army');
    formDOM.fillDate('root_lastEntryDate', '2010-1-1');
    // TODO: Use a constant instead of a magic string
    formDOM.fillDate('root_lastDischargeDate', moment().add(130, 'days').format('YYYY-MM-DD'));

    expect(formDOM.querySelector('#root_dischargeType')).to.be.null;

    formDOM.submitForm();
    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
