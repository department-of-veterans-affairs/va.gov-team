import { expect } from 'chai';
import sinon from 'sinon';

import {
  ADD_FILE,
  addFile,
  CANCEL_UPLOAD,
  cancelUpload,
  CHANGE_CLAIMS_PAGE,
  changePage,
  CLEAR_NOTIFICATION,
  clearNotification,
  FETCH_APPEALS,
  FETCH_CLAIMS,
  GET_CLAIM_DETAIL,
  getAppeals,
  getClaimDetail,
  getClaims,
  REMOVE_FILE,
  removeFile,
  RESET_UPLOADS,
  resetUploads,
  SET_APPEALS_UNAVAILABLE,
  SET_APPEALS,
  SET_CLAIM_DETAIL,
  SET_CLAIMS_UNAVAILABLE,
  SET_CLAIMS,
  SET_DECISION_REQUEST_ERROR,
  SET_DECISION_REQUESTED,
  SET_FIELDS_DIRTY,
  SET_LAST_PAGE,
  SET_NOTIFICATION,
  setFieldsDirty,
  setLastPage,
  setNotification,
  setUnavailable,
  SHOW_CONSOLIDATED_MODAL,
  SHOW_MAIL_OR_FAX,
  showConsolidatedMessage,
  showMailOrFaxModal,
  SUBMIT_DECISION_REQUEST,
  submitRequest,
  UPDATE_FIELD,
  updateField,
} from '../actions';

let fetchMock;
let oldFetch;

const mockFetch = () => {
  global.sessionStorage = { userToken: '1234' };
  oldFetch = global.fetch;
  fetchMock = sinon.stub();
  global.fetch = fetchMock;
};

const unMockFetch = () => {
  global.fetch = oldFetch;
};

