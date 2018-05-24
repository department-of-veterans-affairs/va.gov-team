import _ from 'lodash/fp';
// import moment from 'moment';

import {
  SET_APPEALS,
  SET_APPEALS_UNAVAILABLE,
  FETCH_APPEALS_SUCCESS,
} from '../actions/index.jsx';

// import {
//   FETCH_APPEALS_PENDING,
  // USER_FORBIDDEN_ERROR,
  // RECORD_NOT_FOUND_ERROR,
  // VALIDATION_ERROR,
  // BACKEND_SERVICE_ERROR,
  // FETCH_APPEALS_ERROR,
  // AVAILABLE
// } from '../utils/appeals-v2-helpers';

const initialState = {
  appealsList: [],
  appealsLoading: false, // They're loading only after the fetch action
  available: true
};


// Sort by the latest event in each appeal
// Commented out because it's not necessary now, but will be when we refactor the reducers
// function sortAppeals(list) {
//   // const list = [
//   //   {
//   //     events: [
//   //       { date: '2015-10-20' },
//   //       { date: '2015-02-19' },
//   //       { date: '2015-11-30' }
//   //     ]
//   //   }
//   // ];
// 
//   return _.orderBy([appeal => {
//     const dates = appeal.events.map(e => moment(e.date).unix());
//     const latestDate = dates.reduce((latest, date) => {
//       return date > latest ? date : latest;
//     }, 0);
// 
//     return latestDate;
//   }], 'desc', list);
// }

// TO-DO: Break out v2 into its own reducer
export default function appealsReducer(state = initialState, action) {
  switch (action.type) {
    // case FETCH_APPEALS_PENDING: // pretty sure this is only in v2
    //   return _.set('appealsLoading', true, state);
    case FETCH_APPEALS_SUCCESS: // Appeals v1 and v2
    {
      // TODO: When we refactor the reducers, make sure to combine the claims and appeals.
      //  It doesn't need to be done here (and probably shouldn't be), but I think it makes
      //  sense to do it in a reducer or action creator.
      //
      // appeals are added to Redux store via FETCH_APPEALS_SUCCESS
      // reducer in claims-list.js
      return _.merge(state, {
        appealsLoading: false,
        available: true,
        v1ToV2IdMap: action.v1ToV2IdMap
        // v2Availability: AVAILABLE // New and improved! More bits of info!
      });
    }
    // TODO: Verify that this isn't actually needed and then remove it
    case SET_APPEALS: // Appeals v1
      return _.set('available', true, state);
    case SET_APPEALS_UNAVAILABLE: // Appeals v1
      return _.set('available', false, state);
    // Following are reducers for Appeals v2 error states  
    // case USER_FORBIDDEN_ERROR:
    //   return _.merge(state, {
    //     appealsLoading: false,
    //     v2Availability: USER_FORBIDDEN_ERROR,
    //   });
    // case RECORD_NOT_FOUND_ERROR:
    //   return _.merge(state, {
    //     appealsLoading: false,
    //     v2Availability: RECORD_NOT_FOUND_ERROR,
    //   });
    // case VALIDATION_ERROR:
    //   return _.merge(state, {
    //     appealsLoading: false,
    //     v2Availability: VALIDATION_ERROR,
    //   });
    // case BACKEND_SERVICE_ERROR:
    //   return _.merge(state, {
    //     appealsLoading: false,
    //     v2Availability: BACKEND_SERVICE_ERROR,
    //   });
    // case FETCH_APPEALS_ERROR:
    //   return _.merge(state, {
    //     appealsLoading: false,
    //     v2Availability: FETCH_APPEALS_ERROR,
    //   });
    default:
      return state;
  }
}
