import PropTypes from 'prop-types';
import React from 'react';

export default function ConsolidatedClaims({ onClose }) {
  return (
    <div>
      <h3 id="consolidated-claims-title" className="claims-status-upload-header">A note about consolidated claims</h3>
      <button
        className="va-modal-close"
        type="button"
        onClick={onClose}>
        <i className="fa fa-close"></i>
        <span className="usa-sr-only">Close this modal</span>
      </button>
      <div>
        If you turn in a new claim while we’re reviewing another one from you, we’ll add any new information to the original claim and close the new claim, with no action required from you.
      </div>
    </div>
  );
}

ConsolidatedClaims.propTypes = {
  onClose: PropTypes.func.isRequired
};
