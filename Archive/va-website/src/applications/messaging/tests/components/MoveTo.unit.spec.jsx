import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import MoveTo from '../../components/MoveTo.jsx';

const props = {
  currentFolder: {
    count: 3,
    folderId: 0,
    name: 'Inbox',
    systemFolder: true,
    unreadCount: 0
  },
  folders: [
    {
      count: 3,
      folderId: 0,
      name: 'Inbox',
      systemFolder: true,
      unreadCount: 0
    },
    {
      count: 3,
      folderId: -2,
      name: 'Another Folder',
      systemFolder: true,
      unreadCount: 3
    },
  ],
  isOpen: true,
  messageId: 11,
  onChooseFolder: () => {},
  onCreateFolder: () => {},
  onToggleMoveTo: () => {},
};

describe('<MoveTo>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(
      <MoveTo {...props}/>
    );

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(
      <MoveTo {...props}/>
    );
    expect(tree.props.className).to.equal('msg-move-to');
  });

  it('should open create folder modal correctly', () => {
    const onCreateFolder = sinon.spy();

    const moveTo = ReactTestUtils.renderIntoDocument(
      <MoveTo
        {...props }
        onCreateFolder={onCreateFolder}/>
    );

    moveTo.openCreateFolderModal();
    expect(onCreateFolder.calledWith(props.messageId)).to.be.true;
  });

  it('should handle choose folder correctly', () => {
    const onChooseFolder = sinon.spy();

    const moveTo = ReactTestUtils.renderIntoDocument(
      <MoveTo
        {...props }
        onChooseFolder={onChooseFolder}/>
    );
    const mockDomEvent = {
      currentTarget: {
        messagingMoveToFolder: {
          value: -2
        }
      }
    };

    moveTo.handleChooseFolder(mockDomEvent);
    expect(onChooseFolder.calledWith(props.messageId, props.folders[1])).to.be.true;
  });
});
