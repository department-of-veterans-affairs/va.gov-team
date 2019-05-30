import { expect } from 'chai';

import searchReducer from '../../reducers/search';

describe('search reducer', () => {
  it('should toggle filters', () => {
    const state = searchReducer(
      { filterOpened: false },
      {
        type: 'FILTER_TOGGLED',
      }
    );

    expect(state.filterOpened).to.eql(true);
  });

  it('should set search inProgress', () => {
    const state = searchReducer(
      { inProgress: false },
      {
        type: 'SEARCH_STARTED',
      }
    );

    expect(state.inProgress).to.eql(true);
  });

  it('should set correct state on failure', () => {
    const state = searchReducer(
      { inProgress: true },
      {
        type: 'SEARCH_FAILED',
        err: {
          errorMessage: 'error message'
        }
      }
    );

    expect(state.inProgress).to.eql(false);
    expect(state.errorMessage).to.eql('error message');
  });

  it('should set correct state on success', () => {
    const state = searchReducer(
      { inProgress: true },
      {
        type: 'SEARCH_SUCCEEDED',
        payload: {
          data: [
            {
              attributes: {
                name: 'result_name'
              },
            }
          ],
          links: {
            self: 'url/to/data',
            last: 'url/to/data?page=1&per_page=10'
          },
          meta: {
            count: 1,
            version: 1,
            facets: {
              state: {
                stateFacetKey: 'value'
              },
              type: {
                typeFacetKey: 'value'
              }
            }
          }
        }
      }
    );

    expect(state.inProgress).to.eql(false);
    expect(state.results.length).to.eql(1);
    expect(state.results[0].name).to.eql('RESULT_NAME');
    expect(state.facets.state.STATEFACETKEY).to.eql('value');
    expect(state.facets.type.TYPEFACETKEY).to.eql('value');
    expect(state.count).to.eql(1);
    expect(state.version).to.eql(1);
    expect(state.pagination.currentPage).to.eql(1);
    expect(state.pagination.totalPages).to.eql(1);
    expect(state.pagination.perPage).to.eql(10);
  });
});
