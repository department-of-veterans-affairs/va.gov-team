import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { makeField } from '../../../../platform/forms/fields';
import { Main } from '../../containers/Main';

const props = {
  attachmentsModal: {
    message: {
      text: null,
      title: null
    },
    visible: false
  },
  createFolderModal: {
    newFolderName: makeField(''),
    visible: false
  },
  folders: [
  ],
  nav: {
    foldersExpanded: false,
    visible: false
  },
  persistFolder: 0,
  loading: {
    creatingFolder: false,
    deletingFolder: false,
    deletingMessage: false,
    movingMessage: false,
    savingDraft: false,
    sendingMessage: false
  },

  // No-op function to override dispatch
  dispatch: () => {}
};

describe('Main', () => {
  const tree = SkinDeep.shallowRender(<Main {...props}/>);

  it('should render', () => {
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });
});
