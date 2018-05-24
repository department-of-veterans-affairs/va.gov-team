const INITIAL_STATE = {
  searchString: '',
  serviceType: null,
  facilityType: null,
  position: {
    latitude: 40.17887331434698,
    longitude: -99.27246093750001,
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
  zoomLevel: 4,
  searchBoundsInProgress: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEARCH_STARTED':
      return {
        ...state,
        ...action.payload,
        error: false,
        inProgress: true,
      };
    case 'FETCH_VA_FACILITIES':
      return {
        ...state,
        error: false,
        inProgress: false,
        searchBoundsInProgress: false,
      };
    case 'FETCH_VA_FACILITY':
      return {
        ...state,
        error: false,
        inProgress: false,
      };
    case 'SEARCH_FAILED':
      return {
        ...state,
        error: true,
        inProgress: false,
      };
    case 'SEARCH_QUERY_UPDATED':
      return {
        ...state,
        ...action.payload,
        error: false,
      };
    default:
      return state;
  }
}
