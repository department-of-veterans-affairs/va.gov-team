import Raven from 'raven-js';
import { isEqual } from 'lodash';

import recordEvent from '../../../platform/monitoring/record-event';
import { apiRequest, stripEmpties, toGenericAddress, getStatus } from '../utils/helpers.jsx';
import {
  ADDRESS_TYPES,
  BACKEND_AUTHENTICATION_ERROR,
  BACKEND_SERVICE_ERROR,
  GET_ADDRESS_COUNTRIES_FAILURE,
  GET_ADDRESS_COUNTRIES_SUCCESS,
  GET_ADDRESS_FAILURE,
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_STATES_FAILURE,
  GET_ADDRESS_STATES_SUCCESS,
  GET_BENEFIT_SUMMARY_OPTIONS_FAILURE,
  GET_BENEFIT_SUMMARY_OPTIONS_SUCCESS,
  GET_LETTER_PDF_DOWNLOADING,
  GET_LETTER_PDF_FAILURE,
  GET_LETTER_PDF_SUCCESS,
  GET_LETTERS_FAILURE,
  GET_LETTERS_SUCCESS,
  LETTER_ELIGIBILITY_ERROR,
  LETTER_TYPES,
  UPDATE_BENFIT_SUMMARY_REQUEST_OPTION,
  SAVE_ADDRESS_PENDING,
  SAVE_ADDRESS_FAILURE,
  SAVE_ADDRESS_SUCCESS,
  INVALID_ADDRESS_PROPERTY,
  START_EDITING_ADDRESS,
  CANCEL_EDITING_ADDRESS
} from '../utils/constants';

export function editAddress() {
  return (dispatch) => dispatch({ type: START_EDITING_ADDRESS });
}

export function cancelEditingAddress() {
  return (dispatch) => dispatch({ type: CANCEL_EDITING_ADDRESS });
}

export function getLetterList(dispatch) {
  return apiRequest(
    '/v0/letters',
    null,
    response => {
      recordEvent({ event: 'letter-list-success' });
      return dispatch({
        type: GET_LETTERS_SUCCESS,
        data: response,
      });
    },
    (response) => {
      recordEvent({ event: 'letter-list-failure' });
      const status = getStatus(response);
      if (status === '403') {
        // Backend authentication problem
        dispatch({ type: BACKEND_AUTHENTICATION_ERROR });
      } else if (status === '422') {
        // User has an invalid address for his or her letters
        dispatch({ type: INVALID_ADDRESS_PROPERTY });
      } else if (status === '502') {
        // Some of the partner services are down, so we cannot verify the
        // eligibility of some letters
        dispatch({ type: LETTER_ELIGIBILITY_ERROR });
      } else if (status === '503' || status === '504') {
        // Either EVSS or a partner service is down or EVSS times out
        dispatch({ type: BACKEND_SERVICE_ERROR });
      } else {
        dispatch({ type: GET_LETTERS_FAILURE });
      }
      throw new Error(`vets_letters_error_getLetterList: ${status}`);
    }
  );
}

export function getBenefitSummaryOptions(dispatch) {
  return apiRequest(
    '/v0/letters/beneficiary',
    null,
    (response) => {
      recordEvent({ event: 'letter-get-bsl-success' });
      return dispatch({
        type: GET_BENEFIT_SUMMARY_OPTIONS_SUCCESS,
        data: response,
      });
    },
    (response) => {
      recordEvent({ event: 'letter-get-bsl-failure' });
      dispatch({ type: GET_BENEFIT_SUMMARY_OPTIONS_FAILURE });
      const status = getStatus(response);
      throw new Error(`vets_letters_error_getBenefitSummaryOptions: ${status}`);
    }
  );
}

// Call getLetterList then getBenefitSummaryOptions
export function getLetterListAndBSLOptions() {
  return (dispatch) => {
    return getLetterList(dispatch)
      .then(() => getBenefitSummaryOptions(dispatch))
      .catch((error) => Raven.captureException(error));
  };
}

export function getAddressFailure() {
  recordEvent({ event: 'letter-get-address-failure' });
  return { type: GET_ADDRESS_FAILURE };
}

export function getMailingAddress() {
  return (dispatch) => {
    return apiRequest(
      '/v0/address',
      null,
      (response) => {
        recordEvent({ event: 'letter-get-address-success' });
        const responseCopy = Object.assign({}, response);
        // translate military address properties to generic properties for use in front end
        responseCopy.data.attributes.address = toGenericAddress(response.data.attributes.address);
        return dispatch({
          type: GET_ADDRESS_SUCCESS,
          data: responseCopy
        });
      },
      (response) => {
        const status = getStatus(response);
        Raven.captureException(new Error(`vets_letters_error_getMailingAddress: ${status}`));
        return dispatch(getAddressFailure());
      }
    );
  };
}

export function getLetterPdfFailure(letterType) {
  recordEvent({
    event: 'letter-pdf-failure',
    'letter-type': letterType
  });
  return { type: GET_LETTER_PDF_FAILURE, data: letterType };
}

