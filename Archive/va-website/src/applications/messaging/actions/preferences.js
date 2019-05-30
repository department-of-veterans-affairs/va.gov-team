import {
  SM_FETCH_PREFERENCES_FAILURE,
  SM_FETCH_PREFERENCES_SUCCESS,
  SM_LOADING_PREFERENCES,
  SM_SAVE_PREFERENCES_FAILURE,
  SM_SAVE_PREFERENCES_SUCCESS,
  SM_SAVING_PREFERENCES,
  SM_SET_NOTIFICATION_EMAIL,
  SM_SET_NOTIFICATION_FREQUENCY
} from '../utils/constants';

import { apiRequest } from '../utils/helpers';


const baseUrl = '/preferences';

export function fetchPreferences() {
  return dispatch => {
    dispatch({ type: SM_LOADING_PREFERENCES });

    apiRequest(
      baseUrl,
      null,
      response => dispatch({
        type: SM_FETCH_PREFERENCES_SUCCESS,
        preferences: response.data.attributes
      }),
      () => dispatch({ type: SM_FETCH_PREFERENCES_FAILURE })
    );
  };
}

export function savePreferences(preferences) {
  const settings = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(preferences)
  };

  return dispatch => {
    dispatch({ type: SM_SAVING_PREFERENCES });

    apiRequest(
      baseUrl,
      settings,
      response => dispatch({
        type: SM_SAVE_PREFERENCES_SUCCESS,
        preferences: response.data.attributes
      }),
      response => dispatch({
        type: SM_SAVE_PREFERENCES_FAILURE,
        errors: response.errors
      })
    );
  };
}

export function setNotificationEmail(email) {
  return { type: SM_SET_NOTIFICATION_EMAIL, email };
}

export function setNotificationFrequency(frequency) {
  return { type: SM_SET_NOTIFICATION_FREQUENCY, frequency };
}
