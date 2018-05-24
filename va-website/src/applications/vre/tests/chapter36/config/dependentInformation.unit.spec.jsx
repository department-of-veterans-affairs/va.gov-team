import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../chapter36/config/form.js';

describe('VRE chapter 36 dependent information', () => {
  const { schema, uiSchema } = formConfig.chapters.applicantInformation.pages.dependentInformation;
  it('should render dependent information fields', () => {
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    expect(form.find('input').length).to.equal(9);
  });

  it('should submit without information', () => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        data={{}}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        schema={schema}
        uiSchema={uiSchema}/>
    );
    form.find('form').simulate('submit');

    expect(onSubmit.called).to.be.true;
  });
});
