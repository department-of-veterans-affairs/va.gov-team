import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { cloneDeep } from 'lodash';

import { AddressSection } from '../../containers/AddressSection';
import { ADDRESS_TYPES } from '../../utils/constants';

const originalValidations = AddressSection.fieldValidations;
const spyOnValidators = () => {
  const validatorSpies = Object.keys(AddressSection.fieldValidations).reduce((spies, key) => {
    // Each property is an array of functions; wrap each function in a spy
    return Object.assign({}, spies, { [key]: AddressSection.fieldValidations[key].map((validator) => sinon.spy(validator)) });
  }, {});

  // Infiltrate!
  AddressSection.fieldValidations = validatorSpies;
};

const cleanUpSpies = () => {
  AddressSection.fieldValdiations = originalValidations;
};

const saveSpy = sinon.spy();
const editSpy = sinon.spy();
const cancelEditSpy = sinon.spy();

const defaultProps = {
  savedAddress: {
    type: ADDRESS_TYPES.domestic,
    addressOne: '2476 Main Street',
    addressTwo: '',
    addressThree: '',
    city: 'Reston',
    countryName: 'USA',
    stateCode: 'VA',
    zipCode: '12345'
  },
  canUpdate: true,
  cancelEditingAddress: cancelEditSpy,
  editAddress: editSpy,
  isEditingAddress: false,
  saveAddress: saveSpy,
  savePending: false,
  countries: [],
  countriesAvailable: true,
  states: [],
  statesAvailable: true
};

const emptyAddress = {
  addressOne: '',
  addressTwo: '',
  addressThree: '',
  city: '',
  countryName: '',
  stateCode: '',
  type: ADDRESS_TYPES.domestic
};


