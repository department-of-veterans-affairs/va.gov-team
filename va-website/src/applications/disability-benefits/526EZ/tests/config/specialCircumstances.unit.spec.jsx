import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';

describe('Disability benefits 526EZ special circumstances', () => {
  const { schema, uiSchema } = formConfig.chapters.veteranDetails.pages.specialCircumstances;
  it('renders special circumstances form', () => {
    const onSubmit = sinon.spy();
    const form = mount(<DefinitionTester
      onSubmit={onSubmit}
      definitions={formConfig.defaultDefinitions}
      schema={schema}
      data={{}}
      formData={{}}
      uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(3);
  });

  it('submit empty form', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        onSubmit={onSubmit}
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        formData={{}}
        uiSchema={uiSchema}/>
    );

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
