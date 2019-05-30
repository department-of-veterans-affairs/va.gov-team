import _ from 'lodash/fp';
import Raven from 'raven-js';
import recordEvent from '../../platform/monitoring/record-event';
import environment from '../../platform/utilities/environment';
import { transformForSubmit } from '../common/schemaform/helpers';

export function prefillTransformer(pages, formData, metadata, state) {
  let newPages = pages;
  let newData = formData;

  if (formData && formData.serviceBranches) {
    // Mostly we'll be getting branch lists of one or two branches, creating a Set seems like overkill
    const allowedBranches = pages.veteranInformation.schema.properties.serviceBranch.enum;
    const validUserBranches = formData.serviceBranches.filter(branch => allowedBranches.includes(branch));

    newData = _.unset('serviceBranches', newData);
    if (validUserBranches.length > 0) {
      newData.serviceBranch = validUserBranches[0];
      newPages = _.set('veteranInformation.schema.properties.serviceBranch.enum', validUserBranches, pages);
    }
  }

  if (state.user.profile.services.includes('identity-proofed')) {
    newData = _.set('processAsIdProofed', true, newData);
    newData.originalUser = {
      veteranSocialSecurityNumber: newData.veteranSocialSecurityNumber,
      veteranFullName: newData.veteranFullName,
      veteranDateOfBirth: newData.veteranDateOfBirth
    };
  }

  return {
    metadata,
    formData: newData,
    pages: newPages
  };
}

export function identityMatchesPrefill(formData) {
  const { originalUser = {} } = formData;
  return formData.veteranSocialSecurityNumber === originalUser.veteranSocialSecurityNumber
    && formData.veteranFullName.first === originalUser.veteranFullName.first
    && formData.veteranFullName.middle === originalUser.veteranFullName.middle
    && formData.veteranFullName.last === originalUser.veteranFullName.last
    && formData.veteranFullName.suffix === originalUser.veteranFullName.suffix
    && formData.veteranDateOfBirth === originalUser.veteranDateOfBirth;
}

export function transform(form, formConfig) {
  let newData = _.omit(['verified', 'originalUser', 'processAsIdProofed'], form.data);

  // If we pulled their id info at the start and they haven't changed it, then we can submit on the
  // backend with id info from MVI and discharge status from eMIS
  // If they changed it, then we have to verify they're not trying to submit a fradulent
  // request and process them as an anonymous request
  if (form.data.processAsIdProofed && identityMatchesPrefill(form.data)) {
    newData = _.omit([
      'veteranFullName',
      'veteranSocialSecurityNumber'
    ], newData);
    newData.processAsAnonymous = false;
  } else {
    newData.processAsAnonymous = true;
  }

  return transformForSubmit(formConfig, _.set('data', newData, form));
}

function checkStatus(guid) {
  const userToken = window.sessionStorage.userToken;
  const headers = {
    'Content-Type': 'application/json',
    'X-Key-Inflection': 'camel',
  };

  if (userToken) {
    headers.Authorization = `Token token=${userToken}`;
  }
  return fetch(`${environment.API_URL}/v0/vic/vic_submissions/${guid}`, {
    headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(res);
    }).catch(res => {
      if (res instanceof Error) {
        Raven.captureException(res);
        Raven.captureMessage('vets_vic_poll_client_error');

        // keep polling because we know they submitted earlier
        // and this is likely a network error
        return Promise.resolve();
      }

      // if we get here, it's likely that we hit a server error
      return Promise.reject(res);
    });
}

const POLLING_INTERVAL = 1000;

function pollStatus(guid, onDone, onError) {
  setTimeout(() => {
    checkStatus(guid)
      .then(res => {
        if (!res || res.data.attributes.state === 'pending') {
          pollStatus(guid, onDone, onError);
        } else if (res.data.attributes.state === 'success') {
          onDone(res.data.attributes.response);
        } else {
          // needs to start with this string to get the right message on the form
          throw new Error(`vets_server_error_vic: status ${res.data.attributes.state}`);
        }
      })
      .catch(onError);
  }, window.VetsGov.pollTimeout || POLLING_INTERVAL);
}

export function fetchPreview(id) {
  const userToken = window.sessionStorage.userToken;
  const headers = {
    'X-Key-Inflection': 'camel',
    Authorization: `Token token=${userToken}`
  };

  return fetch(`${environment.API_URL}/v0/vic/profile_photo_attachments/${id}`, {
    headers
  }).then(resp => {
    if (resp.ok) {
      return resp.blob();
    }

    return new Error(resp.responseText);
  }).then(blob => {
    return window.URL.createObjectURL(blob);
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

  const formData = transform(form, formConfig);
  const body = JSON.stringify({
    vicSubmission: {
      form: formData
    }
  });

  return new Promise((resolve, reject) => {
    let photo = form.data.photo.file;
    let photoPromise;

    if (photo instanceof Blob) {
      photoPromise = Promise.resolve(window.URL.createObjectURL(photo));
    } else {
      photoPromise = fetchPreview(form.data.photo.confirmationCode);
    }

    photoPromise.catch(err => {
      // It's possible that we don't have the photo yet but there's nothing we can do about
      // that. We will not show the card preview, but let the submit go through in that case,
      // since the backend will wait for the photo to process
      Raven.captureException(err);
      return null;
    }).then(photoSrc => {
      photo = photoSrc;
      return fetch(`${environment.API_URL}/v0/vic/vic_submissions`, {
        method: 'POST',
        headers,
        body
      });
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(res);
    }).then(resp => {
      const guid = resp.data.attributes.guid;
      pollStatus(guid, response => {
        recordEvent({
          event: `${formConfig.trackingPrefix}-submission-successful`,
        });
        resolve(_.set('photo', photo, response));
      }, reject);
    })
      .catch(respOrError => {
        if (respOrError instanceof Response) {
          if (respOrError.status === 429) {
            const error = new Error('vets_throttled_error_vic');
            error.extra = parseInt(respOrError.headers.get('x-ratelimit-reset'), 10);

            reject(error);
            return;
          }
        }
        reject(respOrError);
      });
  });
}

export function hasSavedForm(savedForms, formID) {
  return savedForms.some(({ form }) => form === formID);
}

