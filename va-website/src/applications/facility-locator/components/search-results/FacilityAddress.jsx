import { buildAddressArray } from '../../utils/facilityAddress';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class FacilityAddress extends Component {
  render() {
    const { facility } = this.props;
    const addressArray = buildAddressArray(facility);

    return (
      <span>
        {[].concat(...addressArray.map(e => [<br key={e}/>, e])).slice(1)}
      </span>
    );
  }
}

FacilityAddress.propTypes = {
  facility: PropTypes.object,
};

export default FacilityAddress;
