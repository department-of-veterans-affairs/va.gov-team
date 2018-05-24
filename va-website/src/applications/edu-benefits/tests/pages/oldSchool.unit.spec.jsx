import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import createOldSchoolPage from '../../pages/oldSchool';
import fullSchema1995 from 'vets-json-schema/dist/22-1995-schema.json';

describe('Edu oldSchool page', () => {
  const { schema, uiSchema } = createOldSchoolPage(fullSchema1995);

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
        formData={{}}
        onSubmit={onSubmit}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    // Submit the form with no information
    submitForm(form);

    // onSubmit will only be called if there were no validation errors
    expect(onSubmit.called).to.be.true;
  });
});
