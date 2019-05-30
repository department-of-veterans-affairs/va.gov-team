import {
  INIT_DISMISSED_ANNOUNCEMENTS,
  DISMISS_ANNOUNCEMENT
} from '../actions';

const initialState = {
  isInitialized: false,
  dismissed: []
};

export default function announcements(state = initialState, action) {
  switch (action.type) {
    case INIT_DISMISSED_ANNOUNCEMENTS:
      return {
        ...state,
        isInitialized: true,
        dismissed: action.dismissedAnnouncements
      };

    case DISMISS_ANNOUNCEMENT:
      return {
        ...state,
        dismissed: state.dismissed.concat(action.announcement)
      };

    default:
      return state;
  }
}
