import _ from 'lodash/fp';

import { SET_LAST_PAGE } from '../actions/index.jsx';

const initialState = {
  lastPage: null,
  history: []
};

export default function routingReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LAST_PAGE: {
      const lastPage = state.history.length ? state.history[state.history.length - 1] : null;
      return _.assign(state, {
        lastPage,
        history: state.history.concat(action.page.substr(1))
      });
    }
    default: {
      return state;
    }
  }
}
