import { apiRequest } from '../utils/helpers';

const baseUrl = '/preferences';

export function fetchPreferences() {
  return dispatch => {
    dispatch({ type: 'RX_LOADING_PREFERENCES' });

    apiRequest(
      baseUrl,
      null,
      response => dispatch({
        type: 'RX_FETCH_PREFERENCES_SUCCESS',
        preferences: response.data.attributes
      }),
      () => dispatch({ type: 'RX_FETCH_PREFERENCES_FAILURE' })
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
    dispatch({ type: 'RX_SAVING_PREFERENCES' });

    apiRequest(
      baseUrl,
      settings,
      response => dispatch({
        type: 'RX_SAVE_PREFERENCES_SUCCESS',
        preferences: response.data.attributes
      }),
      response => dispatch({
        type: 'RX_SAVE_PREFERENCES_FAILURE',
        errors: response.errors
      })
    );
  };
}

export function setNotificationEmail(email) {
  return { type: 'RX_SET_NOTIFICATION_EMAIL', email };
}

export function setNotificationFlag(flag) {
  return { type: 'RX_SET_NOTIFICATION_FLAG', flag };
}
