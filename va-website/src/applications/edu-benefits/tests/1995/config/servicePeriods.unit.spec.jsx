import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../1995/config/form';

describe('Edu 1995 servicePeriods', () => {
  const { schema, uiSchema } = formConfig.chapters.militaryService.pages.servicePeriods;
  const definitions = formConfig.defaultDefinitions;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}
        definitions={definitions}/>
    );

    expect(ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input'))
      .to.not.be.empty;
  });

  it('should render service fields', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}
        definitions={definitions}/>
    );
    const formDOM = findDOMNode(form);
    const newServiceInput = formDOM.querySelector('input[type=radio]');

    // just yes/no
    expect(ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input').length).to.equal(2);
    expect(ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'select')).to.be.empty;

    ReactTestUtils.Simulate.change(newServiceInput, {
      target: {
        value: 'Y'
      }
    });

    // yes/no and service period fields (text box and two dates)
    expect(ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input').length).to.equal(5);
    expect(ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'select').length).to.equal(4);
  });

  it('should render service period view', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{
          'view:newService': true,
          toursOfDuty: [
            {
              serviceBranch: 'Army',
              dateRange: {
                to: '2010-01-01',
                from: '2008-01-03'
              }
            },
            {
              dateRange: {}
            }
          ]
        }}
        uiSchema={uiSchema}
        definitions={definitions}/>
    );
    const formDOM = findDOMNode(form);
    const firstPeriod = Array.from(formDOM.querySelectorAll('.va-growable-background'))[0];

    expect(firstPeriod.textContent).to.contain('Army');
    expect(firstPeriod.textContent).to.contain('01/03/2008 — 01/01/2010');
    expect(firstPeriod.querySelector('button').textContent).to.equal('Edit');
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
    const formDOM = findDOMNode(form);
    submitForm(form);

    expect(Array.from(formDOM.querySelectorAll('.usa-input-error'))).to.be.empty;
    expect(onSubmit.called).to.be.true;
  });
});