export function getLetterPdf(letterType, letterName, letterOptions) {
  let settings;
  if (letterType === LETTER_TYPES.benefitSummary) {
    settings = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(letterOptions)
    };
  } else {
    settings = {
      method: 'POST'
    };
  }

  return (dispatch) => {
    recordEvent({
      event: 'letter-pdf-pending',
      'letter-type': letterType
    });
    dispatch({ type: GET_LETTER_PDF_DOWNLOADING, data: letterType });

    // We handle IE10 separately but assume all other vets.gov-supported
    // browsers have blob URL support.
    // TODO: possibly want to explicitly check for blob URL support with something like
    // const blobSupported = !!(/^blob:/.exec(downloadUrl));
    const isIE = !!window.navigator.msSaveOrOpenBlob;
    const save = document.createElement('a');
    const downloadSupported = typeof save.download !== 'undefined';
    let downloadWindow;

    if (!downloadSupported && !isIE) {
      // Instead of giving the file a readable name and downloading
      // it directly, open it in a new window with an ugly hash URL
      // NOTE: We're opening the window here because Safari won't open
      //  it as a result of an AJAX call--it has to be traced back to
      //  a user interaction.
      downloadWindow = window.open();
    }
    return apiRequest(
      `/v0/letters/${letterType}`,
      settings,
      response => {
        let downloadUrl;
        response.blob().then(blob => {
          if (isIE) {
            window.navigator.msSaveOrOpenBlob(blob, `${letterName}.pdf`);
          } else {
            window.URL = window.URL || window.webkitURL;
            downloadUrl = window.URL.createObjectURL(blob);
            if (downloadSupported) {
              // Give the file a readable name if the download attribute is supported.
              save.download = letterName;
              save.href = downloadUrl;
              save.target = '_blank';
              document.body.appendChild(save);
              save.click();
              document.body.removeChild(save);
            } else {
              downloadWindow.location.href = downloadUrl;
            }
          }
        });
        window.URL.revokeObjectURL(downloadUrl);
        recordEvent({
          event: 'letter-pdf-success',
          'letter-type': letterType
        });
        return dispatch({ type: GET_LETTER_PDF_SUCCESS, data: letterType });
      },
      (response) => {
        const status = getStatus(response);
        Raven.captureException(new Error(`vets_letters_error_getLetterPdf_${letterType}: ${status}`));
        return dispatch(getLetterPdfFailure(letterType));
      }
    );
  };
}

export function updateBenefitSummaryRequestOption(propertyPath, value) {
  return {
    type: UPDATE_BENFIT_SUMMARY_REQUEST_OPTION,
    propertyPath,
    value
  };
}

export function saveAddressPending() {
  return {
    type: SAVE_ADDRESS_PENDING
  };
}

export function saveAddressSuccess(address) {
  recordEvent({ event: 'letter-update-address-success' });
  return {
    type: SAVE_ADDRESS_SUCCESS,
    address
  };
}

export function saveAddressFailure() {
  recordEvent({ event: 'letter-update-address-failed' });
  return { type: SAVE_ADDRESS_FAILURE };
}

export function saveAddress(address) {
  const transformedAddress = Object.assign({}, address);
  if (transformedAddress.type === ADDRESS_TYPES.military) {
    transformedAddress.militaryPostOfficeTypeCode = transformedAddress.city;
    transformedAddress.militaryStateCode = transformedAddress.stateCode;
    delete transformedAddress.city;
    delete transformedAddress.stateCode;
    delete transformedAddress.countryName;
  }

  const settings = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transformedAddress)
  };
  recordEvent({ event: 'letter-update-address-submit' });
  return (dispatch) => {
    dispatch(saveAddressPending());
    return apiRequest(
      '/v0/address',
      settings,
      (response) => {
        // translate military address properties back to front end address
        const responseAddress = toGenericAddress(response.data.attributes.address);
        if (!isEqual(stripEmpties(address), stripEmpties(responseAddress))) {
          const mismatchError = new Error('letters-address-update addresses don\'t match');
          Raven.captureException(mismatchError);
        }
        return dispatch(saveAddressSuccess(responseAddress));
      },
      (response) => {
        const status = getStatus(response);
        Raven.captureException(new Error(`vets_letters_error_saveAddress: ${status}`));
        return dispatch(saveAddressFailure());
      }
    );
  };
}

export function getAddressCountries() {
  return (dispatch) => {
    return apiRequest(
      '/v0/address/countries',
      null,
      (response) => {
        recordEvent({ event: 'letter-get-address-countries-success' });
        return dispatch({
          type: GET_ADDRESS_COUNTRIES_SUCCESS,
          countries: response,
        });
      },
      (response) => {
        const status = getStatus(response);
        recordEvent({ event: 'letter-get-address-countries-failure' });
        Raven.captureException(new Error(`vets_letters_error_getAddressCountries: ${status}`));
        return dispatch({ type: GET_ADDRESS_COUNTRIES_FAILURE });
      }
    );
  };
}

export function getAddressStates() {
  return (dispatch) => {
    return apiRequest(
      '/v0/address/states',
      null,
      (response) => {
        recordEvent({ event: 'letter-get-address-states-success' });
        return dispatch({
          type: GET_ADDRESS_STATES_SUCCESS,
          states: response,
        });
      },
      (response) => {
        const status = getStatus(response);
        recordEvent({ event: 'letter-get-address-states-success' });
        Raven.captureException(new Error(`vets_letters_error_getAddressStates: ${status}`));
        return dispatch({ type: GET_ADDRESS_STATES_FAILURE });
      }
    );
  };
}

