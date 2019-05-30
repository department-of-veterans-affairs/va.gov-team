import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../1990/config/form';

describe('Edu 1990 militaryService', () => {
  const { schema, uiSchema } = formConfig.chapters.militaryHistory.pages.militaryService;
  const definitions = formConfig.defaultDefinitions;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}
        definitions={definitions}/>
    );

    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input').length).to.equal(3);
  });
  it('should have no required inputs', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}
        definitions={definitions}/>
    );
    const formDOM = findDOMNode(form);
    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error')).to.be.empty;
    expect(onSubmit.called).to.be.true;
  });
});
