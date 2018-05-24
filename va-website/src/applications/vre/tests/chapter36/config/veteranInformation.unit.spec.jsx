import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../chapter36/config/form.js';

describe('VRE chapter 36 veteran information', () => {
  const { schema, uiSchema } = formConfig.chapters.veteranInformation.pages.veteranInformation;
  it('renders veteran information fields', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{
          'view:isVeteran': true
        }}
        formData={{}}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(8);
    expect(form.find('select').length).to.equal(3);
  });

  it('renders veteran date of death field when view:isVeteran is false', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{
          'view:isVeteran': false
        }}
        formData={{}}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(7);
    expect(form.find('select').length).to.equal(5);
  });

  it('renders veteran gender when view:isVeteran is true', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{
          'view:isVeteran': true
        }}
        formData={{}}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(8);
    expect(form.find('select').length).to.equal(3);
  });

  it('does not submit without required veteran information', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{
          'view:isVeteran': true
        }}
        formData={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(6);

    expect(onSubmit.called).to.be.false;
  });

  it('submits with only required information with ssn', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{
          'view:isVeteran': true
        }}
        formData={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    fillData(form, 'input#root_veteranFullName_first', 'test');
    fillData(form, 'input#root_veteranFullName_last', 'test2');
    fillData(form, 'select#root_veteranDateOfBirthMonth', '1');
    fillData(form, 'select#root_veteranDateOfBirthDay', '3');
    fillData(form, 'input#root_veteranDateOfBirthYear', '1950');
    fillData(form, 'input#root_veteranSocialSecurityNumber', '424242424');
    fillData(form, 'input#root_veteranGender_0', 'Female');

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('submits with only required information with va file number', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{
          'view:isVeteran': false
        }}
        formData={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    fillData(form, 'input#root_veteranFullName_first', 'test');
    fillData(form, 'input#root_veteranFullName_last', 'test2');
    fillData(form, 'select#root_veteranDateOfBirthMonth', '1');
    fillData(form, 'select#root_veteranDateOfBirthDay', '3');
    fillData(form, 'input#root_veteranDateOfBirthYear', '1950');
    fillData(form, 'input#root_veteranVaFileNumber', 'c12345678');
    fillData(form, 'select#root_veteranDateOfDeathMIAPOWMonth', '1');
    fillData(form, 'select#root_veteranDateOfDeathMIAPOWDay', '3');
    fillData(form, 'input#root_veteranDateOfDeathMIAPOWYear', '1950');

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
