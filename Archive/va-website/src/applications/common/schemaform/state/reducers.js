import _ from 'lodash/fp';

import {
  CLOSE_REVIEW_CHAPTER,
  OPEN_REVIEW_CHAPTER,
  SET_DATA,
  SET_EDIT_MODE,
  SET_PRIVACY_AGREEMENT,
  SET_SUBMISSION,
  SET_SUBMITTED,
  SET_VIEWED_PAGES
} from '../actions';

import {
  recalculateSchemaAndData
} from '../state/helpers';

export default {
  [OPEN_REVIEW_CHAPTER]: (state, action) => {
    const openChapters = [
      ...state.reviewPageView.openChapters,
      action.openedChapter
    ];

    return _.set('reviewPageView.openChapters', openChapters, state);
  },
  [CLOSE_REVIEW_CHAPTER]: (state, action) => {
    const openChapters = state
      .reviewPageView
      .openChapters
      .filter(value => value !== action.closedChapter);

    const newState = _.set('reviewPageView.openChapters', openChapters, state);

    const viewedPages = new Set(state
      .reviewPageView
      .viewedPages);

    action.pageKeys.forEach(pageKey => viewedPages.add(pageKey));

    return _.set('reviewPageView.viewedPages', viewedPages, newState);
  },
  [SET_DATA]: (state, action) => {
    const newState = _.set('data', action.data, state);

    return recalculateSchemaAndData(newState);
  },
  [SET_EDIT_MODE]: (state, action) => {
    if (state.pages[action.page].showPagePerItem) {
      return _.set(['pages', action.page, 'editMode', action.index], action.edit, state);
    }
    return _.set(['pages', action.page, 'editMode'], action.edit, state);
  },
  [SET_PRIVACY_AGREEMENT]: (state, action) => {
    return _.set('data.privacyAgreementAccepted', action.privacyAgreementAccepted, state);
  },
  [SET_SUBMISSION]: (state, action) => {
    const newState = _.set(['submission', action.field], action.value, state);
    if (action.extra) {
      newState.submission.extra = action.extra;
    }

    return newState;
  },
  [SET_SUBMITTED]: (state, action) => {
    const submission = _.assign(state.submission, {
      response: action.response,
      status: 'applicationSubmitted'
    });

    return _.set('submission', submission, state);
  },
  [SET_VIEWED_PAGES]: (state, action) => {
    const viewedPages = new Set(state
      .reviewPageView
      .viewedPages);

    action.pageKeys.forEach(pageKey => viewedPages.add(pageKey));

    return _.set('reviewPageView.viewedPages', viewedPages, state);
  }
};
