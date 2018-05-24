import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig1990n from '../../1990n/config/form';
import formConfig1990e from '../../1990e/config/form';
import formConfig5490 from '../../5490/config/form';

const pageTests = (page, requiredErrors = 0) => {
  const { schema, uiSchema } = page;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input').length).to.equal(4);
  });

  it('should show correct number of required errors', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);
    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(requiredErrors);
  });

  it('should submit form', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    submitForm(form);

    if (requiredErrors > 0) {
      expect(onSubmit.called).to.be.false;
    } else {
      expect(onSubmit.called).to.be.true;
    }
  });
};

describe('Edu directDepositChangePage', () => {
  describe('1990e', () =>
    pageTests(formConfig1990e.chapters.personalInformation.pages.directDeposit));
  describe('1990n', () =>
    pageTests(formConfig1990n.chapters.personalInformation.pages.directDeposit, 3));
  describe('5490', () =>
    pageTests(formConfig5490.chapters.personalInformation.pages.directDeposit));
});
