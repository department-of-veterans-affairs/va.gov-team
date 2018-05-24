import _ from 'lodash/fp';

import {
  SUBMIT_DECISION_REQUEST,
  SET_DECISION_REQUESTED,
  SET_DECISION_REQUEST_ERROR
} from '../actions/index.jsx';

const initialState = {
  decisionRequested: false,
  loadingDecisionRequest: false,
  decisionRequestError: null
};

export default function claimDetailReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_DECISION_REQUEST: {
      return _.set('loadingDecisionRequest', true, state);
    }
    case SET_DECISION_REQUESTED: {
      return _.assign(state, {
        decisionRequested: true,
        loadingDecisionRequest: false
      });
    }
    case SET_DECISION_REQUEST_ERROR: {
      return _.assign(state, {
        decisionRequestError: action.error,
        loadingDecisionRequest: false
      });
    }
    default:
      return state;
  }
}

