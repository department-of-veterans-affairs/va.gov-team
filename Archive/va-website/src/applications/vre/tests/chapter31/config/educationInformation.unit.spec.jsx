import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../chapter31/config/form.js';

describe('VRE chapter 31 education information', () => {
  const { schema, uiSchema } = formConfig.chapters.educationInformation.pages.educationInformation;
  it('renders education info', () => {
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
    expect(form.find('.usa-input-error').length).to.equal(1);

    expect(onSubmit.called).to.be.false;
  });

  it('submits with required info', () => {
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

    fillData(form, 'input#root_yearsOfEducation', '10');
    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('submits with programs filled out', () => {
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
    fillData(form, 'input#root_yearsOfEducation', '10');
    fillData(form, 'input#root_previousPrograms_0_program', 'Test');
    fillData(form, 'input#root_previousPrograms_0_yearStarted', '2001');
    fillData(form, 'input#root_previousPrograms_0_yearLeft', '2003');

    form.find('.va-growable-add-btn').simulate('click');

    fillData(form, 'input#root_previousPrograms_1_program', 'Test2');
    fillData(form, 'input#root_previousPrograms_1_yearStarted', '2003');
    fillData(form, 'input#root_previousPrograms_1_yearLeft', '2004');

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
