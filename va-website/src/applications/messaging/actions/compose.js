import {
  ADD_COMPOSE_ATTACHMENTS,
  DELETE_COMPOSE_ATTACHMENT,
  DELETE_COMPOSE_MESSAGE,
  FETCH_RECIPIENTS_SUCCESS,
  FETCH_RECIPIENTS_FAILURE,
  LOADING_RECIPIENTS,
  RESET_MESSAGE_OBJECT,
  SET_MESSAGE_FIELD,
} from '../utils/constants';

import recordEvent from '../../../platform/monitoring/record-event';
import { apiRequest } from '../utils/helpers';

export function deleteComposeMessage() {
  recordEvent({
    event: 'sm-delete-compose',
  });
  return { type: DELETE_COMPOSE_MESSAGE };
}

export function setMessageField(path, field) {
  return {
    type: SET_MESSAGE_FIELD,
    path,
    field
  };
}

export function addComposeAttachments(files) {
  recordEvent({
    event: 'sm-add-attachment',
  });
  return {
    type: ADD_COMPOSE_ATTACHMENTS,
    files
  };
}

export function deleteComposeAttachment(index) {
  return {
    type: DELETE_COMPOSE_ATTACHMENT,
    index
  };
}

export function fetchRecipients() {
  const url = '/recipients';
  return dispatch => {
    dispatch({ type: LOADING_RECIPIENTS });

    apiRequest(
      url,
      null,
      (recipients) => dispatch({ type: FETCH_RECIPIENTS_SUCCESS, recipients }),
      (response) => dispatch({ type: FETCH_RECIPIENTS_FAILURE, errors: response.errors })
    );
  };
}

export function resetMessage() {
  return {
    type: RESET_MESSAGE_OBJECT
  };
}
