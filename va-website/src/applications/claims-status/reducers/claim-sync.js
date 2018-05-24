import _ from 'lodash/fp';

import {
  SET_CLAIM_DETAIL,
  SET_CLAIMS,
  SET_CLAIMS_UNAVAILABLE,
  SET_UNAUTHORIZED
} from '../actions/index.jsx';

const initialState = {
  synced: true,
  available: true,
  authorized: true
};

export default function claimDetailReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CLAIM_DETAIL:
      return _.assign(state, {
        synced: action.meta.successfulSync,
        available: true,
        authorized: true
      });
    case SET_CLAIMS:
      return _.assign(state, {
        synced: action.meta.successfulSync,
        available: true,
        authorized: true
      });
    case SET_CLAIMS_UNAVAILABLE:
      return _.set('available', false, state);
    case SET_UNAUTHORIZED:
      return _.set('authorized', false, state);
    default:
      return state;
  }
}
