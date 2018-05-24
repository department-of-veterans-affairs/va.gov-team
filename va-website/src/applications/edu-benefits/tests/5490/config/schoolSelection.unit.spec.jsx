import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../5490/config/form';
import educationTypeUi from '../../../definitions/educationType';

describe('Edu 5490 schoolSelection', () => {
  const { schema, uiSchema } = formConfig.chapters.schoolSelection.pages.schoolSelection;

  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        state={{
          schoolSelection: {
            uiSchema: {
              educationProgram: {
                educationType: educationTypeUi
              }
            }
          }
        }}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);

    const inputs = Array.from(formDOM.querySelectorAll('input, select, textarea'));

    expect(inputs.length).to.equal(13);
  });
});
