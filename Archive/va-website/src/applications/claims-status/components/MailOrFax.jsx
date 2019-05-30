import PropTypes from 'prop-types';
import React from 'react';

export default function MailOrFax({ onClose }) {
  return (
    <div>
      <h3 className="claims-status-upload-header">Mail and Fax Instructions</h3>
      <button
        className="va-modal-close"
        type="button"
        onClick={onClose}>
        <i className="fa fa-close"></i>
        <span className="usa-sr-only">Close this modal</span>
      </button>
      <p>
        Please upload your documents online here to help us process your claim quickly.
      </p>
      <p>
        If you can’t upload documents:
      </p>
      <ol>
        <li>Make copies of the documents.</li>
        <li>Make sure you write your name and claim number on every page.</li>
        <li>Mail or fax them to the <a target="_blank" href="http://www.benefits.va.gov/COMPENSATION/mailingaddresses.asp">VA Claims Intake Center.</a></li>
      </ol>
    </div>
  );
}

MailOrFax.propTypes = {
  onClose: PropTypes.func.isRequired
};
