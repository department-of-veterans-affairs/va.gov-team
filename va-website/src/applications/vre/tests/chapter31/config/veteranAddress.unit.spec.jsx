import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData, selectRadio } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../chapter31/config/form.js';

describe('VRE chapter 31 applicant address', () => {
  const { schema, uiSchema } = formConfig.chapters.contactInformation.pages.veteranAddress;
  it('renders applicant address form', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        formData={{}}
        uiSchema={uiSchema}/>
    );
    expect(form.find('input').length).to.equal(6);
    expect(form.find('select').length).to.equal(2);
  });

  it('does not submit without required info', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        formData={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(5);

    expect(onSubmit.called).to.be.false;
  });

  it('submits with veteran address', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        formData={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    fillData(form, 'select#root_veteranAddress_country', 'USA');
    fillData(form, 'input#root_veteranAddress_street', '123 test st');
    fillData(form, 'input#root_veteranAddress_city', 'Los Angeles');
    fillData(form, 'select#root_veteranAddress_state', 'CA');
    fillData(form, 'input#root_veteranAddress_postalCode', '90034');
    selectRadio(form, 'root_view:isMoving', 'N');

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('submits with veteranAddress and veteranNewAddress', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        formData={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    fillData(form, 'select#root_veteranAddress_country', 'USA');
    fillData(form, 'input#root_veteranAddress_street', '123 test st');
    fillData(form, 'input#root_veteranAddress_city', 'Los Angeles');
    fillData(form, 'select#root_veteranAddress_state', 'CA');
    fillData(form, 'input#root_veteranAddress_postalCode', '90034');
    selectRadio(form, 'root_view:isMoving', 'Y');
    fillData(form, 'select#root_veteranNewAddress_country', 'USA');
    fillData(form, 'input#root_veteranNewAddress_street', '123 test st');
    fillData(form, 'input#root_veteranNewAddress_city', 'Los Angeles');
    fillData(form, 'select#root_veteranNewAddress_state', 'CA');
    fillData(form, 'input#root_veteranNewAddress_postalCode', '90034');

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
