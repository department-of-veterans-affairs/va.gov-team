import set from 'lodash/fp/set';

import {
  BACKEND_AUTHENTICATION_ERROR,
  BACKEND_SERVICE_ERROR,
  GET_ENROLLMENT_DATA_FAILURE,
  GET_ENROLLMENT_DATA_SUCCESS,
  NO_CHAPTER33_RECORD_AVAILABLE,
  SERVICE_AVAILABILITY_STATES,
  SET_SERVICE_AVAILABILITY
} from '../utils/constants';

const initialState = {
  enrollmentData: null,
  availability: 'awaitingResponse',
  serviceAvailability: SERVICE_AVAILABILITY_STATES.unrequested
};

function post911GIBStatus(state = initialState, action) {
  switch (action.type) {
    case GET_ENROLLMENT_DATA_SUCCESS:
      return {
        ...state,
        enrollmentData: action.data,
        availability: 'available'
      };
    case BACKEND_SERVICE_ERROR:
      return set('availability', 'backendServiceError', state);
    case BACKEND_AUTHENTICATION_ERROR:
      return set('availability', 'backendAuthenticationError', state);
    case NO_CHAPTER33_RECORD_AVAILABLE:
      return set('availability', 'noChapter33Record', state);
    case GET_ENROLLMENT_DATA_FAILURE:
      return set('availability', 'unavailable', state);
    case SET_SERVICE_AVAILABILITY:
      return set('serviceAvailability', action.serviceAvailability, state);
    default:
      return state;
  }
}

export default {
  post911GIBStatus
};
