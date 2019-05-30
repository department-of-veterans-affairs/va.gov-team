import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../1995/config/form';

describe('Edu 1995 militaryHistory', () => {
  const { schema, uiSchema } = formConfig.chapters.militaryService.pages.militaryHistory;
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

    expect(formDOM.querySelectorAll('input[type=radio]').length).to.equal(2);
  });
});
