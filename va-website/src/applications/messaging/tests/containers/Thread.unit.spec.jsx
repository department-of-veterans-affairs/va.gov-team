import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { makeField } from '../../../../platform/forms/fields';
import { composeMessage } from '../../config';
import { Thread } from '../../containers/Thread';

const props = {
  draft: {
    attachments: [],
    body: makeField(''),
    charsRemaining: composeMessage.maxChars.message
  },
  folders: [],
  folderMessages: [],
  isNewMessage: false,
  isSavedDraft: false,
  loading: {
    recipients: false,
    thread: false
  },
  message: null,
  messagesCollapsed: new Set(),
  modals: {
    createFolderModal: {
      visible: false
    },
    deleteConfirm: {
      visible: false
    },
    saveConfirmModal: {
      visible: false
    }
  },
  moveToOpened: false,
  persistFolder: 0,
  thread: [],

  // No-op function to override dispatch
  dispatch: () => {}
};

describe('Thread', () => {
  const tree = SkinDeep.shallowRender(<Thread {...props}/>);

  it('should render', () => {
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });
});
