import { expect } from 'chai';

import reducer from '../../../profile/reducers';
import { UPDATE_LOGGEDIN_STATUS } from '../../../../user/authentication/actions';

import {
  CREATE_MHV_ACCOUNT_FAILURE,
  CREATE_MHV_ACCOUNT_SUCCESS,
  CREATING_MHV_ACCOUNT,
  FETCH_MHV_ACCOUNT_FAILURE,
  FETCH_MHV_ACCOUNT_SUCCESS,
  FETCHING_MHV_ACCOUNT,
  PROFILE_LOADING_FINISHED,
  REMOVING_SAVED_FORM_SUCCESS
} from '../../../profile/actions';

describe('Profile reducer', () => {
  it('should set loading to false when profile is done loading', () => {
    const state = reducer({}, { type: PROFILE_LOADING_FINISHED });
    expect(state.loading).to.be.false;
  });

  it('should set loading to false when logged in status changes', () => {
    const state = reducer({}, { type: UPDATE_LOGGEDIN_STATUS });
    expect(state.loading).to.be.false;
  });

  it('should be loading when creating MHV account', () => {
    const state = reducer({ mhv: { account: {} } }, { type: CREATING_MHV_ACCOUNT });
    expect(state.mhv.account.loading).to.be.true;
  });

  it('should be loading when fetching MHV account', () => {
    const state = reducer({ mhv: { account: {} } }, { type: FETCHING_MHV_ACCOUNT });
    expect(state.mhv.account.loading).to.be.true;
  });

  it('should handle failed creation of MHV account', () => {
    const state = reducer({
      mhv: { account: {} }
    }, {
      type: CREATE_MHV_ACCOUNT_FAILURE,
      errors: [{ title: 'error', code: 500 }]
    });
    expect(state.mhv.account.errors).to.exist;
    expect(state.mhv.account.loading).to.be.false;
  });

  it('should handle failed fetch of MHV account', () => {
    const state = reducer({
      mhv: { account: {} }
    }, {
      type: FETCH_MHV_ACCOUNT_FAILURE,
      errors: [{ title: 'error', code: 500 }]
    });
    expect(state.mhv.account.errors).to.exist;
    expect(state.mhv.account.loading).to.be.false;
  });

  it('should start polling after MHV account creation if not yet upgraded', () => {
    const state = reducer({
      mhv: {
        account: {
          state: 'unknown'
        }
      }
    }, {
      type: CREATE_MHV_ACCOUNT_SUCCESS,
      data: {
        attributes: {
          accountState: 'unknown'
        }
      }
    });
    expect(state.mhv.account.polling).to.be.true;
    expect(state.mhv.account.polledTimes).to.eq(0);
    expect(state.mhv.account.state).to.eq('unknown');
  });

  it('should not poll after MHV account creation if upgraded', () => {
    const state = reducer({
      mhv: {
        account: {
          state: 'unknown'
        }
      }
    }, {
      type: CREATE_MHV_ACCOUNT_SUCCESS,
      data: {
        attributes: {
          accountState: 'upgraded'
        }
      }
    });
    expect(state.mhv.account.polling).to.be.false;
    expect(state.mhv.account.polledTimes).to.eq(0);
    expect(state.mhv.account.state).to.eq('upgraded');
  });

  it('should set MHV account state after it is fetched', () => {
    const state = reducer({
      mhv: {
        account: {
          state: 'unknown'
        }
      }
    }, {
      type: FETCH_MHV_ACCOUNT_SUCCESS,
      data: {
        attributes: {
          accountState: 'upgraded'
        }
      }
    });

    expect(state.mhv.account.state).to.eq('upgraded');
  });

  it('should continue polling for MHV account state', () => {
    const state = reducer({
      mhv: {
        account: {
          polling: true,
          polledTimes: 0,
          state: 'registered'
        }
      }
    }, {
      type: FETCH_MHV_ACCOUNT_SUCCESS,
      data: {
        attributes: {
          accountState: 'registered'
        }
      }
    });

    expect(state.mhv.account.polling).to.be.true;
    expect(state.mhv.account.polledTimes).to.eq(1);
  });

  it('should stop polling for MHV account state once upgraded', () => {
    const state = reducer({
      mhv: {
        account: {
          polling: true,
          polledTimes: 2,
          state: 'registered'
        }
      }
    }, {
      type: FETCH_MHV_ACCOUNT_SUCCESS,
      data: {
        attributes: {
          accountState: 'upgraded'
        }
      }
    });

    expect(state.mhv.account.polling).to.be.false;
    expect(state.mhv.account.polledTimes).to.eq(0);
  });

  it('should stop polling for MHV account state upon reaching the limit for polling', () => {
    const state = reducer({
      mhv: {
        account: {
          polling: true,
          polledTimes: 10,
          state: 'registered'
        }
      }
    }, {
      type: FETCH_MHV_ACCOUNT_SUCCESS,
      data: {
        attributes: {
          accountState: 'registered'
        }
      }
    });

    expect(state.mhv.account.polling).to.be.false;
    expect(state.mhv.account.polledTimes).to.eq(0);
  });

  it('should remove the right form when deleting a form', () => {
    const state = reducer({
      savedForms: [{ form: 1 }, { form: 2 }]
    },  {
      type: REMOVING_SAVED_FORM_SUCCESS,
      formId: 1
    });

    expect(state.savedForms.length).to.eq(1);
    expect(state.savedForms).to.deep.equal([{ form: 2 }]);
  });
});
