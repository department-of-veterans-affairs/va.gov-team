import PropTypes from 'prop-types';
import React from 'react';
import MessageSearchAdvanced from './MessageSearchAdvanced';
import ErrorableTextInput from '@department-of-veterans-affairs/formation/ErrorableTextInput';

class MessageSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchTermChange(field) {
    this.props.onFieldChange('subject.field', field);
  }

  handleSubmit(domEvent) {
    domEvent.preventDefault();

    const { isAdvancedVisible, params } = this.props;
    let searchParams = params;

    // For basic search, only fuzzy search subject field.
    if (!isAdvancedVisible) {
      searchParams = {
        subject: { ...params.subject, exact: false }
      };
    }

    this.props.onSubmit(searchParams);
  }

  render() {
    let basicSearch;

    if (!this.props.isAdvancedVisible) {
      basicSearch = (
        <div className="va-flex va-flex--stretch msg-search-simple-wrap">
          <ErrorableTextInput
            field={this.props.params.subject.field}
            name="msg-search-simple"
            label="Search messages"
            onValueChange={this.handleSearchTermChange}/>
          <button
            type="submit"
            className="msg-search-btn">
            <i className="fa fa-search"></i>
            <span className="msg-search-btn-text">Search</span>
          </button>
        </div>
      );
    }

    return (
      <form
        className={this.props.cssClass}
        id="msg-search"
        onSubmit={this.handleSubmit}>
        {basicSearch}
        <MessageSearchAdvanced
          params={this.props.params}
          hasRecipientField={this.props.hasRecipientField}
          isVisible={this.props.isAdvancedVisible}
          onAdvancedSearch={this.props.onAdvancedSearch}
          onFieldChange={this.props.onFieldChange}
          onDateChange={this.props.onDateChange}/>
      </form>);
  }
}

MessageSearch.propTypes = {
  cssClass: PropTypes.string,
  hasRecipientField: PropTypes.bool,
  isAdvancedVisible: PropTypes.bool.isRequired,
  onAdvancedSearch: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  params: PropTypes.shape({
    subject: PropTypes.shape({
      field: PropTypes.shape({
        value: PropTypes.string,
        dirty: PropTypes.bool
      })
    })
  }).isRequired
};

export default MessageSearch;
