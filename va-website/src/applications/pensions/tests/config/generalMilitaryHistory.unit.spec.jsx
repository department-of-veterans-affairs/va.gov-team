import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('Pensions general military history', () => {
  const { schema, uiSchema } = formConfig.chapters.militaryHistory.pages.general;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input,select').length).to.equal(3);
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

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(1);
    expect(onSubmit.called).to.be.false;
  });

  it('should reveal name fields', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input, select').length).to.equal(3);

    ReactTestUtils.Simulate.change(formDOM.querySelector('input[type="radio"]'), {
      target: {
        value: 'Y'
      }
    });

    expect(formDOM.querySelectorAll('input, select').length).to.equal(7);

    formDOM.submitForm();

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(2);
    expect(onSubmit.called).to.be.false;
  });

  it('should add another name', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input, select').length).to.equal(3);

    ReactTestUtils.Simulate.change(formDOM.querySelector('input[type="radio"]'), {
      target: {
        value: 'Y'
      }
    });

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_previousNames_0_first'), {
      target: {
        value: 'Jane'
      }
    });
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_previousNames_0_last'), {
      target: {
        value: 'Doe'
      }
    });
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_previousNames_0_suffix'), {
      target: {
        value: 'Jr.'
      }
    });
    ReactTestUtils.Simulate.click(formDOM.querySelector('.va-growable-add-btn'));

    expect(formDOM.querySelector('.va-growable-background').textContent)
      .to.contain('Jane Doe, Jr.');
  });
  it('should require combat after 9/11 question', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{
          servicePeriods: [{
            activeServiceDateRange: {
              to: '2006-05-06',
              from: '2007-03-04'
            }
          }]
        }}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input,select').length).to.equal(5);

    formDOM.submitForm();

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(2);
    expect(onSubmit.called).to.be.false;
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

    formDOM.fillData('#root_view\\:serveUnderOtherNamesNo', 'N');

    formDOM.submitForm();

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
