import _ from 'lodash';
import set from 'lodash/fp/set';

import { folderUrl } from '../utils/helpers';

import {
  CREATE_FOLDER_SUCCESS,
  DELETE_COMPOSE_MESSAGE,
  DELETE_FOLDER_SUCCESS,
  DELETE_MESSAGE_SUCCESS,
  FETCH_FOLDER_SUCCESS,
  FETCH_FOLDERS_SUCCESS,
  LOADING_FOLDER,
  MOVE_MESSAGE_SUCCESS,
  SAVE_DRAFT_SUCCESS,
  SEND_MESSAGE_SUCCESS,
  TOGGLE_FOLDER_MOVE_TO,
  TOGGLE_FOLDER_NAV,
  TOGGLE_MANAGED_FOLDERS,
  UPDATE_ROUTE
} from '../utils/constants';

const initialState = {
  data: {
    currentItem: {
      attributes: {},
      filter: {},
      messages: [],
      pagination: {},
      sort: {
        value: 'sentDate',
        order: 'DESC'
      }
    },
    items: new Map()
  },
  ui: {
    lastRequestedFolder: null,
    moveToId: null,
    nav: {
      foldersExpanded: false,
      visible: false
    },
    redirect: null
  }
};

const folderKey = (folderName) => _.kebabCase(folderName);

const setRedirect = (state, allowBack = false) => {
  // Set the redirect to the most recent folder.
  // If no recent folder can be determined, default to 'Inbox'.
  const folderName = _.get(state, 'data.currentItem.attributes.name', 'Inbox');
  const url = folderUrl(folderName);
  return set('ui.redirect', { url, allowBack }, state);
};

export default function folders(state = initialState, action) {
  switch (action.type) {
  // TODO: Handle the response in an appropriate way
    case CREATE_FOLDER_SUCCESS: {
      const folder = action.folder;
      const newFolders = new Map(state.data.items);
      newFolders.set(folderKey(folder.name), folder);
      return set('data.items', newFolders, state);
    }

    case DELETE_FOLDER_SUCCESS: {
      const folder = action.folder;
      const newFolders = new Map(state.data.items);
      newFolders.delete(folderKey(folder.name));
      return set('data.items', newFolders, state);
    }

    case FETCH_FOLDER_SUCCESS: {
      const attributes = action.folder.data.attributes;
      const messages = action.messages.data.map(message => message.attributes);

      const meta = action.messages.meta;
      const filter = meta.filter;
      const pagination = meta.pagination;
      const sort = meta.sort;
      const sortValue = Object.keys(sort)[0];
      const sortOrder = sort[sortValue];

      // Update corresponding folder data in map.
      const newItems = new Map(state.data.items);
      newItems.set(folderKey(attributes.name), attributes);
      const newState = set('data.items', newItems, state);

      return set('data.currentItem', {
        attributes,
        filter,
        messages,
        pagination,
        sort: {
          value: sortValue,
          order: sortOrder
        },
      }, newState);
    }

    case FETCH_FOLDERS_SUCCESS: {
      const items = new Map();
      action.data.data.forEach((folder) => {
        const item = folder.attributes;
        items.set(folderKey(item.name), item);
      });

      return set('data.items', items, state);
    }

    case LOADING_FOLDER: {
      const newState =
        set('data.currentItem', initialState.data.currentItem, state);

      return set('ui', {
        ...initialState.ui,
        nav: {
          foldersExpanded: state.ui.nav.foldersExpanded,
          visible: false
        },
        lastRequestedFolder: action.request
      }, newState);
    }

    case TOGGLE_FOLDER_MOVE_TO: {
      const id = state.ui.moveToId === action.messageId
        ? null
        : action.messageId;

      return set('ui.moveToId', id, state);
    }

    case TOGGLE_FOLDER_NAV:
      return set('ui.nav.visible', !state.ui.nav.visible, state);

    case TOGGLE_MANAGED_FOLDERS:
      return set('ui.nav.foldersExpanded', !state.ui.nav.foldersExpanded, state);

    case MOVE_MESSAGE_SUCCESS: {
    // Update the counts on the affected folders after moving a message.
      const newItems = new Map(state.data.items);

      const fromFolder = state.data.currentItem.attributes;
      const fromFolderKey = folderKey(fromFolder.name);
      newItems.set(fromFolderKey, {
        ...fromFolder,
        count: fromFolder.count - 1
      });

      const toFolderKey = folderKey(action.folder.name);
      const toFolder = newItems.get(toFolderKey);
      newItems.set(toFolderKey, {
        ...toFolder,
        count: toFolder.count + 1
      });

      let newState = set('data.items', newItems, state);

      newState = set(
        'data.currentItem.attributes',
        newItems.get(fromFolderKey),
        newState
      );

      // Redirect after the move.
      return setRedirect(newState);
    }

    case SAVE_DRAFT_SUCCESS: {
      let newState = state;
      const { isSavedDraft } = action;

      // After saving a new draft, increment the count on Drafts.
      if (!isSavedDraft) {
        const newItems = new Map(state.data.items);
        const draftsKey = folderKey('Drafts');
        const draftsFolder = newItems.get(draftsKey);

        newItems.set(draftsKey, {
          ...draftsFolder,
          count: draftsFolder.count + 1
        });

        newState = set('data.items', newItems, newState);
      }

      return setRedirect(newState, isSavedDraft);
    }

    case DELETE_COMPOSE_MESSAGE:
    case DELETE_MESSAGE_SUCCESS:
    case SEND_MESSAGE_SUCCESS: {
      return setRedirect(state);
    }

    case UPDATE_ROUTE:
      return set('ui.redirect', null, state);

    default:
      return state;
  }
}
