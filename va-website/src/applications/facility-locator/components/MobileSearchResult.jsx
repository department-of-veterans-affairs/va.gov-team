/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import FacilityDirectionsLink from './search-results/FacilityDirectionsLink';
import FacilityHours from './FacilityHours';
import FacilityInfoBlock from './search-results/FacilityInfoBlock';
import FacilityPhoneLink from './search-results/FacilityPhoneLink';
import PropTypes from 'prop-types';
import React, { Component } from 'react';


class MobileSearchResult extends Component {
  constructor() {
    super();

    this.state = {
      expandHours: false,
    };

    this.toggleHours = this.toggleHours.bind(this);
  }

  toggleHours() {
    this.setState({
      expandHours: !this.state.expandHours,
    });
  }

  renderHours() {
    const { expandHours } = this.state;
    const { facility } = this.props;

    return (
      <div>
        <p onClick={this.toggleHours} className="pointer">
          <span className="fa fa-clock blue"></span> Hours of operation <span className={`fa ${expandHours ? 'fa-chevron-up' : 'fa-chevron-down'}`}></span>
        </p>
        <div style={{ paddingLeft: '1.3em' }}>
          {expandHours ? <FacilityHours facility={facility}/> : null}
        </div>
      </div>
    );
  }

  render() {
    const { facility, currentLocation } = this.props;

    return (
      <div className="facility-result">
        <FacilityInfoBlock facility={facility} currentLocation={currentLocation}/>
        <div>
          <FacilityPhoneLink facility={facility}/>
        </div>
        <p>
          <FacilityDirectionsLink facility={facility}/>
        </p>
      </div>
    );
  }
}

MobileSearchResult.propTypes = {
  facility: PropTypes.object,
};

export default MobileSearchResult;
