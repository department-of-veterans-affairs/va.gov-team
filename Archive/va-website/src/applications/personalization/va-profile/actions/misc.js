import { isValidEmail, isValidPhone } from '../../../../platform/forms/validations';

export const UPDATE_PROFILE_FORM_FIELD = 'UPDATE_PROFILE_FORM_FIELD';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLEAR_PROFILE_ERRORS = 'CLEAR_PROFILE_ERRORS';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

export function openModal(modal) {
  return { type: OPEN_MODAL, modal };
}

export function clearErrors() {
  return { type: CLEAR_PROFILE_ERRORS };
}

export function clearMessage() {
  return { type: CLEAR_MESSAGE };
}

function validateEmail({ email }) {
  return isValidEmail(email) ? '' : 'Please enter a valid email.';
}

function validateTelephone({ number }) {
  return isValidPhone(number) ? '' : 'Please enter a valid phone.';
}

function updateProfileFormField(field, validator) {
  return (value, dirty) => {
    const errorMessage = validator && dirty ? validator(value) : '';
    return {
      type: UPDATE_PROFILE_FORM_FIELD,
      field,
      newState: {
        value,
        errorMessage
      }
    };
  };
}

export const updateFormField = {
  email: updateProfileFormField('email', validateEmail),
  mailingAddress: updateProfileFormField('mailingAddress'),
  primaryTelephone: updateProfileFormField('primaryTelephone', validateTelephone),
  alternateTelephone: updateProfileFormField('alternateTelephone', validateTelephone)
};
