import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { DefinitionTester } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';
import initialData from '../schema/initialData.js';

describe('Disability benefits 526EZ -- Rated disabilities selection', () => {
  const { schema, uiSchema } = formConfig.chapters.ratedDisabilities.pages.ratedDisabilities;

  it('renders the rated disabilities selection field', () => {
    const form = mount(<DefinitionTester
      definitions={formConfig.defaultDefinitions}
      schema={schema}
      data={initialData}
      uiSchema={uiSchema}/>
    );

    expect(form.find('input[type="checkbox"]').length).to.equal(initialData.disabilities.length);
  });

  it('fails to submit without selecting a condition', () => {
    const form = mount(<DefinitionTester
      definitions={formConfig.defaultDefinitions}
      schema={schema}
      data={initialData}
      uiSchema={uiSchema}/>
    );

    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(1);
  });

  it('successfully submits when at least one condition is selected', () => {
    const form = mount(<DefinitionTester
      definitions={formConfig.defaultDefinitions}
      schema={schema}
      data={initialData}
      uiSchema={uiSchema}/>
    );

    // Simulating a click event doesn't trigger onChange, so we have to call it explicitly
    form.find('input#root_disabilities_0').props().onChange({ target: { checked: true } });
    form.find('form').simulate('submit');
    expect(form.find('.usa-input-error').length).to.equal(0);
  });

  it('renders the information about each disability', () => {
    const form = mount(<DefinitionTester
      definitions={formConfig.defaultDefinitions}
      schema={schema}
      data={initialData}
      uiSchema={uiSchema}/>
    );

    const labels = form.find('input[type="checkbox"] + label');
    expect(labels.at(0).find('h4').text()).to.equal('PTSD');
    expect(labels.at(0).find('.diagnostic-text').text()).to.contain('Post traumatic stress disorder');
    expect(labels.at(0).find('p').last().text()).to.equal('Current rating: 40%');

    expect(labels.at(1).find('h4').text()).to.equal('Intervertebral Disc Syndrome');
    expect(labels.at(1).find('.diagnostic-text').text()).to.contain('Intervertebral disc syndrome');
    expect(labels.at(1).find('p').last().text()).to.equal('Current rating: 0%');
  });
});
