import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig from '../../../5490/config/form';

describe('Edu 5490 benefitHistory', () => {
  const { schema, uiSchema } = formConfig.chapters.benefitSelection.pages.benefitHistory;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        formData={{}}
        schema={schema}
        data={{}}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    expect(ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input').length)
      .to.equal(7);
  });

  it('should expand options conditionally', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    // Starts with 7 inputs (tested above)
    // Re-tested here for posterity; can be removed before merging
    expect(Array.from(formDOM.querySelectorAll('input,select')).length)
      .to.equal(7);

    const inputs = Array.from(formDOM.querySelectorAll('input'));
    const claimed = inputs.find((i) => i.id === 'root_previousBenefits_view:claimedSponsorService');

    // claimedSponsorService starts as unchecked
    expect(claimed.checked).to.be.false;

    // Expand both of the expandables
    ReactTestUtils.Simulate.change(inputs.find((i) => i.id === 'root_previousBenefits_view:ownServiceBenefits'), {
      target: {
        checked: true
      }
    });
    ReactTestUtils.Simulate.change(inputs.find((i) => i.id === 'root_previousBenefits_view:claimedSponsorService'), {
      target: {
        checked: true
      }
    });

    // Should expand to 16
    expect(Array.from(formDOM.querySelectorAll('input,select')).length)
      .to.equal(17);

    expect(claimed.checked).to.be.true;

    // Collapse the fields
    ReactTestUtils.Simulate.change(inputs.find((i) => i.id === 'root_previousBenefits_view:ownServiceBenefits'), {
      target: {
        checked: false
      }
    });
    ReactTestUtils.Simulate.change(inputs.find((i) => i.id === 'root_previousBenefits_view:claimedSponsorService'), {
      target: {
        checked: false
      }
    });

    // We have indeed unchecked the box
    expect(claimed.checked).to.be.false;

    // Un-expanding fields takes time, so we won't test that for now.

    // console.log('number of inputs (& selects) before waiting:', Array.from(formDOM.querySelectorAll('input,select')).length); // eslint-disable-line
    // // Should collapse back to 7
    // //  ...but it only works after waiting for a second (maybe less, but yuck)
    // setTimeout(() => {
    //   console.log('number of inputs (& selects) after waiting:', Array.from(formDOM.querySelectorAll('input,select')).length); // eslint-disable-line
    //   expect(Array.from(formDOM.querySelectorAll('input,select')).length)
    //     .to.equal(7);
    //
    //   done();
    // }, 610); // On my machine, this varies between 610 and 620
  });

  // The trouble with this test is it requires the expanded fields to be hidden
  //  after expanding, which currently takes some time (see the end of the test
  //  above). To get around that, we're checking for a successful submission and
  //  then a failed submission instead of failing before suceeding.
  it('should only require fields conditionally', () => {
    const onSubmit = sinon.spy();
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        onSubmit={onSubmit}
        data={{}}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    // Submit form without entering any data first -- should succeed
    submitForm(form);
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error'))).to.be.empty;

    expect(onSubmit.called).to.be.true;

    // Check the someone else's service box
    const inputs = Array.from(formDOM.querySelectorAll('input'));
    ReactTestUtils.Simulate.change(inputs.find((i) => i.id === 'root_previousBenefits_view:claimedSponsorService'), {
      target: {
        checked: true
      }
    });

    // Submit form -- should fail
    submitForm(form);
    expect(Array.from(formDOM.querySelectorAll('.usa-input-error'))).to.not.be.empty;

    // Should only have been called the first time
    expect(onSubmit.calledOnce).to.be.true;
  });

  it('should require either ssn or file number for previous sponsor', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        definitions={formConfig.defaultDefinitions}
        uiSchema={uiSchema}/>
    );
    const formDOM = findDOMNode(form);

    // Check the someone else's service box
    const inputs = Array.from(formDOM.querySelectorAll('input'));
    ReactTestUtils.Simulate.change(inputs.find((i) => i.id === 'root_previousBenefits_view:claimedSponsorService'), {
      target: {
        checked: true
      }
    });

    // SSN should be required
    // Looks for the required span in the label
    expect(formDOM.querySelector('label[for="root_previousBenefits_view:veteranId_veteranSocialSecurityNumber"] > span.schemaform-required-span'))
      .to.not.be.null;

    // Check the noSSN box
    ReactTestUtils.Simulate.change(
      Array.from(formDOM.querySelectorAll('input')).find((i) => i.id === 'root_previousBenefits_view:veteranId_view:noSSN'),
      {
        target: {
          checked: true
        }
      }
    );

    // File number should exist, be required
    expect(formDOM.querySelector('label[for="root_previousBenefits_view:veteranId_vaFileNumber"] > span.schemaform-required-span'))
      .to.not.be.null;

    // SSN should not be required
    expect(formDOM.querySelector('label[for="root_previousBenefits_view:veteranId_veteranSocialSecurityNumber"] > span.schemaform-required-span'))
      .to.be.null;
  });
});
