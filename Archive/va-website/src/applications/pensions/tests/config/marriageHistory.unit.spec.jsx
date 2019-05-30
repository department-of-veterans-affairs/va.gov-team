import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('Pensions marriage history', () => {
  const marriageHistory = formConfig.chapters.householdInformation.pages.marriageHistory;
  const uiSchema = marriageHistory.uiSchema.marriages.items;
  const schema = marriageHistory.schema.properties.marriages.items;

  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input,select').length).to.equal(19);
  });

  describe('hideIf current marriage', () => {
    const hideIfCurrentMarriage = marriageHistory.uiSchema.marriages.items['view:pastMarriage']['ui:options'].hideIf;

    it('hides if married and last', () => {
      const result = hideIfCurrentMarriage({
        maritalStatus: 'Married',
        marriages: [{}]
      }, 0);

      expect(result).to.be.true;
    });

    it('does not hide if married and not last', () => {
      const result = hideIfCurrentMarriage({
        maritalStatus: 'Married',
        marriages: [{}, {}]
      }, 0);

      expect(result).to.be.false;
    });

    it('does not hide if not married', () => {
      const result = hideIfCurrentMarriage({
        marriages: [{}]
      }, 0);

      expect(result).to.be.false;
    });
  });

  describe('page title', () => {
    const pageTitle = marriageHistory.title;
    it('uses word for index', () => {
      expect(pageTitle({}, { pagePerItemIndex: 0 })).to.equal('First marriage');
    });
    it('uses number when at index ten or greater', () => {
      expect(pageTitle({}, { pagePerItemIndex: 10 })).to.equal('Marriage 11');
    });
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

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(8);
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

    formDOM.fillData('#root_spouseFullName_first', 'test');
    formDOM.fillData('#root_spouseFullName_last', 'test');
    formDOM.fillData('#root_dateOfMarriageMonth', '3');
    formDOM.fillData('#root_dateOfMarriageDay', '3');
    formDOM.fillData('#root_dateOfMarriageYear', '2001');
    formDOM.fillData('#root_locationOfMarriage', 'The Pacific');
    formDOM.fillData('#root_marriageType_4', 'Other');
    formDOM.fillData('#root_otherExplanation', 'Something');
    formDOM.fillData('#root_view\\:pastMarriage_reasonForSeparation_1', 'Divorced');
    formDOM.fillData('#root_view\\:pastMarriage_dateOfSeparationMonth', '3');
    formDOM.fillData('#root_view\\:pastMarriage_dateOfSeparationDay', '3');
    formDOM.fillData('#root_view\\:pastMarriage_dateOfSeparationYear', '2002');
    formDOM.fillData('#root_view\\:pastMarriage_locationOfSeparation', 'The Atlantic');

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
