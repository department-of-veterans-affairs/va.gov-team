import _ from 'lodash/fp';
import { expect } from 'chai';

import {
  SET_SAVE_FORM_STATUS,
  SET_AUTO_SAVE_FORM_STATUS,
  SET_FETCH_FORM_STATUS,
  SET_IN_PROGRESS_FORM,
  SET_FETCH_FORM_PENDING,
  SET_PREFILL_UNFILLED,
  SET_START_OVER,
  SAVE_STATUSES,
  LOAD_STATUSES,
  PREFILL_STATUSES
} from '../../../../src/applications/common/schemaform/save-in-progress/actions';

import { createSaveInProgressFormReducer } from '../../../../src/applications/common/schemaform/save-in-progress/reducers';

describe('schemaform createSaveInProgressInitialState', () => {
  it('creates a reducer with initial state for each page', () => {
    const formConfig = {
      chapters: {
        test: {
          pages: {
            page1: {
              initialData: { field: 'test' },
              schema: {
                type: 'object',
                properties: {
                  field: { type: 'string' }
                }
              }
            },
            page2: {
              initialData: {},
              schema: {
                type: 'object',
                properties: {}
              }
            }
          }
        }
      }
    };
    const reducer = createSaveInProgressFormReducer(formConfig, { data: {} });
    const state = reducer(undefined, {});

    expect(state.isStartingOver).to.be.false;
    expect(state.prefillStatus).to.equal(PREFILL_STATUSES.notAttempted);
    expect(state.initialData).to.equal(state.data);
  });

  describe('reducer', () => {
    const formConfig = {
      chapters: {
        test: {
          pages: {
            page1: {
              initialData: { field: 'test' },
              schema: {
                type: 'object',
                properties: {
                  field: { type: 'string' }
                }
              }
            },
          }
        }
      }
    };
    const reducer = createSaveInProgressFormReducer(formConfig, { data: {} });

    const data = {
      formData: {
        field: 'foo',
      },
      metadata: {
        version: 0,
        returnUrl: 'foo/bar'
      }
    };

    it('should set save form status', () => {
      const state = reducer({
        savedStatus: SAVE_STATUSES.notAttempted
      }, {
        type: SET_SAVE_FORM_STATUS,
        status: SAVE_STATUSES.success
      });

      expect(state.savedStatus).to.equal(SAVE_STATUSES.success);
      expect(state.startingOver).to.be.false;
      expect(state.prefillStatus).to.equal(PREFILL_STATUSES.notAttempted);
    });

    it('should set auto save form status', () => {
      const state = reducer({
        autoSavedStatus: SAVE_STATUSES.notAttempted
      }, {
        type: SET_AUTO_SAVE_FORM_STATUS,
        status: SAVE_STATUSES.success
      });

      expect(state.autoSavedStatus).to.equal(SAVE_STATUSES.success);
    });
    it('should reset auto saved form status on error', () => {
      const state = reducer({
        autoSavedStatus: SAVE_STATUSES.failure,
        savedStatus: SAVE_STATUSES.notAttempted
      }, {
        type: SET_SAVE_FORM_STATUS,
        status: SAVE_STATUSES.noAuth
      });

      expect(state.savedStatus).to.equal(SAVE_STATUSES.noAuth);
      expect(state.autoSavedStatus).to.equal(SAVE_STATUSES.notAttempted);
    });
    it('should set fetch form status', () => {
      const state = reducer({
        loadedStatus: LOAD_STATUSES.notAttempted
      }, {
        type: SET_FETCH_FORM_STATUS,
        status: LOAD_STATUSES.pending
      });

      expect(state.loadedStatus).to.equal(LOAD_STATUSES.pending);
    });
    it('should set in progress form data', () => {
      const state = reducer({
        loadedStatus: LOAD_STATUSES.notAttempted,
        data: {},
        pages: {}
      }, {
        type: SET_IN_PROGRESS_FORM,
        data,
        pages: {}
      });

      expect(state.loadedStatus).to.equal(LOAD_STATUSES.success);
      expect(state.loadedData).to.equal(data);
      expect(state.data).to.equal(data.formData);
    });
    it('should merge prefill data with current form', () => {
      const state = reducer({
        data: { existingProp: true },
        prefillStatus: PREFILL_STATUSES.pending,
        pages: {}
      }, {
        type: SET_IN_PROGRESS_FORM,
        data,
        pages: {}
      });

      expect(state.data.existingProp).to.be.true;
      expect(state.data.field).to.equal('foo');
      expect(state.prefillStatus).to.equal(PREFILL_STATUSES.success);
    });
    it('should not mark prefill successful when data is empty', () => {
      const state = reducer({
        data: {},
        prefillStatus: PREFILL_STATUSES.pending,
        pages: {}
      }, {
        type: SET_IN_PROGRESS_FORM,
        data: _.set('formData', {}, data),
        pages: {}
      });

      expect(state.prefillStatus).to.equal(PREFILL_STATUSES.unfilled);
    });
    it('should handle undefined formData', () => {
      const state = reducer({
        data: {},
        prefillStatus: PREFILL_STATUSES.pending,
        pages: {}
      }, {
        type: SET_IN_PROGRESS_FORM,
        data: { formData: undefined },
        pages: {}
      });

      expect(state.prefillStatus).to.equal(PREFILL_STATUSES.unfilled);
    });
    it('should set fetch form pending', () => {
      const state = reducer({
      }, {
        type: SET_FETCH_FORM_PENDING,
      });

      expect(state.loadedStatus).to.equal(LOAD_STATUSES.pending);
      expect(state.prefillStatus).to.be.undefined;
    });
    it('should set fetch form pending and prefill', () => {
      const state = reducer({
      }, {
        type: SET_FETCH_FORM_PENDING,
        prefill: true
      });

      expect(state.loadedStatus).to.equal(LOAD_STATUSES.pending);
      expect(state.prefillStatus).to.equal(PREFILL_STATUSES.pending);
    });
    it('should start over form', () => {
      const initialData = { field: true };
      const state = reducer({
        initialData,
        data: { field1: false }
      }, {
        type: SET_START_OVER,
      });

      expect(state.isStartingOver).to.be.true;
      expect(state.data).to.equal(initialData);
      expect(state.loadedStatus).to.equal(LOAD_STATUSES.pending);
    });
    it('should set prefill as unfilled', () => {
      const initialData = { field: true };
      const state = reducer({
        initialData
      }, {
        type: SET_PREFILL_UNFILLED,
      });

      expect(state.data).to.equal(initialData);
      expect(state.loadedStatus).to.equal(LOAD_STATUSES.notAttempted);
      expect(state.prefillStatus).to.equal(PREFILL_STATUSES.unfilled);
    });
  });
});
