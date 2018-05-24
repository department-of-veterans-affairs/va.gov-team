import {
  ATTRS_FETCHING,
  ATTRS_SUCCESS,
  ATTRS_FAILURE,
  REDIRECT_TIMED_OUT,
} from '../actions';

const initialState = {
  redirect: null,
  errors: null,
  fetching: false,
  vicError: false,
};

function idcard(state = initialState, action) {
  switch (action.type) {
    case ATTRS_FETCHING:
      return {
        ...state,
        fetching: true,
        vicError: false,
      };
    case ATTRS_SUCCESS:
      return {
        ...state,
        vicUrl: action.vicUrl,
        traits: action.traits,
        errors: null,
        fetching: false
      };
    case ATTRS_FAILURE:
      return {
        ...state,
        errors: action.errors,
        fetching: false
      };
    case REDIRECT_TIMED_OUT:
      return {
        ...initialState,
        vicError: true,
      };
    default:
      return state;
  }
}

export default idcard;
