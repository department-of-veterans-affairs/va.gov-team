import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('Pensions spouse marriage history', () => {
  const marriageHistory = formConfig.chapters.householdInformation.pages.spouseMarriageHistory;
  const uiSchema = marriageHistory.uiSchema.spouseMarriages.items;
  const schema = marriageHistory.schema.properties.spouseMarriages.items;
  const depends = marriageHistory.depends;

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

  it('should render labels with spouse name', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{
          marriages: [{
            spouseFullName: {
              first: 'Jane',
              last: 'Doe'
            }
          }]
        }}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('legend')[1].textContent).to.contain('Jane Doe');
    expect(formDOM.querySelector('label[for="root_locationOfMarriage"]').textContent).to.contain('Jane Doe');
  });

  describe('page title', () => {
    const pageTitle = marriageHistory.title;
    it('uses word for index', () => {
      expect(pageTitle({}, { pagePerItemIndex: 0 })).to.equal('Spouse’s first marriage');
    });
    it('uses number when at index ten or greater', () => {
      expect(pageTitle({}, { pagePerItemIndex: 10 })).to.equal('Spouse marriage 11');
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
    formDOM.fillData('#root_reasonForSeparation_1', 'Divorced');
    formDOM.fillData('#root_locationOfSeparation', 'A town');
    formDOM.fillData('#root_dateOfSeparationMonth', '3');
    formDOM.fillData('#root_dateOfSeparationDay', '3');
    formDOM.fillData('#root_dateOfSeparationYear', '2002');

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('depends should return true if married', () => {
    const result = depends({ maritalStatus: 'Married' });

    expect(result).to.be.true;
  });
});
