import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester, selectCheckbox } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';
import initialData from '../schema/initialData.js';

describe('Disability benefits 526EZ evidence type', () => {
  const { schema, uiSchema, arrayPath } = formConfig.chapters.supportingEvidence.pages.evidenceType;
  it('renders evidence type form', () => {
    const onSubmit = sinon.spy();
    const form = mount(<DefinitionTester
      arrayPath={arrayPath}
      pagePerItemIndex={0}
      onSubmit={onSubmit}
      definitions={formConfig.defaultDefinitions}
      schema={schema}
      data={initialData}
      formData={initialData}
      uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(3);
  });

  it('should fill in evidence type information', () => {
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

    selectCheckbox(form, 'root_view:selectableEvidenceTypes_view:vaMedicalRecords', true);
    selectCheckbox(form, 'root_view:selectableEvidenceTypes_view:privateMedicalRecords', true);
    selectCheckbox(form, 'root_view:selectableEvidenceTypes_view:otherEvidence', true);

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error-message').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });

  it('should not allow submission if no evidence types selected', () => {
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

    expect(form.find('.usa-input-error-message').length).to.equal(0);
    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error-message').length).to.equal(1);
    expect(onSubmit.called).to.be.false;
  });
});
