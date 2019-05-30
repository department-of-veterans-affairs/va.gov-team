import { apiRequest } from '../../../platform/utilities/api';

export const BETA_REGISTERING = 'BETA_REGISTERING';
export const BETA_REGISTER_SUCCESS = 'BETA_REGISTER_SUCCESS';
export const BETA_REGISTER_FAILURE = 'BETA_REGISTER_FAILURE';

export function registerBeta() {
  return dispatch => {
    dispatch({ type: BETA_REGISTERING });

    const settings = {
      method: 'POST',
    };

    apiRequest('/beta_registration/veteran_id_card',
      settings,
      response => dispatch({
        type: BETA_REGISTER_SUCCESS,
        username: response.user,
        stats: 'succeeded',
      }),
      () => dispatch({
        type: BETA_REGISTER_FAILURE,
        stats: 'failed'
      })
    );
  };
}

