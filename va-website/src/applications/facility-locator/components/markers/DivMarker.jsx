import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { divIcon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import { renderToStaticMarkup } from 'react-dom/server';

export default class DivMarker extends Component {
  render() {
    const { className, children, popupContent, position, onClick } = this.props;
    const icon = divIcon({
      className,
      html: renderToStaticMarkup(children),
    });

    return (
      <Marker icon={icon} position={position} onClick={onClick}>
        <Popup>
          {popupContent}
        </Popup>
      </Marker>
    );
  }
}

DivMarker.defaultProps = {
  onClick: () => {},
};

DivMarker.propTypes = {
  className: PropTypes.string,
  popupContent: PropTypes.element,
};
