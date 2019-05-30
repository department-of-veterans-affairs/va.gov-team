import { SET_PAGE_TITLE } from '../actions';

const INITIAL_STATE = 'GI Bill Comparison Tool: Vets.gov';

export default function (state = INITIAL_STATE, action) {
  if (action.type === SET_PAGE_TITLE) {
    window.document.title = action.title || INITIAL_STATE;
    return action.title;
  }
  return state;
}
