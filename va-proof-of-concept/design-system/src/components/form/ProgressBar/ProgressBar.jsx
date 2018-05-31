import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressBar({ percent }) {
  return (
    <div className="progress-bar" role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100" tabIndex="0">
      <div className="progress-bar-inner" style={{ width: `${percent}%` }}/>
    </div>
  );
}

ProgressBar.propTypes = {
  /**
   * Percent of progress made
   */
  percent: PropTypes.number.isRequired,
};
