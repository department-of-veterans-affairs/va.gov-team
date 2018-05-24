import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import ThreadHeader from '../../components/ThreadHeader';

const props = {
  currentFolder: { folderId: 0, name: 'Inbox', count: 3, unreadCount: 0 },
  currentMessageNumber: 1,
  folderMessageCount: 1,
  folders: [{ folderId: 0, name: 'Inbox' }],
  isNewMessage: false,
  message: { messageId: 123, subject: 'Subject' },
  messagesCollapsed: true,
  moveToIsOpen: false,
  threadMessageCount: 2,
  onChooseFolder: () => {},
  onCreateFolder: () => {},
  onDeleteMessage: () => {},
  onToggleMoveTo: () => {}
};

describe('ThreadHeader', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<ThreadHeader {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.exist;
  });

  it('should show a message nav', () => {
    const tree = SkinDeep.shallowRender(<ThreadHeader {...props }/>);
    expect(tree.subTree('MessageNav')).to.be.ok;
  });

  it('should hide message nav in case of folder message count errors', () => {
    const tree = SkinDeep.shallowRender(
      <ThreadHeader {...props } folderMessageCount={0}/>
    );
    expect(tree.subTree('MessageNav')).to.be.false;
  });

  it('should show a move button', () => {
    const tree = SkinDeep.shallowRender(<ThreadHeader {...props }/>);
    expect(tree.subTree('MoveTo')).to.be.ok;
  });

  it('should show a button to expand or collapse a thread with multiple messages', () => {
    const tree = SkinDeep.shallowRender(<ThreadHeader {...props }/>);
    expect(tree.subTree('ToggleThread')).to.be.ok;
  });

  it('should not show a button to expand or collapse a thread with only one message', () => {
    const tree = SkinDeep.shallowRender(<ThreadHeader {...props } threadMessageCount={1}/>);
    expect(tree.subTree('ToggleThread')).to.be.false;
  });

  it('should show a delete button', () => {
    const tree = SkinDeep.shallowRender(<ThreadHeader {...props }/>);
    expect(tree.subTree('ButtonDelete')).to.be.ok;
  });

  it('should not show delete or move buttons for drafts or sent messages', () => {
    let tree = SkinDeep.shallowRender(
      <ThreadHeader
        {...props }
        currentFolder={{ name: 'Drafts' }}/>
    );

    expect(tree.subTree('ButtonDelete')).to.be.false;
    expect(tree.subTree('MoveTo')).to.be.false;

    tree = SkinDeep.shallowRender(
      <ThreadHeader
        {...props }
        currentFolder={{ name: 'Sent' }}/>
    );

    expect(tree.subTree('ButtonDelete')).to.be.false;
    expect(tree.subTree('MoveTo')).to.be.false;
  });

  it('should show the subject line in the title', () => {
    const tree = SkinDeep.shallowRender(<ThreadHeader {...props }/>);
    expect(tree.dive(['h2']).text()).to.equal('Subject');
  });

  it('should show only on mobile the subject line for a draft of a new message', () => {
    const tree = SkinDeep.shallowRender(
      <ThreadHeader
        {...props }
        isNewMessage/>
    );
    expect(tree.subTree('.messaging-thread-title', '.show-for-small-only')).to.be.ok;
  });
});
