import set from 'lodash/fp/set';
import moment from 'moment';

import { makeField } from '../../../platform/forms/fields';

import {
  CLOSE_ADVANCED_SEARCH,
  FETCH_FOLDER_SUCCESS,
  OPEN_ADVANCED_SEARCH,
  SET_ADVSEARCH_END_DATE,
  SET_ADVSEARCH_START_DATE,
  SET_SEARCH_PARAM,
  TOGGLE_ADVANCED_SEARCH
} from '../utils/constants';

const initialState = {
  params: {
    dateRange: {
      start: null,
      end: null
    },
    from: {
      field: makeField(''),
      exact: false
    },
    to: {
      field: makeField(''),
      exact: false
    },
    subject: {
      field: makeField(''),
      exact: false
    }
  },
  advanced: {
    visible: false
  }
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case FETCH_FOLDER_SUCCESS: {
      const { filter } = action.messages.meta;
      if (!filter) { return initialState; }

      const params = {
        dateRange: { ...initialState.params.dateRange },
        from: { ...initialState.params.from },
        to: { ...initialState.params.to },
        subject: { ...initialState.params.subject }
      };

      const { recipientName, senderName, sentDate, subject } = filter;

      if (recipientName) {
        params.to.field = recipientName.eq
          ? makeField(recipientName.eq, true)
          : makeField(recipientName.match, true);
        params.to.exact = !!recipientName.eq;
      }

      if (senderName) {
        params.from.field = senderName.eq
          ? makeField(senderName.eq, true)
          : makeField(senderName.match, true);
        params.from.exact = !!senderName.eq;
      }

      if (sentDate) {
        const { gteq: startDate, lteq: endDate } = sentDate;
        params.dateRange.start = startDate ? moment(startDate) : null;
        params.dateRange.end = endDate ? moment(endDate) : null;
      }

      if (subject) {
        params.subject.field = subject.eq
          ? makeField(subject.eq, true)
          : makeField(subject.match, true);
        params.subject.exact = !!subject.eq;
      }

      return set('params', params, state);
    }
    case SET_ADVSEARCH_END_DATE:
      if (action.date) {
        return set('params.dateRange.end', moment(action.date).endOf('day'), state);
      }
      return set('params.dateRange.end', null, state);
    case SET_ADVSEARCH_START_DATE:
      return set('params.dateRange.start', action.date, state);
    case SET_SEARCH_PARAM:
      return set(`params.${action.path}`, action.field, state);
    case TOGGLE_ADVANCED_SEARCH:
      return set('advanced.visible', !state.advanced.visible, state);
    case OPEN_ADVANCED_SEARCH:
      return set('advanced.visible', true, state);
    case CLOSE_ADVANCED_SEARCH:
      return set('advanced.visible', false, state);
    default:
      return state;
  }
}
