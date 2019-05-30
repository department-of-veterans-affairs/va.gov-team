import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData, selectRadio } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('Pre-need veteran information', () => {
  const { schema, uiSchema } = formConfig.chapters.applicantInformation.pages.veteranInformation;

  it('should render', () => {
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(10);
    expect(form.find('select').length).to.equal(1);
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

    expect(form.find('.usa-input-error').length).to.equal(3);
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

    selectRadio(form, 'root_application_veteran_gender', 'Female');
    selectRadio(form, 'root_application_veteran_maritalStatus', 'Single');
    fillData(form, 'select#root_application_veteran_militaryStatus', 'A');

    form.find('form').simulate('submit');

    expect(onSubmit.called).to.be.true;
  });

  it('should submit with all info', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    fillData(form, 'input#root_application_veteran_militaryServiceNumber', '1234');
    fillData(form, 'input#root_application_veteran_vaClaimNumber', '12345678');
    fillData(form, 'input#root_application_veteran_placeOfBirth', 'Amherst, MA');
    selectRadio(form, 'root_application_veteran_gender', 'Female');
    selectRadio(form, 'root_application_veteran_maritalStatus', 'Single');
    fillData(form, 'select#root_application_veteran_militaryStatus', 'A');

    form.find('form').simulate('submit');

    expect(onSubmit.called).to.be.true;
  });
});
