import { expect } from 'chai';

import searchQueryReducer from '../../reducers/searchQuery';

const INITIAL_STATE = {
  searchString: '',
  serviceType: null,
  facilityType: null,
  position: {
    latitude: 38.8976763,
    longitude: -77.03653,
  },
  bounds: [
    -77.53653,
    38.3976763,
    -76.53653,
    39.3976763,
  ],
  context: 20004,
  inProgress: false,
  currentPage: 1,
  zoomLevel: 11,
  searchBoundsInProgress: false,
};

describe('search query reducer', () => {
  it('should handle search started', () => {
    const state = searchQueryReducer(INITIAL_STATE, {
      type: 'SEARCH_STARTED',
    });

    expect(state.error).to.eql(false);
    expect(state.inProgress).to.eql(true);
  });

  it('should handle fetching list of facilities', () => {
    const state = searchQueryReducer({
      inProgress: true,
      error: true,
      searchBoundsInProgress: true,
    }, {
      type: 'FETCH_VA_FACILITIES',
    });

    expect(state.error).to.eql(false);
    expect(state.inProgress).to.eql(false);
    expect(state.searchBoundsInProgress).to.eql(false);
  });

  it('should handle fetching single facility', () => {
    const state = searchQueryReducer({
      error: true,
      inProgress: true,
    }, {
      type: 'FETCH_VA_FACILITY',
    });

    expect(state.error).to.eql(false);
    expect(state.inProgress).to.eql(false);
  });

  it('should handle search failed', () => {
    const state = searchQueryReducer({
      error: false,
      inProgress: true,
    }, {
      type: 'SEARCH_FAILED',
    });

    expect(state.error).to.eql(true);
    expect(state.inProgress).to.eql(false);
  });

  it('should handle search query updated', () => {
    const state = searchQueryReducer({
      error: true,
    }, {
      type: 'SEARCH_QUERY_UPDATED',
      payload: {
        attribute: true,
      }
    });

    expect(state.error).to.eql(false);
    expect(state.attribute).to.eql(true);
  });
});
