import _ from 'lodash/fp';

import {
  LOG_OUT,
  UPDATE_LOGGEDIN_STATUS,
} from '../actions';

const initialState = {
  currentlyLoggedIn: false
};

function loginStuff(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOGGEDIN_STATUS:
      return _.set('currentlyLoggedIn', action.value, state);

    case LOG_OUT:
      return _.set('currentlyLoggedIn', false, state);

    default:
      return state;
  }
}

export default loginStuff;
