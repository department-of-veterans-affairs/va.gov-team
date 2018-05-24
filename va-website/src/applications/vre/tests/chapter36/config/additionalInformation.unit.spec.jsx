import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, selectCheckbox, selectRadio } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../chapter36/config/form.js';

describe('VRE chapter 36 applicant additional information', () => {
  const { schema, uiSchema } = formConfig.chapters.additionalInformation.pages.additionalInformation;
  it('renders Veteran view', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{
          'view:isVeteran': true
        }}
        formData={{}}
        uiSchema={uiSchema}/>
    );
    selectCheckbox(form, 'root_previousBenefitApplications_other', true);
    expect(form.find('input').length).to.equal(4);
  });

  it('renders spouse view', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{
          'view:isVeteran': false,
          applicantRelationshipToVeteran: 'Spouse'
        }}
        formData={{}}
        uiSchema={uiSchema}/>
    );

    selectRadio(form, 'root_divorceOrAnnulmentPending', 'Y');
    selectCheckbox(form, 'root_previousBenefitApplications_dic', true);

    expect(form.find('input').length).to.equal(9);
    expect(form.find('select').length).to.equal(1);
  });

  it('renders surviving spouse view', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{
          'view:isVeteran': false,
          applicantRelationshipToVeteran: 'Surviving spouse'
        }}
        formData={{}}
        uiSchema={uiSchema}/>
    );

    selectRadio(form, 'root_remarried', 'Y');
    selectCheckbox(form, 'root_previousBenefitApplications_dic', true);

    expect(form.find('input').length).to.equal(9);
    expect(form.find('select').length).to.equal(1);
  });


  it('submits without info', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{
          'view:isVeteran': true
        }}
        formData={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    form.find('form').simulate('submit');

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
