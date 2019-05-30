import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, getFormDOM } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../config/form';

const definitions = formConfig.defaultDefinitions;

describe('Pensions aidAttendance', () => {
  const { schema, uiSchema } = formConfig.chapters.additionalInformation.pages.aidAttendance;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        definitions={definitions}
        uiSchema={uiSchema}/>
    );

    const formDOM = getFormDOM(form);

    expect(formDOM.querySelectorAll('input,select').length).to.equal(0);
    expect(formDOM.querySelectorAll('.usa-alert-info').length).to.equal(2);
  });
  it('should submit', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={definitions}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = getFormDOM(form);

    formDOM.submitForm();
    expect(onSubmit.called).to.be.true;
  });
});
