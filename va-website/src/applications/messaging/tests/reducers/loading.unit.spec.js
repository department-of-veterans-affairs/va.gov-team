import { expect } from 'chai';

import loadingReducer from '../../reducers/loading';

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
} from '../../utils/constants';

describe('loading reducer', () => {
  it('should trigger a loader when creating a folder', () => {
    const state = loadingReducer(
      { creatingFolder: false },
      { type: CREATING_FOLDER }
    );
    expect(state.creatingFolder).to.be.true;
  });

  it('should not trigger a loader after failing to create a folder', () => {
    const state = loadingReducer(
      { creatingFolder: true },
      { type: CREATE_FOLDER_FAILURE }
    );
    expect(state.creatingFolder).to.be.false;
  });

  it('should not trigger a loader after successfully creating a folder', () => {
    const state = loadingReducer(
      { creatingFolder: true },
      { type: CREATE_FOLDER_SUCCESS }
    );
    expect(state.creatingFolder).to.be.false;
  });

  it('should trigger a loader when deleting a folder', () => {
    const state = loadingReducer(
      { deletingFolder: false },
      { type: DELETING_FOLDER }
    );
    expect(state.deletingFolder).to.be.true;
  });

  it('should not trigger a loader after failing to delete a folder', () => {
    const state = loadingReducer(
      { deletingFolder: true },
      { type: DELETE_FOLDER_FAILURE }
    );
    expect(state.deletingFolder).to.be.false;
  });

  it('should not trigger a loader after successfully deleting a folder', () => {
    const state = loadingReducer(
      { deletingFolder: true },
      { type: DELETE_FOLDER_SUCCESS }
    );
    expect(state.deletingFolder).to.be.false;
  });

  it('should trigger a loader when deleting a message', () => {
    const state = loadingReducer(
      { deletingMessage: false },
      { type: DELETING_MESSAGE }
    );
    expect(state.deletingMessage).to.be.true;
  });

  it('should not trigger a loader after failing to delete a message', () => {
    const state = loadingReducer(
      { deletingMessage: true },
      { type: DELETE_MESSAGE_FAILURE }
    );
    expect(state.deletingMessage).to.be.false;
  });

  it('should not trigger a loader after successfully deleting a message', () => {
    const state = loadingReducer(
      { deletingMessage: true },
      { type: DELETE_MESSAGE_SUCCESS }
    );
    expect(state.deletingMessage).to.be.false;
  });

  it('should trigger a loader when fetching a folder', () => {
    const state = loadingReducer(
      { folder: false },
      { type: LOADING_FOLDER }
    );
    expect(state.folder).to.be.true;
  });

  it('should not trigger a loader after failing to fetch a folder', () => {
    const state = loadingReducer(
      { folder: true },
      { type: FETCH_FOLDER_FAILURE }
    );
    expect(state.folder).to.be.false;
  });

  it('should not trigger a loader after successfully fetching a folder', () => {
    const state = loadingReducer(
      { folder: true },
      { type: FETCH_FOLDER_SUCCESS }
    );
    expect(state.folder).to.be.false;
  });

  it('should trigger a loader when fetching folders', () => {
    const state = loadingReducer(
      { folders: false },
      { type: LOADING_FOLDERS }
    );
    expect(state.folders).to.be.true;
  });

  it('should not trigger a loader after failing to fetch a folder', () => {
    const state = loadingReducer(
      { folders: true },
      { type: FETCH_FOLDERS_FAILURE }
    );
    expect(state.folders).to.be.false;
  });

  it('should not trigger a loader after successfully fetching a folder', () => {
    const state = loadingReducer(
      { folders: true },
      { type: FETCH_FOLDERS_SUCCESS }
    );
    expect(state.folders).to.be.false;
  });

  it('should trigger a loader when fetching preferences', () => {
    const state = loadingReducer(
      { folders: false },
      { type: SM_LOADING_PREFERENCES }
    );
    expect(state.preferences).to.be.true;
  });

  it('should not trigger a loader after failing to fetch preferences', () => {
    const state = loadingReducer(
      { folders: true },
      { type: SM_FETCH_PREFERENCES_FAILURE }
    );
    expect(state.preferences).to.be.false;
  });

  it('should not trigger a loader after successfully fetching preferences', () => {
    const state = loadingReducer(
      { folders: true },
      { type: SM_FETCH_PREFERENCES_SUCCESS }
    );
    expect(state.preferences).to.be.false;
  });

  it('should trigger a loader when fetching recipients', () => {
    const state = loadingReducer(
      { recipients: false },
      { type: LOADING_RECIPIENTS }
    );
    expect(state.recipients).to.be.true;
  });

  it('should not trigger a loader after failing to fetch recipients', () => {
    const state = loadingReducer(
      { recipients: true },
      { type: FETCH_RECIPIENTS_FAILURE }
    );
    expect(state.recipients).to.be.false;
  });

  it('should not trigger a loader after successfully fetching recipients', () => {
    const state = loadingReducer(
      { recipients: true },
      { type: FETCH_RECIPIENTS_SUCCESS }
    );
    expect(state.recipients).to.be.false;
  });

  it('should trigger a loader when fetching a thread', () => {
    const state = loadingReducer(
      { thread: false },
      { type: LOADING_THREAD }
    );
    expect(state.thread).to.be.true;
  });

  it('should not trigger a loader after failing to fetch a thread', () => {
    const state = loadingReducer(
      { thread: true },
      { type: FETCH_THREAD_FAILURE }
    );
    expect(state.thread).to.be.false;
  });

  it('should not trigger a loader after successfully fetching a thread', () => {
    const state = loadingReducer(
      { thread: true },
      { type: FETCH_THREAD_SUCCESS }
    );
    expect(state.thread).to.be.false;
  });

  it('should trigger a loader when moving a message', () => {
    const state = loadingReducer(
      { movingMessage: false },
      { type: MOVING_MESSAGE }
    );
    expect(state.movingMessage).to.be.true;
  });

  it('should not trigger a loader after failing to move a message', () => {
    const state = loadingReducer(
      { movingMessage: true },
      { type: MOVE_MESSAGE_FAILURE }
    );
    expect(state.movingMessage).to.be.false;
  });

  it('should not trigger a loader after successfully moving a message', () => {
    const state = loadingReducer(
      { movingMessage: true },
      { type: MOVE_MESSAGE_SUCCESS }
    );
    expect(state.movingMessage).to.be.false;
  });

  it('should trigger a loader when saving a draft', () => {
    const state = loadingReducer(
      { savingDraft: false },
      { type: SAVING_DRAFT }
    );
    expect(state.savingDraft).to.be.true;
  });

  it('should not trigger a loader after failing to save a draft', () => {
    const state = loadingReducer(
      { savingDraft: true },
      { type: SAVE_DRAFT_FAILURE }
    );
    expect(state.savingDraft).to.be.false;
  });

  it('should not trigger a loader after successfully saving a draft', () => {
    const state = loadingReducer(
      { savingDraft: true },
      { type: SAVE_DRAFT_SUCCESS }
    );
    expect(state.savingDraft).to.be.false;
  });

  it('should trigger a loader when saving preferences', () => {
    const state = loadingReducer(
      { savingPreferences: false },
      { type: SM_SAVING_PREFERENCES }
    );
    expect(state.savingPreferences).to.be.true;
  });

  it('should not trigger a loader after failing to save preferences', () => {
    const state = loadingReducer(
      { savingPreferences: true },
      { type: SM_SAVE_PREFERENCES_FAILURE }
    );
    expect(state.savingPreferences).to.be.false;
  });

  it('should not trigger a loader after successfully saving preferences', () => {
    const state = loadingReducer(
      { savingPreferences: true },
      { type: SM_SAVE_PREFERENCES_SUCCESS }
    );
    expect(state.savingPreferences).to.be.false;
  });

  it('should trigger a loader when sending a message', () => {
    const state = loadingReducer(
      { sendingMessage: false },
      { type: SENDING_MESSAGE }
    );
    expect(state.sendingMessage).to.be.true;
  });

  it('should not trigger a loader after failing to send a message', () => {
    const state = loadingReducer(
      { sendingMessage: true },
      { type: SEND_MESSAGE_FAILURE }
    );
    expect(state.sendingMessage).to.be.false;
  });

  it('should not trigger a loader after successfully sending a message', () => {
    const state = loadingReducer(
      { sendingMessage: true },
      { type: SEND_MESSAGE_SUCCESS }
    );
    expect(state.sendingMessage).to.be.false;
  });
});
