import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData, selectRadio } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('686 veteran information', () => {
  const { schema, uiSchema } = formConfig.chapters.veteranInformation.pages.veteranInformation;

  it('should render', () => {
    const form = mount(
      <DefinitionTester
        schema={schema}
        data={{}}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    expect(form.find('input').length).to.equal(9);
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
    expect(form.find('.usa-input-error').length).to.equal(5);
    expect(onSubmit.called).to.be.false;
  });

  it('should submit form if applicant is veteran', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        data={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    fillData(form, 'input#root_veteranFullName_first', 'test');
    fillData(form, 'input#root_veteranFullName_last', 'test');
    fillData(form, 'input#root_veteranSSN', '222-23-2425');
    selectRadio(form, 'root_view:relationship', 'veteran');

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('should expand applicant info if applicant is not veteran', () => {
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        data={{}}
        uiSchema={uiSchema}/>
    );
    selectRadio(form, 'root_view:relationship', 'spouse');

    expect(form.find('input').length).to.equal(18);
  });


  it('should submit form if applicant is not veteran', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        data={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    fillData(form, 'input#root_veteranFullName_first', 'test');
    fillData(form, 'input#root_veteranFullName_last', 'test');
    fillData(form, 'input#root_veteranSSN', '222-23-2425');
    selectRadio(form, 'root_view:relationship', 'spouse');

    fillData(form, 'input[name="root_view:applicantInfo_claimantFullName_first"]', 'test');
    fillData(form, 'input[name="root_view:applicantInfo_claimantFullName_last"]', 'test');
    fillData(form, 'input[name="root_view:applicantInfo_ssn"]', '222-23-2425');
    fillData(form, 'input[name="root_view:applicantInfo_address_street"]', 'test st');
    fillData(form, 'input[name="root_view:applicantInfo_address_city"]', 'test city');
    fillData(form, 'select[name="root_view:applicantInfo_address_state"]', 'MA');
    fillData(form, 'input[name="root_view:applicantInfo_address_postalCode"]', '91111');
    fillData(form, 'input[name="root_view:applicantInfo_claimantEmail"]', 'test@gmail.com');

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
