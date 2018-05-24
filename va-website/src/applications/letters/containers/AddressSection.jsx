import React from 'react';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
import Raven from 'raven-js';

import recordEvent from '../../../platform/monitoring/record-event';
import { scrollToFirstError, focusElement } from '../../../platform/utilities/ui';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import Modal from '@department-of-veterans-affairs/formation/Modal';

import {
  addressModalContent,
  addressUpdateUnavailable,
  getStateName,
  getZipCode,
  inferAddressType,
  isDomesticAddress,
  isInternationalAddress,
  isMilitaryAddress,
  resetDisallowedAddressFields,
  isAddressEmpty
} from '../utils/helpers';
import {
  saveAddress,
  editAddress,
  cancelEditingAddress
} from '../actions/letters';
import Address from '../components/Address';
import AddressContent from '../components/AddressContent';

import {
  addressOneValidations,
  postalCodeValidations,
  stateValidations,
  countryValidations,
  cityValidations
} from '../utils/validations';

const Element = Scroll.Element;
const scroller = Scroll.scroller;
const scrollToTop = () => {
  scroller.scrollTo('addressScrollElement', window.VetsGov.scroll || {
    duration: 500,
    delay: 0,
    smooth: true
  });
};

const noAddressBanner = (
  <div className="usa-alert usa-alert-warning">
    <div className="usa-alert-body">
      <h3 className="usa-alert-heading">VA does not have a valid address on file for you</h3>
      <div className="usa-alert-text">You will need to update your address before we can provide you any letters.</div>
    </div>
  </div>
);


