import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Scroll from 'react-scroll';
import _ from 'lodash';
import classNames from 'classnames';

import {
  clearAutocompleteSuggestions,
  fetchAutocompleteSuggestions,
  fetchSearchResults,
  institutionFilterChange,
  setPageTitle,
  toggleFilter,
  updateAutocompleteSearchTerm
} from '../actions';

import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import Pagination from '@department-of-veterans-affairs/formation/Pagination';
import { getScrollOptions } from '../../../platform/utilities/ui';
import KeywordSearch from '../components/search/KeywordSearch';
import EligibilityForm from '../components/search/EligibilityForm';
import InstitutionFilterForm from '../components/search/InstitutionFilterForm';
import SearchResult from '../components/search/SearchResult';

const { Element: ScrollElement, scroller } = Scroll;

export class SearchPage extends React.Component {

  constructor(props) {
    super(props);
    this.handlePageSelect = this.handlePageSelect.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.updateSearchResults = this.updateSearchResults.bind(this);
  }

  componentDidMount() {
    let title = 'Search Results';
    const searchTerm = this.props.autocomplete.term;
    if (searchTerm) { title += ` - ${searchTerm}`; }
    this.props.setPageTitle(title);
    this.updateSearchResults();
  }

  componentDidUpdate(prevProps) {
    const currentlyInProgress = this.props.search.inProgress;

    const shouldUpdateSearchResults =
      !currentlyInProgress &&
      !_.isEqual(
        this.props.location.query,
        prevProps.location.query
      );

    if (shouldUpdateSearchResults) {
      this.updateSearchResults();
    }

    if (currentlyInProgress !== prevProps.search.inProgress) {
      scroller.scrollTo('searchPage', getScrollOptions());
    }
  }

  updateSearchResults() {
    const programFilters = [
      'studentVeteranGroup',
      'yellowRibbonScholarship',
      'principlesOfExcellence',
      'eightKeysToVeteranSuccess'
    ];

    const query = _.pick(this.props.location.query, [
      'version',
      'page',
      'name',
      'category',
      'country',
      'state',
      'type',
      ...programFilters
    ]);

    // Update form selections based on query.
    const institutionFilter = _.omit(query, ['page', 'name']);

    // Convert string to bool for params associated with checkboxes.
    programFilters.forEach(filterKey => {
      const filterValue = institutionFilter[filterKey];
      institutionFilter[filterKey] =
        filterValue === 'true';
    });

    this.props.institutionFilterChange(institutionFilter);
    this.props.fetchSearchResults(query);
  }

  handlePageSelect(page) {
    this.props.router.push({
      ...this.props.location,
      query: { ...this.props.location.query, page }
    });
  }

  handleFilterChange(field, value) {
    // Translate form selections to query params.
    const query = { ...this.props.location.query, [field]: value };

    // Don’t update the route if the query hasn’t changed.
    if (_.isEqual(query, this.props.location.query)) { return; }

    // Reset to the first page upon a filter change.
    delete query.page;

    const shouldRemoveFilter =
      !value ||
      ((field === 'category' ||
        field === 'country' ||
        field === 'state' ||
        field === 'type') && value === 'ALL');

    if (shouldRemoveFilter) { delete query[field]; }
    this.props.router.push({ ...this.props.location, query });
  }

  render() {
    const { search, filters } = this.props;
    const { count, pagination: { currentPage, totalPages } } = search;

    const resultsClass = classNames(
      'search-results',
      'small-12',
      'usa-width-three-fourths medium-9',
      'columns',
      { opened: !search.filterOpened }
    );

    const filtersClass = classNames(
      'filters-sidebar',
      'small-12',
      'usa-width-one-fourth',
      'medium-3',
      'columns',
      { opened: search.filterOpened }
    );

    let searchResults;

    // Filter button on mobile.
    const filterButton =
      (<button
        className="filter-button usa-button-secondary"
        onClick={this.props.toggleFilter}>Filter</button>);

    if (search.inProgress) {
      searchResults = (
        <div className={resultsClass}>
          {filterButton}
          <LoadingIndicator message="Loading search results..."/>
        </div>
      );
    } else {
      searchResults = (
        <div className={resultsClass}>
          {filterButton}
          <div>
            {search.results.map((result) => {
              return (
                <SearchResult
                  version={this.props.location.query.version}
                  key={result.facilityCode}
                  name={result.name}
                  facilityCode={result.facilityCode}
                  type={result.type}
                  city={result.city}
                  state={result.state}
                  zip={result.zip}
                  country={result.country}
                  cautionFlag={result.cautionFlag}
                  studentCount={result.studentCount}
                  bah={result.bah}
                  tuitionInState={result.tuitionInState}
                  tuitionOutOfState={result.tuitionOutOfState}
                  books={result.books}
                  studentVeteran={result.studentVeteran}
                  yr={result.yr}
                  poe={result.poe}
                  eightKeys={result.eightKeys}/>
              );
            })}
          </div>

          <Pagination
            onPageSelect={this.handlePageSelect.bind(this)}
            page={currentPage}
            pages={totalPages}/>
        </div>
      );
    }

    return (
      <ScrollElement name="searchPage" className="search-page">

        <div className="row">
          <div className="column">
            <h1>
              {!search.inProgress && `${(count || 0).toLocaleString()} `}Search Results
            </h1>
          </div>
        </div>

        <div className="row">
          <div className={filtersClass}>
            <div className="filters-sidebar-inner">
              {search.filterOpened && <h1>Filter your search</h1>}
              <h2>Keywords</h2>
              <KeywordSearch
                autocomplete={this.props.autocomplete}
                label="City, school, or employer"
                location={this.props.location}
                onClearAutocompleteSuggestions={this.props.clearAutocompleteSuggestions}
                onFetchAutocompleteSuggestions={this.props.fetchAutocompleteSuggestions}
                onFilterChange={this.handleFilterChange}
                onUpdateAutocompleteSearchTerm={this.props.updateAutocompleteSearchTerm}/>
              <InstitutionFilterForm
                search={search}
                filters={filters}
                onFilterChange={this.handleFilterChange}/>
              <EligibilityForm/>
            </div>
            <div className="results-button">
              <button className="usa-button" onClick={this.props.toggleFilter}>
                See Results
              </button>
            </div>
          </div>
          {searchResults}
        </div>

      </ScrollElement>
    );
  }

}

SearchPage.defaultProps = {};

const mapStateToProps = (state) => {
  const { autocomplete, filters, search } = state;
  return { autocomplete, filters, search };
};

const mapDispatchToProps = {
  clearAutocompleteSuggestions,
  fetchAutocompleteSuggestions,
  fetchSearchResults,
  institutionFilterChange,
  setPageTitle,
  toggleFilter,
  updateAutocompleteSearchTerm
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));
