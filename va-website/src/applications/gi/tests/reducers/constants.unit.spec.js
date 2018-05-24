import { expect } from 'chai';

import constantsReducer from '../../reducers/constants';

const initialState = {
  inProgress: false,
  version: {}
};

describe('constants reducer', () => {
  it('should handle fetch starting', () => {
    const state = constantsReducer(
      initialState,
      {
        type: 'FETCH_CONSTANTS_STARTED'
      }
    );

    expect(state.inProgress).to.eql(true);
  });

  it('should handle fetch failed', () => {
    const state = constantsReducer(
      { inProgress: true },
      {
        type: 'FETCH_CONSTANTS_FAILED',
        err: {
          errorMessage: 'error'
        }
      }
    );

    expect(state.inProgress).to.eql(false);
    expect(state.errorMessage).to.eql('error');
  });

  it('should handle fetch succeeded', () => {
    const state = constantsReducer(
      { inProgress: true },
      {
        type: 'FETCH_CONSTANTS_SUCCEEDED',
        payload: {
          data: [
            {
              attributes: {
                name: 'constantName',
                value: 'constantValue'
              }
            }
          ],
          meta: {
            version: 1
          }
        }
      }
    );

    expect(state.inProgress).to.eql(false);
    expect(state.version).to.eql(1);
    expect(state.constants).to.eql({ constantName: 'constantValue' });
  });
});
