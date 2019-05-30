import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';
import { cloneDeep } from 'lodash';

import { getFormDOM } from '../../../../platform/testing/unit/schemaform-utils';
import Address from '../../components/Address.jsx';

import { MILITARY_STATES, ADDRESS_TYPES } from '../../utils/constants';

const defaultProps = {
  address: {
    type: 'DOMESTIC',
    addressOne: '2746 Main St',
    addressTwo: 'Apt 2',
    addressThree: '',
    city: 'Town',
    stateCode: 'MA',
    countryName: 'USA',
    zipCode: '02138'
  },
  errorMessages: {},
  countries: ['USA', 'Antlantis', 'Elseweyre'],
  onInput: () => {}
};

describe('<Address>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<Address {...defaultProps}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.exist;
  });

  it('should change the city and state fields for a military address', () => {
    const militaryFields = {
      type: 'MILITARY',
      city: 'APO',
      stateCode: 'AE'
    };
    const props = {
      ...defaultProps,
      address: {
        ...defaultProps.address, ...militaryFields
      }
    };

    const component = ReactTestUtils.renderIntoDocument(<Address {...props}/>);
    const form = getFormDOM(component);

    expect(form.getElement('input[name="city"]').value).to.contain('APO');
    expect(form.getElement('select[name="state"]').value).to.contain('AE');
  });

  it('should call onInput with correct args when user types in input', () => {
    const onInputSpy = sinon.spy();
    const props = { ...defaultProps, onInput: onInputSpy };
    const component = ReactTestUtils.renderIntoDocument(<Address {...props}/>);
    const form = getFormDOM(component);

    const addressLine1 = '321 Niam';
    // NOTE: All address lines are currently named "address", but querySelector just picks the first one
    form.fillData('input[name="addressOne"]', addressLine1);
    expect(onInputSpy.calledWith('addressOne', addressLine1)).to.be.true;
  });

  it('should populate country dropdown with countries prop', () => {
    const component = ReactTestUtils.renderIntoDocument(<Address {...defaultProps}/>);
    const form = getFormDOM(component);

    const countriesElement = form.getElement('[name="country"]');
    const countryNames = Array.from(countriesElement.options).map(o => o.value);

    // The dropdown has an option for blank; clear that out before comparing
    countryNames.shift();
    expect(countryNames).to.eql(defaultProps.countries);
  });

  it('should add military state codes to the state dropdown', () => {
    const component = ReactTestUtils.renderIntoDocument(<Address {...defaultProps}/>);
    const form = getFormDOM(component);

    const statesElement = form.getElement('[name="state"]');
    const stateNames = Array.from(statesElement.options).map(o => o.value);

    // Check to make sure the stateNames contains all the military state codes
    Array.from(MILITARY_STATES).forEach((code) => {
      expect(stateNames).to.include(code);
    });
  });

  it('should populate state dropdown with only military state codes if the city is a military city', () => {
    const props = cloneDeep(defaultProps);
    props.address.type = ADDRESS_TYPES.military;
    props.address.city = 'APO';

    const component = ReactTestUtils.renderIntoDocument(<Address {...props}/>);
    const form = getFormDOM(component);

    const statesElement = form.getElement('[name="state"]');
    const stateNames = Array.from(statesElement.options).map(o => o.value);

    // The dropdown has an option for blank; clear it out before comparing
    stateNames.shift();

    // Check to make sure only military state codes are present
    expect(stateNames).to.eql(Array.from(MILITARY_STATES));
  });

  it('should hide state and zip fields when USA isn\'t selected', () => {
    const props = cloneDeep(defaultProps);
    props.address.countryName = 'Somewhere';

    const component = ReactTestUtils.renderIntoDocument(<Address {...props}/>);
    const form = getFormDOM(component);

    // getElement throws an error if the element isn't found
    // NOTE: A function must be passed to expect(), so we can't call it directly
    expect(() => form.getElement('[name="state"]')).to.throw();
    expect(() => form.getElement('[name="postalCode"]')).to.throw();
  });

  it('should render error messages', () => {
    const errorMessages = {
      addressOne: 'Please enter a street address',
      countryName: 'Please enter a valid country', // Nonsense!
      stateCode: 'Please enter a state',
      zipCode: 'Please enter a valid Zip code',
      city: 'Please enter a city'
    };

    const props = Object.assign({}, defaultProps, { errorMessages });

    const component = ReactTestUtils.renderIntoDocument(<Address {...props}/>);
    const form = getFormDOM(component);

    const errors = Array.from(form.querySelectorAll('.usa-input-error-message')).map(span => span.textContent);

    // Make sure every error message is rendered
    Object.values(errorMessages).forEach(message => {
      expect(errors).to.contain(`Error ${message}`);
    });
  });

  it('should show state name for domestic addresses', () => {
    // default is domestic
    const component = ReactTestUtils.renderIntoDocument(<Address {...defaultProps}/>);
    const tree = getFormDOM(component);

    // Get the text that's actually displaying for the selected option
    const stateName = tree.getElement('[name="state"]').selectedOptions[0].textContent;
    expect(stateName).to.equal('Massachusetts');
  });

  // This is functionally the same as the above...
  it('should show military state code text for military address', () => {
    const props = cloneDeep(defaultProps);
    props.address.stateCode = 'AA';

    const component = ReactTestUtils.renderIntoDocument(<Address {...props}/>);
    const tree = getFormDOM(component);

    // Get the text that's actually displaying for the selected option
    const stateName = tree.getElement('[name="state"]').selectedOptions[0].textContent;
    expect(stateName).to.equal('Armed Forces Americas (AA)');
  });

  it('should should show only city for international addresses', () => {
    const props = cloneDeep(defaultProps);
    // Okay, so what we _really_ care about is the country being !== 'USA' because
    //  the type can be military (with country === 'USA') and we still want to show
    //  the state and zip fields.
    props.address.countryName = 'Elsweyre';

    const component = ReactTestUtils.renderIntoDocument(<Address {...props}/>);
    const tree = getFormDOM(component);

    // Make sure we have as many fields as we expect...
    expect(tree.querySelectorAll('input, select').length).to.equal(5);

    // ...and that they don't include what they shouldn't
    // When the element isn't found, it'll throw an error
    expect(() => tree.getElement('[name="state"]')).to.throw();
    expect(() => tree.getElement('[name="postalCode"]')).to.throw();
  });
});
