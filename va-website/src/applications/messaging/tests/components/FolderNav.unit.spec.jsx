import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import FolderNav from '../../components/FolderNav.jsx';

const props = {
  currentFolderId: 0,
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
      name: 'Drafts',
      systemFolder: true,
      unreadCount: 3
    },
    {
      count: 3,
      folderId: 1,
      name: 'Folder 1',
      unreadCount: 3
    },
    {
      count: 3,
      folderId: 2,
      name: 'Folder 2',
      unreadCount: 3
    },
    {
      count: 3,
      folderId: 3,
      name: 'Folder 3',
      unreadCount: 3
    },
    {
      count: 3,
      folderId: 4,
      name: 'Folder 4',
      unreadCount: 3
    },
  ],
  isExpanded: false,
  onCreateNewFolder: () => {},
  onToggleFolders: () => {},
  toggleFolderNav: () => {},
  router: () => {}
};

describe('<FolderNav>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(
      <FolderNav {...props}/>
    );

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(
      <FolderNav {...props}/>
    );
    expect(tree.props.className).to.equal('messaging-folder-nav usa-sidenav-list');
  });

  it('should render correct actions', () => {
    const tree = SkinDeep.shallowRender(
      <FolderNav {...props}/>
    );
    expect(tree.subTree('ButtonManageFolders')).to.be.ok;
    expect(tree.subTree('ButtonCreateFolder')).to.be.ok;
  });

  it('should have the correct number of folders when collapsed', () => {
    const tree = SkinDeep.shallowRender(
      <FolderNav {...props}/>
    );
    expect(tree.everySubTree('.messaging-folder-nav-link').length).to.equal(4);
  });

  it('should have the correct number of folders when expanded', () => {
    const tree = SkinDeep.shallowRender(
      <FolderNav {...props} isExpanded/>
    );
    expect(tree.everySubTree('.messaging-folder-nav-link').length).to.equal(6);
  });

  it('should render the custom folders section when expected', () => {
    const tree = SkinDeep.shallowRender(
      <FolderNav {...props}/>
    );
    expect(tree.subTree('.messaging-my-folders')).to.be.ok;
    expect(tree.subTree('.messaging-folder-subnav')).to.be.false;
  });

  it('should render the list of custom folders when expanded', () => {
    const tree = SkinDeep.shallowRender(
      <FolderNav {...props} isExpanded/>
    );
    expect(tree.subTree('.messaging-folder-subnav')).to.be.ok;
  });
});
