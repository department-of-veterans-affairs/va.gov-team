import _ from 'lodash/fp';
import { Validator } from 'jsonschema';

import {
  isValidSSN,
  isValidPartialDate,
  isValidCurrentOrPastDate,
  isValidCurrentOrPastYear,
  isValidCurrentOrFutureMonthYear,
  isValidDateRange,
  isValidRoutingNumber,
  isValidPartialMonthYear,
  isValidPartialMonthYearInPast
} from '../../../platform/forms/validations';

import { parseISODate } from './helpers';
import { isActivePage } from '../../../platform/forms/helpers';

/*
 * This contains the code for supporting our own custom validations and messages
 */

/*
 * Override the default messages for these json schema error types
 */
const defaultMessages = {
  required: 'Please provide a response',
  'enum': 'Please select a valid option',
  maxLength: (max) => `This field should be less than ${max} characters`,
  minLength: (min) => `This field should be at least ${min} character(s)`,
  format: (type) => {
    if (type === 'email') {
      return 'Please enter a valid email address';
    }

    return 'Please enter a valid value';
  }
};

function getMessage(path, name, uiSchema, errorArgument) {
  let pathSpecificMessage;
  if (path === 'instance') {
    pathSpecificMessage = _.get(['ui:errorMessages', name], uiSchema);
  } else {
    const cleanPath = path.replace('instance.', '').replace(/\[\d+\]/g, '.items');
    pathSpecificMessage = _.get(`${cleanPath}['ui:errorMessages'].${name}`, uiSchema);
  }

  if (pathSpecificMessage) {
    return pathSpecificMessage;
  }

  return typeof defaultMessages[name] === 'function'
    ? defaultMessages[name](errorArgument)
    : defaultMessages[name];
}

/*
 * This takes the list of errors outputted by the json schema node library
 * and moves the required errors to the missing field, rather than the containing
 * object.
 *
 * It also replaces the error messages with any form specific messages.
 */
export function transformErrors(errors, uiSchema) {
  const newErrors = errors.map(error => {
    if (error.name === 'required') {
      const path = `${error.property}.${error.argument}`;
      return _.assign(error, {
        property: path,
        message: getMessage(path, error.name, uiSchema, error.argument)
      });
    }

    const newMessage = getMessage(error.property, error.name, uiSchema, error.argument);
    if (newMessage) {
      return _.set('message', newMessage, error);
    }

    return error;
  });

  return newErrors;
}

/**
 * This pulls custom validations specified in the uiSchema and validates the formData
 * against them.
 *
 * Expects validations that look like:
 *
 * someField: {
 *   "ui:validations": [
 *     someValidation
 *   ]
 * }
 *
 * Each item in the ui:validations array can be a function OR an object:
 *    - Functions are called with (in order)
 *        pathErrors:                   Errors object for the field
 *        currentData:                  Data for the field
 *        formData:                     Current form data
 *        schema:                       Current JSON Schema for the field
 *        uiSchema['ui:errorMessages']: Error messsage object (if available) for the field
 *        currentIndex:                 Used to select the correct field data to validate against
 *    - Objects should have two properties, 'options' and 'validator'
 *        options:   Object (or anything, really) that will be passed to your validation function.
 *                   You can use this to allow your validation function to be configurable for
 *                   different fields on the form.
 *        validator: Same signature as function above, but with extra 'options' object as the
 *                   second-to-last argument (...options, currentIndex)
 * Both versions of custom validators should call `addError()` to actually add any errors to the
 * errors object
 * 
 * @param {Object} errors Errors object from rjsf, which includes an addError method
 * @param {Object} uiSchema The uiSchema for the current field
 * @param {Object} schema The schema for the current field
 * @param {Object} formData The (flattened) data for the entire form
 * @param {string} [path] The path to the current field relative to the root of the page.
 * @param {number} [currentIndex] Used to select the correct field data to validate against
 */

