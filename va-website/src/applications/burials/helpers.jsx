import React from 'react';
import Raven from 'raven-js';
import moment from 'moment';
import environment from '../../platform/utilities/environment';
import { transformForSubmit } from '../common/schemaform/helpers';

function checkStatus(guid) {
  const userToken = window.sessionStorage.userToken;
  const headers = {
    'Content-Type': 'application/json',
    'X-Key-Inflection': 'camel',
  };

  if (userToken) {
    headers.Authorization = `Token token=${userToken}`;
  }
  return fetch(`${environment.API_URL}/v0/burial_claims/${guid}`, {
    headers,
    mode: 'cors'
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(res);
    }).catch(res => {
      if (res instanceof Error) {
        Raven.captureException(res);
        Raven.captureMessage('vets_burial_poll_client_error');

        // keep polling because we know they submitted earlier
        // and this is likely a network error
        return Promise.resolve();
      }

      // if we get here, it's likely that we hit a server error
      return Promise.reject(res);
    });
}

const POLLING_INTERVAL = 1000;

function pollStatus({ guid, confirmationNumber, regionalOffice }, onDone, onError) {
  setTimeout(() => {
    checkStatus(guid)
      .then(res => {
        if (!res || res.data.attributes.state === 'pending') {
          pollStatus({ guid, confirmationNumber, regionalOffice }, onDone, onError);
        } else if (res.data.attributes.state === 'success') {
          const response = res.data.attributes.response || { confirmationNumber, regionalOffice };
          onDone(response);
        } else {
          // needs to start with this string to get the right message on the form
          throw new Error(`vets_server_error_burial: status ${res.data.attributes.state}`);
        }
      })
      .catch(onError);
  }, window.VetsGov.pollTimeout || POLLING_INTERVAL);
}

export function transform(formConfig, form) {
  const formData = transformForSubmit(formConfig, form);
  return JSON.stringify({
    burialClaim: {
      form: formData
    },
    // can’t use toISOString because we need the offset
    localTime: moment().format('Y-MM-DD[T]kk:mm:ssZZ')
  });
}

export function submit(form, formConfig) {
  const userToken = window.sessionStorage.userToken;
  const headers = {
    'Content-Type': 'application/json',
    'X-Key-Inflection': 'camel',
  };

  if (userToken) {
    headers.Authorization = `Token token=${userToken}`;
  }

  const body = transform(formConfig, form);
  return fetch(`${environment.API_URL}/v0/burial_claims`, {
    body,
    headers,
    method: 'POST',
    mode: 'cors'
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }).then(resp => {
    const { guid, confirmationNumber, regionalOffice } = resp.data.attributes;
    return new Promise((resolve, reject) => {
      pollStatus({ guid, confirmationNumber, regionalOffice }, response => {
        window.dataLayer.push({
          event: `${formConfig.trackingPrefix}-submission-successful`,
        });
        return resolve(response);
      }, error => reject(error));

    });
  }).catch(respOrError => {
    if (respOrError instanceof Response) {
      if (respOrError.status === 429) {
        const error = new Error('vets_throttled_error_burial');
        error.extra = parseInt(respOrError.headers.get('x-ratelimit-reset'), 10);

        return Promise.reject(error);
      }
    }
    return Promise.reject(respOrError);
  });
}
export const serviceRecordNotification = (
  <div className="usa-alert usa-alert-warning no-background-image">
    <span><strong>Note:</strong> If you would rather upload a DD214 than enter dates here, you can do that later in the form.</span>
  </div>
);

export const serviceRecordWarning = (
  <div className="usa-alert usa-alert-warning no-background-image">
    <span><strong>Note:</strong> If you chose to upload a DD214 instead of recording service periods, you can do that here</span>
  </div>
);

export const transportationWarning = (
  <div className="usa-alert usa-alert-warning no-background-image">
    <span><strong>Note:</strong> At the end of the application, you will be asked to upload documentation for the expenses you incurred for transporting the Veteran’s remains.</span>
  </div>
);

export const burialDateWarning = (
  <div className="usa-alert usa-alert-warning no-background-image">
    <span>If filing for a non-service-connected allowance, the Veteran’s burial date must be no more than 2 years from the current date. Find out if you still qualify. <a href="/burials-and-memorials/eligibility/" target="_blank">Learn about eligibility.</a></span>
  </div>
);

export function fileHelp({ formContext }) {
  if (formContext.reviewMode) {
    return <p/>;
  }

  return (
    <p>
      Files we accept: pdf, jpg, png<br/>
      Maximum file size: 20MB
    </p>
  );
}

