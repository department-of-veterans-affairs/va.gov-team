import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../1995/config/form';

describe('Edu 1995 benefitSelection', () => {
  const { schema, uiSchema } = formConfig.chapters.benefitSelection.pages.benefitSelection;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    expect(ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input'))
      .to.not.be.empty;
  });

  it('should have no required inputs', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);
    submitForm(form);
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error'))).to.be.empty;

    submitForm(form);

    expect(onSubmit.called).to.be.true;
  });
});
