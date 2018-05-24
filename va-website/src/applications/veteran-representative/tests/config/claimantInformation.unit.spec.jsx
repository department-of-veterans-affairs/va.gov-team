import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';

describe('claimant information', () => {
  const { schema, uiSchema } = formConfig.chapters.claimantInformation.pages.claimantInformation;
  it('should render', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(11);
    expect(form.find('select').length).to.equal(6);
  });

  it('should not continue without required info', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        onSubmit={onSubmit}
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(8);
    expect(onSubmit.called).to.be.false;
  });

  it('should continue with all info filled in', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        onSubmit={onSubmit}
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    fillData(form, 'input#root_claimantFullName_first', 'Bob');
    fillData(form, 'input#root_claimantFullName_last', 'Test');
    fillData(form, 'select#root_relationship', 'Child');
    fillData(form, 'select#root_claimantAddress_country', 'USA');
    fillData(form, 'input#root_claimantAddress_street', '123 Test St');
    fillData(form, 'input#root_claimantAddress_city', 'Anywhere');
    fillData(form, 'select#root_claimantAddress_state', 'MA');
    fillData(form, 'input#root_claimantAddress_postalCode', '01040');
    fillData(form, 'input#root_claimantEmail', 'bob@test.com');
    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

});
