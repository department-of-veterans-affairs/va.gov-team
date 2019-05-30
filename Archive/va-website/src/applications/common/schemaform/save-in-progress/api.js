import Raven from 'raven-js';
import recordEvent from '../../../../platform/monitoring/record-event';
import environment from '../../../../platform/utilities/environment';
import { sanitizeForm } from '../../../../platform/forms/helpers';

export function removeFormApi(formId) {
  const userToken = sessionStorage.userToken;

  return fetch(`${environment.API_URL}/v0/in_progress_forms/${formId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-Key-Inflection': 'camel',
      Authorization: `Token token=${userToken}`
    },
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res);
    }

    return Promise.resolve();
  }).catch(res => {
    if (res instanceof Error) {
      Raven.captureException(res);
      Raven.captureMessage('vets_sip_error_delete');
      return Promise.resolve();
    } else if (!res.ok) {
      Raven.captureMessage(`vets_sip_error_delete: ${res.statusText}`);
    }

    return Promise.reject(res);
  });
}

export function saveFormApi(formId, formData, version, returnUrl, savedAt, trackingPrefix) {
  const body = JSON.stringify({
    metadata: {
      version,
      returnUrl,
      savedAt
    },
    formData
  });

  const userToken = sessionStorage.userToken;
  if (!userToken) {
    Raven.captureMessage('vets_sip_missing_token');
    recordEvent({
      event: `${trackingPrefix}sip-form-save-failed`
    });
    return Promise.reject(new Error('Missing token'));
  }

  return fetch(`${environment.API_URL}/v0/in_progress_forms/${formId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Key-Inflection': 'camel',
      Authorization: `Token token=${userToken}`
    },
    body
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(res);
  }).then(result => {
    recordEvent({
      event: `${trackingPrefix}sip-form-saved`
    });

    return Promise.resolve(result);
  }).catch(resOrError => {
    if (resOrError.status === 401) {
      recordEvent({
        event: `${trackingPrefix}sip-form-save-signed-out`
      });
    } else if (resOrError instanceof Response) {
      recordEvent({
        event: `${trackingPrefix}sip-form-save-failed`
      });
    } else {
      Raven.captureException(resOrError);
      Raven.captureMessage('vets_sip_error_save', {
        extra: {
          form: sanitizeForm(formData)
        }
      });
      recordEvent({
        event: `${trackingPrefix}sip-form-save-failed-client`
      });
    }

    return Promise.reject(resOrError);
  });
}
