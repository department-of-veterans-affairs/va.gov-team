import { apiRequest } from '../../../platform/utilities/api';

export const REGISTERING_SERVICE = 'REGISTERING_SERVICE';
export const REGISTER_SERVICE = 'REGISTER_SERVICE';

export const UNREGISTERING_SERVICE = 'UNREGISTERING_SERVICE';
export const UNREGISTER_SERVICE = 'UNREGISTER_SERVICE';

export function registerBeta(service) {
  return dispatch => {
    dispatch({ type: REGISTERING_SERVICE, service });

    const settings = {
      method: 'POST'
    };

    return apiRequest(`/beta_registration/${service}`, settings)
      .then(() => dispatch({ type: REGISTER_SERVICE, service }));
  };
}

export function unregisterBeta(service) {
  return dispatch => {
    dispatch({ type: UNREGISTERING_SERVICE, service });

    const settings = {
      method: 'DELETE'
    };

    return apiRequest(`/beta_registration/${service}`, settings)
      .then(() => dispatch({ type: UNREGISTER_SERVICE, service }));
  };
}
