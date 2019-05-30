import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData, selectRadio } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('Pre-need applicant information', () => {
  const { schema, uiSchema } = formConfig.chapters.applicantInformation.pages.applicantInformation;

  it('should render', () => {
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(10);
    expect(form.find('select').length).to.equal(3);
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

    expect(form.find('.usa-input-error').length).to.equal(5);
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

    fillData(form, 'input#root_application_claimant_name_first', 'test');
    fillData(form, 'input#root_application_claimant_name_last', 'test2');
    fillData(form, 'input#root_application_claimant_ssn', '234443344');
    fillData(form, 'select#root_application_claimant_dateOfBirthMonth', '2');
    fillData(form, 'select#root_application_claimant_dateOfBirthDay', '2');
    fillData(form, 'input#root_application_claimant_dateOfBirthYear', '2001');
    selectRadio(form, 'root_application_claimant_relationshipToVet', '1');

    form.find('form').simulate('submit');

    expect(onSubmit.called).to.be.true;
  });

  it('should reveal info message', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    expect(form.find('.usa-alert-info').exists()).to.be.false;

    selectRadio(form, 'root_application_claimant_relationshipToVet', '1');

    expect(form.find('.usa-alert-info').exists()).to.be.true;
  });
});