export function uiSchemaValidate(errors, uiSchema, schema, formData, path = '', currentIndex = null) {
  if (uiSchema && schema) {
    const currentData = path !== '' ? _.get(path, formData) : formData;
    if (uiSchema.items && currentData) {
      currentData.forEach((item, index) => {
        const newPath = `${path}[${index}]`;
        const currentSchema = index < schema.items.length
          ? schema.items[index]
          : schema.additionalItems;
        if (!_.get(newPath, errors)) {
          const currentErrors = path ? _.get(path, errors) : errors;
          currentErrors[index] = {
            __errors: [],
            addError(error) {
              this.__errors.push(error);
            }
          };
        }
        uiSchemaValidate(errors, uiSchema.items, currentSchema, formData, newPath, index);
      });
    } else if (!uiSchema.items) {
      Object.keys(uiSchema)
        .filter(prop => !prop.startsWith('ui:'))
        .forEach((item) => {
          const nextPath = path !== '' ? `${path}.${item}` : item;
          if (!_.get(nextPath, errors)) {
            const currentErrors = path === ''
              ? errors
              : _.get(path, errors);

            currentErrors[item] = {
              __errors: [],
              addError(error) {
                this.__errors.push(error);
              }
            };
          }
          uiSchemaValidate(errors, uiSchema[item], schema.properties[item], formData, nextPath, currentIndex);
        });
    }

    const validations = uiSchema['ui:validations'];
    if (validations && currentData) {
      validations.forEach(validation => {
        const pathErrors = path ? _.get(path, errors) : errors;
        if (typeof validation === 'function') {
          validation(pathErrors, currentData, formData, schema, uiSchema['ui:errorMessages'], currentIndex);
        } else {
          validation.validator(pathErrors, currentData, formData, schema, uiSchema['ui:errorMessages'], validation.options, currentIndex);
        }
      });
    }
  }
  return errors;
}

export function errorSchemaIsValid(errorSchema) {
  if (errorSchema && errorSchema.__errors && errorSchema.__errors.length) {
    return false;
  }

  return _.values(_.omit('__errors', errorSchema)).every(errorSchemaIsValid);
}

export function isValidForm(form, pageListByChapters) {
  const pageConfigs = _.flatten(_.values(pageListByChapters));
  const validPages = Object.keys(form.pages)
    .filter(pageKey => isActivePage(_.find({ pageKey }, pageConfigs), form.data));

  const v = new Validator();

  if (!form.data.privacyAgreementAccepted) {
    return { isValid: false };
  }

  return validPages.reduce(({ isValid, errors }, page) => {
    const { uiSchema, schema, showPagePerItem, itemFilter, arrayPath } = form.pages[page];
    let formData = form.data;

    if (showPagePerItem) {
      const arrayData = formData[arrayPath];
      if (arrayData) {
        formData = _.set(arrayPath, itemFilter ? arrayData.filter(itemFilter) : arrayData, formData);
      } else {
        formData = _.unset(arrayPath, formData);
      }
    }

    const result = v.validate(
      formData,
      schema
    );

    if (result.valid) {
      const customErrors = {};
      uiSchemaValidate(customErrors, uiSchema, schema, formData);

      return {
        isValid: isValid && errorSchemaIsValid(customErrors),
        errors: errors.concat(customErrors)
      };
    }

    return {
      isValid: false,
      // removes PII
      errors: errors.concat(result.errors.map(_.unset('instance')))
    };
  }, { isValid: true, errors: [] });
}


export function validateSSN(errors, ssn) {
  if (ssn && !isValidSSN(ssn)) {
    errors.addError('Please enter a valid 9 digit SSN (dashes allowed)');
  }
}

export function validateDate(errors, dateString) {
  const { day, month, year } = parseISODate(dateString);
  if (!isValidPartialDate(day, month, year)) {
    errors.addError('Please provide a valid date');
  }
}

export function validateMonthYear(errors, dateString) {
  const { month, year } = parseISODate(dateString);
  if (!isValidPartialMonthYear(month, year)) {
    errors.addError('Please provide a valid date');
  }
}

