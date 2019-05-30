import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig1995 from '../../1995/config/form';
import formConfig5495 from '../../5495/config/form';

const pageTests = (page) => {
  const { schema, uiSchema } = page;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input').length).to.equal(3);
  });
  it('should render stop message', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_bankAccountChange_2'), {
      target: {
        value: 'stop'
      }
    });

    expect(formDOM.querySelector('.edu-dd-warning')).to.not.be.null;
  });
  it('should require bank account fields', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_bankAccountChange_1'), {
      target: {
        value: 'startUpdate'
      }
    });

    expect(formDOM.querySelectorAll('input').length).to.equal(7);

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(3);
  });
  it('should show error on bad routing number', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_bankAccountChange_1'), {
      target: {
        value: 'startUpdate'
      }
    });
    const routingNumber = formDOM.querySelector('#root_bankAccount_routingNumber');
    ReactTestUtils.Simulate.blur(routingNumber);

    ReactTestUtils.Simulate.change(routingNumber, {
      target: {
        value: '01234567'
      }
    });

    expect(formDOM.querySelector('.usa-input-error #root_bankAccount_routingNumber')).not.to.be.null;
  });
};

describe('Edu directDepositChangePage', () => {
  describe('1995', () => pageTests(formConfig1995.chapters.personalInformation.pages.directDeposit));
  describe('5495', () => pageTests(formConfig5495.chapters.personalInformation.pages.directDeposit));
});
