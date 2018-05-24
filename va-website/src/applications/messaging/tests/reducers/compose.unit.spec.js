import { expect } from 'chai';

import { makeField } from '../../../../platform/forms/fields';
import composeReducer from '../../reducers/compose';

import {
  ADD_COMPOSE_ATTACHMENTS,
  DELETE_COMPOSE_ATTACHMENT,
  DELETE_COMPOSE_MESSAGE,
  SET_MESSAGE_FIELD,
} from '../../utils/constants';

const initialState = {
  message: {
    attachments: [],
    body: makeField(''),
    category: makeField(''),
    recipient: makeField(''),
    subject: makeField('')
  }
};

describe('compose reducer', () => {
  it('should delete a new message', () => {
    const newState = composeReducer(initialState, { type: DELETE_COMPOSE_MESSAGE });
    expect(newState).to.eql(initialState);
  });

  it('should add attachments to a new message', () => {
    const fileSet = ['test1.txt', 'test2.gif'];
    const newState = composeReducer(initialState, {
      type: ADD_COMPOSE_ATTACHMENTS,
      files: fileSet
    });

    expect(newState.message.attachments).to.eql(fileSet);
  });

  it('should maintain a growing list of attachments for a new message', () => {
    let newState = composeReducer(initialState, {
      type: ADD_COMPOSE_ATTACHMENTS,
      files: ['test1.png', 'test2.txt']
    });

    newState = composeReducer(newState, {
      type: ADD_COMPOSE_ATTACHMENTS,
      files: ['test3.jpg']
    });

    expect(newState.message.attachments).to.have.lengthOf(3);
    expect(newState.message.attachments).to.contain('test1.png');
    expect(newState.message.attachments).to.contain('test2.txt');
    expect(newState.message.attachments).to.contain('test3.jpg');
  });

  it('should delete attachments from a new message', () => {
    const attachmentsState = Object.assign({}, initialState, {
      message: {
        attachments: [
          'test1',
          'test2',
          'test3'
        ]
      }
    });

    let newState = composeReducer(attachmentsState, {
      type: DELETE_COMPOSE_ATTACHMENT,
      index: 1
    });

    expect(newState.message.attachments).to.have.lengthOf(2);
    expect(newState.message.attachments).to.contain('test1');
    expect(newState.message.attachments).to.contain('test3');

    newState = composeReducer(newState, {
      type: DELETE_COMPOSE_ATTACHMENT,
      index: 1
    });

    expect(newState.message.attachments).to.have.lengthOf(1);
    expect(newState.message.attachments).to.contain('test1');
  });

  it('should set the recipient for a new message', () => {
    const recipient = makeField('0');
    const newState = composeReducer(initialState, {
      type: SET_MESSAGE_FIELD,
      field: recipient,
      path: 'message.recipient'
    });

    expect(newState.message.recipient).to.eql(recipient);
  });

  it('should set the category for a new message', () => {
    const category = makeField('APPOINTMENTS');
    const newState = composeReducer(initialState, {
      type: SET_MESSAGE_FIELD,
      field: category,
      path: 'message.category'
    });

    expect(newState.message.category).to.eql(category);
  });

  it('should set the subject for a new message', () => {
    const subject = makeField('Message Title');
    const newState = composeReducer(initialState, {
      type: SET_MESSAGE_FIELD,
      field: subject,
      path: 'message.subject'
    });

    expect(newState.message.subject).to.eql(subject);
  });

  it('should set the text for a new message', () => {
    const text = makeField('This is the message body.');
    const newState = composeReducer(initialState, {
      type: SET_MESSAGE_FIELD,
      field: text,
      path: 'message.text'
    });

    expect(newState.message.text).to.eql(text);
  });
});
