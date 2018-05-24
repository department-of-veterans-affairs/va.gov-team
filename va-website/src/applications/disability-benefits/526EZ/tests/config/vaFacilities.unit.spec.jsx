import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, fillData, fillDate } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';
import initialData from '../schema/initialData.js';

describe('Disability benefits 526EZ VA facility', () => {
  const { schema, uiSchema, arrayPath } = formConfig.chapters.supportingEvidence.pages.vaFacilities;
  it('renders VA facility form', () => {
    const form = mount(<DefinitionTester
      arrayPath={arrayPath}
      pagePerItemIndex={0}
      definitions={formConfig.defaultDefinitions}
      schema={schema}
      data={initialData}
      formData={initialData}
      uiSchema={uiSchema}/>
    );

    expect(form.find('select').length).to.equal(4);
    expect(form.find('input').length).to.equal(3);
  });

  it('should add a VA facility', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        arrayPath={arrayPath}
        pagePerItemIndex={0}
        onSubmit={onSubmit}
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={initialData}
        formData={initialData}
        uiSchema={uiSchema}/>
    );

    fillDate(form, 'root_treatments_0_treatmentDateRange_from', '1950-1-3');
    fillDate(form, 'root_treatments_0_treatmentDateRange_to', '1955-1-3');
    fillData(form, 'input#root_treatments_0_treatmentCenterName', 'Local facility');

    form.find('.va-growable-add-btn').simulate('click');
    expect(form.find('.usa-input-error').length).to.equal(0);

    fillDate(form, 'root_treatments_1_treatmentDateRange_from', '1951-1-3');
    fillDate(form, 'root_treatments_1_treatmentDateRange_to', '1955-1-3');
    fillData(form, 'input#root_treatments_1_treatmentCenterName', 'Local facility');

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
