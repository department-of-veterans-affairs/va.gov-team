import DivMarker from './DivMarker';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class CemeteryMarker extends Component {
  render() {
    const { position, children, style, onClick } = this.props;

    return (
      <DivMarker position={position} popupContent={<div>{children}</div>} onClick={onClick}>
        <div className="cemetery-icon map-marker" style={style}>
        </div>
      </DivMarker>
    );
  }
}

CemeteryMarker.defaultProps = {
  onClick: () => {},
};

CemeteryMarker.propTypes = {
  position: PropTypes.array,
};

export default CemeteryMarker;
