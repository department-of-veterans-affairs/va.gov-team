import { expect } from 'chai';
import moment from 'moment';

import refreshReducer from '../../reducers/refresh';

const createExtractStatus = (status, lastUpdated = moment()) => ({
  attributes: { status, lastUpdated }
});

describe('refresh reducer', () => {
  it('should be loading when starting initial refresh', () => {
    const state = refreshReducer(undefined, { type: 'INITIAL_LOADING' });
    expect(state.loading).to.be.true;
  });

  it('should reset when starting initial refresh', () => {
    const state = refreshReducer({
      statuses: {
        failed: [createExtractStatus('ERROR')],
        incomplete: [createExtractStatus('OK', moment().subtract(3, 'days'))],
        succeeded: [createExtractStatus('OK')]
      },
      loading: false,
      errors: [{ code: '500' }]
    }, { type: 'INITIAL_LOADING' });
    expect(state.loading).to.be.true;
    expect(state.statuses.failed).to.have.lengthOf(0);
    expect(state.statuses.incomplete).to.have.lengthOf(0);
    expect(state.statuses.succeeded).to.have.lengthOf(0);
    expect(state.errors).to.have.lengthOf(0);
  });

  it('should handle successful refresh', () => {
    const state = refreshReducer(undefined, { type: 'INITIAL_REFRESH_SUCCESS' });
    expect(state.loading).to.be.false;
  });

  it('should handle failed refresh', () => {
    const state = refreshReducer(undefined, {
      type: 'INITIAL_REFRESH_FAILURE',
      errors: [{ code: '500' }]
    });
    expect(state.loading).to.be.false;
    expect(state.errors).to.have.lengthOf(1);
    expect(state.errors[0].code).to.equal('500');
  });

  it('should update statuses when refresh polling', () => {
    const now = moment();

    let state = refreshReducer(undefined, {
      type: 'REFRESH_POLL_SUCCESS',
      data: [
        createExtractStatus('OK', now.clone().subtract(2, 'days')),
        createExtractStatus('ERROR', now.clone().subtract(3, 'days')),
        createExtractStatus('OK', now.clone().subtract(5, 'hours')),
        createExtractStatus('ERROR', now.clone().subtract(25, 'hours')),
      ]
    });

    expect(state.statuses.failed).to.have.length(0);
    expect(state.statuses.incomplete).to.have.length(3);
    expect(state.statuses.succeeded).to.have.length(1);

    state = refreshReducer(state, {
      type: 'REFRESH_POLL_SUCCESS',
      data: [
        createExtractStatus('OK', now.clone().subtract(30, 'seconds')),
        createExtractStatus('ERROR', now.clone().subtract(30, 'seconds')),
        createExtractStatus('OK', now.clone().subtract(5, 'hours')),
        createExtractStatus('ERROR', now.clone().subtract(2, 'hours')),
      ]
    });

    expect(state.statuses.failed).to.have.length(2);
    expect(state.statuses.incomplete).to.have.length(0);
    expect(state.statuses.succeeded).to.have.length(2);

  });
});
