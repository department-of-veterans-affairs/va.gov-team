import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig5495 from '../../5495/config/form';
import formConfig5490 from '../../5490/config/form';
import commonDefinitions from 'vets-json-schema/dist/definitions.json';

const pageTests = (page) => {
  const { schema, uiSchema } = page;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={commonDefinitions}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const fields = Array.from(findDOMNode(form).querySelectorAll('input, select'));

    expect(fields.length).to.equal(2);
  });

  it('should expand', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={commonDefinitions}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    const applicantServedYes = Array.from(formDOM.querySelectorAll('input'))
      .find(input => input.id.startsWith('root_view:applicantServedYes'));

    ReactTestUtils.Simulate.change(applicantServedYes, {
      target: {
        checked: true
      }
    });

    const fields = Array.from(findDOMNode(form).querySelectorAll('input, select'));

    expect(fields.length).to.equal(10);
  });

  it('should not have required fields errors after choosing no', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={commonDefinitions}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);
    const applicantServedNo = Array.from(formDOM.querySelectorAll('input'))
      .find(input => input.id.startsWith('root_view:applicantServedNo'));

    ReactTestUtils.Simulate.change(applicantServedNo, {
      target: {
        checked: true
      }
    });
    submitForm(form);

    expect(formDOM.querySelector('.usa-input-error')).to.be.null;
  });

  it('should have required field errors when expanded', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={commonDefinitions}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    const applicantServedYes = Array.from(formDOM.querySelectorAll('input'))
      .find(input => input.id.startsWith('root_view:applicantServedYes'));

    ReactTestUtils.Simulate.change(applicantServedYes, {
      target: {
        checked: true
      }
    });

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(2);
  });

  it('should add another', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={commonDefinitions}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    const applicantServedYes = Array.from(formDOM.querySelectorAll('input'))
      .find(input => input.id.startsWith('root_view:applicantServedYes'));

    ReactTestUtils.Simulate.change(applicantServedYes, {
      target: {
        checked: true
      }
    });

    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_toursOfDuty_0_serviceBranch'), {
      target: {
        value: 'Army'
      }
    });
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_toursOfDuty_0_dateRange_fromMonth'), {
      target: {
        value: '1'
      }
    });
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_toursOfDuty_0_dateRange_fromDay'), {
      target: {
        value: '1'
      }
    });
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_toursOfDuty_0_dateRange_fromYear'), {
      target: {
        value: '2000'
      }
    });
    ReactTestUtils.Simulate.click(formDOM.querySelector('.va-growable-add-btn'));

    expect(formDOM.querySelector('.va-growable-background').textContent)
      .to.contain('Army');
  });
};

describe('Edu applicantServicePage', () => {
  describe('5495', () => pageTests(formConfig5495.chapters.applicantInformation.pages.applicantService));
  describe('5490', () => pageTests(formConfig5490.chapters.applicantInformation.pages.applicantService));
});
