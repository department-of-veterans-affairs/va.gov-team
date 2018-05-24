import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';
import Form from '@department-of-veterans-affairs/react-jsonschema-form';

import { DefinitionTester } from '../../../../src/platform/testing/unit/schemaform-utils.jsx';
import uiSchema from '../../../../src/applications/common/schemaform/definitions/dateRange';
import { dateRange as schema, date } from 'vets-json-schema/dist/definitions.json';

function fillDate(find, toFrom, day, month, year) {
  ReactTestUtils.Simulate.change(find(`#root_${toFrom}Day`), {
    target: {
      value: day
    }
  });
  ReactTestUtils.Simulate.change(find(`#root_${toFrom}Month`), {
    target: {
      value: month
    }
  });
  ReactTestUtils.Simulate.change(find(`#root_${toFrom}Year`), {
    target: {
      value: year
    }
  });
}

describe('Schemaform definition dateRange', () => {
  it('should render dateRange', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={{ date }}
        uiSchema={uiSchema()}/>
    );

    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('label,legend').length).to.equal(8);
    expect(formDOM.querySelectorAll('input').length).to.equal(2);
    expect(formDOM.querySelectorAll('select').length).to.equal(4);
  });
  it('should render invalid dateRange error', () => {
    const dateRangeUISchema = uiSchema();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={{ date }}
        uiSchema={dateRangeUISchema}/>
    );

    const formDOM = findDOMNode(form);
    const find = formDOM.querySelector.bind(formDOM);
    fillDate(find, 'from', 4, 4, 2000);
    fillDate(find, 'to', 4, 4, 2001);

    ReactTestUtils.findRenderedComponentWithType(form, Form).onSubmit({
      preventDefault: f => f
    });

    expect(find('.usa-input-error-message').textContent).to.equal(`Error ${dateRangeUISchema['ui:errorMessages'].pattern}`);
  });
  it('should render dateRange title and messages', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={{ date }}
        uiSchema={uiSchema('My from date', 'My to date', 'My error')}/>
    );

    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('legend')[0].textContent).to.equal('My from date');
    expect(formDOM.querySelectorAll('legend')[1].textContent).to.equal('My to date');
  });
});
