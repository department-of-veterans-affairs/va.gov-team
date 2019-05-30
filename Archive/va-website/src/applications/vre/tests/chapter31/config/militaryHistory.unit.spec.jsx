import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../chapter31/config/form.js';

describe('VRE chapter 31 military history', () => {
  const { schema, uiSchema } = formConfig.chapters.militaryHistory.pages.militaryHistory;
  it('renders military info', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        formData={{}}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(12);
    expect(form.find('select').length).to.equal(5);
  });

  it('renders military info', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        formData={{}}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(12);
    expect(form.find('select').length).to.equal(5);
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
    fillData(form, 'input#root_serviceHistory_0_serviceBranch', 'Army');
    fillData(form, 'select#root_serviceHistory_0_dateRange_fromMonth', '1');
    fillData(form, 'select#root_serviceHistory_0_dateRange_fromDay', '3');
    fillData(form, 'input#root_serviceHistory_0_dateRange_fromYear', '1950');
    fillData(form, 'select#root_serviceHistory_0_dateRange_toMonth', '1');
    fillData(form, 'select#root_serviceHistory_0_dateRange_toDay', '3');
    fillData(form, 'input#root_serviceHistory_0_dateRange_toYear', '1955');
    fillData(form, 'select#root_serviceHistory_0_dischargeType', 'honorable');

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('does not submit without info', () => {
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
    expect(form.find('.usa-input-error').length).to.equal(4);

    expect(onSubmit.called).to.be.false;
  });
});
