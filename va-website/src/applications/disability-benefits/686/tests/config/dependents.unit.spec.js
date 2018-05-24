import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData, selectRadio } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('686 dependent info', () => {
  const { schema, uiSchema } = formConfig.chapters.unMarriedChildren.pages.dependents;

  it('should render', () => {
    const form = mount(
      <DefinitionTester
        schema={schema}
        data={{}}
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

  it('should submit form if applicant has no dependents', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        data={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    selectRadio(form, 'root_view:hasUnmarriedChildren', 'N');

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('should expand dependent info if applicant has dependents', () => {
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        data={{}}
        uiSchema={uiSchema}/>
    );
    selectRadio(form, 'root_view:hasUnmarriedChildren', 'Y');

    expect(form.find('input').length).to.equal(6);
  });

  it('should submit form with all required fills filled', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        data={{}}
        uiSchema={uiSchema}
        onSubmit={onSubmit}/>
    );
    selectRadio(form, 'root_view:hasUnmarriedChildren', 'Y');
    fillData(form, 'input#root_dependents_0_fullName_first', 'test');
    fillData(form, 'input#root_dependents_0_fullName_last', 'test');
    fillData(form, 'select#root_dependents_0_childDateOfBirthMonth', '1');
    fillData(form, 'select#root_dependents_0_childDateOfBirthDay', '31');
    fillData(form, 'input#root_dependents_0_childDateOfBirthYear', '1986');
    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('should add another dependent', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    selectRadio(form, 'root_view:hasUnmarriedChildren', 'Y');
    fillData(form, 'input#root_dependents_0_fullName_first', 'test');
    fillData(form, 'input#root_dependents_0_fullName_last', 'test');
    fillData(form, 'select#root_dependents_0_childDateOfBirthMonth', '1');
    fillData(form, 'select#root_dependents_0_childDateOfBirthDay', '31');
    fillData(form, 'input#root_dependents_0_childDateOfBirthYear', '1986');
    form.find('.va-growable-add-btn').simulate('click');
    expect(form.find('.va-growable-background').length).to.equal(2);
  });
});

