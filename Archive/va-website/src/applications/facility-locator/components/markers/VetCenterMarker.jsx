import DivMarker from './DivMarker';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class VetCenterMarker extends Component {
  render() {
    const { position, children, style, onClick } = this.props;

    return (
      <DivMarker position={position} popupContent={<div>{children}</div>} onClick={onClick}>
        <div className="vet-center-icon map-marker" style={style}>
        </div>
      </DivMarker>
    );
  }
}

VetCenterMarker.defaultProps = {
  onClick: () => {},
};

VetCenterMarker.propTypes = {
  position: PropTypes.array,
};

export default VetCenterMarker;
