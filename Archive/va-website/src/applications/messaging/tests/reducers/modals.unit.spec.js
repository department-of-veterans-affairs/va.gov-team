import { expect } from 'chai';

import { makeField } from '../../../../platform/forms/fields';
import { composeMessage } from '../../config';
import modalsReducer from '../../reducers/modals';

import {
  CLOSE_ATTACHMENTS_MODAL,
  CLOSE_CREATE_FOLDER,
  OPEN_ATTACHMENTS_MODAL,
  OPEN_CREATE_FOLDER,
  SET_NEW_FOLDER_NAME,
  TOGGLE_CONFIRM_DELETE
} from '../../utils/constants';

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
  }
};

describe('modals reducer', () => {
  it('should open and close the delete confirmation modal', () => {
    let newState = modalsReducer(initialState, { type: TOGGLE_CONFIRM_DELETE });
    expect(newState.deleteConfirm.visible).to.be.true;
    newState = modalsReducer(newState, { type: TOGGLE_CONFIRM_DELETE });
    expect(newState.deleteConfirm.visible).to.be.false;
  });

  it('should open an error modal for attachments that are too big', () => {
    const newState = modalsReducer(initialState, {
      type: OPEN_ATTACHMENTS_MODAL,
      error: { type: 'tooLarge' }
    });
    expect(newState.attachments.visible).to.be.true;
    expect(newState.attachments.message)
      .to.eql(composeMessage.errors.attachments.tooLarge);
  });

  it('should open an error modal for too many attachments', () => {
    const newState = modalsReducer(initialState, {
      type: OPEN_ATTACHMENTS_MODAL,
      error: { type: 'tooMany' }
    });
    expect(newState.attachments.visible).to.be.true;
    expect(newState.attachments.message)
      .to.eql(composeMessage.errors.attachments.tooMany);
  });

  it('should close the attachments error modal', () => {
    const state = { attachments: { visible: true } };
    const newState = modalsReducer(state, { type: CLOSE_ATTACHMENTS_MODAL });
    expect(newState.attachments).to.eql(initialState.attachments);
  });

  it('should open the create folder modal (not for moving a message)', () => {
    const newState = modalsReducer(initialState, { type: OPEN_CREATE_FOLDER });
    expect(newState.createFolder.visible).to.be.true;
    expect(newState.createFolder.newFolderName).to.eql(makeField(''));
    expect(newState.createFolder.messageId).to.be.undefined;
  });

  it('should open the create folder modal (for moving a message)', () => {
    const messageId = 12345;
    const newState = modalsReducer(initialState, {
      type: OPEN_CREATE_FOLDER,
      messageId
    });
    expect(newState.createFolder.visible).to.be.true;
    expect(newState.createFolder.newFolderName).to.eql(makeField(''));
    expect(newState.createFolder.messageId).to.eql(messageId);
  });

  it('should close the create folder modal', () => {
    const state = { createFolder: { visible: true } };
    const newState = modalsReducer(state, { type: CLOSE_CREATE_FOLDER });
    expect(newState.createFolder).to.eql(initialState.createFolder);
  });

  it('should set the new folder name in the create folder modal', () => {
    const state = {
      createFolder: {
        visible: true,
        folderName: makeField('')
      }
    };

    let folderName = makeField('testing 12345', true);
    let newState = modalsReducer(state, {
      type: SET_NEW_FOLDER_NAME,
      folderName
    });

    expect(newState.createFolder.newFolderName).to.eql(folderName);

    folderName = makeField('foo bar 67890', true);
    newState = modalsReducer(newState, {
      type: SET_NEW_FOLDER_NAME,
      folderName
    });

    expect(newState.createFolder.newFolderName).to.eql(folderName);
  });
});
