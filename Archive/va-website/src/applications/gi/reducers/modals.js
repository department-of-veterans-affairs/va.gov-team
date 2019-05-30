import { UPDATE_ROUTE, DISPLAY_MODAL } from '../actions';

const INITIAL_STATE = {
  displaying: null
};

export default function (state = INITIAL_STATE, action) {
  if (action.type === DISPLAY_MODAL) {
    return { displaying: action.modal };
  } else if (action.type === UPDATE_ROUTE) {
    return INITIAL_STATE;
  }
  return state;
}
