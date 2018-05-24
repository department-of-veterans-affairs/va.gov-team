import { expect } from 'chai';

import { makeField } from '../../../../platform/forms/fields';
import messagesReducer from '../../reducers/messages';

import {
  ADD_DRAFT_ATTACHMENTS,
  CLEAR_DRAFT,
  DELETE_DRAFT_ATTACHMENT,
  FETCH_THREAD_SUCCESS,
  FETCH_THREAD_MESSAGE_SUCCESS,
  LOADING_THREAD,
  TOGGLE_MESSAGE_COLLAPSED,
  TOGGLE_MESSAGES_COLLAPSED,
  TOGGLE_THREAD_MOVE_TO,
  TOGGLE_REPLY_DETAILS,
  TOGGLE_THREAD_FORM,
  UPDATE_DRAFT
} from '../../utils/constants';

import { draft, message, thread } from '../messaging-helpers';

describe('messages reducer', () => {
  it('should reset thread while loading', () => {
    const state = messagesReducer({
      data: {
        message: 'message4',
        thread: ['message1', 'message2', 'message3'],
        draft: {
          attachments: ['file1', 'file2'],
          body: makeField('Lorem ipsum dolor sit amet.'),
          category: makeField('Medication'),
          recipient: makeField('Clinician'),
          subject: makeField('Prescription Request')
        }
      },
      ui: {
        formVisible: true,
        lastRequestedId: 123,
        messagesCollapsed: new Set([12, 34, 56]),
        moveToOpened: true,
        replyDetailsCollapsed: false
      }
    }, {
      type: LOADING_THREAD,
      messageId: 456
    });

    expect(state.data.message).to.be.null;
    expect(state.data.thread).to.be.empty;

    const { attachments, body, category, recipient, subject } = state.data.draft;

    expect(attachments).to.be.empty;
    expect(body.value).to.be.empty;
    expect(category.value).to.be.empty;
    expect(recipient.value).to.be.empty;
    expect(subject.value).to.be.empty;

    const {
      formVisible,
      lastRequestedId,
      messagesCollapsed,
      moveToOpened,
      replyDetailsCollapsed
    } = state.ui;

    expect(formVisible).to.be.false;
    expect(lastRequestedId).to.equal(456);
    expect(messagesCollapsed.size).to.equal(0);
    expect(moveToOpened).to.be.false;
    expect(replyDetailsCollapsed).to.be.true;
  });

  it('should add draft attachments', () => {
    let state = messagesReducer({
      data: { draft: { attachments: [] } }
    }, {
      type: ADD_DRAFT_ATTACHMENTS,
      files: ['file1']
    });

    expect(state.data.draft.attachments).to.contain('file1');

    state = messagesReducer(state, {
      type: ADD_DRAFT_ATTACHMENTS,
      files: ['file2', 'file3']
    });

    expect(state.data.draft.attachments).to.contain('file1');
    expect(state.data.draft.attachments).to.contain('file2');
    expect(state.data.draft.attachments).to.contain('file3');
  });

  it('should clear the draft', () => {
    const state = messagesReducer({
      data: {
        draft: {
          attachments: ['file1'],
          body: makeField('Lorem ipsum dolor sit amet.'),
          category: makeField('Medication'),
          recipient: makeField('Clinician'),
          subject: makeField('Prescription Request')
        }
      }
    }, {
      type: CLEAR_DRAFT
    });
    const { attachments, body, category, recipient, subject } = state.data.draft;
    expect(attachments).to.be.empty;
    expect(body.value).to.be.empty;
    expect(category.value).to.equal('Medication');
    expect(recipient.value).to.equal('Clinician');
    expect(subject.value).to.equal('Prescription Request');
  });

  it('should delete draft attachments', () => {
    const state = messagesReducer({
      data: { draft: { attachments: ['file1', 'file2', 'file3'] } }
    }, {
      type: DELETE_DRAFT_ATTACHMENT,
      index: 1
    });

    expect(state.data.draft.attachments).to.have.lengthOf(2);
    expect(state.data.draft.attachments).to.contain('file1');
    expect(state.data.draft.attachments).to.contain('file3');
  });

  it('should handle a successful fetch of a thread message', () => {
    const state = messagesReducer({
      data: {
        thread: [
          { attachments: [], body: 'thread message 1', messageId: 99 },
          { attachments: [], body: 'thread message 2', messageId: 123 },
          { attachments: [], body: 'thread message 3', messageId: 128 }
        ]
      }
    }, {
      type: FETCH_THREAD_MESSAGE_SUCCESS,
      message
    });

    expect(state.data.thread[1]).to.eql({
      ...message.data.attributes,
      attachments: message.included
    });
  });

  it('should handle a successful fetch of a message and its thread', () => {
    const state = messagesReducer({
      data: {
        message: null,
        thread: [],
        draft: {}
      }
    }, {
      type: FETCH_THREAD_SUCCESS,
      message,
      thread: thread.data
    });

    expect(state.data.message).to.eql({
      ...message.data.attributes,
      attachments: message.included
    });

    expect(state.data.thread)
      .to.eql(thread.data.map(msg => msg.attributes).reverse());

    const {
      category,
      messageId,
      senderId,
      subject
    } = message.data.attributes;

    expect(state.data.draft).to.eql({
      attachments: [],
      body: makeField(''),
      category: makeField(category),
      recipient: makeField(senderId.toString()),
      subject: makeField(subject),
      replyMessageId: messageId
    });

    expect(state.ui.messagesCollapsed)
      .to.eql(new Set(thread.data.map(msg => msg.attributes.messageId)));
  });

  it('should handle a successful fetch of a new message draft', () => {
    const state = messagesReducer({
      data: {
        message: null,
        thread: [],
        draft: {}
      }
    }, {
      type: FETCH_THREAD_SUCCESS,
      message: draft,
      thread: []
    });

    expect(state.data.message).to.eql({
      ...draft.data.attributes,
      attachments: draft.included
    });

    expect(state.data.thread).to.be.empty;

    const {
      body,
      category,
      messageId,
      recipientId,
      subject
    } = draft.data.attributes;

    expect(state.data.draft).to.eql({
      attachments: [],
      body: makeField(body),
      category: makeField(category),
      messageId,
      recipient: makeField(recipientId.toString()),
      subject: makeField(subject),
      replyMessageId: undefined
    });

    expect(state.ui.messagesCollapsed.size).to.equal(0);
  });

  it('should handle a successful fetch of a reply draft', () => {
    const state = messagesReducer({
      data: {
        message: null,
        thread: [],
        draft: {}
      }
    }, {
      type: FETCH_THREAD_SUCCESS,
      message: draft,
      thread: thread.data
    });

    expect(state.data.message).to.eql({
      ...draft.data.attributes,
      attachments: draft.included
    });

    expect(state.data.thread)
      .to.eql(thread.data.map(msg => msg.attributes).reverse());

    const {
      body,
      category,
      messageId,
      recipientId,
      subject
    } = draft.data.attributes;

    expect(state.data.draft).to.eql({
      attachments: [],
      body: makeField(body),
      category: makeField(category),
      messageId,
      recipient: makeField(recipientId.toString()),
      subject: makeField(subject),
      replyMessageId: +thread.data[0].attributes.messageId
    });

    expect(state.ui.messagesCollapsed)
      .to.eql(new Set(thread.data.map(msg => msg.attributes.messageId)));
  });

  it('should collapse and expand a message', () => {
    let state = messagesReducer({
      ui: { messagesCollapsed: new Set() }
    }, {
      type: TOGGLE_MESSAGE_COLLAPSED,
      messageId: 1
    });
    expect(state.ui.messagesCollapsed.has(1)).to.be.true;

    state = messagesReducer(state, {
      type: TOGGLE_MESSAGE_COLLAPSED,
      messageId: 2
    });
    expect(state.ui.messagesCollapsed.has(1)).to.be.true;
    expect(state.ui.messagesCollapsed.has(2)).to.be.true;

    state = messagesReducer(state, {
      type: TOGGLE_MESSAGE_COLLAPSED,
      messageId: 1
    });
    expect(state.ui.messagesCollapsed.has(1)).to.be.false;
    expect(state.ui.messagesCollapsed.has(2)).to.be.true;
  });

  it('should collapse all messages in the thread', () => {
    const state = messagesReducer({
      data: { thread: thread.data.map(msg => msg.attributes).reverse() },
      ui: { messagesCollapsed: new Set() }
    }, {
      type: TOGGLE_MESSAGES_COLLAPSED
    });
    const { messagesCollapsed } = state.ui;
    expect(messagesCollapsed.size).to.equal(thread.data.length);
    thread.data.forEach(msg => {
      expect(messagesCollapsed.has(+msg.id)).to.be.true;
    });
  });

  it('should expand all messages in the thread', () => {
    const state = messagesReducer({
      data: { thread: thread.data.map(msg => msg.attributes).reverse() },
      ui: { messagesCollapsed: new Set(thread.data.map(msg => +msg.id)) }
    }, {
      type: TOGGLE_MESSAGES_COLLAPSED
    });
    expect(state.ui.messagesCollapsed.size).to.equal(0);
  });

  it('should expand all messages in the thread if any are collapsed', () => {
    const state = messagesReducer({
      data: { thread: thread.data.map(msg => msg.attributes).reverse() },
      ui: {
        messagesCollapsed: new Set([
          +thread.data[0].id,
          +thread.data[1].id
        ])
      }
    }, {
      type: TOGGLE_MESSAGES_COLLAPSED
    });
    expect(state.ui.messagesCollapsed.size).to.equal(0);
  });

  it('should toggle the thread form', () => {
    let state = messagesReducer({
      ui: { formVisible: false }
    }, {
      type: TOGGLE_THREAD_FORM
    });
    expect(state.ui.formVisible).to.be.true;
    state = messagesReducer(state, { type: TOGGLE_THREAD_FORM });
    expect(state.ui.formVisible).to.be.false;
    state = messagesReducer(state, { type: TOGGLE_THREAD_FORM });
    expect(state.ui.formVisible).to.be.true;
  });

  it('should toggle the reply details', () => {
    let state = messagesReducer({
      ui: { replyDetailsCollapsed: false }
    }, {
      type: TOGGLE_REPLY_DETAILS
    });
    expect(state.ui.replyDetailsCollapsed).to.be.true;
    state = messagesReducer(state, { type: TOGGLE_REPLY_DETAILS });
    expect(state.ui.replyDetailsCollapsed).to.be.false;
    state = messagesReducer(state, { type: TOGGLE_REPLY_DETAILS });
    expect(state.ui.replyDetailsCollapsed).to.be.true;
  });

  it('should toggle the move button', () => {
    let state = messagesReducer({
      ui: { moveToOpened: false }
    }, {
      type: TOGGLE_THREAD_MOVE_TO
    });
    expect(state.ui.moveToOpened).to.be.true;
    state = messagesReducer(state, { type: TOGGLE_THREAD_MOVE_TO });
    expect(state.ui.moveToOpened).to.be.false;
    state = messagesReducer(state, { type: TOGGLE_THREAD_MOVE_TO });
    expect(state.ui.moveToOpened).to.be.true;
  });

  it('should update the draft', () => {
    let state = messagesReducer({
      data: { draft: {} }
    }, {
      type: UPDATE_DRAFT,
      key: 'body',
      field: makeField('testing', true)
    });
    expect(state.data.draft.body).to.eql(makeField('testing', true));

    state = messagesReducer(state, {
      type: UPDATE_DRAFT,
      key: 'category',
      field: makeField('EDUCATION', true)
    });
    expect(state.data.draft.category).to.eql(makeField('EDUCATION', true));

    state = messagesReducer(state, {
      type: UPDATE_DRAFT,
      key: 'recipient',
      field: makeField('Clinician 1', true)
    });
    expect(state.data.draft.recipient).to.eql(makeField('Clinician 1', true));

    state = messagesReducer(state, {
      type: UPDATE_DRAFT,
      key: 'subject',
      field: makeField('subject', true)
    });
    expect(state.data.draft.subject).to.eql(makeField('subject', true));
  });
});
