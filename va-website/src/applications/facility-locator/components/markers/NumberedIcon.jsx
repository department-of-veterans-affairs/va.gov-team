import DivMarker from './DivMarker';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class NumberedIcon extends Component {
  render() {
    const { position, children, number, style, onClick } = this.props;

    return (
      <DivMarker position={position} popupContent={<div>{children}</div>} onClick={onClick}>
        <div className="numbered-icon" style={style}>{number}</div>
      </DivMarker>
    );
  }
}

NumberedIcon.defaultProps = {
  onClick: () => {},
};

NumberedIcon.propTypes = {
  position: PropTypes.array,
  number: PropTypes.number,
};

export default NumberedIcon;
