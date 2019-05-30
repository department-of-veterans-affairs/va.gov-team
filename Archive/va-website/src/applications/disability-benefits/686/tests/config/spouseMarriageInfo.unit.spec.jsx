import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData, fillDate } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

describe('686 spouse info', () => {
  const { schema, uiSchema, depends } = formConfig.chapters.currentSpouseInfo.pages.spouseInfo;

  it('should render', () => {
    const form = mount(
      <DefinitionTester
        schema={schema}
        data={{
          marriages: [{
            spouseFullName: {
              first: 'Jane',
              last: 'Doe'
            }
          }]
        }}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(7);
    expect(form.find('select').length).to.equal(2);
    expect(form.find('#root_spouseSocialSecurityNumber-label').text()).to.contain('Jane Doe');
  });

  it('should render spouse address and contrib fields', () => {
    const form = mount(
      <DefinitionTester
        schema={schema}
        data={{
          marriages: [{
            spouseFullName: {
              first: 'Jane',
              last: 'Doe'
            }
          }]
        }}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(7);
    expect(form.find('select').length).to.equal(2);

    fillData(form, '#root_liveWithSpouseNo', 'N');

    expect(form.find('input').length).to.equal(11);
    expect(form.find('select').length).to.equal(4);

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(8);
  });

  it('should render file number', () => {
    const form = mount(
      <DefinitionTester
        schema={schema}
        data={{
          marriages: [{
            spouseFullName: {
              first: 'Jane',
              last: 'Doe'
            }
          }]
        }}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );

    expect(form.find('select').length).to.equal(2);
    expect(form.find('input').length).to.equal(7);

    fillData(form, '#root_spouseIsVeteranYes', 'Y');

    expect(form.find('input').length).to.equal(8);
    expect(form.find('select').length).to.equal(2);
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

  it('should submit with valid data', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    fillDate(form, 'root_spouseDateOfBirth', '1980-03-21');
    fillData(form, 'input#root_spouseSocialSecurityNumber', '234432444');
    fillData(form, 'input#root_spouseIsVeteranNo', 'N');
    fillData(form, 'input#root_liveWithSpouseYes', 'Y');
    fillData(form, 'input[id="root_spouseMarriages"]', '2');

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('depends should return true if married', () => {
    const result = depends({ maritalStatus: 'Married' });

    expect(result).to.be.true;
  });
});
