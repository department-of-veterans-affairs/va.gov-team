import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchVAFacility } from '../actions';
import AccessToCare from '../components/AccessToCare';
import FacilityAddress from '../components/search-results/FacilityAddress';
import FacilityDirectionsLink from '../components/search-results/FacilityDirectionsLink';
import FacilityHours from '../components/FacilityHours';
import FacilityMap from '../components/FacilityMap';
import FacilityPhoneLink from '../components/search-results/FacilityPhoneLink';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import React, { Component } from 'react';
import ServicesAtFacility from '../components/ServicesAtFacility';
import AppointmentInfo from '../components/AppointmentInfo';
import { facilityTypes } from '../config';

class FacilityDetail extends Component {
  componentWillMount() {
    this.props.fetchVAFacility(this.props.params.id);
    window.scrollTo(0, 0);
  }

  renderFacilityWebsite() {
    const { facility } = this.props;
    const { website } = facility.attributes;

    if (!website) {
      return null;
    }

    return (
      <span>
        <a href={website} target="_blank">
          <i className="fa fa-globe"/>Website
        </a>
      </span>
    );
  }

  renderFacilityInfo() {
    const { facility } = this.props;
    const { name, facilityType } = facility.attributes;

    return (
      <div>
        <h1>{name}</h1>
        <div className="p1">
          <p>
            <span><strong>Facility type:</strong> {facilityTypes[facilityType]}</span>
          </p>
          <FacilityAddress facility={facility}/>
        </div>
        <div>
          <FacilityPhoneLink facility={facility}/>
        </div>
        <div>
          {this.renderFacilityWebsite()}
        </div>
        <div>
          <FacilityDirectionsLink facility={facility}/>
        </div>
        <p className="p1">Planning to visit? Please call first as information on this page may change.</p>
      </div>
    );
  }

  render() {
    const { facility, currentQuery } = this.props;

    if (!facility) {
      return null;
    }

    if (currentQuery.inProgress) {
      return (
        <div>
          <LoadingIndicator message="Loading information..."/>
        </div>
      );
    }

    return (
      <div className="row facility-detail">
        <div className="usa-width-two-thirds medium-8 columns">
          <div>
            {this.renderFacilityInfo()}
            <ServicesAtFacility facility={facility}/>
          </div>
          <div>
            <AppointmentInfo facility={facility}/>
            <AccessToCare facility={facility}/>
          </div>
        </div>
        <div className="usa-width-one-third medium-4 columns">
          <div>
            <FacilityMap info={facility}/>
            <div className="mb2">
              <FacilityHours facility={facility}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchVAFacility }, dispatch);
}

function mapStateToProps(state) {
  return { facility: state.facilities.selectedFacility, currentQuery: state.searchQuery };
}

export default connect(mapStateToProps, mapDispatchToProps)(FacilityDetail);
