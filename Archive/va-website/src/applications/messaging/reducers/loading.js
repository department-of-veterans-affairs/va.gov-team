import set from 'lodash/fp/set';

import {
  CREATING_FOLDER,
  CREATE_FOLDER_FAILURE,
  CREATE_FOLDER_SUCCESS,
  DELETE_FOLDER_FAILURE,
  DELETE_FOLDER_SUCCESS,
  DELETE_MESSAGE_FAILURE,
  DELETE_MESSAGE_SUCCESS,
  DELETING_FOLDER,
  DELETING_MESSAGE,
  FETCH_FOLDER_FAILURE,
  FETCH_FOLDER_SUCCESS,
  FETCH_FOLDERS_FAILURE,
  FETCH_FOLDERS_SUCCESS,
  SM_FETCH_PREFERENCES_FAILURE,
  SM_FETCH_PREFERENCES_SUCCESS,
  FETCH_RECIPIENTS_FAILURE,
  FETCH_RECIPIENTS_SUCCESS,
  FETCH_THREAD_FAILURE,
  FETCH_THREAD_SUCCESS,
  LOADING_FOLDER,
  LOADING_FOLDERS,
  SM_LOADING_PREFERENCES,
  LOADING_RECIPIENTS,
  LOADING_THREAD,
  MOVE_MESSAGE_FAILURE,
  MOVE_MESSAGE_SUCCESS,
  MOVING_MESSAGE,
  SAVE_DRAFT_FAILURE,
  SAVE_DRAFT_SUCCESS,
  SM_SAVE_PREFERENCES_FAILURE,
  SM_SAVE_PREFERENCES_SUCCESS,
  SAVING_DRAFT,
  SM_SAVING_PREFERENCES,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_SUCCESS,
  SENDING_MESSAGE,
} from '../utils/constants';

const initialState = {
  folder: false,
  folders: false,
  preferences: false,
  recipients: false,
  thread: false,
  creatingFolder: false,
  deletingFolder: false,
  deletingMessage: false,
  movingMessage: false,
  savingDraft: false,
  savingPreferences: false,
  sendingMessage: false
};

export default function loading(state = initialState, action) {
  switch (action.type) {
    case CREATE_FOLDER_FAILURE:
    case CREATE_FOLDER_SUCCESS:
      return set('creatingFolder', false, state);
    case CREATING_FOLDER:
      return set('creatingFolder', true, state);

    case DELETE_FOLDER_FAILURE:
    case DELETE_FOLDER_SUCCESS:
      return set('deletingFolder', false, state);
    case DELETING_FOLDER:
      return set('deletingFolder', true, state);

    case DELETE_MESSAGE_FAILURE:
    case DELETE_MESSAGE_SUCCESS:
      return set('deletingMessage', false, state);
    case DELETING_MESSAGE:
      return set('deletingMessage', true, state);

    case FETCH_FOLDER_FAILURE:
    case FETCH_FOLDER_SUCCESS:
      return set('folder', false, state);
    case LOADING_FOLDER:
      return set('folder', true, state);

    case FETCH_FOLDERS_FAILURE:
    case FETCH_FOLDERS_SUCCESS:
      return set('folders', false, state);
    case LOADING_FOLDERS:
      return set('folders', true, state);

    case FETCH_RECIPIENTS_FAILURE:
    case FETCH_RECIPIENTS_SUCCESS:
      return set('recipients', false, state);
    case LOADING_RECIPIENTS:
      return set('recipients', true, state);

    case SM_FETCH_PREFERENCES_FAILURE:
    case SM_FETCH_PREFERENCES_SUCCESS:
      return set('preferences', false, state);
    case SM_LOADING_PREFERENCES:
      return set('preferences', true, state);

    case FETCH_THREAD_FAILURE:
    case FETCH_THREAD_SUCCESS:
      return set('thread', false, state);
    case LOADING_THREAD:
      return set('thread', true, state);

    case MOVE_MESSAGE_FAILURE:
    case MOVE_MESSAGE_SUCCESS:
      return set('movingMessage', false, state);
    case MOVING_MESSAGE:
      return set('movingMessage', true, state);

    case SAVE_DRAFT_FAILURE:
    case SAVE_DRAFT_SUCCESS:
      return set('savingDraft', false, state);
    case SAVING_DRAFT:
      return set('savingDraft', true, state);

    case SM_SAVE_PREFERENCES_FAILURE:
    case SM_SAVE_PREFERENCES_SUCCESS:
      return set('savingPreferences', false, state);
    case SM_SAVING_PREFERENCES:
      return set('savingPreferences', true, state);

    case SEND_MESSAGE_FAILURE:
    case SEND_MESSAGE_SUCCESS:
      return set('sendingMessage', false, state);
    case SENDING_MESSAGE:
      return set('sendingMessage', true, state);

    default:
      return state;
  }
}
