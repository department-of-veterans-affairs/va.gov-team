import { expect } from 'chai';
import SkinDeep from 'skin-deep';

import alertReducer from '../../reducers/alert';

import {
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
  SEND_MESSAGE_SUCCESS
} from '../../utils/constants';

import { draft, folders } from '../messaging-helpers';

const initialState = {
  content: '',
  status: 'info',
  visible: false
};

describe('alert reducer', () => {
  it('should open a general alert', () => {
    const newState = alertReducer(initialState, {
      type: OPEN_ALERT,
      status: 'success',
      content: 'test'
    });
    expect(newState.visible).to.be.true;
    expect(newState.status).to.eql('success');
    expect(newState.content).to.eql('test');
  });

  it('should close an alert', () => {
    const openState = {
      content: 'test',
      status: 'success',
      visible: true
    };
    const newState = alertReducer(openState, { type: CLOSE_ALERT });
    expect(newState.visible).to.be.false;
    expect(newState.status).to.eql('info');
    expect(newState.content).to.eql('');
  });

  it('should replace a previous, unclosed alert with a new alert', () => {
    let newState = alertReducer(initialState, {
      type: OPEN_ALERT,
      status: 'error',
      content: 'test1'
    });

    expect(newState.visible).to.be.true;
    expect(newState.status).to.eql('error');
    expect(newState.content).to.eql('test1');

    newState = alertReducer(newState, {
      type: OPEN_ALERT,
      status: 'success',
      content: 'test2'
    });

    expect(newState.visible).to.be.true;
    expect(newState.status).to.eql('success');
    expect(newState.content).to.eql('test2');
  });

  it('should not alert if the flag to disable it is set', () => {
    const newState = alertReducer(initialState, {
      type: OPEN_ALERT,
      status: 'error',
      content: 'test',
      noAlert: true
    });
    expect(newState.visible).to.be.false;
  });

  it('should alert when creating a folder succeeds', () => {
    const folder = folders.data[0].attributes;
    const newState = alertReducer(initialState, {
      type: CREATE_FOLDER_SUCCESS,
      folder
    });
    expect(newState.visible).to.be.true;
    expect(newState.status).to.eql('success');
    // Check that a link to the created folder exists.
    const link = SkinDeep.shallowRender(newState.content).dive(['Link']);
    expect(link.text()).to.eql(folder.name);
  });

  it('should alert when creating a folder fails', () => {
    const newState = alertReducer(initialState, { type: CREATE_FOLDER_FAILURE });
    expect(newState.visible).to.be.true;
    expect(newState.status).to.eql('error');
  });

  it('should alert when deleting a folder succeeds', () => {
    const folder = folders.data[0].attributes;
    const newState = alertReducer(initialState, {
      type: DELETE_FOLDER_SUCCESS,
      folder
    });
    expect(newState.visible).to.be.true;
    expect(newState.status).to.eql('success');
    // Check that the message mentions the name of the deleted folder.
    const content = SkinDeep.shallowRender(newState.content);
    expect(content.text()).to.be.string(`You have successfully deleted ${folder.name}`);
  });

  it('should alert when deleting a folder fails', () => {
    const newState = alertReducer(initialState, { type: DELETE_FOLDER_FAILURE });
    expect(newState.visible).to.be.true;
    expect(newState.status).to.eql('error');
  });

  it('should alert when deleting a message succeeds', () => {
    const newState = alertReducer(initialState, { type: DELETE_MESSAGE_SUCCESS });
    expect(newState.visible).to.be.true;
    expect(newState.status).to.eql('success');
  });

  it('should alert when deleting a message fails', () => {
    const newState = alertReducer(initialState, { type: DELETE_MESSAGE_FAILURE });
    expect(newState.visible).to.be.true;
    expect(newState.status).to.eql('error');
  });

  it('should alert when moving a message succeeds', () => {
    const folder = folders.data[0].attributes;
    const newState = alertReducer(initialState, {
      type: MOVE_MESSAGE_SUCCESS,
      folder
    });
    expect(newState.visible).to.be.true;
    expect(newState.status).to.eql('success');
    // Check that a link to the folder exists.
    const link = SkinDeep.shallowRender(newState.content).dive(['Link']);
    expect(link.text()).to.eql(folder.name);
  });

  it('should alert when moving a message fails', () => {
    const newState = alertReducer(initialState, { type: MOVE_MESSAGE_FAILURE });
    expect(newState.visible).to.be.true;
    expect(newState.status).to.eql('error');
  });

  it('should alert when saving a draft succeeds', () => {
    const message = draft.data.attributes;
    const newState = alertReducer(initialState, {
      type: SAVE_DRAFT_SUCCESS,
      message
    });
    expect(newState.visible).to.be.true;
    expect(newState.status).to.eql('success');
    // Check that a link to the draft exists.
    const link = SkinDeep.shallowRender(newState.content).subTree('Link');
    expect(link.props.to).to.eql(`/drafts/${message.messageId}`);
  });

  it('should alert when saving a draft fails', () => {
    const newState = alertReducer(initialState, { type: SAVE_DRAFT_FAILURE });
    expect(newState.visible).to.be.true;
    expect(newState.status).to.eql('error');
  });

  it('should alert when failing to save preferences', () => {
    const state = alertReducer(initialState, {
      type: SM_SAVE_PREFERENCES_FAILURE,
      errors: [{ title: 'Email address is invalid' }]
    });
    expect(state.visible).to.be.true;
    expect(state.status).to.eql('error');
  });

  it('should alert when successfully saving preferences', () => {
    const state = alertReducer(initialState, { type: SM_SAVE_PREFERENCES_SUCCESS });
    expect(state.visible).to.be.true;
    expect(state.status).to.eql('success');
  });


  it('should alert when sending a message succeeds', () => {
    const message = draft.data.attributes;
    const newState = alertReducer(initialState, {
      type: SEND_MESSAGE_SUCCESS,
      message
    });
    expect(newState.visible).to.be.true;
    expect(newState.status).to.eql('success');
    // Check that a link to the message exists.
    const link = SkinDeep.shallowRender(newState.content).subTree('Link');
    expect(link.props.to).to.eql(`/sent/${message.messageId}`);
  });

  it('should alert when sending a message fails', () => {
    const newState = alertReducer(initialState, { type: SEND_MESSAGE_FAILURE });
    expect(newState.visible).to.be.true;
    expect(newState.status).to.eql('error');
  });
});
