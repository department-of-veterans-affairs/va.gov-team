import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

export default function Notification({ title, body, onClose, type }) {
  const classes = classNames('usa-alert', 'claims-alert', 'claims-alert-status', {
    'usa-alert-success': type === 'success',
    'usa-alert-error': type === 'error'
  });
  return (
    <div className={classes} role="alert">
      {onClose && <button className="va-alert-close notification-close" onClick={onClose} aria-label="Close notification">
        <i className="fa fa-close" aria-label="Close icon"></i>
      </button>}
      <div className="usa-alert-body">
        <h4 className="usa-alert-heading">{title}</h4>
        <p className="usa-alert-text">
          {body}
        </p>
      </div>
    </div>
  );
}

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  type: PropTypes.string
};

Notification.defaultProps = {
  type: 'success'
};
