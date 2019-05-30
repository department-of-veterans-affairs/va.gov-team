import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';

import { DefinitionTester, submitForm } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form.js';

describe('HCA veteranInformation', () => {
  it('should render veteranInformation page', () => {
    const onSubmit = sinon.spy();
    const { schema, uiSchema } = formConfig.chapters.veteranInformation.pages.veteranInformation;
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        definitions={formConfig.defaultDefinitions}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input, select').length).to.equal(5);
    expect(formDOM.querySelector('#root_veteranFullName_first')).not.to.be.null;
    expect(formDOM.querySelector('#root_veteranFullName_middle').maxLength).to.equal(30);
    expect(formDOM.querySelector('#root_mothersMaidenName').maxLength).to.equal(35);

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(2);
    expect(onSubmit.called).to.be.false;
  });

  it('should render birthInformation page', () => {
    const onSubmit = sinon.spy();
    const { schema, uiSchema } = formConfig.chapters.veteranInformation.pages.birthInformation;
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input, select').length).to.equal(6);
    expect(formDOM.querySelector('#root_veteranSocialSecurityNumber')).not.to.be.null;

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(2);
    expect(onSubmit.called).to.be.false;
  });

  it('should render demographicInformation page', () => {
    const onSubmit = sinon.spy();
    const { schema, uiSchema } = formConfig.chapters.veteranInformation.pages.demographicInformation;
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input, select').length).to.equal(8);
    expect(formDOM.querySelector('#root_gender')).not.to.be.null;

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(2);
    expect(onSubmit.called).to.be.false;
  });

  it('should render veteranAddress page', () => {
    const onSubmit = sinon.spy();
    const { schema, uiSchema } = formConfig.chapters.veteranInformation.pages.veteranAddress;
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        onSubmit={onSubmit}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input, select').length).to.equal(7);
    expect(formDOM.querySelector('#root_veteranAddress_country')).not.to.be.null;

    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(4);
    expect(onSubmit.called).to.be.false;
  });

  it('should render contactInformation page', () => {
    const { schema, uiSchema } = formConfig.chapters.veteranInformation.pages.contactInformation;
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input, select').length).to.equal(4);
    expect(formDOM.querySelector('#root_email')).not.to.be.null;
  });
});
