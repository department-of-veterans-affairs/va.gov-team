import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';

describe('Pensions', () => {
  function runTests(page, namePath) {
    const { schema, uiSchema, title } = page;
    let nameData = {
      [namePath]: {
        first: 'Jane',
        last: 'Doe'
      }
    };

    if (namePath === 'spouseFullName') {
      nameData = {
        maritalStatus: 'Married',
        marriages: [{
          [namePath]: {
            first: 'Jane',
            last: 'Doe'
          }
        }]
      };
    }

    it('should render', () => {
      const form = ReactTestUtils.renderIntoDocument(
        <DefinitionTester
          schema={schema}
          data={nameData}
          definitions={formConfig.defaultDefinitions}
          uiSchema={uiSchema}/>
      );
      const formDOM = getFormDOM(form);

      expect(formDOM.querySelectorAll('input,select').length).to.equal(2);

      expect(formDOM.querySelector('.pensions-disclosure-name').textContent).to.contain('Jane Doe');
    });

    it('should reveal expenses fields', () => {
      const form = ReactTestUtils.renderIntoDocument(
        <DefinitionTester
          schema={schema}
          data={nameData}
          definitions={formConfig.defaultDefinitions}
          uiSchema={uiSchema}/>
      );
      const formDOM = getFormDOM(form);

      formDOM.fillData(`#root_view\\:${namePath.startsWith('spouse') ? 'spouseHas' : 'has'}OtherExpensesYes`, 'Y');

      expect(formDOM.querySelectorAll('input,select').length).to.equal(8);
    });

    if (!namePath.startsWith('spouse')) {
      it('should render title on review page', () => {
        const form = ReactTestUtils.renderIntoDocument(
          <DefinitionTester
            reviewMode
            title={title}
            schema={schema}
            data={nameData}
            definitions={formConfig.defaultDefinitions}
            uiSchema={uiSchema}/>
        );
        const formDOM = getFormDOM(form);

        expect(formDOM.querySelector('.form-review-panel-page-header').textContent).to.contain('Jane Doe');
      });
    }

    it('should not submit empty form', () => {
      const onSubmit = sinon.spy();
      const form = ReactTestUtils.renderIntoDocument(
        <DefinitionTester
          schema={schema}
          definitions={formConfig.defaultDefinitions}
          data={nameData}
          onSubmit={onSubmit}
          uiSchema={uiSchema}/>
      );

      const formDOM = getFormDOM(form);

      formDOM.submitForm(form);

      expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(1);
      expect(onSubmit.called).to.be.false;
    });

    it('should add another expense', () => {
      const onSubmit = sinon.spy();
      const form = ReactTestUtils.renderIntoDocument(
        <DefinitionTester
          schema={schema}
          definitions={formConfig.defaultDefinitions}
          data={nameData}
          onSubmit={onSubmit}
          uiSchema={uiSchema}/>
      );

      const formDOM = getFormDOM(form);

      formDOM.fillData(`#root_view\\:${namePath.startsWith('spouse') ? 'spouseHas' : 'has'}OtherExpensesYes`, 'Y');

      formDOM.fillData(`#root_${namePath.startsWith('spouse') ? 'spouseOtherExpenses' : 'otherExpenses'}_0_amount`, '12');
      formDOM.fillData(`#root_${namePath.startsWith('spouse') ? 'spouseOtherExpenses' : 'otherExpenses'}_0_purpose`, 'procedure');
      formDOM.fillDate(`root_${namePath.startsWith('spouse') ? 'spouseOtherExpenses' : 'otherExpenses'}_0_date`, '2001-12-11');
      formDOM.fillData(`#root_${namePath.startsWith('spouse') ? 'spouseOtherExpenses' : 'otherExpenses'}_0_paidTo`, 'doctor');

      formDOM.click('.va-growable-add-btn');

      expect(formDOM.querySelector('.va-growable-background').textContent)
        .to.contain('$12');
    });

    it('should submit with valid data', () => {
      const onSubmit = sinon.spy();
      const form = ReactTestUtils.renderIntoDocument(
        <DefinitionTester
          schema={schema}
          definitions={formConfig.defaultDefinitions}
          data={nameData}
          onSubmit={onSubmit}
          uiSchema={uiSchema}/>
      );

      const formDOM = getFormDOM(form);

      formDOM.fillData(`#root_view\\:${namePath.startsWith('spouse') ? 'spouseHas' : 'has'}OtherExpensesNo`, 'N');

      formDOM.submitForm(form);

      expect(formDOM.querySelectorAll('.usa-input-error')).to.be.empty;

      expect(onSubmit.called).to.be.true;
    });
  }
  describe('Other expenses', () => {
    runTests(formConfig.chapters.financialDisclosure.pages.otherExpenses, 'veteranFullName');
  });
  describe('Spouse other expenses', () => {
    runTests(formConfig.chapters.financialDisclosure.pages.spouseOtherExpenses, 'spouseFullName');
  });
  describe('Dependent other expenses', () => {
    const page = formConfig.chapters.financialDisclosure.pages.dependentsOtherExpenses;
    runTests({
      title: page.title,
      schema: page.schema.properties.dependents.items,
      uiSchema: page.uiSchema.dependents.items
    }, 'fullName');
  });
});
