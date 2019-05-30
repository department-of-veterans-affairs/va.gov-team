import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

class ButtonSettings extends React.Component {
  render() {
    return (
      <Link
        className="va-icon-link msg-btn-settings"
        to="/settings"
        onClick={this.props.onClick}>
        <i className="fa fa-cog"></i>
        <span>Settings</span>
      </Link>
    );
  }
}

ButtonSettings.propTypes = {
  onClick: PropTypes.func
};

export default ButtonSettings;
