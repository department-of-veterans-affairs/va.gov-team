import { expect } from 'chai';

import routingReducer from '../../reducers/routing';
import { SET_LAST_PAGE } from '../../actions';

describe('routingReducer', () => {
  it('should set the last page to null on first call', () => {
    const state = routingReducer(undefined, {
      type: SET_LAST_PAGE,
      page: '/testing'
    });

    expect(state.lastPage).to.be.null;
    expect(state.history[0]).to.equal('testing');
  });
  it('should set the last page with history items', () => {
    const state = routingReducer({
      history: [
        'some-url'
      ]
    }, {
      type: SET_LAST_PAGE,
      page: '/testing'
    });

    expect(state.lastPage).to.equal('some-url');
    expect(state.history.length).to.equal(2);
  });
});
