import merge from 'lodash/fp/merge';
import Raven from 'raven-js';
import appendQuery from 'append-query';

import environment from '../environment';

function isJson(response) {
  const contentType = response.headers.get('content-type');
  return contentType && contentType.indexOf('application/json') !== -1;
}

export function apiRequest(resource, optionalSettings = {}, success, error) {
  const baseUrl = `${environment.API_URL}/v0`;
  const url = resource[0] === '/'
    ? [baseUrl, resource].join('')
    : resource;

  const defaultSettings = {
    method: 'GET',
    headers: {
      'X-Key-Inflection': 'camel'
    }
  };

  if (sessionStorage.userToken) {
    defaultSettings.headers.Authorization = `Token token=${sessionStorage.userToken}`;
  }

  const settings = merge(defaultSettings, optionalSettings);

  return fetch(url, settings)
    .catch(err => {
      Raven.captureMessage(`vets_client_error: ${err.message}`, {
        extra: {
          error: err
        }
      });

      return Promise.reject(err);
    })
    .then((response) => {
      const data = isJson(response)
        ? response.json()
        : Promise.resolve(response);

      if (!response.ok) {
        const { pathname } = window.location;
        const shouldRedirectToLogin =
          response.status === 401 &&
          !pathname.includes('auth/login/callback');

        if (shouldRedirectToLogin) {
          const loginUrl = appendQuery(environment.BASE_URL, { next: pathname });
          window.location.href = loginUrl;
        }

        return data.then(Promise.reject.bind(Promise));
      }

      return data;
    })
    .then(success)
    .catch(error);
}
