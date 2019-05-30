import _ from 'lodash/fp';
import {
  RESET_UPLOADS,
  ADD_FILE,
  REMOVE_FILE,
  SET_UPLOADING,
  SET_PROGRESS,
  DONE_UPLOADING,
  SET_UPLOAD_ERROR,
  UPDATE_FIELD,
  SHOW_MAIL_OR_FAX,
  CANCEL_UPLOAD,
  SET_FIELDS_DIRTY,
  SET_UPLOADER
} from '../actions/index.jsx';

import { makeField, dirtyAllFields } from '../../../platform/forms/fields';

const initialState = {
  files: [],
  progress: 0,
  uploading: false,
  uploadComplete: false,
  uploadError: false,
  uploadField: makeField(''),
  showMailOrFax: false,
  uploader: null
};

export default function claimDetailReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_UPLOADS: {
      return initialState;
    }
    case ADD_FILE: {
      const files = Array.prototype.map.call(action.files, (file) => {
        return {
          file,
          docType: makeField('')
        };
      });

      return _.set('files', state.files.concat(files), state);
    }
    case REMOVE_FILE: {
      return _.set('files', state.files.filter((file, index) => index !== action.index), state);
    }
    case SET_UPLOADING: {
      return _.assign(state, {
        uploading: action.uploading,
        uploadError: false,
        uploadComplete: false,
        uploader: action.uploader
      });
    }
    case SET_UPLOADER: {
      return _.assign(state, {
        uploader: action.uploader
      });
    }
    case SET_PROGRESS: {
      return _.set('progress', action.progress, state);
    }
    case DONE_UPLOADING: {
      return _.assign(state, {
        uploading: false,
        uploadComplete: true,
        uploader: null,
        files: []
      });
    }
    case SET_UPLOAD_ERROR: {
      return _.assign(state, {
        uploading: false,
        uploadError: true,
        uploader: null
      });
    }
    case UPDATE_FIELD: {
      return _.set(action.path, action.field, state);
    }
    case SHOW_MAIL_OR_FAX: {
      return _.set('showMailOrFax', action.visible, state);
    }
    case CANCEL_UPLOAD: {
      return _.assign(state, {
        uploading: false,
        uploader: null
      });
    }
    case SET_FIELDS_DIRTY: {
      return dirtyAllFields(state);
    }
    default:
      return state;
  }
}

