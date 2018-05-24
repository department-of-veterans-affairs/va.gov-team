import set from 'lodash/fp/set';
import { mapValues } from 'lodash';
import moment from 'moment';

const initialState = {
  dateOption: '3mo',
  dateRange: {
    start: null,
    end: moment(),
  },
  errors: [],
  loading: false,
  reportTypes: {},
  ready: false,
  requestDate: null,
  inProgress: false
};

const initializeReportTypes = (eligibleClasses) => {
  const reportTypes = {};
  eligibleClasses.forEach((type) => { reportTypes[type] = false; });
  return reportTypes;
};

export default function form(state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_ELIGIBLE_CLASSES':
      return { ...state, loading: true, errors: [] };
    case 'FETCH_ELIGIBLE_CLASSES_FAILURE':
      return { ...state, loading: false, errors: action.errors };
    case 'FETCH_ELIGIBLE_CLASSES_SUCCESS':
      return {
        ...state,
        loading: false,
        reportTypes: initializeReportTypes(action.classes)
      };
    case 'START_DATE_CHANGED':
      return set('dateRange.start', action.date, state);
    case 'END_DATE_CHANGED':
      return set('dateRange.end', action.date, state);
    case 'DATE_OPTION_CHANGED':
      return set('dateOption', action.dateOption, state);
    case 'REPORT_TYPE_TOGGLED':
      return set(`reportTypes.${action.reportType}`, action.checked, state);
    case 'ALL_REPORTS_TOGGLED':
      return set('reportTypes', mapValues(state.reportTypes, () => action.checked), state);
    case 'FORM_SUBMITTING':
      return set('inProgress', true, state);
    case 'FORM_SUCCESS':
      return {
        ...state,
        ready: true,
        inProgress: false,
        requestDate: new Date().toISOString(),
      };
    case 'FORM_FAILURE':
      return {
        ...state,
        inProgress: false,
        ready: false,
      };
    case 'FORM_RESET':
      return initialState;
    default:
      return state;
  }
}
