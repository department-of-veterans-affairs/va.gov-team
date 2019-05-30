import recordEvent from '../../../platform/monitoring/record-event';
import { apiRequest } from '../utils/helpers';

import {
  ADD_DRAFT_ATTACHMENTS,
  CLEAR_DRAFT,
  CREATE_FOLDER_FAILURE,
  CREATE_FOLDER_SUCCESS,
  DELETE_DRAFT_ATTACHMENT,
  DELETE_MESSAGE_FAILURE,
  DELETE_MESSAGE_SUCCESS,
  DELETING_MESSAGE,
  FETCH_THREAD_FAILURE,
  FETCH_THREAD_SUCCESS,
  FETCH_THREAD_MESSAGE_FAILURE,
  FETCH_THREAD_MESSAGE_SUCCESS,
  LOADING_THREAD,
  MOVE_MESSAGE_FAILURE,
  MOVE_MESSAGE_SUCCESS,
  MOVING_MESSAGE,
  SAVE_DRAFT_FAILURE,
  SAVE_DRAFT_SUCCESS,
  SAVING_DRAFT,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_SUCCESS,
  SENDING_MESSAGE,
  TOGGLE_MESSAGE_COLLAPSED,
  TOGGLE_MESSAGES_COLLAPSED,
  TOGGLE_THREAD_FORM,
  TOGGLE_THREAD_MOVE_TO,
  TOGGLE_REPLY_DETAILS,
  UPDATE_DRAFT
} from '../utils/constants';

const baseUrl = '/messages';

export function addDraftAttachments(files) {
  recordEvent({
    event: 'sm-add-attachment',
  });
  return { type: ADD_DRAFT_ATTACHMENTS, files };
}

export function clearDraft() {
  return { type: CLEAR_DRAFT };
}

export function deleteDraftAttachment(index) {
  return { type: DELETE_DRAFT_ATTACHMENT, index };
}

export function deleteMessage(messageId) {
  const url = `${baseUrl}/${messageId}`;

  recordEvent({
    event: 'sm-delete-message',
  });

  return dispatch => {
    dispatch({ type: DELETING_MESSAGE });

    apiRequest(
      url,
      { method: 'DELETE' },
      () => dispatch({ type: DELETE_MESSAGE_SUCCESS }),
      () => dispatch({ type: DELETE_MESSAGE_FAILURE })
    );
  };
}

export function fetchThread(messageId) {
  return dispatch => {
    const errorHandler =
      () => dispatch({ type: FETCH_THREAD_FAILURE });

    dispatch({ type: LOADING_THREAD, messageId });

    const messageUrl = `${baseUrl}/${messageId}`;
    const threadUrl = `${messageUrl}/thread`;

    Promise.all([messageUrl, threadUrl].map(
      url => apiRequest(url, null, response => response, errorHandler)
    ))
      .then(data => dispatch({
        type: FETCH_THREAD_SUCCESS,
        message: data[0],
        thread: data[1].data
      }))
      .catch(errorHandler);
  };
}

export function fetchThreadMessage(messageId) {
  return dispatch => {
    const messageUrl = `${baseUrl}/${messageId}`;

    apiRequest(
      messageUrl,
      null,
      data => dispatch({
        type: FETCH_THREAD_MESSAGE_SUCCESS,
        message: data
      }),
      () => dispatch({ type: FETCH_THREAD_MESSAGE_FAILURE })
    );
  };
}

export function moveMessageToFolder(messageId, folder) {
  const url = `${baseUrl}/${messageId}/move?folder_id=${folder.folderId}`;

  recordEvent({
    event: 'sm-move-message',
  });

  return dispatch => {
    dispatch({ type: MOVING_MESSAGE });

    apiRequest(
      url,
      { method: 'PATCH' },
      () => dispatch({ type: MOVE_MESSAGE_SUCCESS, folder }),
      () => dispatch({ type: MOVE_MESSAGE_FAILURE })
    );
  };
}

