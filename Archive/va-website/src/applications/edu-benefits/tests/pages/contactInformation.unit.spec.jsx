import React from 'react';
import { findDOMNode } from 'react-dom';
import { expect } from 'chai';
import ReactTestUtils from 'react-dom/test-utils';

import { DefinitionTester, submitForm } from '../../../../platform/testing/unit/schemaform-utils.jsx';
import formConfig5495 from '../../5495/config/form';
import formConfig5490 from '../../5490/config/form';
import formConfig1990e from '../../1990e/config/form';
import formConfig1990n from '../../1990n/config/form';
import formConfig1995 from '../../1995/config/form';

const pageTests = (page, addressType = 'veteran') => {
  const { schema, uiSchema } = page;
  it('should render', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const inputs = ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input').concat(
      ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'select')
    );

    expect(inputs.filter(input => input.id.startsWith('root_preferredContactMethod')).length)
      .to.equal(3);
    expect(inputs.filter(input => input.id.startsWith(`root_${addressType}Address`)).length)
      .to.equal(6);
    expect(inputs.filter(input => input.id.startsWith('root_view:otherContactInfo')).length)
      .to.equal(4);
  });
  it('should render validation errors for required fields', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);
    submitForm(form);

    expect(formDOM.querySelectorAll('.usa-input-error').length).to.equal(6);
  });
  it('should conditionally require phone number', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        formData={{}}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);

    submitForm(form);

    // jsdom has issues with colons in attributes
    let errors = Array.from(formDOM.querySelectorAll('.usa-input-error > label'));
    let phoneError = errors.find(errorLabel => errorLabel.getAttribute('for').endsWith('homePhone'));
    expect(phoneError).to.be.undefined;

    const phoneMethod = ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input')
      .find(input => input.getAttribute('id') === 'root_preferredContactMethod_2');
    ReactTestUtils.Simulate.change(phoneMethod, {
      target: {
        value: 'phone'
      }
    });

    errors = Array.from(formDOM.querySelectorAll('.usa-input-error > label'));
    phoneError = errors.find(errorLabel => errorLabel.getAttribute('for').endsWith('homePhone'));
    expect(phoneError).not.to.be.undefined;
  });
  it('should show error if emails do not match', () => {
    const form = ReactTestUtils.renderIntoDocument(
      <DefinitionTester
        formData={{}}
        schema={schema}
        data={{}}
        uiSchema={uiSchema}/>
    );

    const formDOM = findDOMNode(form);
    const inputs = ReactTestUtils.scryRenderedDOMComponentsWithTag(form, 'input');
    const emailInput = inputs.find(input => input.id === 'root_view:otherContactInfo_email');
    const confirmEmailInput = inputs.find(input => input.id === 'root_view:otherContactInfo_view:confirmEmail');

    ReactTestUtils.Simulate.change(emailInput, {
      target: {
        value: 'test@test.com'
      }
    });
    ReactTestUtils.Simulate.change(confirmEmailInput, {
      target: {
        value: 'test@test.com'
      }
    });
    ReactTestUtils.Simulate.blur(emailInput);
    ReactTestUtils.Simulate.blur(confirmEmailInput);

    expect(formDOM.querySelectorAll('.usa-input-error')).to.be.empty;

    ReactTestUtils.Simulate.change(confirmEmailInput, {
      target: {
        value: 'test@test.org'
      }
    });

    expect(formDOM.querySelectorAll('.usa-input-error')).not.to.be.empty;
  });
  describe('review page', () => {
    it('should not render confirm email', () => {
      const form = ReactTestUtils.renderIntoDocument(
        <DefinitionTester
          schema={schema}
          data={{
            'view:otherContactInfo': {
              'view:confirmEmail': 'test@test.com'
            }
          }}
          reviewMode
          uiSchema={uiSchema}/>
      );

      expect(findDOMNode(form).textContent).not.to.contain('test@test.com');
    });
  });
};

describe('Edu contactInformationPage', () => {
  describe('5495', () => pageTests(formConfig5495.chapters.personalInformation.pages.contactInformation, 'relative'));
  describe('5490', () => pageTests(formConfig5490.chapters.personalInformation.pages.contactInformation, 'relative'));
  describe('1990e', () => pageTests(formConfig1990e.chapters.personalInformation.pages.contactInformation, 'relative'));
  describe('1990n', () => pageTests(formConfig1990n.chapters.personalInformation.pages.contactInformation));
  describe('1995', () => pageTests(formConfig1995.chapters.personalInformation.pages.contactInformation));
});
