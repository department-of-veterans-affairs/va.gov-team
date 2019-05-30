import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

class ToggleThread extends React.Component {
  render() {
    const iconClass = classNames({
      fa: true,
      'fa-chevron-down': this.props.messagesCollapsed,
      'fa-chevron-up': !this.props.messagesCollapsed,
    });

    const buttonText = this.props.messagesCollapsed
      ? 'Expand all'
      : 'Collapse all';

    return (
      <button
        className="messaging-toggle-thread"
        type="button"
        onClick={this.props.onClick}>
        <i className={iconClass}></i>
        <span>{buttonText}</span>
      </button>
    );
  }
}

ToggleThread.propTypes = {
  messagesCollapsed: PropTypes.bool,
  onClick: PropTypes.func
};

export default ToggleThread;
