import _ from 'lodash/fp';
import moment from 'moment';
import { APPEAL_V2_TYPE } from '../utils/appeals-v2-helpers';

import { SET_CLAIMS, SET_APPEALS, FILTER_CLAIMS, SORT_CLAIMS, CHANGE_CLAIMS_PAGE, SHOW_CONSOLIDATED_MODAL, HIDE_30_DAY_NOTICE,
  FETCH_APPEALS, FETCH_APPEALS_SUCCESS, FETCH_CLAIMS, SET_CLAIMS_UNAVAILABLE, SET_APPEALS_UNAVAILABLE } from '../actions/index.jsx';
import { getClaimType } from '../utils/helpers';

const ROWS_PER_PAGE = 10;

const initialState = {
  claims: [],
  appeals: [],
  visibleList: [],
  visibleRows: [],
  page: 1,
  pages: 1,
  sortProperty: 'phaseChangeDate',
  consolidatedModal: false,
  show30DayNotice: true,
  claimsLoading: false,
  appealsLoading: false
};

// We want to sort claims without dates below claims with dates
function phaseChangeDate(claim) {
  return claim.attributes && claim.attributes.phaseChangeDate
    ? claim.attributes.phaseChangeDate
    : '0';
}

function dateFiled(claim) {
  return claim.attributes && claim.attributes.dateFiled
    ? claim.attributes.dateFiled
    : '0';
}

function claimType(claim) {
  return claim.attributes
    ? getClaimType(claim).toLowerCase()
    : '';
}

const sortPropertyFn = {
  phaseChangeDate,
  dateFiled,
  claimType
};

function filterList(list, filter) {
  let filteredList = list;
  if (filter) {
    const open = filter === 'open';
    filteredList = filteredList.filter((claim) => {
      if (claim.type === 'appeals_status_models_appeals' || claim.type === APPEAL_V2_TYPE) {
        return claim.attributes.active === open;
      }
      return claim.attributes.open === open;
    });
  }
  return filteredList;
}

function sortList(list, sortProperty) {
  const sortOrder = sortProperty === 'claimType' ? 'asc' : 'desc';
  const sortFunc = (el) => {
    if (el.type === 'appeals_status_models_appeals' || el.type === APPEAL_V2_TYPE) {
      const events = _.orderBy([e => moment(e.date).unix()], 'desc', el.attributes.events);
      const lastEvent = events[0];
      const firstEvent = events[events.length - 1];

      switch (sortProperty) {
        case 'phaseChangeDate':
          return moment(lastEvent.date).unix();
        case 'dateFiled':
          return moment(firstEvent.date).unix();
        default:
          break;
      }
    }
    return sortPropertyFn[sortProperty] && sortPropertyFn[sortProperty](el);
  };

  return _.orderBy([sortFunc, 'id'], sortOrder, list);
}

function getVisibleRows(list, currentPage) {
  const currentIndex = (currentPage - 1) * ROWS_PER_PAGE;
  return list.slice(currentIndex, currentIndex + ROWS_PER_PAGE);
}

function getTotalPages(list) {
  return Math.ceil(list.length / ROWS_PER_PAGE);
}

export default function claimsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CLAIMS: {
      const visibleList = sortList(filterList(state.appeals.concat(action.claims), action.filter), state.sortProperty);
      return _.assign(state, {
        claims: action.claims,
        visibleList,
        visibleRows: getVisibleRows(visibleList, state.page),
        pages: getTotalPages(visibleList),
        claimsLoading: false,
      });
    }
    // Fall-through until we handle v2 appeals solely in the appeals reducer
    case FETCH_APPEALS_SUCCESS:
    case SET_APPEALS: {
      const visibleAppeals = sortList(filterList(action.appeals, action.filter), state.sortProperty);
      const visibleList = sortList(filterList(state.claims, action.filter).concat(visibleAppeals), state.sortProperty);
      return _.assign(state, {
        appeals: action.appeals,
        visibleList,
        visibleRows: getVisibleRows(visibleList, state.page),
        pages: getTotalPages(visibleList),
        appealsLoading: false,
      });
    }
    case FILTER_CLAIMS: {
      const visibleList = sortList(filterList(state.appeals.concat(state.claims), action.filter), state.sortProperty);
      return _.assign(state, {
        visibleList,
        visibleRows: getVisibleRows(visibleList, 1),
        page: 1,
        pages: getTotalPages(visibleList)
      });
    }
    case SORT_CLAIMS: {
      const visibleList = sortList(state.visibleList, action.sortProperty);
      return _.assign(state, {
        sortProperty: action.sortProperty,
        visibleList,
        visibleRows: getVisibleRows(visibleList, 1),
        page: 1,
        pages: getTotalPages(visibleList)
      });
    }
    case CHANGE_CLAIMS_PAGE: {
      return _.assign(state, {
        page: action.page,
        visibleRows: getVisibleRows(state.visibleList, action.page)
      });
    }
    case SHOW_CONSOLIDATED_MODAL: {
      return _.set('consolidatedModal', action.visible, state);
    }
    case HIDE_30_DAY_NOTICE: {
      return _.set('show30DayNotice', false, state);
    }
    case FETCH_APPEALS: {
      return _.set('appealsLoading', true, state);
    }
    case FETCH_CLAIMS: {
      return _.set('claimsLoading', true, state);
    }
    case SET_CLAIMS_UNAVAILABLE:
      return _.set('claimsLoading', false, state);
    case SET_APPEALS_UNAVAILABLE:
      return _.set('appealsLoading', false, state);
    default:
      return state;
  }
}
