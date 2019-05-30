import { expect } from 'chai';
import _ from 'lodash';

import foldersReducer from '../../reducers/folders';

import {
  CREATE_FOLDER_SUCCESS,
  DELETE_FOLDER_SUCCESS,
  FETCH_FOLDER_SUCCESS,
  FETCH_FOLDERS_SUCCESS,
  MOVE_MESSAGE_SUCCESS,
  SAVE_DRAFT_SUCCESS,
  TOGGLE_FOLDER_NAV,
  TOGGLE_MANAGED_FOLDERS
} from '../../utils/constants';

import { folders, messages } from '../messaging-helpers';

const initialState = {
  data: {
    currentItem: {
      attributes: {},
      filter: {},
      messages: [],
      pagination: {},
      persistFolder: 0,
      sort: {
        value: 'sentDate',
        order: 'DESC'
      }
    },
    items: new Map()
  },
  ui: {
    nav: {
      foldersExpanded: false,
      visible: false
    }
  }
};

const folderKey = (folderName) => _.kebabCase(folderName);

describe('folders reducer', () => {
  it('should create a folder', () => {
    const folder = folders.data[4].attributes;
    const newState = foldersReducer(initialState, {
      type: CREATE_FOLDER_SUCCESS,
      folder
    });
    expect(newState.data.items.size).to.equal(1);
    expect(Array.from(newState.data.items.values())).to.contain(folder);
  });

  it('should delete a folder', () => {
    const state = {
      data: {
        items: new Map([
          ['test-folder-123', { id: 123, name: 'test folder 123' }],
          ['test-folder-456', { id: 456, name: 'test folder 456' }],
          ['test-folder-789', { id: 789, name: 'test folder 789' }]
        ])
      }
    };

    const newState = foldersReducer(state, {
      type: DELETE_FOLDER_SUCCESS,
      folder: state.data.items.get('test-folder-456')
    });

    expect(newState.data.items.size).to.equal(2);
    expect(Array.from(newState.data.items.values()))
      .to.contain(state.data.items.get('test-folder-123'));
    expect(Array.from(newState.data.items.values()))
      .to.contain(state.data.items.get('test-folder-789'));
  });

  it('should set a folder fetched from the server', () => {
    const folder = { data: folders.data[0] };
    const newState = foldersReducer(initialState, {
      type: FETCH_FOLDER_SUCCESS,
      folder,
      messages
    });

    expect(newState.data.currentItem.attributes)
      .to.eql(folder.data.attributes);
    expect(newState.data.currentItem.messages)
      .to.eql(messages.data.map(message => message.attributes));
    expect(newState.data.currentItem.pagination)
      .to.eql(messages.meta.pagination);
    expect(newState.data.items.get('inbox'))
      .to.eql(folder.data.attributes);
  });

  it('should set folders fetched from the server', () => {
    const newState = foldersReducer(initialState, {
      type: FETCH_FOLDERS_SUCCESS,
      data: folders
    });

    expect(Array.from(newState.data.items.values()))
      .to.eql(folders.data.map(folder => folder.attributes));
  });

  it('should open and close the folder navigation', () => {
    let newState = foldersReducer(initialState, { type: TOGGLE_FOLDER_NAV });
    expect(newState.ui.nav.visible).to.be.true;
    newState = foldersReducer(newState, { type: TOGGLE_FOLDER_NAV });
    expect(newState.ui.nav.visible).to.be.false;
  });

  it('should expand and collapse managed folders', () => {
    let newState = foldersReducer(initialState, { type: TOGGLE_MANAGED_FOLDERS });
    expect(newState.ui.nav.foldersExpanded).to.be.true;
    newState = foldersReducer(newState, { type: TOGGLE_MANAGED_FOLDERS });
    expect(newState.ui.nav.foldersExpanded).to.be.false;
  });

  it('should increment the count of Drafts after saving a new draft', () => {
    const newState = foldersReducer({
      data: { items: new Map([['drafts', { count: 1 }]]) }
    }, {
      type: SAVE_DRAFT_SUCCESS,
      message: { body: 'testing 123' },
      isSavedDraft: false
    });
    expect(newState.data.items.get('drafts').count).to.equal(2);
  });

  it('should not increment the count of Drafts after re-saving a draft', () => {
    const newState = foldersReducer({
      data: { items: new Map([['drafts', { count: 1 }]]) }
    }, {
      type: SAVE_DRAFT_SUCCESS,
      message: { body: 'testing 123' },
      isSavedDraft: true
    });
    expect(newState.data.items.get('drafts').count).to.equal(1);
  });

  it('should update folder counts after moving a message', () => {
    const newState = foldersReducer({
      data: {
        currentItem: { attributes: folders.data[4].attributes },
        items: new Map(folders.data.map(folder => {
          return [folderKey(folder.attributes.name), folder.attributes];
        }))
      }
    }, {
      type: MOVE_MESSAGE_SUCCESS,
      message: { body: 'testing 123' },
      folder: folders.data[5].attributes
    });

    expect(newState.data.currentItem.attributes.count).to.equal(0);

    expect(newState.data.items.get(
      folderKey(folders.data[4].attributes.name)
    ).count).to.equal(0);

    expect(newState.data.items.get(
      folderKey(folders.data[5].attributes.name)
    ).count).to.equal(3);
  });
});
