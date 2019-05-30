
import {
  BETA_REGISTERING,
  BETA_REGISTER_SUCCESS,
  BETA_REGISTER_FAILURE
} from '../actions';

const initialState = {
  username: null,
  stats: null,
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
        stats: action.stats,
        loading: false
      };
    case BETA_REGISTER_FAILURE:
      return {
        ...state,
        stats: action.stats,
        loading: false
      };
    default:
      return state;
  }
}

export default beta;