/**
 * Adds an error message to errors if a date is an invalid date or in the future.
 *
 * The message it adds can be customized in uiSchema.errorMessages.futureDate
 */
export function validateCurrentOrPastDate(errors, dateString, formData, schema, errorMessages = {}) {
  const { futureDate = 'Please provide a valid current or past date' } = errorMessages;
  validateDate(errors, dateString);
  const { day, month, year } = parseISODate(dateString);
  if (!isValidCurrentOrPastDate(day, month, year)) {
    errors.addError(futureDate);
  }
}

export function validateCurrentOrPastMonthYear(errors, dateString, formData, schema, errorMessages = {}) {
  const { futureDate = 'Please provide a valid current or past date' } = errorMessages;
  validateMonthYear(errors, dateString);
  const { month, year } = parseISODate(dateString);
  if (!isValidPartialMonthYearInPast(month, year)) {
    errors.addError(futureDate);
  }
}

/**
 * Adds an error message to errors if a date is an invalid date or in the past.
 */
export function validateFutureDateIfExpectedGrad(errors, dateString, formData) {
  validateDate(errors, dateString);
  const { month, year } = parseISODate(dateString);
  if (formData.highSchool.status === 'graduationExpected' && !isValidCurrentOrFutureMonthYear(month, year)) {
    errors.addError('Please provide a valid future date');
  }
}

/**
 * Adds an error message to errors if an integer year value is not between 1900 and the current year.
 */
export function validateCurrentOrPastYear(errors, year) {
  if (!isValidCurrentOrPastYear(year)) {
    errors.addError('Please provide a valid year');
  }
}

export function validateMatch(field1, field2) {
  return (errors, formData) => {
    if (formData[field1] !== formData[field2]) {
      errors[field2].addError('Please ensure your entries match');
    }
  };
}

export function validateRoutingNumber(errors, routingNumber, formData, schema, errorMessages) {
  if (!isValidRoutingNumber(routingNumber)) {
    errors.addError(errorMessages.pattern);
  }
}

export function convertToDateField(dateStr) {
  const date = parseISODate(dateStr);
  return Object.keys(date).reduce((dateField, part) => {
    const datePart = {};
    datePart[part] = {
      value: date[part]
    };
    return _.assign(dateField, datePart);
  }, date);
}

export function validateDateRange(errors, dateRange, formData, schema, errorMessages) {
  const fromDate = convertToDateField(dateRange.from);
  const toDate = convertToDateField(dateRange.to);

  if (!isValidDateRange(fromDate, toDate)) {
    errors.to.addError(errorMessages.pattern || 'To date must be after from date');
  }
}

export function getFileError(file) {
  if (file.errorMessage) {
    return file.errorMessage;
  } else if (file.uploading) {
    return 'Uploading file...';
  } else if (!file.confirmationCode) {
    return 'Something went wrong...';
  }

  return null;
}

export function validateFileField(errors, fileList) {
  fileList.forEach((file, index) => {
    const error = getFileError(file);

    if (error && !errors[index]) {
      /* eslint-disable no-param-reassign */
      errors[index] = {
        __errors: [],
        addError(msg) {
          this.__errors.push(msg);
        }
      };
      /* eslint-enable no-param-reassign */
    }

    if (error) {
      errors[index].addError(error);
    }
  });
}

export function validateBooleanGroup(errors, userGroup, form, schema, errorMessages = {}) {
  const { atLeastOne = 'Please choose at least one option' } = errorMessages;
  const group = userGroup || {};
  if (!Object.keys(group).filter(item => group[item] === true).length) {
    errors.addError(atLeastOne);
  }
}

export function validateAutosuggestOption(errors, formData) {
  if (formData &&
    formData.widget === 'autosuggest' &&
    !formData.id &&
    formData.label) {
    errors.addError('Please select an option from the suggestions');
  }
}
