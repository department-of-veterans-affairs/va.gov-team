import { makeField } from '../../../platform/forms/fields';

import {
  SM_FETCH_PREFERENCES_SUCCESS,
  SM_SAVE_PREFERENCES_SUCCESS,
  SM_SET_NOTIFICATION_EMAIL,
  SM_SET_NOTIFICATION_FREQUENCY
} from '../utils/constants';

const initialState = {
  emailAddress: makeField(''),
  frequency: makeField('none')
};

export default function preferences(state = initialState, action) {
  switch (action.type) {
    case SM_FETCH_PREFERENCES_SUCCESS: {
      const { emailAddress, frequency } = action.preferences;
      return {
        ...state,
        emailAddress: makeField(emailAddress),
        frequency: makeField(frequency)
      };
    }

    case SM_SAVE_PREFERENCES_SUCCESS: {
      const { emailAddress, frequency } = action.preferences;
      return {
        emailAddress: makeField(emailAddress),
        frequency: makeField(frequency)
      };
    }

    case SM_SET_NOTIFICATION_EMAIL:
      return { ...state, emailAddress: action.email };

    case SM_SET_NOTIFICATION_FREQUENCY:
      return { ...state, frequency: action.frequency };

    default:
      return state;
  }
}
