import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ title, description, displayType }) => {
  let cssClass;
  if (displayType === 'take_action') {
    cssClass = 'usa-alert-warning';
  } else if (displayType === 'info') {
    cssClass = 'usa-alert-info';
  }

  return (
    <li>
      <div className={`usa-alert ${cssClass}`}>
        <div className="usa-alert-body">
          <h4 className="usa-alert-heading">{title}</h4>
          <div className="usa-alert-text">{description}</div>
        </div>
      </div>
    </li>
  );
};

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.element,
  displayType: PropTypes.string.isRequired,
};

export default Alert;
