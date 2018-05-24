import {
  CLOSE_CREATE_FOLDER,
  OPEN_CREATE_FOLDER,
  OPEN_ATTACHMENTS_MODAL,
  CLOSE_ATTACHMENTS_MODAL,
  TOGGLE_CONFIRM_DELETE,
  SET_NEW_FOLDER_NAME,
  TOGGLE_CONFIRM_SAVE
} from '../utils/constants';

export function closeCreateFolderModal() {
  return { type: CLOSE_CREATE_FOLDER };
}

export function openCreateFolderModal() {
  return { type: OPEN_CREATE_FOLDER };
}

export function openMoveToNewFolderModal(messageId) {
  return {
    type: OPEN_CREATE_FOLDER,
    messageId
  };
}

export function toggleConfirmDelete() {
  return { type: TOGGLE_CONFIRM_DELETE };
}

export function openAttachmentsModal(error) {
  return {
    type: OPEN_ATTACHMENTS_MODAL,
    error
  };
}

export function closeAttachmentsModal() {
  return { type: CLOSE_ATTACHMENTS_MODAL };
}

export function setNewFolderName(folderName) {
  return {
    type: SET_NEW_FOLDER_NAME,
    folderName
  };
}

export function toggleConfirmSave() {
  return { type: TOGGLE_CONFIRM_SAVE };
}
