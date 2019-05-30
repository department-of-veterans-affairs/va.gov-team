import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../chapter36/config/form.js';

describe('VRE chapter 36 contact information', () => {
  const { schema, uiSchema } = formConfig.chapters.contactInformation.pages.contactInformation;
  it('renders contact information form', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        formData={{}}
        uiSchema={uiSchema}/>
    );
    expect(form.find('input').length).to.equal(4);
  });

  it('submits with info', () => {
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
    fillData(form, 'input#root_applicantPrimaryPhone', '8017777777');
    fillData(form, 'input#root_applicantOtherPhone', '8017777777');
    fillData(form, 'input#root_applicantEmail', 'test@test.com');
    fillData(form, 'input[name="root_view:confirmEmail"]', 'test@test.com');

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('does not submit with non matching email addresses', () => {
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
    fillData(form, 'input#root_applicantEmail', 'test@test.com');
    fillData(form, 'input[name="root_view:confirmEmail"]', 'test@nottest.com');

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(1);
    expect(onSubmit.called).to.be.false;
  });
});
