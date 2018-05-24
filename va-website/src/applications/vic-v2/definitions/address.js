import _ from 'lodash/fp';
import { createSelector } from 'reselect';

import { countryLabels, countryValues, states } from '../labels';

const requiredFields = ['street', 'city', 'country', 'state', 'postalCode'];

export function isValidUSZipCode(value) {
  return /(^\d{5}$)|(^\d{5}[ -]{0,1}\d{4}$)/.test(value);
}

export function isValidCanPostalCode(value) {
  return /^[a-zA-Z]\d[a-zA-Z][ -]{0,1}\d[a-zA-Z]\d$/.test(value);
}

function validatePostalCodes(errors, address) {
  let isValidPostalCode = true;

  // Checks if postal code is valid
  if (address.country === 'USA') {
    isValidPostalCode = isValidPostalCode && isValidUSZipCode(address.postalCode);
  }
  if (address.country === 'CAN') {
    isValidPostalCode = isValidPostalCode && isValidCanPostalCode(address.postalCode);
  }

  // Add error message for postal code if it is invalid
  if (address.postalCode && !isValidPostalCode) {
    errors.postalCode.addError('Please provide a valid postal code');
  }
}

/*
 * Create schema for VIC addresses
 *
 * @param {object} schema - Schema for a full form, including address definition in definitions
 */
export function schema(currentSchema) {
  return {
    type: 'object',
    required: requiredFields,
    properties: _.assign(currentSchema.definitions.address.properties, {
      country: {
        'default': 'USA',
        type: 'string',
        'enum': countryValues,
        enumNames: countryLabels
      },
      state: {
        title: 'State',
        type: 'string',
        maxLength: 51
      },
      postalCode: {
        type: 'string',
        maxLength: 10
      }
    })
  };
}

/*
 * Create uiSchema for VIC addresses
 *
 * @param {object} schema - Schema for a full form, including address definition in definitions
 * @param {string} label - Block label for the address
 */
export function uiSchema(currentSchema, label = 'Address') {
  const fieldOrder = ['country', 'street', 'street2', 'city', 'state', 'postalCode'];
  const stateSchemas = currentSchema.definitions.address.oneOf.reduce((schemas, state) => {
    if (state.properties.country.enum.length === 1) {
      const country = state.properties.country.enum[0];
      return Object.assign(schemas, {
        [country]: _.merge(state.properties.state, {
          enumNames: states[country],
          title: 'State',
          type: 'string'
        })
      });
    }

    return schemas;
  }, {});

  const hiddenState = {
    type: 'string',
    'ui:hidden': true
  };

  const addressChangeSelector = createSelector(
    ({ formData, path }) => _.get(path.concat('country'), formData),
    _.get('addressSchema'),
    (currentCountry, addressSchema) => {
      const schemaUpdate = {
        properties: addressSchema.properties,
        required: addressSchema.required
      };
      const country = currentCountry || addressSchema.properties.country.default;

      if (stateSchemas[country]) {
        // We have a list and it’s different, so we need to make schema updates
        if (addressSchema.properties.state.enum !== stateSchemas[country].enum) {
          schemaUpdate.properties = _.set('state', stateSchemas[country], schemaUpdate.properties);

          // all the countries with state lists require the state field, so add that if necessary
          if (!addressSchema.required.some(field => field === 'state')) {
            schemaUpdate.required = addressSchema.required.concat('state');
          }
          // Canada has a different title than others, so set that when necessary
          if (country === 'CAN' && addressSchema.properties.state.title !== 'Province') {
            schemaUpdate.properties = _.set('state.title', 'Province', schemaUpdate.properties);
          } else if (country !== 'CAN' && addressSchema.properties.state.title !== 'State') {
            schemaUpdate.properties = _.set('state.title', 'State', schemaUpdate.properties);
          }
        }
      } else if (addressSchema.properties.state.enum) {
        schemaUpdate.properties = _.set('state', hiddenState, schemaUpdate.properties);
        schemaUpdate.required = addressSchema.required.filter(field => field !== 'state');
      }

      return schemaUpdate;
    }
  );

  return {
    'ui:title': label,
    'ui:validations': [
      validatePostalCodes
    ],
    'ui:options': {
      updateSchema: (formData, addressSchema, addressUiSchema, index, path) => {
        return addressChangeSelector({
          formData,
          addressSchema,
          path
        });
      }
    },
    'ui:order': fieldOrder,
    country: {
      'ui:title': 'Country'
    },
    street: {
      'ui:title': 'Street'
    },
    street2: {
      'ui:title': 'Line 2'
    },
    city: {
      'ui:title': 'City'
    },
    state: {},
    postalCode: {
      'ui:title': 'Postal code',
      'ui:options': {
        widgetClassNames: 'usa-input-medium'
      }
    }
  };
}
