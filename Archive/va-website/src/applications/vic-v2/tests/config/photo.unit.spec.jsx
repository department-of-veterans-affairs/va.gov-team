import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { DefinitionTester } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';

describe('VIC photo upload', () => {
  const page = formConfig.chapters.documentUpload.pages.photoUpload;
  const { schema, uiSchema } = page;
  it('should render', (done) => {
    window.addEventListener = sinon.spy();
    const form = mount(
      <DefinitionTester
        definitions={formConfig.defaultDefinitions}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    form.find('AsyncComponent').instance().componentPromise.then(() => {
      form.update();
      expect(form.find('input').length).to.equal(3);
      done();
    });
  });

  it('should not submit without required info', () => {
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

    expect(onSubmit.called).to.be.false;
  });

  // Sighted path
  it('it should reject an invalid file', (done) => {
    const onSubmit = sinon.spy();
    const form = mount(
      <DefinitionTester
        schema={schema}
        data={{
          photo: {
            errorMessage: 'The file you selected is smaller than the 350px minimum file width or height and could not be added.'
          }
        }}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );

    form.find('AsyncComponent').instance().componentPromise.then(() => {
      form.update();
      expect(form.find('.usa-input-error-message').length).to.equal(1);
      done();
    });
  });

  it('should parse doc response', () => {
    const parseResponse = uiSchema.photo['ui:options'].parseResponse;

    expect(parseResponse({
      data: {
        attributes: {
          guid: 'testing'
        }
      }
    },
    {
      name: 'filename'
    }
    )).to.deep.equal({
      name: 'filename',
      confirmationCode: 'testing'
    });
  });
});
