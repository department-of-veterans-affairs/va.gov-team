import { expect } from 'chai';

import { termsAndConditions as reducer } from '../../reducers';

import {
  FETCHING_LATEST_TERMS,
  FETCH_LATEST_TERMS_FAILURE,
  FETCH_LATEST_TERMS_SUCCESS,
  FETCHING_TERMS_ACCEPTANCE,
  FETCH_TERMS_ACCEPTANCE_FAILURE,
  FETCH_TERMS_ACCEPTANCE_SUCCESS,
  ACCEPTING_LATEST_TERMS,
  ACCEPT_LATEST_TERMS_FAILURE,
  ACCEPT_LATEST_TERMS_SUCCESS
} from '../../actions';


describe('Terms and conditions reducer', () => {
  it('should be loading when accepting terms', () => {
    const state = reducer(undefined, { type: ACCEPTING_LATEST_TERMS });
    expect(state.loading.acceptance).to.be.true;
  });

  it('should be loading when fetching terms', () => {
    const state = reducer(undefined, { type: FETCHING_LATEST_TERMS });
    expect(state.loading.tc).to.be.true;
  });

  it('should be loading when fetching terms acceptance', () => {
    const state = reducer(undefined, { type: FETCHING_TERMS_ACCEPTANCE });
    expect(state.loading.acceptance).to.be.true;
  });

  it('should handle failed acceptance of terms', () => {
    const state = reducer(undefined, {
      type: ACCEPT_LATEST_TERMS_FAILURE,
      errors: [{ title: 'error', code: 500 }]
    });
    expect(state.accepted).to.be.false;
    expect(state.errors).to.exist;
    expect(state.loading.acceptance).to.be.false;
  });

  it('should handle failed fetch of terms', () => {
    const state = reducer(undefined, {
      type: FETCH_LATEST_TERMS_FAILURE,
      errors: [{ title: 'error', code: 500 }]
    });
    expect(state.errors).to.exist;
    expect(state.loading.tc).to.be.false;
  });

  it('should handle failed fetch of terms acceptance', () => {
    const state = reducer(undefined, {
      type: FETCH_TERMS_ACCEPTANCE_FAILURE,
      errors: [{ title: 'error', code: 404 }]
    });
    expect(state.errors).to.not.exist;
    expect(state.accepted).to.be.false;
    expect(state.loading.acceptance).to.be.false;
  });

  it('should handle successful acceptance of terms', () => {
    const state = reducer(undefined, { type: ACCEPT_LATEST_TERMS_SUCCESS });
    expect(state.accepted).to.be.true;
    expect(state.loading.acceptance).to.be.false;
  });

  it('should handle successful fetch of terms', () => {
    const state = reducer(undefined, {
      type: FETCH_LATEST_TERMS_SUCCESS,
      data: { attributes: { termsContent: 'foo bar' } }
    });
    expect(state.attributes.termsContent).to.eq('foo bar');
    expect(state.loading.tc).to.be.false;
  });

  it('should handle successful fetch of terms acceptance', () => {
    const state = reducer(undefined, { type: FETCH_TERMS_ACCEPTANCE_SUCCESS });
    expect(state.accepted).to.be.true;
    expect(state.loading.acceptance).to.be.false;
  });
});
