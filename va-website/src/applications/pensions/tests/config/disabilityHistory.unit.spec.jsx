import React from 'react';
import moment from 'moment';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';

describe('Pensions disability history', () => {
  const { schema, uiSchema, depends } = formConfig.chapters.workHistory.pages.disabilityHistory;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input, select, textarea').length).to.equal(6);
  });
  it('should show errors when required fields are empty', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);
    formDOM.submitForm();
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error')).length).to.equal(3);
    expect(onSubmit.called).not.to.be.true;
  });
  it('should add another disability', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_disabilities_0_name'), {
      target: {
        value: 'Back pain'
      }
    });

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_disabilities_0_disabilityStartDateMonth'), {
      target: {
        value: '1'
      }
    });
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_disabilities_0_disabilityStartDateDay'), {
      target: {
        value: '1'
      }
    });
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_disabilities_0_disabilityStartDateYear'), {
      target: {
        value: '2003'
      }
    });
    ReactTestUtils.Simulate.click(formDOM.querySelector('.va-growable-add-btn'));

    expect(formDOM.querySelector('.va-growable-background').textContent)
      .to.contain('Back pain');
  });
  it('should submit with valid data', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    formDOM.fillData('#root_disabilities_0_name', 'Back pain');

    formDOM.fillData('#root_disabilities_0_disabilityStartDateMonth', '1');
    formDOM.fillData('#root_disabilities_0_disabilityStartDateDay', '1');
    formDOM.fillData('#root_disabilities_0_disabilityStartDateYear', '2003');
    formDOM.setYesNo('#root_view\\:hasVisitedVAMCNo', false);

    formDOM.submitForm();
    expect(onSubmit.called).to.be.true;
  });

  it('should add another vamc', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    formDOM.setYesNo('#root_view\\:hasVisitedVAMCYes', true);
    formDOM.fillData('#root_vamcTreatmentCenters_0_location', 'Leeds, MA');
    ReactTestUtils.Simulate.click(formDOM.querySelectorAll('.va-growable-add-btn')[1]);

    expect(formDOM.querySelector('.va-growable-background').textContent)
      .to.contain('Leeds, MA');
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
