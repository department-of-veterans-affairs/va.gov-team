import _ from 'lodash/fp';

import {
  SET_SAVE_FORM_STATUS,
  SET_AUTO_SAVE_FORM_STATUS,
  SET_FETCH_FORM_STATUS,
  SET_FETCH_FORM_PENDING,
  SET_IN_PROGRESS_FORM,
  SET_START_OVER,
  SET_PREFILL_UNFILLED,
  SAVE_STATUSES,
  LOAD_STATUSES,
  PREFILL_STATUSES,
  saveErrors
} from '../save-in-progress/actions';

import createSchemaFormReducer from '../state';
import { createInitialState, recalculateSchemaAndData } from '../state/helpers';
import reducers from '../state/reducers';

export const saveInProgressReducers = {
  [SET_SAVE_FORM_STATUS]: (state, action) => {
    const newState = _.set('savedStatus', action.status, state);
    newState.startingOver = false;
    newState.prefillStatus = PREFILL_STATUSES.notAttempted;

    if (action.status === SAVE_STATUSES.success) {
      newState.lastSavedDate = action.lastSavedDate;
      newState.expirationDate = action.expirationDate;
    }

    // We don't want to show two errors at once, so reset the status
    // of the other save method when there's an error
    if (saveErrors.has(action.status)) {
      newState.autoSavedStatus = SAVE_STATUSES.notAttempted;
    }

    return newState;
  },
  [SET_AUTO_SAVE_FORM_STATUS]: (state, action) => {
    const newState = _.set('autoSavedStatus', action.status, state);

    if (action.status === SAVE_STATUSES.success) {
      newState.lastSavedDate = action.lastSavedDate;
      newState.expirationDate = action.expirationDate;
    }

    if (saveErrors.has(action.status)) {
      newState.savedStatus = SAVE_STATUSES.notAttempted;
    }

    return newState;
  },
  [SET_FETCH_FORM_STATUS]: (state, action) => {
    return _.set('loadedStatus', action.status, state);
  },
  [SET_FETCH_FORM_PENDING]: (state, action) => {
    const newState = _.set('loadedStatus', LOAD_STATUSES.pending, state);

    if (action.prefill) {
      newState.prefillStatus = PREFILL_STATUSES.pending;
    }

    return newState;
  },
  [SET_IN_PROGRESS_FORM]: (state, action) => {
    let newState;

    // if we’re prefilling, we want to use whatever initial data the form has
    if (state.prefillStatus === PREFILL_STATUSES.pending) {
      const formData = _.merge(state.data, action.data.formData);
      const loadedData = _.set('formData', formData, action.data);
      newState = _.set('loadedData', loadedData, state);

      // We get an empty object back when we attempt to prefill and there's
      // no information
      if (_.keys(action.data.formData).length > 0) {
        newState.prefillStatus = PREFILL_STATUSES.success;
      } else {
        newState.prefillStatus = PREFILL_STATUSES.unfilled;
      }
    } else {
      newState = _.set('loadedData', action.data, state);
      newState.prefillStatus = PREFILL_STATUSES.notAttempted;
    }

    newState.loadedStatus = LOAD_STATUSES.success;
    newState.data = newState.loadedData.formData;
    newState.pages = action.pages;

    return recalculateSchemaAndData(newState);
  },
  [SET_START_OVER]: (state) => {
    return _.assign(state, {
      isStartingOver: true,
      data: state.initialData,
      loadedStatus: LOAD_STATUSES.pending
    });
  },
  [SET_PREFILL_UNFILLED]: (state) => {
    return _.assign(state, {
      prefillStatus: PREFILL_STATUSES.unfilled,
      data: state.initialData,
      loadedStatus: LOAD_STATUSES.notAttempted
    });
  }
};

export function createSaveInProgressInitialState(formConfig, initialState) {
  return Object.assign({}, initialState, {
    initialData: initialState.data,
    savedStatus: SAVE_STATUSES.notAttempted,
    autoSavedStatus: SAVE_STATUSES.notAttempted,
    loadedStatus: LOAD_STATUSES.notAttempted,
    version: formConfig.version,
    formId: formConfig.formId,
    lastSavedDate: null,
    expirationDate: null,
    disableSave: formConfig.disableSave,
    loadedData: {
      formData: {},
      metadata: {}
    },
    prefillStatus: PREFILL_STATUSES.notAttempted,
    isStartingOver: false,
    migrations: formConfig.migrations,
    prefillTransformer: formConfig.prefillTransformer,
    trackingPrefix: formConfig.trackingPrefix
  });
}

export function createSaveInProgressFormReducer(formConfig) {
  let formReducers = reducers;
  let initialState = createInitialState(formConfig);

  if (!formConfig.disableSave) {
    formReducers = Object.assign({}, formReducers, saveInProgressReducers);
    initialState = createSaveInProgressInitialState(formConfig, initialState);
  }

  return createSchemaFormReducer(formConfig, initialState, formReducers);
}
