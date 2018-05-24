// Could be renamed to militaryServiceContributions, but for consistency...

import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../5490/config/form';

describe('Edu 5490 sponsorInformation', () => {
  const { schema, uiSchema } = formConfig.chapters.sponsorInformation.pages.sponsorInformation;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);

    expect(formDOM.querySelectorAll('input,select').length).to.equal(12);
  });

  it('should conditionally show spouseInfo options', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        definitions={formConfig.defaultDefinitions}
        data={{ relationship: 'spouse' }}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);
    expect(formDOM.querySelectorAll('input,select').length).to.equal(16);

    // The divorce input should be there now
    expect(formDOM.querySelector('input#root_spouseInfo_divorcePendingYes')).to.not.be.null;
    // But remarriage date shouldn't be yet
    expect(formDOM.querySelector('input[name=root_spouseInfo_remarriageDateMonth]')).to.be.null;

    // Select remarried
    ReactTestUtils.Simulate.change(formDOM.querySelector('#root_spouseInfo_remarriedYes'), {
      target: {
        checked: true
      }
    });
    // Remarried date should now appear
    expect(formDOM.querySelector('select[name=root_spouseInfo_remarriageDateMonth]')).to.not.be.null;
  });
});
