import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData, selectRadio } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../chapter31/config/form.js';

describe('VRE chapter 31 work information', () => {
  const { schema, uiSchema } = formConfig.chapters.workInformation.pages.workInformation;
  it('renders work information form', () => {
    const form = mount(<DefinitionTester
      definitions={formConfig.defaultDefinitions}
      schema={schema}
      data={{}}
      formData={{}}
      uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(2);
  });

  it('renders job information form when working is true', () => {
    const form = mount(<DefinitionTester
      definitions={formConfig.defaultDefinitions}
      schema={schema}
      data={{}}
      formData={{}}
      uiSchema={uiSchema}/>
    );

    selectRadio(form, 'root_view:isWorking', 'Y');

    expect(form.find('input').length).to.equal(9);
    expect(form.find('select').length).to.equal(2);
  });

  it('submits with required information', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        onSubmit={onSubmit}
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    selectRadio(form, 'root_view:isWorking', 'Y');
    fillData(form, 'input#root_employer', 'foo employer');
    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('does not submit without required information', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        onSubmit={onSubmit}
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    selectRadio(form, 'root_view:isWorking', 'Y');

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(1);
    expect(onSubmit.called).to.be.false;
  });
});
