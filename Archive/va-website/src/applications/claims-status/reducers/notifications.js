import _ from 'lodash/fp';

import { CLEAR_NOTIFICATION, SET_NOTIFICATION } from '../actions/index.jsx';

const initialState = {
  message: null
};

export default function notificationsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATION:
      return _.set('message', action.message, state);
    case CLEAR_NOTIFICATION:
      return _.set('message', null, state);
    default:
      return state;
  }
}
