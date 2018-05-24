import set from 'lodash/fp/set';

const initialState = {
  refill: {
    loading: false,
    visible: false,
    prescription: null
  },
  glossary: {
    visible: false,
    content: null
  }
};

export default function modals(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_REFILL_MODAL':
      return set('refill', {
        visible: true,
        prescription: action.rx
      }, initialState);

    case 'OPEN_GLOSSARY_MODAL':
      return set('glossary', {
        visible: true,
        content: action.content
      }, initialState);

    case 'REFILL_SUBMITTED':
      return set('refill.loading', true, state);

    case 'REFILL_SUCCESS':
    case 'REFILL_FAILURE':
    case 'CLOSE_REFILL_MODAL':
    case 'CLOSE_GLOSSARY_MODAL':
      return initialState;

    default:
      return state;
  }
}
