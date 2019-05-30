import { expect } from 'chai';

import post911GIBStatus from '../../reducers';

import { SET_SERVICE_AVAILABILITY, SERVICE_AVAILABILITY_STATES } from '../../utils/constants';

const initialState = {
  enrollmentData: null,
  availability: 'awaitingResponse'
};

describe('post911GIBStatus reducer', () => {
  it('should handle a successful request for enrollment information', () => {
    const state = post911GIBStatus.post911GIBStatus(
      initialState,
      {
        type: 'GET_ENROLLMENT_DATA_SUCCESS',
        data: {
          firstName: 'Jane',
          lastName: 'Austen',
          dateOfBirth: '9/1/1980',
          vaFileNumber: '111223333'
        }
      }
    );

    expect(state.enrollmentData.firstName).to.equal('Jane');
    expect(state.availability).to.equal('available');
  });

  it('should handle backend service error', () => {
    const state = post911GIBStatus.post911GIBStatus(
      initialState,
      { type: 'BACKEND_SERVICE_ERROR' }
    );

    expect(state.enrollmentData).to.be.null;
    expect(state.availability).to.equal('backendServiceError');
  });

  it('should handle backend authentication error', () => {
    const state = post911GIBStatus.post911GIBStatus(
      initialState,
      { type: 'BACKEND_AUTHENTICATION_ERROR' }
    );

    expect(state.enrollmentData).to.be.null;
    expect(state.availability).to.equal('backendAuthenticationError');
  });

  it('should handle no Chapter 33 record error', () => {
    const state = post911GIBStatus.post911GIBStatus(
      initialState,
      { type: 'NO_CHAPTER33_RECORD_AVAILABLE' }
    );

    expect(state.enrollmentData).to.be.null;
    expect(state.availability).to.equal('noChapter33Record');
  });

  it('should handle failure to fetch enrollment information', () => {
    const state = post911GIBStatus.post911GIBStatus(
      initialState,
      { type: 'GET_ENROLLMENT_DATA_FAILURE' }
    );

    expect(state.enrollmentData).to.be.null;
    expect(state.availability).to.equal('unavailable');
  });

  it('should handle setting the service availability', () => {
    const state = post911GIBStatus.post911GIBStatus(
      initialState,
      {
        type: SET_SERVICE_AVAILABILITY,
        serviceAvailability: SERVICE_AVAILABILITY_STATES.up
      }
    );

    expect(state.serviceAvailability).to.equal(SERVICE_AVAILABILITY_STATES.up);
  });
});
