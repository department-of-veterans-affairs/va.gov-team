import recordEvent from '../../../platform/monitoring/record-event';
import { apiRequest } from '../../../platform/utilities/api';

export const FETCHING_LATEST_TERMS = 'FETCHING_LATEST_TERMS';
export const FETCH_LATEST_TERMS_FAILURE = 'FETCH_LATEST_TERMS_FAILURE';
export const FETCH_LATEST_TERMS_SUCCESS = 'FETCH_LATEST_TERMS_SUCCESS';

export const FETCHING_TERMS_ACCEPTANCE = 'FETCHING_TERMS_ACCEPTANCE';
export const FETCH_TERMS_ACCEPTANCE_FAILURE = 'FETCH_TERMS_ACCEPTANCE_FAILURE';
export const FETCH_TERMS_ACCEPTANCE_SUCCESS = 'FETCH_TERMS_ACCEPTANCE_SUCCESS';

export const ACCEPTING_LATEST_TERMS = 'ACCEPTING_LATEST_TERMS';
export const ACCEPT_LATEST_TERMS_FAILURE = 'ACCEPT_LATEST_TERMS_FAILURE';
export const ACCEPT_LATEST_TERMS_SUCCESS = 'ACCEPT_LATEST_TERMS_SUCCESS';

const BASE_URI = '/terms_and_conditions';

const LATEST_TC_URI = (termsName) => `${BASE_URI}/${termsName}/versions/latest`;

const TC_ACCEPTANCE_URI = (termsName) => `${BASE_URI}/${termsName}/versions/latest/user_data`;

export function fetchLatestTerms(termsName) {
  return dispatch => {
    dispatch({ type: FETCHING_LATEST_TERMS });

    apiRequest(
      LATEST_TC_URI(termsName),
      null,
      ({ data }) => dispatch({ type: FETCH_LATEST_TERMS_SUCCESS, data }),
      errors => dispatch({ type: FETCH_LATEST_TERMS_FAILURE, errors })
    );
  };
}

export function fetchTermsAcceptance(termsName) {
  return dispatch => {
    dispatch({ type: FETCHING_TERMS_ACCEPTANCE });

    apiRequest(
      TC_ACCEPTANCE_URI(termsName),
      null,
      () => dispatch({ type: FETCH_TERMS_ACCEPTANCE_SUCCESS }),
      () => dispatch({ type: FETCH_TERMS_ACCEPTANCE_FAILURE })
    );
  };
}

export function acceptTerms(termsName) {
  return dispatch => {
    dispatch({ type: ACCEPTING_LATEST_TERMS });

    const settings = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: termsName, })
    };

    apiRequest(
      TC_ACCEPTANCE_URI(termsName),
      settings,
      () => {
        recordEvent({ event: 'terms-accepted' });
        dispatch({ type: ACCEPT_LATEST_TERMS_SUCCESS });
      },
      errors => dispatch({ type: ACCEPT_LATEST_TERMS_FAILURE, errors })
    );
  };
}
