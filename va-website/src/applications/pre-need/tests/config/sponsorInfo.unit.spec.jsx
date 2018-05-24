import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData, selectRadio } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('Pre-need sponsor information', () => {
  const { schema, uiSchema } = formConfig.chapters.sponsorInformation.pages.sponsorInformation;

  it('should render', () => {
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(19);
    expect(form.find('select').length).to.equal(4);
  });

  it('should not submit empty form', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(7);
    expect(onSubmit.called).to.be.false;
  });

  it('should submit with required information', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    fillData(form, 'input#root_application_veteran_currentName_first', 'test');
    fillData(form, 'input#root_application_veteran_currentName_last', 'test2');
    fillData(form, 'input#root_application_veteran_ssn', '234443344');
    fillData(form, 'select#root_application_veteran_dateOfBirthMonth', '2');
    fillData(form, 'select#root_application_veteran_dateOfBirthDay', '2');
    fillData(form, 'input#root_application_veteran_dateOfBirthYear', '2001');
    selectRadio(form, 'root_application_veteran_gender', 'Female');
    selectRadio(form, 'root_application_veteran_maritalStatus', 'Single');
    fillData(form, 'select#root_application_veteran_militaryStatus', 'A');
    selectRadio(form, 'root_application_veteran_isDeceased', 'no');

    form.find('form').simulate('submit');

    expect(onSubmit.called).to.be.true;
  });

  it('should reveal date of death question', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(19);
    expect(form.find('select').length).to.equal(4);

    selectRadio(form, 'root_application_veteran_isDeceased', 'yes');
    expect(form.find('input').length).to.equal(20);
    expect(form.find('select').length).to.equal(6);
  });
});
