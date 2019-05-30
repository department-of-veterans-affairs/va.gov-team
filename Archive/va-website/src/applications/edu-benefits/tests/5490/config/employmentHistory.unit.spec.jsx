import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../5490/config/form';

describe('Edu 5490 employmentHistory', () => {
  const { schema, uiSchema } = formConfig.chapters.employmentHistory.pages.employmentHistory;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const fields = Array.from(findDOMNode(form).querySelectorAll('input, select'));

    expect(fields.length)
      .to.equal(2);
  });

  it('should render expanded', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);
    const hasEmploymentYes = Array.from(formDOM.querySelectorAll('input'))
      .find(input => input.id.startsWith('root_view:hasNonMilitaryJobs'));

    ReactTestUtils.Simulate.change(hasEmploymentYes, {
      target: {
        checked: true
      }
    });

    const fields = Array.from(findDOMNode(form).querySelectorAll('input, select'));

    expect(fields.length).to.equal(5);
    expect(fields[3].getAttribute('type')).to.equal('number');
  });

  it('should have no required inputs', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);
    submitForm(form);

    expect(Array.from(formDOM.querySelectorAll('.usa-input-error'))).to.be.empty;

    expect(onSubmit.called).to.be.true;
  });

  it('should add another', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);
    const hasEmploymentYes = Array.from(formDOM.querySelectorAll('input'))
      .find(input => input.id.startsWith('root_view:hasNonMilitaryJobs'));

    ReactTestUtils.Simulate.change(hasEmploymentYes, {
      target: {
        checked: true
      }
    });

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_nonMilitaryJobs_0_name'), {
      target: {
        value: 'A job title'
      }
    });

    ReactTestUtils.Simulate.click(formDOM.querySelector('.va-growable-add-btn'));

    expect(formDOM.querySelector('.va-growable-background').textContent)
      .to.contain('A job title');
  });
});
