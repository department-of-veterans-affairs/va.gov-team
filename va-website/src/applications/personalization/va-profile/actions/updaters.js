import { apiRequest } from '../../../../platform/utilities/api';

export const SAVE_MAILING_ADDRESS = 'SAVE_MAILING_ADDRESS';
export const SAVE_MAILING_ADDRESS_FAIL = 'SAVE_MAILING_ADDRESS_FAIL';
export const SAVE_MAILING_ADDRESS_SUCCESS = 'SAVE_MAILING_ADDRESS_SUCCESS';

export const SAVE_PRIMARY_PHONE = 'SAVE_PRIMARY_PHONE';
export const SAVE_PRIMARY_PHONE_FAIL = 'SAVE_PRIMARY_PHONE_FAIL';
export const SAVE_PRIMARY_PHONE_SUCCESS = 'SAVE_PRIMARY_PHONE_SUCCESS';

export const SAVE_ALTERNATE_PHONE = 'SAVE_ALTERNATE_PHONE';
export const SAVE_ALTERNATE_PHONE_FAIL = 'SAVE_ALTERNATE_PHONE_FAIL';
export const SAVE_ALTERNATE_PHONE_SUCCESS = 'SAVE_ALTERNATE_PHONE_SUCCESS';

export const SAVE_EMAIL_ADDRESS = 'SAVE_EMAIL_ADDRESS';
export const SAVE_EMAIL_ADDRESS_FAIL = 'SAVE_EMAIL_ADDRESS_FAIL';
export const SAVE_EMAIL_ADDRESS_SUCCESS = 'SAVE_EMAIL_ADDRESS_SUCCESS';

function saveFieldHandler(apiRoute, fieldName, requestStartAction, requestSuccessAction, requestFailAction, method = 'POST') {
  return fieldValue => {
    return async dispatch => {
      const options = {
        body: JSON.stringify(fieldValue),
        method,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      dispatch({ type: requestStartAction });

      try {
        const response = await apiRequest(apiRoute, options);
        dispatch({
          type: requestSuccessAction,
          fieldName,
          newValue: response.data.attributes
        });
      } catch (err) {
        dispatch({ type: requestFailAction });
      }
    };
  };
}

export const saveField = {
  updateEmailAddress: saveFieldHandler(
    '/profile/email',
    'email',
    SAVE_EMAIL_ADDRESS,
    SAVE_EMAIL_ADDRESS_SUCCESS,
    SAVE_EMAIL_ADDRESS_FAIL),

  updatePrimaryPhone: saveFieldHandler(
    '/profile/primary_phone',
    'primaryTelephone',
    SAVE_PRIMARY_PHONE,
    SAVE_PRIMARY_PHONE_SUCCESS,
    SAVE_PRIMARY_PHONE_FAIL),

  updateAlternatePhone: saveFieldHandler(
    '/profile/alternate_phone',
    'alternateTelephone',
    SAVE_ALTERNATE_PHONE,
    SAVE_ALTERNATE_PHONE_SUCCESS,
    SAVE_ALTERNATE_PHONE_FAIL),

  updateMailingAddress: saveFieldHandler(
    '/profile/mailing_address',
    'mailingAddress',
    SAVE_MAILING_ADDRESS,
    SAVE_MAILING_ADDRESS_SUCCESS,
    SAVE_MAILING_ADDRESS_FAIL,
    'PUT')
};
