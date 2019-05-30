import recordEvent from '../../../platform/monitoring/record-event';
import {
  apiRequest,
  createUrlWithQuery
} from '../utils/helpers';

import {
  CREATE_FOLDER_FAILURE,
  CREATE_FOLDER_SUCCESS,
  CREATING_FOLDER,
  DELETE_FOLDER_FAILURE,
  DELETE_FOLDER_SUCCESS,
  DELETING_FOLDER,
  FETCH_FOLDER_FAILURE,
  FETCH_FOLDER_SUCCESS,
  FETCH_FOLDERS_FAILURE,
  FETCH_FOLDERS_SUCCESS,
  LOADING_FOLDER,
  LOADING_FOLDERS,
  TOGGLE_FOLDER_MOVE_TO,
  TOGGLE_FOLDER_NAV,
  TOGGLE_MANAGED_FOLDERS
} from '../utils/constants';

const baseUrl = '/folders';

export function fetchFolders() {
  // Get the max number of folders.
  const query = {};
  const perPage = 'per_page';
  query[perPage] = 100;
  const url = createUrlWithQuery(baseUrl, query);

  return dispatch => {
    dispatch({ type: LOADING_FOLDERS });

    return apiRequest(
      url,
      null,
      data => dispatch({ type: FETCH_FOLDERS_SUCCESS, data }),
      (response) => dispatch({ type: FETCH_FOLDERS_FAILURE, errors: response.errors })
    );
  };
}

export function fetchFolder(id, query = {}) {
  return dispatch => {
    const errorHandler =
      () => dispatch({ type: FETCH_FOLDER_FAILURE });

    dispatch({
      type: LOADING_FOLDER,
      request: { id, query }
    });

    if (id !== null) {
      const folderUrl = `${baseUrl}/${id}`;
      const messagesUrl = createUrlWithQuery(`${folderUrl}/messages`, query);

      Promise.all([folderUrl, messagesUrl].map(
        url => apiRequest(url, null, response => response, errorHandler)
      ))
        .then(data => dispatch({
          type: FETCH_FOLDER_SUCCESS,
          folder: data[0],
          messages: data[1]
        }))
        .catch(errorHandler);
    } else {
      errorHandler();
    }
  };
}

// Slides the folder nav out on mobile.
export function toggleFolderNav() {
  return { type: TOGGLE_FOLDER_NAV };
}

// Expands the list of named folders.
export function toggleManagedFolders() {
  return { type: TOGGLE_MANAGED_FOLDERS };
}

export function createNewFolder(folderName) {
  const folderData = { folder: {} };
  folderData.folder.name = folderName;

  const settings = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(folderData)
  };

  recordEvent({
    event: 'sm-create-folder',
  });

  return dispatch => {
    dispatch({ type: CREATING_FOLDER });

    apiRequest(
      baseUrl,
      settings,
      data => dispatch({
        type: CREATE_FOLDER_SUCCESS,
        folder: data.data.attributes
      }),
      () => dispatch({ type: CREATE_FOLDER_FAILURE })
    );
  };
}

export function deleteFolder(folder) {
  const url = `${baseUrl}/${folder.folderId}`;
  return dispatch => {
    dispatch({ type: DELETING_FOLDER });

    apiRequest(
      url,
      { method: 'DELETE' },
      () => dispatch({ type: DELETE_FOLDER_SUCCESS, folder }),
      () => dispatch({ type: DELETE_FOLDER_FAILURE })
    );
  };
}

export function toggleFolderMoveTo(id) {
  return {
    type: TOGGLE_FOLDER_MOVE_TO,
    messageId: id
  };
}
