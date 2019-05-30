import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';

describe('authorization for representative access to records', () => {
  const { schema, uiSchema } = formConfig.chapters.authorizationForRepresentativeAccessToRecords.pages.authorizationForRepresentativeAccessToRecords;
  it('should render', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input[type="checkbox"]').length).to.equal(1);
  });

  it('should continue without any check boxes filled in', () => {
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

    expect(form.find('.usa-input-error').length).to.equal(0);
    expect(onSubmit.called).to.be.true;
  });
});
