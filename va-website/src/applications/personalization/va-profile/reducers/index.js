import {
  // Fetch actions
  FETCH_HERO_SUCCESS,
  FETCH_CONTACT_INFORMATION_SUCCESS,
  FETCH_PERSONAL_INFORMATION_SUCCESS,
  FETCH_MILITARY_INFORMATION_SUCCESS,
  FETCH_ADDRESS_CONSTANTS_SUCCESS,

  // Saves
  SAVE_MAILING_ADDRESS,
  SAVE_MAILING_ADDRESS_FAIL,
  SAVE_MAILING_ADDRESS_SUCCESS,

  SAVE_PRIMARY_PHONE,
  SAVE_PRIMARY_PHONE_FAIL,
  SAVE_PRIMARY_PHONE_SUCCESS,

  SAVE_ALTERNATE_PHONE,
  SAVE_ALTERNATE_PHONE_FAIL,
  SAVE_ALTERNATE_PHONE_SUCCESS,

  SAVE_EMAIL_ADDRESS,
  SAVE_EMAIL_ADDRESS_FAIL,
  SAVE_EMAIL_ADDRESS_SUCCESS,

  // Miscellaneous actions
  UPDATE_PROFILE_FORM_FIELD,
  OPEN_MODAL,
  CLEAR_PROFILE_ERRORS,
  CLEAR_MESSAGE
} from '../actions';

const initialState = {
  hero: null,
  contactInformation: null,
  personalInformation: null,
  militaryInformation: null,
  addressConstants: null,
  modal: null,
  pendingSaves: [],
  errors: [],
  profileLoading: true,
  loading: true,
  formFields: {},
  message: null
};

const MESSAGES = {
  updatedInformation: 'We saved your updated information.'
};

function vaProfile(state = initialState, action) {
  switch (action.type) {

    // Fetch
    case FETCH_HERO_SUCCESS:
      return { ...state, hero: action.hero };

    case FETCH_CONTACT_INFORMATION_SUCCESS:
      return { ...state, contactInformation: action.contactInformation };

    case FETCH_PERSONAL_INFORMATION_SUCCESS:
      return { ...state, personalInformation: action.personalInformation };

    case FETCH_MILITARY_INFORMATION_SUCCESS:
      return { ...state, militaryInformation: action.militaryInformation };

    case FETCH_ADDRESS_CONSTANTS_SUCCESS:
      return { ...state, addressConstants: action.addressConstants };

    // Saves
    case SAVE_EMAIL_ADDRESS:
    case SAVE_PRIMARY_PHONE:
    case SAVE_ALTERNATE_PHONE:
    case SAVE_MAILING_ADDRESS: {
      const pendingSaves = state.pendingSaves.concat(action.type);
      return { ...state, pendingSaves };
    }

    case SAVE_EMAIL_ADDRESS_SUCCESS:
    case SAVE_PRIMARY_PHONE_SUCCESS:
    case SAVE_ALTERNATE_PHONE_SUCCESS:
    case SAVE_MAILING_ADDRESS_SUCCESS: {
      const contactInformation = {
        ...state.contactInformation,
        [action.fieldName]: action.newValue
      };
      return {
        ...state,
        contactInformation,
        message: MESSAGES.updatedInformation,
        pendingSaves: [],
        modal: null
      };
    }

    case SAVE_EMAIL_ADDRESS_FAIL:
    case SAVE_PRIMARY_PHONE_FAIL:
    case SAVE_ALTERNATE_PHONE_FAIL:
    case SAVE_MAILING_ADDRESS_FAIL: {
      const errors = state.errors.concat(action.type);
      return { ...state, pendingSaves: [], errors };
    }

    // Miscellaneous
    case UPDATE_PROFILE_FORM_FIELD: {
      const formFields = { ...state.formFields, [action.field]: action.newState };
      return { ...state, formFields };
    }

    case OPEN_MODAL: {
      const modal = action.modal;
      const errors = modal ? state.errors : [];
      return { ...state, errors, modal };
    }

    case CLEAR_PROFILE_ERRORS:
      return { ...state, errors: [] };

    case CLEAR_MESSAGE:
      return { ...state, message: null };

    default:
      return state;
  }
}

export default { vaProfile };
