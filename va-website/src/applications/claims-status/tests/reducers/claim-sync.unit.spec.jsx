import { expect } from 'chai';

import claimSync from '../../reducers/claim-sync';
import { SET_CLAIMS, SET_CLAIM_DETAIL, SET_CLAIMS_UNAVAILABLE, SET_UNAUTHORIZED } from '../../actions';

describe('Claim sync reducer', () => {
  it('should set unavailable', () => {
    const state = claimSync(undefined, {
      type: SET_CLAIMS_UNAVAILABLE
    });

    expect(state.available).to.be.false;
  });
  it('should set unauthorized', () => {
    const state = claimSync(undefined, {
      type: SET_UNAUTHORIZED
    });

    expect(state.authorized).to.be.false;
  });

  it('should set out of sync', () => {
    const state = claimSync(undefined, {
      type: SET_CLAIM_DETAIL,
      claim: {
        attributes: {
          updatedAt: 'test',
        }
      },
      meta: {
        successfulSync: false
      }
    });

    expect(state.synced).to.be.false;
    expect(state.available).to.true;
    expect(state.authorized).to.true;
  });

  it('should set out of sync on list request', () => {
    const state = claimSync(undefined, {
      type: SET_CLAIMS,
      claims: [
        {
          attributes: {
            updatedAt: 'test'
          }
        }
      ],
      meta: {
        successfulSync: false
      }
    });

    expect(state.synced).to.be.false;
    expect(state.available).to.true;
    expect(state.authorized).to.true;
  });
});
