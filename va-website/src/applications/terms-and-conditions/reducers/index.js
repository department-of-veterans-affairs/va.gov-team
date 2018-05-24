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
} from '../actions';

const initialState = {
  accepted: false,
  attributes: {},
  errors: null,
  loading: {
    acceptance: false,
    tc: false
  }
};

export function termsAndConditions(state = initialState, action) {
  switch (action.type) {
    case ACCEPTING_LATEST_TERMS:
    case FETCHING_TERMS_ACCEPTANCE:
      return {
        ...state,
        loading: { ...state.loading, acceptance: true }
      };

    case FETCHING_LATEST_TERMS:
      return {
        ...state,
        errors: null,
        loading: { ...state.loading, tc: true }
      };

    case ACCEPT_LATEST_TERMS_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: { ...state.loading, acceptance: false }
      };

    case ACCEPT_LATEST_TERMS_SUCCESS:
      return {
        ...state,
        accepted: true,
        loading: { ...state.loading, acceptance: false }
      };

    case FETCH_LATEST_TERMS_FAILURE:
      return {
        ...state,
        errors: action.errors,
        loading: { ...state.loading, tc: false }
      };

    case FETCH_LATEST_TERMS_SUCCESS: {
      return {
        ...state,
        attributes: action.data.attributes,
        loading: { ...state.loading, tc: false }
      };
    }

    case FETCH_TERMS_ACCEPTANCE_FAILURE: {
      return {
        ...state,
        accepted: false,
        loading: { ...state.loading, acceptance: false }
      };
    }

    case FETCH_TERMS_ACCEPTANCE_SUCCESS: {
      return {
        ...state,
        accepted: true,
        loading: { ...state.loading, acceptance: false }
      };
    }

    default:
      return state;
  }
}

export default { termsAndConditions };
