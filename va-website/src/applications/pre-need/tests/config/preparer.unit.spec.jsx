import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData, selectRadio } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('Pre-need preparer info', () => {
  const { schema, uiSchema } = formConfig.chapters.contactInformation.pages.preparer;

  it('should render', () => {
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(2);
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

    expect(form.find('.usa-input-error').length).to.equal(1);
    expect(onSubmit.called).to.be.false;
  });

  it('should submit with required fields filled in', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    selectRadio(form, 'root_application_applicant_applicantRelationshipToClaimant', 'Self');
    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('should reveal name fields', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    selectRadio(form, 'root_application_applicant_applicantRelationshipToClaimant', 'Authorized Agent/Rep');

    expect(form.find('input').length).to.equal(10);
    expect(form.find('select').length).to.equal(3);
  });

  it('should not submit without required agent fields', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    selectRadio(form, 'root_application_applicant_applicantRelationshipToClaimant', 'Authorized Agent/Rep');

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(7);
    expect(onSubmit.called).to.be.false;
  });

  it('should submit with all required info filled in', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    selectRadio(form, 'root_application_applicant_applicantRelationshipToClaimant', 'Authorized Agent/Rep');
    fillData(form, 'input[name="root_application_applicant_view:applicantInfo_name_first"]', 'Jane');
    fillData(form, 'input[name="root_application_applicant_view:applicantInfo_name_last"]', 'Smith');
    fillData(form, 'input[name="root_application_applicant_view:applicantInfo_mailingAddress_street"]', '101 big sky st');
    fillData(form, 'input[name="root_application_applicant_view:applicantInfo_mailingAddress_city"]', 'Bozeman');
    fillData(form, 'select[name="root_application_applicant_view:applicantInfo_mailingAddress_state"]', 'MT');
    fillData(form, 'input[name="root_application_applicant_view:applicantInfo_mailingAddress_postalCode"]', '01060');
    fillData(form, 'input[name="root_application_applicant_view:applicantInfo_view:contactInfo_applicantPhoneNumber"]', '2344445555');

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
