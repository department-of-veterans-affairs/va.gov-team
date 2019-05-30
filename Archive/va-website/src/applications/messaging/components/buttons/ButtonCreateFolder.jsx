import PropTypes from 'prop-types';
import React from 'react';

class ButtonCreateFolder extends React.Component {
  render() {
    return (
      <button
        className="va-icon-link msg-btn-newfolder"
        onClick={this.props.onClick}
        type="button">
        <i className="fa fa-plus"></i>
        <span>Create new folder</span>
      </button>
    );
  }
}

ButtonCreateFolder.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ButtonCreateFolder;
