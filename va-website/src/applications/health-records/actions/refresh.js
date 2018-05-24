import { apiRequest } from '../../../platform/utilities/api';

export function initialAppRefresh() {
  return (dispatch) => {
    dispatch({ type: 'INITIAL_LOADING' });

    return apiRequest(
      '/health_records/refresh',
      null,
      () => dispatch({ type: 'INITIAL_REFRESH_SUCCESS' }),
      ({ errors }) => dispatch({ type: 'INITIAL_REFRESH_FAILURE', errors })
    );
  };
}

export function checkRefreshStatus() {
  return (dispatch) => {
    return apiRequest(
      '/health_records/refresh',
      null,
      ({ data }) => dispatch({ type: 'REFRESH_POLL_SUCCESS', data }),
      () => dispatch({ type: 'REFRESH_POLL_FAILURE' })
    );
  };
}
