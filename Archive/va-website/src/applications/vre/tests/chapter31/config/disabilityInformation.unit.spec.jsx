import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData, selectRadio } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../chapter31/config/form.js';

describe('VRE chapter 31 disability information', () => {
  const { schema, uiSchema } = formConfig.chapters.disabilityInformation.pages.disabilityInformation;
  it('renders disability information form', () => {
    const form = mount(<DefinitionTester
      definitions={formConfig.defaultDefinitions}
      schema={schema}
      data={{}}
      formData={{}}
      uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(4);
  });

  it('should not submit empty form', () => {
    const onSubmit = sinon.spy();
    const form = mount(<DefinitionTester
      definitions={formConfig.defaultDefinitions}
      schema={schema}
      data={{}}
      formData={{}}
      uiSchema={uiSchema}/>
    );

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(4);
    expect(onSubmit.called).to.be.false;
  });

  it('renders hospital information form when in hospital is true', () => {
    const form = mount(<DefinitionTester
      definitions={formConfig.defaultDefinitions}
      schema={schema}
      data={{}}
      formData={{}}
      uiSchema={uiSchema}/>
    );

    selectRadio(form, 'root_view:inHospital', 'Y');

    expect(form.find('input').length).to.equal(9);
    expect(form.find('select').length).to.equal(3);
  });

  it('should fill in hospital information', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        onSubmit={onSubmit}
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    fillData(form, 'select#root_disabilityRating', 10);
    fillData(form, 'input#root_disabilities', 'Back ache');
    fillData(form, 'input#root_vaRecordsOffice', 'Local office');
    selectRadio(form, 'root_view:inHospital', 'Y');
    fillData(form, 'input[id="root_view:hospital_hospitalName"]', 'Local hospital');
    fillData(form, 'input[id="root_view:hospital_hospitalAddress_street"]', 'Hospital Street');
    fillData(form, 'input[id="root_view:hospital_hospitalAddress_city"]', 'Hospital City');
    fillData(form, 'select[id="root_view:hospital_hospitalAddress_state"]', 'NY');
    fillData(form, 'input[id="root_view:hospital_hospitalAddress_postalCode"]', '23423');

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
