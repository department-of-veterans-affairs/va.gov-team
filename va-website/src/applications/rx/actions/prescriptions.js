import recordEvent from '../../../platform/monitoring/record-event';
import { apiRequest } from '../utils/helpers';

export function loadPrescription(id) {
  return dispatch => {
    const urls = [`/${id}`, `/${id}/trackings`];
    const errorHandler =
      () => dispatch({ type: 'LOAD_PRESCRIPTION_FAILURE' });

    dispatch({ type: 'LOADING_DETAIL' });

    // Fetch both the prescription and its tracking history and
    // wait for retrieval and read of both resources to resolve.
    Promise.all(urls.map(
      url => apiRequest(url, null, response => response, errorHandler)
    ))
      .then(data => dispatch({
        type: 'LOAD_PRESCRIPTION_SUCCESS',
        data: {
          rx: data[0].data,
          trackings: data[1].data
        }
      }))
      .catch(errorHandler);
  };
}

export function loadPrescriptions(options) {
  let url = '/';
  let defaultSort = '-refill_submit_date';
  const queries = [];

  // Construct segments of the final URL based on options passed in.
  if (options) {
    if (options.active) {
      url = '/active';
      defaultSort = 'prescription_name';
    }

    if (options.page) {
      queries.push(`page=${options.page}`);
    }
  }

  queries.push(`sort=${options.sort || defaultSort}`);

  // Append query parameters.
  if (queries.length > 0) {
    const queryString = queries.join('&');
    url = `${url}?${queryString}`;
  }

  return dispatch => {
    dispatch({
      type: options.active ? 'LOADING_ACTIVE' : 'LOADING_HISTORY'
    });

    apiRequest(
      url,
      null,
      data => dispatch({
        type: 'LOAD_PRESCRIPTIONS_SUCCESS',
        active: options.active,
        data
      }),
      response => dispatch({
        type: 'LOAD_PRESCRIPTIONS_FAILURE',
        active: options.active,
        errors: response.errors,
      })
    );
  };
}

export function refillPrescription(prescription) {
  if (prescription.prescriptionId) {
    const url = `/${prescription.prescriptionId}/refill`;

    recordEvent({
      event: 'rx-confirm-refill',
    });

    return dispatch => {
      dispatch({ type: 'REFILL_SUBMITTED' });

      apiRequest(
        url,
        { method: 'PATCH' },
        () => dispatch({
          type: 'REFILL_SUCCESS',
          prescription
        }),
        response => dispatch({
          type: 'REFILL_FAILURE',
          errors: response.errors,
          prescription
        })
      );
    };
  }

  return { type: 'REFILL_FAILURE' };
}

export function sortPrescriptions(sort, order = 'ASC') {
  return { type: 'SORT_PRESCRIPTIONS', sort, order };
}
