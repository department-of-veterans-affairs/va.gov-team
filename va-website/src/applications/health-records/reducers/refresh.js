import { groupBy, merge } from 'lodash/fp';
import moment from 'moment';

const initialState = {
  statuses: {
    failed: [],
    incomplete: [],
    succeeded: [],
  },
  loading: false,
  errors: []
};

export default function refresh(state = initialState, action) {
  switch (action.type) {
    case 'INITIAL_LOADING':
      return { ...initialState, loading: true };

    case 'INITIAL_REFRESH_SUCCESS':
      return { ...state, loading: false };

    case 'INITIAL_REFRESH_FAILURE':
      return { ...state, loading: false, errors: action.errors };

    case 'REFRESH_POLL_SUCCESS': {
      const now = moment();
      const statuses = merge(
        initialState.statuses,
        groupBy(extractStatus => {
          const { lastUpdated, status } = extractStatus.attributes;
          const isOutdated = now.diff(lastUpdated, 'hours', true) > 24;
          if (isOutdated) { return 'incomplete'; }
          return (status === 'OK') ? 'succeeded' : 'failed';
        })(action.data)
      );
      return { ...state, statuses };
    }

    default:
      return state;
  }
}
