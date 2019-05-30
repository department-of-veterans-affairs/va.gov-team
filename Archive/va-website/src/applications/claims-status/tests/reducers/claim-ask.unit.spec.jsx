import { expect } from 'chai';

import claimAsk from '../../reducers/claim-ask';
import { SET_DECISION_REQUESTED, SUBMIT_DECISION_REQUEST, SET_DECISION_REQUEST_ERROR } from '../../actions';

describe('Claim ask reducer', () => {
  it('should set loading request', () => {
    const state = claimAsk(undefined, {
      type: SUBMIT_DECISION_REQUEST
    });

    expect(state.loadingDecisionRequest).to.be.true;
  });
  it('should set decision requested', () => {
    const state = claimAsk(undefined, {
      type: SET_DECISION_REQUESTED
    });

    expect(state.decisionRequested).to.be.true;
    expect(state.loadingDecisionRequest).to.be.false;
  });
  it('should set decision request error', () => {
    const state = claimAsk(undefined, {
      type: SET_DECISION_REQUEST_ERROR,
      error: 'Test error'
    });

    expect(state.decisionRequestError).to.equal('Test error');
    expect(state.loadingDecisionRequest).to.be.false;
  });
});
