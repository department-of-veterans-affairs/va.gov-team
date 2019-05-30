import { makeField } from '../../../platform/forms/fields';

const initialState = {
  email: makeField(''),
  flag: makeField('false'),
  loading: false,
  saving: false
};

export default function preferences(state = initialState, action) {
  switch (action.type) {
    case 'RX_LOADING_PREFERENCES':
      return { ...state, loading: true };

    case 'RX_SAVING_PREFERENCES':
      return { ...state, saving: true };

    case 'RX_FETCH_PREFERENCES_FAILURE':
      return { ...state, loading: false };

    case 'RX_SAVE_PREFERENCES_FAILURE':
      return { ...state, saving: false };

    case 'RX_FETCH_PREFERENCES_SUCCESS': {
      const { emailAddress: email, rxFlag: flag } = action.preferences;
      return {
        ...state,
        email: makeField(email),
        flag: makeField(flag.toString()),
        loading: false
      };
    }

    case 'RX_SAVE_PREFERENCES_SUCCESS': {
      const { emailAddress, rxFlag } = action.preferences;
      return {
        email: makeField(emailAddress),
        flag: makeField(rxFlag.toString()),
        saving: false
      };
    }

    case 'RX_SET_NOTIFICATION_EMAIL':
      return { ...state, email: action.email };

    case 'RX_SET_NOTIFICATION_FLAG':
      return { ...state, flag: action.flag };

    default:
      return state;
  }
}
