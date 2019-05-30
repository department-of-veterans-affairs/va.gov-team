const INITIAL_STATE = {
  facilities: [],
  selectedFacility: null,
  pagination: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FETCH_VA_FACILITY':
      return {
        ...state,
        selectedFacility: action.payload,
      };
    case 'FETCH_VA_FACILITIES':
      return {
        ...state,
        facilities: action.payload.data,
        pagination: action.payload.meta.pagination,
      };
    case 'SEARCH_FAILED':
      return INITIAL_STATE;
    default:
      return state;
  }
}
