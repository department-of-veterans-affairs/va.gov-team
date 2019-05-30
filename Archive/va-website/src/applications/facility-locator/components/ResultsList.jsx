import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateSearchQuery, searchWithBounds } from '../actions';
import FacilityDirectionsLink from './search-results/FacilityDirectionsLink';
import FacilityInfoBlock from './search-results/FacilityInfoBlock';
import FacilityPhoneLink from './search-results/FacilityPhoneLink';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import MobileSearchResult from './MobileSearchResult';
import Pagination from '@department-of-veterans-affairs/formation/Pagination';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ResultsList extends Component {

  handlePageSelect = (page) => {
    const { currentQuery } = this.props;

    this.props.searchWithBounds(
      currentQuery.bounds,
      currentQuery.facilityType,
      currentQuery.serviceType,
      page,
    );
  }

  renderMobileView() {
    const { currentQuery, facilities, pagination: { currentPage, totalPages } } = this.props;

    return (
      <div>
        <div>
          {
            facilities.map(f => {
              return (
                <div key={f.id} className="mobile-search-result">
                  <MobileSearchResult facility={f} currentLocation={currentQuery.position}/>
                </div>
              );
            })
          }
        </div>
        <Pagination onPageSelect={this.handlePageSelect} page={currentPage} pages={totalPages}/>
      </div>
    );
  }

  render() {
    const { facilities, isMobile, currentQuery, pagination: { currentPage, totalPages } } = this.props;

    if (currentQuery.inProgress) {
      return (
        <div>
          <LoadingIndicator message="Loading results..."/>
        </div>
      );
    }

    if (!facilities || facilities.length < 1) {
      return (
        <div className="facility-result">
          No facilities found. Please try entering a different search term (Street, City, State or Zip) and click search to find facilities.
        </div>
      );
    }

    if (isMobile) {
      return this.renderMobileView();
    }

    return (
      <div>
        <p>Search Results near <strong>“{currentQuery.context}”</strong></p>
        <div>
          {
            facilities.map(f => {
              return (
                <div key={f.id} className="facility-result" id={f.id}>
                  <FacilityInfoBlock facility={f} currentLocation={currentQuery.position}/>
                  <FacilityPhoneLink facility={f}/>
                  <FacilityDirectionsLink facility={f}/>
                </div>
              );
            })
          }
        </div>
        <Pagination onPageSelect={this.handlePageSelect} page={currentPage} pages={totalPages}/>
      </div>
    );
  }
}

ResultsList.propTypes = {
  facilities: PropTypes.array,
  isMobile: PropTypes.bool,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateSearchQuery,
    searchWithBounds,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(ResultsList);
