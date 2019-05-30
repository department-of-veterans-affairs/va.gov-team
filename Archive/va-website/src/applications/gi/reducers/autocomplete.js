/* eslint-disable no-case-declarations */
import { AUTOCOMPLETE_TERM_CHANGED, AUTOCOMPLETE_STARTED, AUTOCOMPLETE_FAILED, AUTOCOMPLETE_SUCCEEDED, SEARCH_STARTED } from '../actions';
import camelCaseKeysRecursive from 'camelcase-keys-recursive';

const INITIAL_STATE = {
  inProgress: false,
  previewVersion: null,
  searchTerm: '',
  facilityCode: null,
  suggestions: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTOCOMPLETE_TERM_CHANGED:
      return {
        ...state,
        searchTerm: action.searchTerm,
        facilityCode: null
      };
    case AUTOCOMPLETE_STARTED:
      return {
        ...state,
        inProgress: true,
        suggestions: [],
      };
    case AUTOCOMPLETE_FAILED:
      return {
        ...state,
        ...action.err,
        searchTerm: action.value,
        inProgress: false
      };
    case AUTOCOMPLETE_SUCCEEDED:
      const camelPayload = camelCaseKeysRecursive(action.payload);
      const suggestions = camelPayload.data;

      const { searchTerm } = state;
      const shouldIncludeSearchTerm =
        searchTerm &&
        suggestions.length &&
        searchTerm !== suggestions[0].label;

      if (shouldIncludeSearchTerm) {
        suggestions.unshift({
          id: null,
          value: searchTerm,
          label: searchTerm
        });
      }

      return {
        ...state,
        suggestions,
        previewVersion: camelPayload.meta.version,
        inProgress: false
      };
    case SEARCH_STARTED:
      return {
        ...state,
        searchTerm: action.name,
      };
    default:
      return state;
  }
}
