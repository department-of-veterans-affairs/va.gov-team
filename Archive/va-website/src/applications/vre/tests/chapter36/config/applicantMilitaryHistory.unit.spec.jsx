import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../chapter36/config/form.js';

describe('VRE chapter 36 applicant military history', () => {
  const { schema, uiSchema } = formConfig.chapters.militaryHistory.pages.militaryHistory;
  it('renders military question', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        formData={{}}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(2);
  });

  it('renders military history fields if has service', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        formData={{}}
        uiSchema={uiSchema}/>
    );

    fillData(form, 'input[id="root_view:hasMilitaryHistoryYes"]', 'Y');

    expect(form.find('input').length).to.equal(5);
    expect(form.find('select').length).to.equal(5);
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
        data={{
          'view:isVeteran': false
        }}
        formData={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    fillData(form, 'input[id="root_view:hasMilitaryHistoryNo"]', 'N');

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
