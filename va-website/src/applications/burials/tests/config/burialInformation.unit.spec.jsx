import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';

describe('Burials veteran burial information', () => {
  const { schema, uiSchema } = formConfig.chapters.veteranInformation.pages.burialInformation;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input, select, textarea').length).to.equal(10);
  });

  it('should show errors when required fields are empty', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);
    formDOM.submitForm();
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error')).length).to.equal(3);
    expect(onSubmit.called).not.to.be.true;
  });

  it('should show other text field', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.selectRadio('root_locationOfDeath_location', 'other');

    expect(formDOM.querySelectorAll('input, select, textarea').length).to.equal(11);
    formDOM.submitForm();
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error')).length).to.equal(3);
  });

  it('should submit when all required fields are filled in', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.fillDate('root_burialDate', '2001-12-12');
    formDOM.fillDate('root_deathDate', '2001-12-11');
    formDOM.selectRadio('root_locationOfDeath_location', 'other');
    formDOM.fillData('#root_locationOfDeath_other', 'House');

    formDOM.submitForm();
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error')).length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('should show warning if death date was more than 2 years ago', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    expect(formDOM.querySelector('.usa-alert')).to.be.null;
    formDOM.fillDate('root_burialDate', '2001-12-11');
    expect(formDOM.querySelector('.usa-alert')).to.not.be.null;
  });
});
