import PropTypes from 'prop-types';
import React from 'react';
import Autosuggest from 'react-autosuggest-ie11-compatible';
import { debounce } from 'lodash';
import recordEvent from '../../../../platform/monitoring/record-event';

export class KeywordSearch extends React.Component {
  constructor(props) {
    super(props);
    this.clickedSuggestionValue = this.clickedSuggestionValue.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleSuggestionSelected = this.handleSuggestionSelected.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.shouldRenderSuggestions = this.shouldRenderSuggestions.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);

    this.handleFetchSuggestion = debounce(
      this.handleFetchSuggestion.bind(this),
      250, { trailing: true }
    );
  }

  componentDidMount() {
    const searchQuery = this.props.location && this.props.location.query;
    if (searchQuery && searchQuery.name) {
      this.handleChange(null, { newValue: searchQuery.name, method: 'enter' });
    }
  }

  handleKeyUp(e) {
    const { onFilterChange, autocomplete } = this.props;
    if ((e.which || e.keyCode) === 13) {
      e.target.blur();
      onFilterChange('name', autocomplete.searchTerm);
    }
  }

  handleChange(event, data) {
    this.props.onUpdateAutocompleteSearchTerm(data.newValue);
  }

  handleFetchSuggestion({ value }) {
    const { version } = this.props.location.query;
    this.props.onFetchAutocompleteSuggestions(value, version);
  }

  handleSuggestionSelected(event, data) {
    recordEvent({
      event: 'gibct-autosuggest',
      'gibct-autosuggest-value': data.suggestionValue,
    });
    this.props.onFilterChange('name', data.suggestionValue);
  }

  clickedSuggestionValue(suggestion) {
    return suggestion.label;
  }

  shouldRenderSuggestions(searchTerm) {
    const checkLength = searchTerm.trim().length > 2;
    const finished = true; //! this.props.autocomplete.inProgress;
    return checkLength && finished;
  }

  handleInputBlur() {
    this.props.onFilterChange('name', this.props.autocomplete.searchTerm);
  }

  renderSuggestion(suggestion) {
    return <div>{suggestion.label}</div>;
  }

  render() {
    const { suggestions, searchTerm } = this.props.autocomplete;

    return (
      <div className="keyword-search">
        <label
          id="institution-search-label"
          className="institution-search-label"
          htmlFor="institution-search">
          {this.props.label}
        </label>
        <Autosuggest
          getSuggestionValue={this.clickedSuggestionValue}
          highlightFirstSuggestion
          onSuggestionsClearRequested={this.props.onClearAutocompleteSuggestions}
          onSuggestionSelected={this.handleSuggestionSelected}
          onSuggestionsFetchRequested={this.handleFetchSuggestion}
          renderSuggestion={this.renderSuggestion}
          shouldRenderSuggestions={this.shouldRenderSuggestions}
          suggestions={suggestions}
          inputProps={{
            value: searchTerm,
            onChange: this.handleChange,
            onKeyUp: this.handleKeyUp,
            'aria-labelledby': 'institution-search-label',
            onBlur: this.handleInputBlur,
          }}/>
      </div>
    );
  }
}

KeywordSearch.defaultProps = {
  label: 'Enter a city, school or employer name',
  onFilterChange: () => {},
};

KeywordSearch.propTypes = {
  label: PropTypes.string,
  onClearAutocompleteSuggestions: PropTypes.func,
  onFetchAutocompleteSuggestions: PropTypes.func,
  onFilterChange: PropTypes.func,
  onUpdateAutocompleteSearchTerm: PropTypes.func
};

export default KeywordSearch;
