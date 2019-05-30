import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateSearchQuery } from '../actions';
import React, { Component } from 'react';
import recordEvent from '../../../platform/monitoring/record-event';
import SelectComponent from './Select';

class SearchControls extends Component {

  handleEditSearch = () => {
    this.props.updateSearchQuery({
      active: false,
    });
  }

  // TODO (bshyong): generalize to be able to handle Select box changes
  handleQueryChange = (e) => {
    this.props.onChange({
      searchString: e.target.value,
    });
  }

  handleSearch = (e) => {
    const { onSearch } = this.props;
    e.preventDefault();

    const { facilityType } = this.props.currentQuery;
    // Report event here to only send analytics event when a user clicks on the button
    recordEvent({
      event: 'fl-search',
      'fl-search-fac-type': facilityType
    });

    onSearch();
  }

  render() {
    const { currentQuery, isMobile, onChange } = this.props;
    if (currentQuery.active && isMobile) {
      return (
        <div className="search-controls-container">
          <button className="small-12" onClick={this.handleEditSearch}>
            Edit Search
          </button>
        </div>
      );
    }

    return (
      <div className="search-controls-container clearfix">
        <form>
          <div className="columns usa-width-one-third medium-4">
            <label htmlFor="streetCityStateZip" id="streetCityStateZip-label">Enter Street, City, State or Zip</label>
            <input ref="searchField" name="streetCityStateZip" type="text" onChange={this.handleQueryChange} value={currentQuery.searchString} aria-label="Street, City, State or Zip" title="Street, City, State or Zip"/>
          </div>
          <SelectComponent
            optionType="facility"
            currentQuery={currentQuery}
            updateSearchQuery={this.props.updateSearchQuery}
            onChange={onChange}
            isMobile={this.props.isMobile}/>
          <SelectComponent
            optionType="service"
            currentQuery={currentQuery}
            updateSearchQuery={this.props.updateSearchQuery}
            onChange={onChange}
            isMobile={isMobile}/>
          <div className="columns usa-width-one-sixth medium-2">
            <input type="submit" value="Search" onClick={this.handleSearch}/>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateSearchQuery,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchControls);
