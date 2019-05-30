import { ENTER_PREVIEW_MODE, EXIT_PREVIEW_MODE, SET_VERSION } from '../actions';

const INITIAL_STATE = {
  display: false,
  version: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ENTER_PREVIEW_MODE: {
      const { version } = action;
      const newState = { ...state, display: true };

      if (version) {
        newState.version = version;
      }

      return newState;
    }
    case EXIT_PREVIEW_MODE:
      return INITIAL_STATE;
    case SET_VERSION:
      return {
        ...state,
        version: action.version
      };
    default:
      return state;
  }
}