export function createFolderAndMoveMessage(folderName, messageId) {
  const foldersUrl = '/folders';
  const folderData = { folder: { name: folderName } };

  const settings = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(folderData)
  };

  recordEvent({
    event: 'sm-move-message',
  });

  return dispatch => {
    dispatch({ type: MOVING_MESSAGE });

    apiRequest(
      foldersUrl,
      settings,
      (data) => {
        const folder = data.data.attributes;
        dispatch({ type: CREATE_FOLDER_SUCCESS, folder, noAlert: true });
        return dispatch(moveMessageToFolder(messageId, folder));
      },
      () => dispatch({ type: CREATE_FOLDER_FAILURE })
    );
  };
}

export function saveDraft(message) {
  const draftsUrl = '/message_drafts';
  const payload = {
    messageDraft: {
      body: message.body,
      category: message.category,
      recipientId: message.recipientId,
      subject: message.subject
    }
  };

  const isReply = message.replyMessageId !== undefined;
  const isSavedDraft = message.messageId !== undefined;
  let url = draftsUrl;
  let method = 'POST';

  if (isReply) {
    url = `${url}/${message.replyMessageId}/replydraft`;
  }

  // Update the draft if it already has an id.
  // Save a new draft if it doesn’t have an id yet.
  if (isSavedDraft) {
    url = `${url}/${message.messageId}`;
    method = 'PUT';
  }

  recordEvent({
    event: 'sm-save-draft',
  });

  const settings = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  };

  return dispatch => {
    dispatch({ type: SAVING_DRAFT });

    apiRequest(
      url,
      settings,
      (response) => {
        if (isSavedDraft) {
          return dispatch({
            type: SAVE_DRAFT_SUCCESS,
            message,
            isSavedDraft
          });
        }

        return dispatch({
          type: SAVE_DRAFT_SUCCESS,
          message: response.data.attributes,
          isSavedDraft
        });
      },
      () => dispatch({ type: SAVE_DRAFT_FAILURE })
    );
  };
}

export function sendMessage(message) {
  let url = baseUrl;
  const payload = new FormData();
  const isReply = message.replyMessageId !== undefined;
  const isSavedDraft = message.messageId !== undefined;

  // Deletes draft (if it was saved) once message is successfully sent.
  if (isSavedDraft) {
    payload.append('message[draft_id]', message.messageId);
  }

  if (isReply) {
    url = `${url}/${message.replyMessageId}/reply`;
  } else {
    payload.append('message[recipient_id]', message.recipientId);
    payload.append('message[category]', message.category);
    payload.append('message[subject]', message.subject);
  }

  payload.append('message[body]', message.body);

  // Add each attachment as a separate item
  message.attachments.forEach((file) => {
    payload.append('uploads[]', file);
  });

  recordEvent({
    event: 'sm-send-message',
    hasAdditionalSubject: message.subject.length > 0,
  });

  const settings = {
    method: 'POST',
    body: payload
  };

  return dispatch => {
    dispatch({ type: SENDING_MESSAGE });

    apiRequest(
      url,
      settings,
      response => dispatch({
        type: SEND_MESSAGE_SUCCESS,
        message: response.data.attributes
      }),
      () => dispatch({ type: SEND_MESSAGE_FAILURE })
    );
  };
}

export function toggleMessageCollapsed(messageId) {
  return { type: TOGGLE_MESSAGE_COLLAPSED, messageId };
}

export function toggleMessagesCollapsed() {
  return { type: TOGGLE_MESSAGES_COLLAPSED };
}

export function toggleReplyDetails() {
  return { type: TOGGLE_REPLY_DETAILS };
}

export function toggleThreadForm() {
  return { type: TOGGLE_THREAD_FORM };
}

export function updateDraft(key, field) {
  return { type: UPDATE_DRAFT, key, field };
}

export function toggleThreadMoveTo() {
  return { type: TOGGLE_THREAD_MOVE_TO };
}
