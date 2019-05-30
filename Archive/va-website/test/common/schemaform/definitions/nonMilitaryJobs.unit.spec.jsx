import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester } from '../../../../src/platform/testing/unit/schemaform-utils.jsx';
import uiSchema from '../../../../src/applications/common/schemaform/definitions/nonMilitaryJobs';
import { nonMilitaryJobs as schema } from 'vets-json-schema/dist/definitions.json';

describe('Schemaform definition nonMilitaryJobs', () => {
  it('should render nonMilitaryJobs', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);

    const inputs = formDOM.querySelectorAll('input');

    expect(inputs.length).to.equal(5);
  });

  it('should add another', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);
    ReactTestUtils.Simulate.change(formDOM.querySelector('input'), {
      target: {
        value: 'A job title'
      }
    });
    ReactTestUtils.Simulate.click(formDOM.querySelector('.va-growable-add-btn'));

    expect(formDOM.querySelector('.va-growable-background').textContent)
      .to.contain('A job title');
  });
});
