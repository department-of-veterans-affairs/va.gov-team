import { expect } from 'chai';

import facilitiesReducer from '../../reducers/facilities';

const INITIAL_STATE = {
  facilities: [],
  selectedFacility: null,
  pagination: {}
};

describe('facilities reducer', () => {
  it('should handle fetching a single facility', () => {
    const state = facilitiesReducer(INITIAL_STATE, {
      type: 'FETCH_VA_FACILITY',
      payload: {
        name: 'selectedFacility'
      },
    });

    expect(state.selectedFacility).to.eql({ name: 'selectedFacility' });
  });

  it('should handle fetching a list of facilities', () => {
    const state = facilitiesReducer(INITIAL_STATE, {
      type: 'FETCH_VA_FACILITIES',
      payload: {
        data: [
          { name: 'selectedFacility1' },
          { name: 'selectedFacility2' },
        ],
        meta: {
          pagination: {
            currentPage: 1,
          }
        }
      },
    });

    expect(state.facilities.length).to.eql(2);
    expect(state.pagination.currentPage).to.eql(1);
  });

  it('should handle failure case', () => {
    const state = facilitiesReducer(INITIAL_STATE, {
      type: 'SEARCH_FAILED',
    });

    expect(state).to.eql(INITIAL_STATE);
  });
});
