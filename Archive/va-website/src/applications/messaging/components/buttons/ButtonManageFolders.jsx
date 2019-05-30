import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

class ButtonManageFolders extends React.Component {
  render() {
    return (
      <Link
        className="va-icon-link msg-btn-managefolders"
        to="/settings"
        onClick={this.props.onClick}>
        <i className="fa fa-folder"></i>
        <span>Manage folders</span>
      </Link>
    );
  }
}

ButtonManageFolders.propTypes = {
  onClick: PropTypes.func
};

export default ButtonManageFolders;
