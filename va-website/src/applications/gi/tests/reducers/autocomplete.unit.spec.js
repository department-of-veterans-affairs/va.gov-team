import { expect } from 'chai';

import autocompleteReducer from '../../reducers/autocomplete';

const initialState = {
  inProgress: false,
  previewVersion: null,
  searchTerm: '',
  facilityCode: null,
  suggestions: []
};

describe('autocomplete reducer', () => {
  it('should change autocomplete term', () => {
    const state = autocompleteReducer(
      { ...initialState, facilityCode: 'code' },
      {
        type: 'AUTOCOMPLETE_TERM_CHANGED',
        searchTerm: 'newSearchTerm',
      }
    );

    expect(state.facilityCode).to.eql(null);
    expect(state.searchTerm).to.eql('newSearchTerm');
  });

  it('should start autocomplete correctly', () => {
    const state = autocompleteReducer(
      initialState,
      {
        type: 'AUTOCOMPLETE_STARTED'
      }
    );

    expect(state.inProgress).to.eql(true);
    expect(state.suggestions).to.eql([]);
  });

  it('should handle autocomplete failure', () => {
    const state = autocompleteReducer(
      { inProgress: true },
      {
        type: 'AUTOCOMPLETE_FAILED',
        err: {
          errorMessage: 'error'
        },
        value: 'searchTerm'
      }
    );

    expect(state.inProgress).to.eql(false);
    expect(state.searchTerm).to.eql('searchTerm');
    expect(state.errorMessage).to.eql('error');
  });

  it('should handle autocomplete success', () => {
    const state = autocompleteReducer(
      { ...initialState, searchTerm: 'searchTerm', inProgress: true },
      {
        type: 'AUTOCOMPLETE_SUCCEEDED',
        payload: {
          data: [{
            id: 1,
            value: 'autocomplete label',
            label: 'autocomplete label'
          }],
          meta: {
            version: 1
          }
        }
      }
    );

    expect(state.suggestions.length).to.eql(2);
    expect(state.suggestions[0]).to.eql({
      id: null,
      value: 'searchTerm',
      label: 'searchTerm'
    });
    expect(state.suggestions[1]).to.eql({
      id: 1,
      value: 'autocomplete label',
      label: 'autocomplete label'
    });
    expect(state.previewVersion).to.eql(1);
    expect(state.inProgress).to.eql(false);
  });

  it('should handle search starting', () => {
    const state = autocompleteReducer(
      initialState,
      {
        type: 'SEARCH_STARTED',
        name: 'newSearchTerm',
      }
    );

    expect(state.searchTerm).to.eql('newSearchTerm');
  });
});
