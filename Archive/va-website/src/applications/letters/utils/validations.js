import { isValidUSZipCode } from '../../../platform/forms/address';
import { ADDRESS_TYPES, MILITARY_CITIES } from './constants';

const requiredMessage = 'Please enter a valid address'; // Change me!

/**
 * Ensures the input isn't blank
 */
const requiredValidator = (input, fullAddress, message = requiredMessage) => {
  if (!input) {
    return message;
  }

  // Could return anything that isn't a string, really
  return true;
};

const specialCharacterValidator = (input) => {
  if (/[^A-Za-z0-9 #%&'()+,./:@]/.test(input)) {
    return "Please only use letters, numbers, and the special characters #%&'()+,./:@";
  }

  return true;
};


/**
 * The signature of all validation functions is always the following
 *
 * @param {Mixed} input        - The value of the field that was changed
 * @param {Object} fullAddress - An object that contains the whole address with the modified
 *                               field and updated address type
 * @return {String|Mixed}      - If the validation fails, return the error message to display
 *                               If the validation passes, return anything else (we only care
 *                               if an error message is returned)
 */
export const addressOneValidations = [
  (input, fullAddress) => requiredValidator(input, fullAddress, 'Please enter a street address'),
  specialCharacterValidator
];

export const postalCodeValidations = [
  // Require zip for US addresses
  (postalCode, fullAddress) => {
    if (fullAddress.countryName === 'USA' && !postalCode) {
      return 'Please enter a Zip code';
    }

    return true;
  },
  // Check for valid US zip codes
  (postalCode, fullAddress) => {
    if (fullAddress.countryName === 'USA' && !isValidUSZipCode(postalCode)) {
      return 'Please enter a valid Zip code';
    }

    return true;
  }
];

export const stateValidations = [
  // Require a state for US addresses
  (state, fullAddress) => {
    if (fullAddress.countryName === 'USA' && !state) {
      return 'Please select a state';
    }

    return true;
  }
];

export const countryValidations = [
  (countryName, fullAddress) => {
    // Country is required for domestic and international, but not military
    if (fullAddress.type !== ADDRESS_TYPES.military && !countryName) {
      return 'Please select a country';
    }

    return true;
  }
];

export const cityValidations = [
  (city, fullAddress) => requiredValidator(city, fullAddress, 'Please enter a city'),
  (city, fullAddress) => {
    if (fullAddress.type === ADDRESS_TYPES.military && !MILITARY_CITIES.has(city)) {
      return 'Please enter APO, FPO, or DPO';
    }

    return true;
  }
];

