import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { focusElement } from '../../../platform/utilities/ui';

import ErrorableSelect from './ErrorableSelect';
import ErrorableTextInput from './ErrorableTextInput';
import { STATE_CODE_TO_NAME, MILITARY_CITIES } from '../utils/constants';
import { militaryStateNames } from '../utils/helpers';

/**
 * Input component for an address.
 *
 * No validation is provided through a currently stubbed isAddressValid function.
 */
class Address extends React.Component {
  componentWillMount() {
    this.id = _.uniqueId('address-input-');
  }

  componentDidMount() {
    focusElement('h5');
  }

  getAdjustedStateNames = () => {
    // Reformat the state name data so that it can be
    // accepted by ErrorableSelect,
    // e.g., from this: `IL: 'Illinois'`
    // to this: `{ value: 'Illinois', label: 'IL' }`
    let statesList = [];

    // If the city is a military city, just add the military statesList to the list
    if (this.props.address.city && this.isMilitaryCity(this.props.address.city)) {
      statesList = militaryStateNames;
    } else {
      // Add statesList to list in the correct format
      _.mapKeys(STATE_CODE_TO_NAME, (value, key) => {
        statesList.push({ label: value, value: key });
      });
      // Add military statesList to full state list
      militaryStateNames.forEach((militaryState) => {
        statesList.push(militaryState);
      });
      // Alphabetize the list
      statesList.sort((a, b) => {
        if (a.label < b.label) {
          return -1;
        }
        if (a.label > b.label) {
          return 1;
        }
        return 0;
      });
    }

    return statesList;
  }

  isMilitaryCity = (city) => {
    const upperCity = city.toUpperCase().trim();

    return MILITARY_CITIES.has(upperCity);
  }

  render() {
    const errorMessages = this.props.errorMessages;
    const isUSA = this.props.address.countryName === 'USA';
    const adjustedStateNames = this.getAdjustedStateNames();

    return (
      <div>
        <ErrorableSelect errorMessage={errorMessages.countryName}
          label="Country"
          name="country"
          autocomplete="country"
          options={this.props.countries}
          value={this.props.address.countryName}
          required={this.props.required}
          onValueChange={(update) => this.props.onInput('countryName', update, true)}/>
        <ErrorableTextInput errorMessage={errorMessages.addressOne}
          label="Street address"
          name="addressOne"
          autocomplete="address-line1"
          charMax={35}
          value={this.props.address.addressOne}
          required={this.props.required}
          onValueChange={(update) => this.props.onInput('addressOne', update)}
          onBlur={() => this.props.onBlur('addressOne')}/>
        <ErrorableTextInput
          label="Street address (optional)"
          name="addressTwo"
          autocomplete="address-line2"
          charMax={35}
          value={this.props.address.addressTwo}
          onValueChange={(update) => this.props.onInput('addressTwo', update)}
          onBlur={() => this.props.onBlur('addressTwo')}/>
        <ErrorableTextInput
          label="Street address (optional)"
          name="addressThree"
          autocomplete="address-line3"
          charMax={35}
          value={this.props.address.addressThree}
          onValueChange={(update) => this.props.onInput('addressThree', update)}
          onBlur={() => this.props.onBlur('addressThree')}/>
        <ErrorableTextInput errorMessage={errorMessages.city}
          label={<span>City <em>(or APO/FPO/DPO)</em></span>}
          name="city"
          autocomplete="address-level2"
          charMax={30}
          value={this.props.address.city}
          required={this.props.required}
          onValueChange={(update) => this.props.onInput('city', update)}
          onBlur={() => this.props.onBlur('city')}/>

        {/* Hide the state for addresses that aren't in the US */}
        {isUSA && <ErrorableSelect errorMessage={errorMessages.stateCode}
          label="State"
          name="state"
          autocomplete="address-level1"
          options={adjustedStateNames}
          value={this.props.address.stateCode}
          required={this.props.required}
          onValueChange={(update) => this.props.onInput('stateCode', update, true)}/>}

        {/* Hide the zip code for addresseses that aren't in the US */}
        {isUSA && <ErrorableTextInput errorMessage={errorMessages.zipCode}
          additionalClass="usa-input-medium"
          label={'Zip code'}
          name="postalCode"
          autocomplete="postal-code"
          value={this.props.address.zipCode}
          required={this.props.required}
          onValueChange={(update) => this.props.onInput('zipCode', update)}
          onBlur={() => this.props.onBlur('zipCode')}/>}
      </div>
    );
  }
}

const addressShape = PropTypes.shape({
  addressOne: PropTypes.string,
  addressTwo: PropTypes.string,
  addressThree: PropTypes.string,
  city: PropTypes.string,
  stateCode: PropTypes.string,
  countryName: PropTypes.string,
  zipCode: PropTypes.string
});

Address.propTypes = {
  onInput: PropTypes.func.isRequired,
  address: addressShape.isRequired,
  errorMessages: addressShape.isRequired,
  countries: PropTypes.array.isRequired,
};

export default Address;
