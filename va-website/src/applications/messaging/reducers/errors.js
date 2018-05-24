import {
  FETCH_FOLDERS_FAILURE,
  FETCH_RECIPIENTS_FAILURE,
} from '../utils/constants';

const initialState = {
  errors: []
};

export default function loading(state = initialState, action) {
  switch (action.type) {
    case FETCH_FOLDERS_FAILURE:
    case FETCH_RECIPIENTS_FAILURE:
      return { ...state, errors: action.errors };
    default:
      return state;
  }
}
