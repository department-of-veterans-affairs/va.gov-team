import { expect } from 'chai';

import profileReducer from '../../reducers/profile';

const initialState = {
  attributes: {},
  version: {},
  inProgress: false,
};

describe('profile reducer', () => {
  it('should handle profile fetch started', () => {
    const state = profileReducer(
      initialState,
      {
        type: 'FETCH_PROFILE_STARTED'
      }
    );

    expect(state.inProgress).to.eql(true);
  });

  it('should handle profile fetch failure', () => {
    const state = profileReducer(
      { inProgress: true },
      {
        type: 'FETCH_PROFILE_FAILED',
        err: {
          errorMessage: 'error'
        },
      }
    );

    expect(state.errorMessage).to.eql('error');
    expect(state.inProgress).to.eql(false);
  });

  it('should handle profile fetch success', () => {
    const state = profileReducer(
      { inProgress: true },
      {
        type: 'FETCH_PROFILE_SUCCEEDED',
        payload: {
          data: {
            attributes: {
              name: 'name'
            },
            links: {}
          },
          meta: {
            version: 1
          }
        }
      }
    );

    expect(state.inProgress).to.eql(false);
    expect(state.attributes.name).to.eql('NAME');
    expect(state.version).to.eql(1);
  });
});
