import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class TrackPackageLink extends React.Component {
  render() {
    const linkClass = classNames(
      'rx-track-package-link',
      this.props.className
    );

    let link;

    if (this.props.external) {
      link = (
        <a
          className={linkClass}
          href={this.props.url}
          onClick={this.props.onClick}
          rel="external noopener noreferrer"
          target="_blank">
          {this.props.text}
        </a>
      );
    } else {
      link = (
        <Link
          className={linkClass}
          to={this.props.url} onClick={this.props.onClick}>
          {this.props.text}
        </Link>
      );
    }

    return link;
  }
}

TrackPackageLink.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  external: PropTypes.bool,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default TrackPackageLink;