describe('<AddressSection>', () => {
  beforeEach(() => {
    saveSpy.reset();
    editSpy.reset();
  });

  // we expect a render with default props to show the AddressContent component
  it('should display an address if one is provided in props', () => {
    const tree = shallow(<AddressSection {...defaultProps}/>);
    const addressContent = tree.find('AddressContent');
    const contentHeader = addressContent.dive().find('p').text();

    expect(contentHeader).to.contain('Downloaded documents will list your address as:');
  });

  it('should display a loading spinner if address save in progress', () => {
    const newProps = { ...defaultProps, savePending: true };
    const tree = shallow(<AddressSection {...newProps}/>);
    const spinner = tree.find('AddressContent').dive()
      .find('AddressBlock').dive()
      .find('LoadingIndicator')
      .dive();
    expect(spinner.text()).to.contain('Updating your address...');
  });

  it('should format 1 address line', () => {
    const tree = shallow(<AddressSection {...defaultProps}/>);
    const addressBlock = tree.find('AddressContent').dive()
      .find('AddressBlock').dive();
    const addressBlockText = addressBlock.find('.address-block div.letters-address.street').text();
    expect(addressBlockText).to.contain('2476 main street');
  });

  it('should format address 2 address lines', () => {
    const props = cloneDeep(defaultProps);
    props.savedAddress.addressTwo = 'ste #12';

    const tree = shallow(<AddressSection {...props}/>);
    const addressBlock = tree.find('AddressContent').dive()
      .find('AddressBlock').dive();
    const addressBlockText = addressBlock.find('.address-block div.letters-address.street').text();

    expect(addressBlockText).to.contain('2476 main street, ste #12');
  });

  it('should format address 3 address lines', () => {
    const props = {
      ...defaultProps,
      savedAddress: {
        ...defaultProps.savedAddress,
        addressTwo: 'ste #12',
        addressThree: 'west'
      }
    };

    const tree = shallow(<AddressSection {...props}/>);
    const addressBlock = tree.find('AddressContent').dive()
      .find('AddressBlock').dive();
    const addressBlockText = addressBlock.find('.address-block div.letters-address.street').text();
    expect(addressBlockText).to.contain('2476 main street, ste #12 west');
  });

  it('should render an edit button if user is allowed to edit address', () => {
    const component = shallow(<AddressSection {...defaultProps}/>);
    const editButton = component.find('.usa-button-secondary');
    expect(editButton).to.have.lengthOf(1);
  });

  it('should not render an edit button if user not allowed to edit address', () => {
    const cannotEditProps = { ...defaultProps, canUpdate: false };
    const component = shallow(<AddressSection {...cannotEditProps}/>);
    expect(component.find('usa-button-secondary')).to.have.lengthOf(0);
  });

  it('should call editAddress() when Edit button is clicked', () => {
    const tree = mount(<AddressSection {...defaultProps}/>);

    // Make sure we're not editing yet
    expect(tree.find('select')).to.have.lengthOf(0);

    // Poke the edit button
    tree.find('button.usa-button-secondary').simulate('click');
    expect(editSpy.called).to.be.true;
  });

  it('should render edit fields when isEditingAddress is true', () => {
    const tree = mount(<AddressSection {...defaultProps} isEditingAddress/>);

    expect(tree.find('input')).to.have.lengthOf(5);
    expect(tree.find('select')).to.have.lengthOf(2);
  });

  it('should call saveAddress() when Update button is clicked', () => {
    const tree = mount(<AddressSection {...defaultProps} isEditingAddress/>);

    // Click the save button
    tree.find('button.usa-button-primary').simulate('click');
    expect(saveSpy.calledWith(tree.state('editableAddress'))).to.be.true;
  });

  it('should call cancelEditingAddress when Cancel button is clicked', () => {
    const tree = mount(<AddressSection {...defaultProps} isEditingAddress/>);

    // Click the cancel button
    tree.find('button.usa-button-secondary').simulate('click');
    expect(cancelEditSpy.called).to.be.true;
  });

  // NOTE: This is a bit of a misnomer; it only tests if countries are unavailable, but that should be sufficient
  it('should show addressUpdateUnavailable if countries or states lists aren\'t available', () => {
    const props = Object.assign({}, defaultProps, { countriesAvailable: false });
    const tree = mount(<AddressSection {...props} isEditingAddress/>);

    expect(tree.find('.usa-alert-heading').text()).to.contain('Address update unavailable');
  });

  it('should load address in new props after mounting', () => {
    const tree = mount(<AddressSection {...defaultProps}/>);

    expect(tree.state('editableAddress')).to.equal(defaultProps.savedAddress);
  });

  it('should update editableAddress when the input changes', () => {
    const props = cloneDeep(defaultProps);
    props.savedAddress = {};
    const tree = mount(<AddressSection {...props} isEditingAddress/>);

    // Edit the street address
    const newAddress = '123 Main St';
    tree.find('input[name="addressOne"]').simulate('change', { target: { value: newAddress } });
    expect(tree.state('editableAddress').addressOne).to.equal(newAddress);
  });

  it('should not call saveAddress when Cancel is clicked', () => {
    saveSpy.reset();
    const tree = mount(<AddressSection {...defaultProps} isEditingAddress/>);

    // Try to save
    tree.find('button.usa-button-secondary').simulate('click');
    expect(saveSpy.called).to.be.false;
  });

  it('should not call saveAddress when Update is clicked with invalid data', () => {
    saveSpy.reset();
    const tree = mount(<AddressSection {...defaultProps} isEditingAddress/>);

    // Clear out country to get a validation error
    tree.find('select[name="country"]').simulate('change', { target: { value: '' } });

    // Try to save
    tree.find('button.usa-button-primary').simulate('click');
    expect(saveSpy.called).to.be.false;
  });

  it('should display error messages for validation failures', () => {
    const tree = mount(<AddressSection {...defaultProps} isEditingAddress/>);

    // Clear out country to get a validation error
    tree.find('select[name="country"]').simulate('change', { target: { value: '' } });
    expect(tree.find('.usa-input-error')).to.have.lengthOf(1);
  });

  it('should infer new address type', () => {
    const tree = mount(<AddressSection {...defaultProps} isEditingAddress/>);

    // Sanity check; make sure the type is what we expect before we change it
    // NOTE: We're checking that it's domestic specifically just so we make absolutely sure
    //  it's getting _changed_ to international instead of accidentally starting off as
    //  international. Just a bit of future-proofing.
    expect(tree.state('editableAddress').type).to.equal(ADDRESS_TYPES.domestic);

    // Change the country so it'll be international
    tree.find('select[name="country"]').simulate('change', { target: { value: 'Elsweyre' } });
    expect(tree.state('editableAddress').type).to.equal(ADDRESS_TYPES.international);

    // NOTE: This isn't a _comprehensive_ test that ensures changing the input will do what we
    //  expect, but the e2e test should make sure that the wiring from the input to handleChange
    //  is up and running as expected.
  });

  it('should reset disallowed address fields when type changes', () => {
    const tree = mount(<AddressSection {...defaultProps} isEditingAddress/>);

    // Sanity check; make sure the type is what we expect before we change it
    expect(tree.state('editableAddress').stateCode).to.not.equal('');

    // Change the country so it'll be international (and the state and zip fields should reset to '')
    tree.find('select[name="country"]').simulate('change', { target: { value: 'Elsweyre' } });
    expect(tree.state('editableAddress').stateCode).to.equal('');
  });

  // Not sure how to test this bit yet...
  // it('should scroll to first error', () => {});

  it('should start in the editing state by calling editAddress() if address is empty and user canUpdate', () => {
    const props = cloneDeep(defaultProps);
    props.savedAddress = {
      addressOne: '',
      addressTwo: '',
      addressThree: '',
      city: '',
      countryName: '',
      stateCode: '',
      type: ADDRESS_TYPES.domestic
    };
    const tree = shallow(<AddressSection {...props}/>); // eslint-disable-line

    expect(editSpy.called).to.be.true;
  });

  it('should not start editing by calling editAddress() if address is empty but user !canUpdate', () => {
    const props = cloneDeep(defaultProps);
    props.savedAddress = emptyAddress;
    props.canUpdate = false;

    const component = shallow(<AddressSection {...props}/>); // eslint-disable-line
    expect(editSpy.called).to.be.false;
  });

  it('should render an address help button', () => {
    const tree = mount(<AddressSection {...defaultProps}/>);
    expect(tree.find('.address-help-btn').exists()).to.be.true;
  });

  it('should render an empty address warning on the edit screen', () => {
    const tree = mount(<AddressSection {...defaultProps} isEditingAddress savedAddress={emptyAddress}/>);
    expect(tree.find('.usa-alert-heading').first().text()).to.equal('VA does not have a valid address on file for you');
  });

  it('should render an empty address warning on the view screen', () => {
    const tree = mount(<AddressSection {...defaultProps} savedAddress={emptyAddress}/>);
    expect(tree.find('.usa-alert-heading').first().text()).to.equal('VA does not have a valid address on file for you');
  });

  describe('validation', () => {
    // Spy on all the validation functions!
    beforeEach(spyOnValidators);

    // Extract the spies so nobody finds out
    afterEach(cleanUpSpies);

    it('should run all validations against a field if the address is valid', () => {
      const tree = mount(<AddressSection {...defaultProps} isEditingAddress/>);

      // Start editing
      tree.find('button.usa-button-secondary').simulate('click');

      // Change the city and blur for the validation to run
      tree.find('input[name="city"]').simulate('change', { target: { value: 'Elsweyre' } });
      tree.find('input[name="city"]').simulate('blur');

      expect(AddressSection.fieldValidations.city.every(validator => validator.called)).to.be.true;
    });

    it('should return the first error message it finds', () => {
      const tree = mount(<AddressSection {...defaultProps} isEditingAddress/>);

      // Start editing
      tree.find('button.usa-button-secondary').simulate('click');

      // Change the city and blur for the validation to run
      tree.find('input[name="city"]').simulate('change', { target: { value: '' } });
      tree.find('input[name="city"]').simulate('blur');

      // The required validator (first in the list) should return an error message and no other validators should run
      expect(AddressSection.fieldValidations.city[0].called).to.be.true;
      expect(AddressSection.fieldValidations.city.slice(1).every(validator => !validator.called)).to.be.true;
    });

    it('should run validations on modified fields only', () => {
      const tree = mount(<AddressSection {...defaultProps} isEditingAddress/>);

      // Start editing
      tree.find('button.usa-button-secondary').simulate('click');

      const fieldsToModify = ['city', 'addressOne'];
      fieldsToModify.forEach(field => {
        const input = tree.find(`input[name="${field}"]`);
        input.simulate('change', { target: { value: '' } });
        input.simulate('blur');
      });

      Object.keys(AddressSection.fieldValidations).forEach((key) => {
        const validationsCalled = AddressSection.fieldValidations[key].some(v => v.called);
        if (fieldsToModify.includes(key)) {
          expect(validationsCalled).to.be.true;
        } else {
          expect(validationsCalled).to.be.false;
        }
      });
    });

    it('should run validation against dropdowns immediately', () => {
      const tree = mount(<AddressSection {...defaultProps} isEditingAddress/>);

      // Start editing
      tree.find('.usa-button-secondary').simulate('click');

      // Sanity check - Start with no errors
      expect(tree.find('.usa-input-error')).to.have.lengthOf(0);

      // Select no state and expect a validation error
      tree.find('select[name="state"]').simulate('change', { target: { value: '' } });
      expect(tree.find('.usa-input-error').text()).to.contain('Please select a state');

      // Select no country and expect a validation error
      // Note: When we select no country, the state error should disappear, so we have to
      //  make sure we're getting the _right_ error message
      tree.find('select[name="country"]').simulate('change', { target: { value: '' } });
      expect(tree.find('.usa-input-error').text()).to.contain('Please select a country');
    });

    it('should run validations on all fields before saving the address', () => {
      const tree = shallow(<AddressSection {...defaultProps} isEditingAddress/>);
      tree.instance().saveAddress();

      Object.keys(AddressSection.fieldValidations).forEach((key) => {
        expect(AddressSection.fieldValidations[key].some(v => v.called)).to.be.true;
      });
    });
  });
});