export class AddressSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasLoadedAddress: false,
      errorMessages: {},
      fieldsToValidate: {},
      editableAddress: props.savedAddress || {},
      addressHelpVisible: false,
    };

    // On the off chance that savedAddress is available in constructor, ensure
    // we tell React that editableAddress has already been initialized with the
    // savedAddress values
    if (Object.keys(this.state.editableAddress).length > 0) {
      // If we start with an empty address, go straight to editing
      const emptyAddress = isAddressEmpty(this.state.editableAddress);
      this.state.hasLoadedAddress = true;
      if (emptyAddress && this.props.canUpdate) {
        this.props.editAddress();
      } else if (emptyAddress && !this.props.canUpdate) {
        Raven.captureMessage('letters_empty_address_update_not_allowed');
      }
    }
  }

  componentDidMount() {
    focusElement('#content');
  }

  /* editableAddress is initialized from redux store in the constructor
   * but the prop it initializes from is not available at time of mounting, which means users
   * will get a blank form instead of one prefilled with their existing data. This hook
   * ensures we populate the form's initial state as soon as the prop becomes available
   */
  componentWillReceiveProps(nextProps) {
    if (!this.state.hasLoadedAddress && Object.keys(nextProps.savedAddress).length > 0) {
      this.setState({
        hasLoadedAddress: true,
        editableAddress: nextProps.savedAddress,
      });
      // If we recieve an empty address, start editing
      if (isAddressEmpty(nextProps.savedAddress)) {
        this.props.editAddress();
      }
    }
  }

  /**
   * Runs all the validations against the address passed as a prop for a given field.
   *
   * @param {String} fieldName    The name of the address field to validate.
   *                               Maps to the fieldValidations key.
   * @param {Object} fullAddress  Contains the full mailing address.
   * @return {String|undefined}   If there's a validation error, return the
   *                               error message. If not, return undefined.
   */
  validateField = (fieldName, fullAddress) => {
    const validations = AddressSection.fieldValidations[fieldName];
    // If there is no validations array for that field, assume it has no validations
    if (!validations) {
      return undefined;
    }

    let errorMessage = false;
    for (let i = 0; i < validations.length; i++) {
      // this.props.value = address
      errorMessage = validations[i](fullAddress[fieldName], fullAddress);
      if (typeof errorMessage === 'string') {
        return errorMessage;
      }
    }

    // All validations passed; there are no error messages to report
    return undefined;
  }

  /**
   * Runs validation for all fields, returning a complete errorMessages object.
   *
   * @param {Object} address             The complete address as it appears while
   *                                      editing it.
   * @param {Boolean} shouldValidateAll  Because we'll need to update the error
   *                                      messages on multiple fields sometimes,
   *                                      we need to run validations on all fields.
   *                                      This ensures that we only run validation
   *                                      if the field has been modified.
   *                                      saveAddress will need to validate all
   *                                      fields regardless of whether they've been
   *                                      modified.
   * @return {Object}  Holds all the error messages for all the fields that have them.
   */
  validateAll = (address, fieldsToValidate, shouldValidateAll = false) => {
    const errorMessages = {};
    Object.keys(AddressSection.fieldValidations).forEach((fieldName) => {
      // Only validate the field if it's been modified
      if (fieldsToValidate[fieldName] || shouldValidateAll) {
        errorMessages[fieldName] = this.validateField(fieldName, address);
      }

    });

    return errorMessages;
  }

  // TODO: Make sure this doesn't allow us to save the address if there are validation errors
  saveAddress = () => {
    const errorMessages = this.validateAll(this.state.editableAddress, this.state.fieldsToValidate, true);
    // If there are errors, show them, but don't stop editing and don't save
    // There may be properties that are initialized to undefined, so we're checking
    //  to see if any of the properties are truthy
    if (Object.keys(errorMessages).some(key => errorMessages[key])) {
      // If we had any errors, make sure to validate them from here on out so we don't loose them
      const fieldsToValidate = Object.assign({}, this.state.fieldsToValidate);

      // Ideally, we'd only loop once, but errorMessages is so small and this is nicer to read
      Object.keys(errorMessages).forEach(key => fieldsToValidate[key] = true); // eslint-disable-line no-return-assign

      scrollToFirstError();

      this.setState({ errorMessages, fieldsToValidate });
      return;
    }

    this.setState({
      // Reset all the error messages in case they go to edit again; should be pointless
      errorMessages: {}
    });
    this.props.saveAddress(this.state.editableAddress);
    scrollToTop();
  }

  handleCancel = () => {
    recordEvent({ event: 'letter-update-address-cancel' });
    this.props.cancelEditingAddress();
    this.setState({
      errorMessages: {},
      fieldsToValidate: {},
      editableAddress: this.props.savedAddress
    });
    scrollToTop();
  }

  startEditing = () => {
    recordEvent({ event: 'letter-update-address-started' });
    this.props.editAddress();
    scrollToTop();
  }

  dirtyInput = (fieldName) => {
    let fieldsToValidate = this.state.fieldsToValidate;
    // When a field is blurred, add it to the fields we want to validate
    if (!fieldsToValidate[fieldName]) {
      fieldsToValidate = Object.assign({}, this.state.fieldsToValidate, { [fieldName]: true });

      // Make sure to _actually_ validate it
      const errorMessages = this.validateAll(this.state.editableAddress, fieldsToValidate);
      this.setState({
        fieldsToValidate,
        errorMessages
      });
    }
  }

  /**
   * Handles changing input from the Address component.
   * @param {String}  fieldName   The name of the field that's changing
   * @param {String}  update      The new value of the field
   * @param {Boolean} forceDirty  Whether to set the field as dirty immediately before validation.
   *                              Useful for select fields which don't trigger the onBlur event.
   */
  handleChange = (fieldName, update, forceDirty = false) => {
    let address = Object.assign({}, this.state.editableAddress, { [fieldName]: update });
    let fieldsToValidate = this.state.fieldsToValidate;
    // if country is changing we should clear the state
    if (fieldName === 'countryName') {
      address.stateCode = '';
    }

    const oldAddressType = address.type;
    // Make sure we've got the right address type (domestic, military, international)
    address = inferAddressType(address);

    // If our address type changes, make sure to clear out disallowed fields as necessary
    if (oldAddressType !== address.type) {
      address = resetDisallowedAddressFields(address);
    }

    // Force the input to dirty if necessary
    if (forceDirty && !fieldsToValidate[fieldName]) {
      fieldsToValidate = Object.assign({}, this.state.fieldsToValidate, { [fieldName]: true });
    }

    // Update the error messages
    // TODO: This might get super slow, so we can debounce the validation if necessary...probably
    const errorMessages = this.validateAll(address, fieldsToValidate);
    this.setState({
      fieldsToValidate,
      editableAddress: address,
      errorMessages,
    });
  }

  closeAddressHelp = () => this.setState({ addressHelpVisible: false });

  openAddressHelp = () => this.setState({ addressHelpVisible: true });

  render() {
    const address = this.props.savedAddress || {};
    const emptyAddress = isAddressEmpty(this.props.savedAddress);
    // Street address: first line of address
    const streetAddressLines = [
      address.addressOne,
      address.addressTwo ? `, ${address.addressTwo}` : '',
      address.addressThree ? ` ${address.addressThree}` : ''
    ];
    const streetAddress = streetAddressLines.join('').toLowerCase();

    // City, state, postal code: second line of address
    const zipCode = getZipCode(address);
    const city = address.city || '';
    let cityStatePostal;
    if (isDomesticAddress(address)) {
      const state = getStateName(address.stateCode);
      cityStatePostal = `${city}, ${state} ${zipCode}`;
    } else if (isMilitaryAddress(address)) {
      const militaryStateCode = address.stateCode || '';
      cityStatePostal = `${city}, ${militaryStateCode} ${zipCode}`;
    } else {
      // Must be an international address, only show a city
      cityStatePostal = `${city}`;
    }

    const country = isInternationalAddress(address) ? address.countryName : '';
    const addressContentLines = { streetAddress, cityStatePostal, country };

    let addressFields;
    if (this.props.isEditingAddress) {
      addressFields = (
        <div>
          <h5>Edit Address</h5>
          <Address
            onInput={this.handleChange}
            onBlur={this.dirtyInput}
            address={this.state.editableAddress}
            errorMessages={this.state.errorMessages}
            countries={this.props.countries}
            states={this.props.states}
            required/>
          <button className="usa-button-primary" onClick={this.saveAddress}>Update</button>
          <button className="usa-button-secondary" onClick={this.handleCancel}>Cancel</button>
        </div>
      );
    } else if (this.props.savePending) {
      addressFields = (
        <div>
          <LoadingIndicator message="Updating your address..."/>
        </div>
      );
    } else {
      const displayAddress = (
        <div>
          <div className="letters-address street">{streetAddress}</div>
          <div className="letters-address city-state">{cityStatePostal}</div>
          <div className="letters-address country">{country}</div>
        </div>
      );

      addressFields = (
        <div>
          <h5 className="letters-address">{(this.props.recipientName || '').toLowerCase()}</h5>
          {emptyAddress && noAddressBanner}
          {!emptyAddress && displayAddress}
          <button className="address-help-btn" onClick={this.openAddressHelp}>What is this?</button>
          {this.props.canUpdate &&
            <button className="usa-button-secondary edit-address" onClick={this.startEditing}>Edit address</button>
          }
          <Modal
            title="Address usage"
            onClose={this.closeAddressHelp}
            visible={this.state.addressHelpVisible}
            id="address-help"
            contents={addressModalContent}/>
        </div>
      );
    }

    let addressContent;
    // If countries and states are not available when they try to update their address,
    // they will see this warning message instead of the address fields.
    if (this.props.isEditingAddress && (!this.props.countriesAvailable || !this.props.statesAvailable)) {
      addressContent = (
        <div className="step-content">
          {addressUpdateUnavailable}
        </div>
      );
    } else {
      addressContent = (
        <AddressContent
          saveError={this.props.saveAddressError}
          addressObject={addressContentLines}>
          {addressFields}
        </AddressContent>
      );
    }

    return (
      <div>
        <Element name="addressScrollElement"/>
        <div aria-live="polite" aria-relevant="additions">
          {/* Warning message goes here while editing with no address on record */}
          {emptyAddress && this.props.isEditingAddress && noAddressBanner}
          {addressContent}
        </div>
      </div>
    );
  }
}

// For testing purposes; we need to wrap the validators in spies--the same instances that are called in here
AddressSection.fieldValidations = {
  addressOne: addressOneValidations,
  zipCode: postalCodeValidations,
  stateCode: stateValidations,
  countryName: countryValidations,
  city: cityValidations
};

function mapStateToProps(state) {
  const {
    fullName,
    address,
    addressAvailability,
    canUpdate,
    countries,
    countriesAvailable,
    isEditingAddress,
    states,
    statesAvailable,
    saveAddressError,
    savePending
  } = state.letters;

  return {
    recipientName: fullName,
    canUpdate,
    savedAddress: address,
    addressAvailability,
    saveAddressError,
    savePending,
    countries,
    countriesAvailable,
    states,
    statesAvailable,
    isEditingAddress
  };
}

const mapDispatchToProps = {
  saveAddress,
  editAddress,
  cancelEditingAddress
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressSection);
