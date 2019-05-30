import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { Folder } from '../../containers/Folder';

const props = {
  attributes: {
    folderId: 0,
    name: 'Inbox',
    unreadCount: 0,
    count: 3
  },
  filter: {},
  folders: new Map([
    ['inbox', {}],
    ['drafts', {}],
    ['sent', {}],
    ['deleted', {}],
    ['personal-folder', {}],
  ]),
  isAdvancedVisible: false,
  lastRequestedFolder: null,
  loading: {
    folder: false
  },
  messages: [
    { subject: 'foo', body: 'test1' },
    { subject: 'bar', body: 'test2' },
    { subject: 'baz', body: 'test3' },
    { subject: 'quux', body: 'test4' },
    { subject: 'untitled', body: 'test5' }
  ],
  moveToId: null,
  pagination: {
    currentPage: 1,
    perPage: 10,
    totalEntries: 5,
    totalPages: 1
  },
  params: { folderName: 'inbox' },
  redirect: null,
  searchParams: {},
  sort: {
    value: 'sentDate',
    order: 'DESC'
  },
  moveMessageToFolder: () => {},
  openMoveToNewFolderModal: () => {},
  toggleAdvancedSearch: () => {},
  setSearchParam: () => {},
  setDateRange: () => {},
  openAlert: () => {},
  dispatch: () => {},
  router: () => {}
};

describe('Folder', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<Folder {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should show a loading screen', () => {
    const tree = SkinDeep.shallowRender(
      <Folder {...props } loading={{ folder: true }}/>
    );
    expect(tree.subTree('LoadingIndicator')).to.not.be.false;
    expect(tree.subTree('MessageSearch')).to.be.false;
    expect(tree.subTree('MessageNav')).to.be.false;
    expect(tree.subTree('SortableTable')).to.be.false;
  });

  it('should show an error message without a reload', () => {
    const tree = SkinDeep.shallowRender(
      <Folder {...props } attributes={{}}/>
    );
    expect(tree.subTree('.msg-loading-error')).to.not.be.false;
    expect(tree.subTree('.msg-reload')).to.be.false;
    expect(tree.subTree('MessageSearch')).to.be.false;
    expect(tree.subTree('MessageNav')).to.be.false;
    expect(tree.subTree('SortableTable')).to.be.false;
  });

  it('should show an error message with a reload', () => {
    const tree = SkinDeep.shallowRender(
      <Folder
        {...props }
        attributes={{}}
        lastRequestedFolder={{ id: 0, query: {} }}/>
    );
    expect(tree.subTree('.msg-loading-error')).to.not.be.false;
    expect(tree.subTree('.msg-reload')).to.be.not.be.false;
    expect(tree.subTree('MessageSearch')).to.be.false;
    expect(tree.subTree('MessageNav')).to.be.false;
    expect(tree.subTree('SortableTable')).to.be.false;
  });

  it('should say that there are no messages in the folder', () => {
    const tree = SkinDeep.shallowRender(
      <Folder
        {...props }
        filter={undefined}
        messages={[]}
        pagination={{
          currentPage: 1,
          perPage: 10,
          totalPages: 1,
          totalEntries: 0
        }}/>
    );
    expect(tree.dive(['h3']).text()).to.equal('Inbox');
    expect(tree.subTree('.msg-nomessages')).to.not.be.false;
    expect(tree.subTree('MessageSearch')).to.be.false;
    expect(tree.subTree('MessageNav')).to.be.false;
    expect(tree.subTree('SortableTable')).to.be.false;
  });

  it('should say that no messages were found through search', () => {
    const tree = SkinDeep.shallowRender(
      <Folder
        {...props }
        filter={{ subject: { match: 'error' } }}
        messages={[]}
        pagination={{
          currentPage: 1,
          perPage: 10,
          totalPages: 1,
          totalEntries: 0
        }}/>
    );
    expect(tree.dive(['h3']).text()).to.equal('Inbox');
    expect(tree.subTree('.msg-nomessages')).to.not.be.false;
    expect(tree.subTree('MessageSearch')).to.not.be.false;
    expect(tree.subTree('MessageNav')).to.be.false;
    expect(tree.subTree('SortableTable')).to.be.false;
  });

  it('should show folder controls and messages', () => {
    const tree = SkinDeep.shallowRender(
      <Folder {...props }/>
    );
    expect(tree.dive(['h3']).text()).to.equal('Inbox');
    expect(tree.subTree('ComposeButton')).to.not.be.false;
    expect(tree.subTree('MessageSearch')).to.not.be.false;
    expect(tree.subTree('MessageNav')).to.not.be.false;
    expect(tree.subTree('.msg-folder-sort-select')).to.not.be.false;
    expect(tree.subTree('SortableTable')).to.not.be.false;
  });

  it('should show messages found through search', () => {
    const tree = SkinDeep.shallowRender(
      <Folder
        {...props }
        filter={{ subject: { match: 'ba' } }}
        messages={[props.messages[1], props.messages[2]]}
        pagination={{
          currentPage: 1,
          perPage: 10,
          totalPages: 1,
          totalEntries: 2
        }}/>
    );
    expect(tree.dive(['h3']).text()).to.equal('Inbox');
    expect(tree.subTree('ComposeButton')).to.not.be.false;
    expect(tree.subTree('MessageSearch')).to.not.be.false;
    expect(tree.subTree('MessageNav')).to.not.be.false;
    expect(tree.subTree('.msg-folder-sort-select')).to.not.be.false;
    expect(tree.subTree('SortableTable')).to.not.be.false;
  });
});