describe('Actions', () => {
  describe('setNotification', () => {
    it('should return the correct action object', () => {
      const action = setNotification('Testing');

      expect(action).to.eql({
        type: SET_NOTIFICATION,
        message: 'Testing'
      });
    });
  });
  describe('changePage', () => {
    it('should return the correct action object', () => {
      const action = changePage('Testing');

      expect(action).to.eql({
        type: CHANGE_CLAIMS_PAGE,
        page: 'Testing'
      });
    });
  });
  describe('setUnavailable', () => {
    it('should return the correct action object', () => {
      const action = setUnavailable();

      expect(action).to.eql({
        type: SET_CLAIMS_UNAVAILABLE,
      });
    });
  });
  describe('resetUploads', () => {
    it('should return the correct action object', () => {
      const action = resetUploads();

      expect(action).to.eql({
        type: RESET_UPLOADS,
      });
    });
  });
  describe('addFile', () => {
    it('should return the correct action object', () => {
      const action = addFile('Testing');

      expect(action).to.eql({
        type: ADD_FILE,
        files: 'Testing'
      });
    });
  });
  describe('removeFile', () => {
    it('should return the correct action object', () => {
      const action = removeFile(1);

      expect(action).to.eql({
        type: REMOVE_FILE,
        index: 1
      });
    });
  });
  describe('clearNotification', () => {
    it('should return the correct action object', () => {
      const action = clearNotification();

      expect(action).to.eql({
        type: CLEAR_NOTIFICATION
      });
    });
  });
  describe('updateField', () => {
    it('should return the correct action object', () => {
      const action = updateField('path', 'field');

      expect(action).to.eql({
        type: UPDATE_FIELD,
        path: 'path',
        field: 'field'
      });
    });
  });
  describe('showMailOrFaxModal', () => {
    it('should return the correct action object', () => {
      const action = showMailOrFaxModal(true);

      expect(action).to.eql({
        type: SHOW_MAIL_OR_FAX,
        visible: true
      });
    });
  });
  describe('setFieldsDirty', () => {
    it('should return the correct action object', () => {
      const action = setFieldsDirty();

      expect(action).to.eql({
        type: SET_FIELDS_DIRTY
      });
    });
  });
  describe('showConsolidatedMessage', () => {
    it('should return the correct action object', () => {
      const action = showConsolidatedMessage(true);

      expect(action).to.eql({
        type: SHOW_CONSOLIDATED_MODAL,
        visible: true
      });
    });
  });
  describe('setLastPage', () => {
    it('should return the correct action object', () => {
      const action = setLastPage(2);

      expect(action).to.eql({
        type: SET_LAST_PAGE,
        page: 2
      });
    });
  });
  describe('cancelUpload', () => {
    it('should call cancel on uploader', () => {
      const oldWindow = global.window;
      global.window = { dataLayer: [] };
      const thunk = cancelUpload();
      const uploaderSpy = sinon.spy();
      const dispatchSpy = sinon.spy();
      const getState = () => {
        return {
          disability: {
            status: {
              uploads: {
                uploader: {
                  cancelAll: uploaderSpy
                }
              }
            }
          }
        };
      };

      thunk(dispatchSpy, getState);

      expect(uploaderSpy.called).to.be.true;
      expect(dispatchSpy.firstCall.args[0].type).to.equal(CANCEL_UPLOAD);
      global.window = oldWindow;
    });
  });
  describe('getAppeals', () => {
    beforeEach(mockFetch);
    it('should fetch claims', (done) => {
      const appeals = [];
      fetchMock.returns({
        'catch': () => ({ then: (fn) => fn({ ok: true, json: () => Promise.resolve(appeals) }) }),
      });
      const thunk = getAppeals();
      const dispatchSpy = sinon.spy();
      const dispatch = (action) => {
        dispatchSpy(action);
        if (dispatchSpy.callCount === 2) {
          expect(dispatchSpy.firstCall.args[0].type).to.eql(FETCH_APPEALS);
          expect(dispatchSpy.secondCall.args[0].type).to.eql(SET_APPEALS);
          done();
        }
      };

      thunk(dispatch);
    });
    it('should fail on error', (done) => {
      const appeals = [];
      fetchMock.returns({
        'catch': () => ({ then: (fn) => fn({ ok: false, status: 500, json: () => Promise.resolve(appeals) }) }),
      });
      const thunk = getAppeals();
      const dispatchSpy = sinon.spy();
      const dispatch = (action) => {
        dispatchSpy(action);
        if (dispatchSpy.callCount === 2) {
          expect(dispatchSpy.firstCall.args[0].type).to.eql(FETCH_APPEALS);
          expect(dispatchSpy.secondCall.args[0].type).to.eql(SET_APPEALS_UNAVAILABLE);
          done();
        }
      };

      thunk(dispatch);
    });
    afterEach(unMockFetch);
  });
  describe('getClaims', () => {
    beforeEach(mockFetch);
    it('should fetch claims', (done) => {
      const claims = [];
      fetchMock.returns({
        'catch': () => ({ then: (fn) => fn({ ok: true, json: () => Promise.resolve(claims) }) }),
      });
      const thunk = getClaims();
      const dispatchSpy = sinon.spy();
      const dispatch = (action) => {
        dispatchSpy(action);
        if (dispatchSpy.callCount === 2) {
          expect(dispatchSpy.firstCall.args[0].type).to.eql(FETCH_CLAIMS);
          expect(dispatchSpy.secondCall.args[0].type).to.eql(SET_CLAIMS);
          done();
        }
      };

      thunk(dispatch);
    });
    it('should fail on error', (done) => {
      const claims = [];
      fetchMock.returns({
        'catch': () => ({ then: (fn) => fn({ ok: false, status: 500, json: () => Promise.resolve(claims) }) }),
      });
      const thunk = getClaims();
      const dispatchSpy = sinon.spy();
      const dispatch = (action) => {
        dispatchSpy(action);
        if (dispatchSpy.callCount === 2) {
          expect(dispatchSpy.firstCall.args[0].type).to.eql(FETCH_CLAIMS);
          expect(dispatchSpy.secondCall.args[0].type).to.eql(SET_CLAIMS_UNAVAILABLE);
          done();
        }
      };

      thunk(dispatch);
    });
    afterEach(unMockFetch);
  });
  describe('getClaimDetail', () => {
    beforeEach(mockFetch);
    it('should fetch claim', (done) => {
      const claim = { data: {}, meta: {} };
      fetchMock.returns({
        'catch': () => ({ then: (fn) => fn({ ok: true, json: () => Promise.resolve(claim) }) }),
      });
      const thunk = getClaimDetail();
      const dispatchSpy = sinon.spy();
      const dispatch = (action) => {
        dispatchSpy(action);
        if (dispatchSpy.callCount === 2) {
          expect(dispatchSpy.firstCall.args[0]).to.eql({
            type: GET_CLAIM_DETAIL
          });
          expect(dispatchSpy.secondCall.args[0]).to.eql({
            type: SET_CLAIM_DETAIL,
            claim: claim.data,
            meta: claim.meta
          });
          done();
        }
      };

      thunk(dispatch);
    });
    it('should fail on 500 error', (done) => {
      const claim = { data: {}, meta: {} };
      fetchMock.returns({
        'catch': () => ({ then: (fn) => fn({ ok: false, status: 500, json: () => Promise.resolve(claim) }) }),
      });
      const thunk = getClaimDetail();
      const dispatchSpy = sinon.spy();
      const dispatch = (action) => {
        dispatchSpy(action);
        if (dispatchSpy.callCount === 2) {
          expect(dispatchSpy.firstCall.args[0]).to.eql({
            type: GET_CLAIM_DETAIL
          });
          expect(dispatchSpy.secondCall.args[0]).to.eql({
            type: SET_CLAIMS_UNAVAILABLE,
          });
          done();
        }
      };

      thunk(dispatch);
    });
    it('should redirect on 404 error', (done) => {
      const claim = { data: {}, meta: {} };
      fetchMock.returns({
        'catch': () => ({ then: (fn) => fn({ ok: false, status: 404, json: () => Promise.resolve(claim) }) }),
      });
      const dispatchSpy = sinon.spy();
      const routerSpy = (path) => {
        expect(dispatchSpy.firstCall.args[0]).to.eql({
          type: GET_CLAIM_DETAIL
        });
        expect(path).to.equal('your-claims');
        done();
      };
      const thunk = getClaimDetail(5, { replace: routerSpy });

      thunk(dispatchSpy);
    });
    afterEach(unMockFetch);
  });
  describe('submitRequest', () => {
    beforeEach(mockFetch);
    it('should submit request', (done) => {
      fetchMock.returns({
        'catch': () => ({ then: (fn) => fn({ ok: true, json: () => Promise.resolve() }) }),
      });
      const thunk = submitRequest(5);
      const dispatchSpy = sinon.spy();
      const dispatch = (action) => {
        dispatchSpy(action);
        if (dispatchSpy.callCount === 3) {
          expect(fetchMock.firstCall.args[1].method).to.equal('POST');
          expect(fetchMock.firstCall.args[0].endsWith('5/request_decision')).to.be.true;
          expect(dispatchSpy.firstCall.args[0]).to.eql({
            type: SUBMIT_DECISION_REQUEST
          });
          expect(dispatchSpy.secondCall.args[0]).to.eql({
            type: SET_DECISION_REQUESTED
          });
          expect(dispatchSpy.thirdCall.args[0].type).to.eql(SET_NOTIFICATION);
          done();
        }
      };

      thunk(dispatch);
    });
    it('should fail on error', (done) => {
      fetchMock.returns({
        'catch': () => ({ then: (fn) => fn({ ok: false, status: 500, json: () => Promise.resolve() }) }),
      });
      const thunk = submitRequest(5);
      const dispatchSpy = sinon.spy();
      const dispatch = (action) => {
        dispatchSpy(action);
        if (dispatchSpy.callCount === 2) {
          expect(dispatchSpy.firstCall.args[0]).to.eql({
            type: SUBMIT_DECISION_REQUEST
          });
          expect(dispatchSpy.secondCall.args[0].type).to.eql(SET_DECISION_REQUEST_ERROR);
          done();
        }
      };

      thunk(dispatch);
    });
    afterEach(unMockFetch);
  });
});
