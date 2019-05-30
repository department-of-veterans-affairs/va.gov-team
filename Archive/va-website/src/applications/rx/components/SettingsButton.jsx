import React from 'react';
import { Link } from 'react-router';

class SettingsButton extends React.Component {
  render() {
    return (
      <Link
        className="va-icon-link rx-settings-button"
        to="/settings">
        <i className="fa fa-cog"></i>
        <span>Settings</span>
      </Link>
    );
  }
}

export default SettingsButton;
