import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import { folderUrl } from '../utils/helpers';

import {
  alertStatus,
  CLOSE_ALERT,
  CREATE_FOLDER_FAILURE,
  CREATE_FOLDER_SUCCESS,
  DELETE_FOLDER_FAILURE,
  DELETE_FOLDER_SUCCESS,
  DELETE_MESSAGE_FAILURE,
  DELETE_MESSAGE_SUCCESS,
  MOVE_MESSAGE_FAILURE,
  MOVE_MESSAGE_SUCCESS,
  OPEN_ALERT,
  SAVE_DRAFT_FAILURE,
  SAVE_DRAFT_SUCCESS,
  SM_SAVE_PREFERENCES_FAILURE,
  SM_SAVE_PREFERENCES_SUCCESS,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_SUCCESS,
  UPDATE_ROUTE
} from '../utils/constants';

const createAlert = (content, status, visible = true) => {
  return {
    content,
    status,
    visible
  };
};

const initialState = createAlert('', alertStatus.INFO, false);

export default function alert(state = initialState, action) {
  if (action.noAlert) {
    return state;
  }

  switch (action.type) {
    case UPDATE_ROUTE: {
    // Certain route changes set a flag to preserve alerts
    // that would otherwise have been immediately dismissed.
      const preserveAlert = _.get(action, 'location.state.preserveAlert', false);
      return preserveAlert ? state : initialState;
    }

    case CLOSE_ALERT:
      return initialState;

    case OPEN_ALERT:
      return createAlert(action.content, action.status);

    case CREATE_FOLDER_FAILURE:
      return createAlert(
        <b>Failed to create folder.</b>,
        alertStatus.ERROR
      );

    case CREATE_FOLDER_SUCCESS: {
      const folderName = action.folder.name;
      const link = <Link to={folderUrl(folderName)}>{folderName}</Link>;
      return createAlert(
        <b>You have successfully created {link}.</b>,
        alertStatus.SUCCESS
      );
    }

    case DELETE_FOLDER_FAILURE:
      return createAlert(
        <b>Failed to delete folder.</b>,
        alertStatus.ERROR
      );

    case DELETE_FOLDER_SUCCESS:
      return createAlert(
        <b>You have successfully deleted {action.folder.name}</b>,
        alertStatus.SUCCESS
      );

    case DELETE_MESSAGE_FAILURE:
      return createAlert(
        <b>Failed to delete message.</b>,
        alertStatus.ERROR
      );

    case DELETE_MESSAGE_SUCCESS:
      return createAlert(
        <b>Your message has been deleted.</b>,
        alertStatus.SUCCESS
      );

    case MOVE_MESSAGE_FAILURE:
      return createAlert(
        <b>Failed to move message.</b>,
        alertStatus.ERROR
      );

    case MOVE_MESSAGE_SUCCESS: {
      const folderName = action.folder.name;
      const link = <Link to={folderUrl(folderName)}>{folderName}</Link>;
      return createAlert(
        <b>Your message has been moved to {link}.</b>,
        alertStatus.SUCCESS
      );
    }

    case SAVE_DRAFT_FAILURE:
      return createAlert(
        <b>Failed to save draft.</b>,
        alertStatus.ERROR
      );

    case SAVE_DRAFT_SUCCESS: {
      const messageId = action.message.messageId;
      const link = <Link to={`/drafts/${messageId}`}>View message.</Link>;
      return createAlert(
        <b>Your draft has been saved. {link}</b>,
        alertStatus.SUCCESS
      );
    }

    case SM_SAVE_PREFERENCES_FAILURE: {
      const { errors } = action;
      const error = errors.length && `${errors[0].title}.`;
      return createAlert(
        <b>Failed to save changes. {error}</b>,
        alertStatus.ERROR
      );
    }

    case SM_SAVE_PREFERENCES_SUCCESS:
      return createAlert(
        <b>Your changes have been saved.</b>,
        alertStatus.SUCCESS
      );

    case SEND_MESSAGE_FAILURE:
      return createAlert(
        <b>Failed to send message.</b>,
        alertStatus.ERROR
      );

    case SEND_MESSAGE_SUCCESS: {
      const messageId = action.message.messageId;
      const link = <Link to={`/sent/${messageId}`}>View message.</Link>;
      const content = (
        <b>
          Your message has been sent. {link} Please allow up to three working days for a response from your health care team.
        </b>
      );

      return createAlert(content, alertStatus.SUCCESS);
    }

    default:
      return state;
  }
}
