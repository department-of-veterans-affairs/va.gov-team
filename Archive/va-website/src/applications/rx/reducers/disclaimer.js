import set from 'lodash/fp/set';

const initialState = {
  open: true
};

export default function disclaimer(state = initialState, action) {
  switch (action.type) {
    case 'CLOSE_DISCLAIMER':
      return set('open', !state.open, state);
    default:
      return state;
  }
}
