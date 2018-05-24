import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../src/platform/testing/unit/schemaform-utils.jsx';
import applicantInformation from '../../../../src/applications/common/schemaform/pages/applicantInformation';

import fullSchema1990e from 'vets-json-schema/dist/22-1990E-schema.json';

function fillInformation(find) {
  ReactTestUtils.Simulate.change(find('#root_relativeFullName_first'), {
    target: {
      value: 'Test'
    }
  });
  ReactTestUtils.Simulate.change(find('#root_relativeFullName_last'), {
    target: {
      value: 'Test'
    }
  });
  ReactTestUtils.Simulate.change(find('#root_relativeSocialSecurityNumber'), {
    target: {
      value: '987654321'
    }
  });
  ReactTestUtils.Simulate.change(find('#root_relativeDateOfBirthMonth'), {
    target: {
      value: '1'
    }
  });
  ReactTestUtils.Simulate.change(find('#root_relativeDateOfBirthDay'), {
    target: {
      value: '1'
    }
  });
  ReactTestUtils.Simulate.change(find('#root_relativeDateOfBirthYear'), {
    target: {
      value: '1980'
    }
  });
}

describe('Edu basic applicantInformation', () => {
  const { schema, uiSchema } = applicantInformation(fullSchema1990e);
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input, select').length).to.equal(13);
  });
  it('should show errors when required fields are empty', () => {
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
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error')).length).to.equal(5);
    expect(onSubmit.called).not.to.be.true;
  });
  it('should conditionally require SSN', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);
    const find = formDOM.querySelector.bind(formDOM);

    // Error appears when no SSN is provided
    fillInformation(find);
    ReactTestUtils.Simulate.change(find('#root_relationship_0'), {
      target: {
        checked: true
      }
    });
    ReactTestUtils.Simulate.change(find('#root_relativeSocialSecurityNumber'), {
      target: {
        value: null
      }
    });
    submitForm(form);
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error'))).not.to.be.empty;

    // Error disappears when no-SSN is checked
    const noSSNBox = ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input')
      .find(input => input.id === 'root_view:noSSN');
    ReactTestUtils.Simulate.change(noSSNBox,
      {
        target: {
          checked: true
        }
      });
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error'))).to.be.empty;
  });
});
