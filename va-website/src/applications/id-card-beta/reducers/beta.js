
import {
  BETA_REGISTERING,
  BETA_REGISTER_SUCCESS,
  BETA_REGISTER_FAILURE
} from '../actions';

const initialState = {
  username: null,
  status: null,
  loading: false
};

function beta(state = initialState, action) {
  switch (action.type) {
    case BETA_REGISTERING:
      return {
        ...state,
        loading: true
      };
    case BETA_REGISTER_SUCCESS:
      return {
        ...state,
        username: action.username,
        status: action.status,
        loading: false
      };
    case BETA_REGISTER_FAILURE:
      return {
        ...state,
        status: action.status,
        loading: false
      };
    default:
      return state;
  }
}

export default beta;
