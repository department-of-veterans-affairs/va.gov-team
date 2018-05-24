import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import {
  clearAutocompleteSuggestions,
  fetchAutocompleteSuggestions,
  setPageTitle,
  updateAutocompleteSearchTerm
} from '../actions';

import VideoSidebar from '../components/content/VideoSidebar';
import KeywordSearch from '../components/search/KeywordSearch';
import EligibilityForm from '../components/search/EligibilityForm';

export class LandingPage extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.props.setPageTitle('GI Bill® Comparison Tool: Vets.gov');
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleFilterChange('name', this.props.autocomplete.searchTerm);
  }

  handleFilterChange(field, value) {
    // Only search upon blur, keyUp, suggestion selection
    // if the search term is not empty.
    if (value) {
      this.search(value);
    }
  }

  search(value) {
    const query = {
      name: value,
      version: this.props.location.query.version
    };

    if (!query.name) { delete query.name; }
    if (!query.version) { delete query.version; }
    this.props.router.push({ pathname: 'search', query });
  }

  render() {
    return (
      <span className="landing-page">
        <div className="row">

          <div className="small-12 usa-width-two-thirds medium-8 columns">
            <h1>GI Bill® Comparison Tool</h1>
            <p className="subheading">Learn about education programs and compare benefits by school.</p>

            <form onSubmit={this.handleSubmit}>
              <EligibilityForm/>
              <KeywordSearch
                autocomplete={this.props.autocomplete}
                location={this.props.location}
                onClearAutocompleteSuggestions={this.props.clearAutocompleteSuggestions}
                onFetchAutocompleteSuggestions={this.props.fetchAutocompleteSuggestions}
                onFilterChange={this.handleFilterChange}
                onUpdateAutocompleteSearchTerm={this.props.updateAutocompleteSearchTerm}/>
              <button className="usa-button-big" type="submit" id="search-button">
                <span>Search Schools</span>
              </button>
            </form>
          </div>

          <div className="small-12 usa-width-one-third medium-4 columns">
            <VideoSidebar/>
          </div>

        </div>
      </span>
    );
  }

}

const mapStateToProps = (state) => {
  const { autocomplete } = state;
  return { autocomplete };
};

const mapDispatchToProps = {
  clearAutocompleteSuggestions,
  fetchAutocompleteSuggestions,
  setPageTitle,
  updateAutocompleteSearchTerm
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage));
