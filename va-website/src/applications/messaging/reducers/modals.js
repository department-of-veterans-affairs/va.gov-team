import set from 'lodash/fp/set';

import { makeField } from '../../../platform/forms/fields.js';
import { composeMessage } from '../config';

import {
  CLOSE_ATTACHMENTS_MODAL,
  CLOSE_CREATE_FOLDER,
  CREATE_FOLDER_FAILURE,
  CREATE_FOLDER_SUCCESS,
  OPEN_ATTACHMENTS_MODAL,
  OPEN_CREATE_FOLDER,
  SET_NEW_FOLDER_NAME,
  TOGGLE_CONFIRM_DELETE,
  TOGGLE_CONFIRM_SAVE
} from '../utils/constants';

const initialState = {
  deleteConfirm: {
    visible: false
  },
  attachments: {
    visible: false,
    message: {
      title: null,
      text: null
    }
  },
  createFolder: {
    visible: false,
    newFolderName: makeField('')
  },
  saveConfirm: {
    visible: false
  }
};

export default function modals(state = initialState, action) {
  switch (action.type) {
    case CREATE_FOLDER_FAILURE:
    case CREATE_FOLDER_SUCCESS:
      return set('createFolder', initialState.createFolder, state);
    case TOGGLE_CONFIRM_DELETE:
      return set('deleteConfirm.visible', !state.deleteConfirm.visible, state);
    case CLOSE_ATTACHMENTS_MODAL:
      return set('attachments', initialState.attachments, state);
    case CLOSE_CREATE_FOLDER:
      return set('createFolder', initialState.createFolder, state);
    case OPEN_ATTACHMENTS_MODAL:
      return set('attachments', {
        visible: true,
        message: composeMessage.errors.attachments[action.error.type]
      }, state);
    case OPEN_CREATE_FOLDER:
    // If a message is provided, it gets moved to the newly created folder.
      return set('createFolder', {
        visible: true,
        newFolderName: makeField(''),
        messageId: action.messageId
      }, state);
    case SET_NEW_FOLDER_NAME:
      return set('createFolder.newFolderName', action.folderName, state);
    case TOGGLE_CONFIRM_SAVE:
      return set('saveConfirm.visible', !state.saveConfirm.visible, state);
    default:
      return state;
  }
}
