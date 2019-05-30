import _ from 'lodash/fp';
import {
  FETCH_CLAIMS_PENDING,
  FETCH_CLAIMS_SUCCESS,
  FETCH_CLAIMS_ERROR,
  FETCH_APPEALS_SUCCESS,
  FETCH_APPEALS_PENDING,
  FETCH_APPEALS_ERROR,
  USER_FORBIDDEN_ERROR,
  RECORD_NOT_FOUND_ERROR,
  VALIDATION_ERROR,
  BACKEND_SERVICE_ERROR,
  claimsAvailability,
  appealsAvailability,
  CHANGE_INDEX_PAGE
} from '../utils/appeals-v2-helpers';

// NOTE: Pagination is controlled by reducers in ./claims-list.js

const initialState = {
  claims: [],
  appeals: [],
  claimsLoading: false,
  appealsLoading: false,
  page: 1,
  pages: 1
};

export default function claimsV2Reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CLAIMS_PENDING:
      return _.set('claimsLoading', true, state);
    case FETCH_CLAIMS_SUCCESS:
      return _.merge(state, {
        claims: action.claims,
        claimsLoading: false,
        pages: action.pages,
        claimsAvailability: claimsAvailability.AVAILABLE
      });
    case FETCH_CLAIMS_ERROR:
      // TO-DO: Parse errors out
      return _.merge(state, {
        claimsLoading: false,
        claimsAvailability: claimsAvailability.UNAVAILABLE
      });
    case FETCH_APPEALS_PENDING:
      return _.set('appealsLoading', true, state);
    case FETCH_APPEALS_SUCCESS:
      return _.merge(state, {
        appeals: action.appeals,
        appealsLoading: false,
        available: true,
        v2Availability: appealsAvailability.AVAILABLE
      });
    case USER_FORBIDDEN_ERROR:
      return _.merge(state, {
        appealsLoading: false,
        v2Availability: appealsAvailability.USER_FORBIDDEN_ERROR,
      });
    case RECORD_NOT_FOUND_ERROR:
      return _.merge(state, {
        appealsLoading: false,
        v2Availability: appealsAvailability.RECORD_NOT_FOUND_ERROR,
      });
    case VALIDATION_ERROR:
      return _.merge(state, {
        appealsLoading: false,
        v2Availability: appealsAvailability.VALIDATION_ERROR,
      });
    case BACKEND_SERVICE_ERROR:
      return _.merge(state, {
        appealsLoading: false,
        v2Availability: appealsAvailability.BACKEND_SERVICE_ERROR,
      });
    case FETCH_APPEALS_ERROR:
      return _.merge(state, {
        appealsLoading: false,
        v2Availability: appealsAvailability.FETCH_APPEALS_ERROR,
      });

    case CHANGE_INDEX_PAGE:
      return _.set('page', action.page, state);
    default:
      return state;
  }
}
