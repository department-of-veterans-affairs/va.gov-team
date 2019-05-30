import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';

import DueDate from '../components/DueDate';
import { truncateDescription } from '../utils/helpers';

export default class RequestedFilesInfo extends React.Component {
  render() {
    const { id, filesNeeded, optionalFiles } = this.props;

    return (
      <div className="claims-requested-files-container">
        <div className="file-request-list">
          <h2 className="claim-file-border">File requests</h2>

          {filesNeeded.length + optionalFiles.length === 0
            ? <div className="no-documents"><p>You don’t need to turn in any documents to VA.</p></div>
            : null}

          {filesNeeded.map(item => (
            <div className="file-request-list-item usa-alert usa-alert-warning no-background-image alert-with-details" key={item.trackedItemId}>
              <div className="item-container">
                <h3 className="file-request-title">{item.displayName}</h3>
                <p className="submission-description">{truncateDescription(item.description)}</p>
                <DueDate date={item.suspenseDate}/>
              </div>
              <div className="button-container">
                <Link aria-label={`View Details for ${item.displayName}`} title={`View Details for ${item.displayName}`} className="usa-button usa-button-secondary view-details-button" to={`your-claims/${id}/document-request/${item.trackedItemId}`}>View Details</Link>
              </div>
            </div>
          ))}

          {optionalFiles.map(item => (
            <div className="file-request-list-item usa-alert file-request-list-item-optional no-background-image alert-with-details" key={item.trackedItemId}>
              <div className="item-container">
                <h3 className="file-request-title">{item.displayName}</h3>
                <p className="submission-description">{truncateDescription(item.description)}</p>
                <div className="claims-optional-desc"><strong>Optional</strong> - We requested this from others, but you may upload it if you have it.</div>
              </div>
              <div className="button-container">
                <Link aria-label={`View Details for ${item.displayName}`} title={`View Details for ${item.displayName}`} className="usa-button usa-button-secondary view-details-button" to={`your-claims/${id}/document-request/${item.trackedItemId}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>

        <div className="submit-file-container">
          <div className="submit-additional-evidence">
            <h2 className="claim-file-border">Additional evidence</h2>
            <div className="usa-alert additional-evidence-alert alert-with-details">
              <div className="item-container">
                <p className="additional-evidence-desc">Do you have more evidence to submit that supports your claim? Upload it here now.</p>
              </div>
              <div className="button-container">
                <Link aria-label="View details for additional evidence" title="View details for additional evidence" className="usa-button usa-button-secondary view-details-button" to={`your-claims/${id}/additional-evidence`}>View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

RequestedFilesInfo.propTypes = {
  id: PropTypes.string.isRequired,
  filesNeeded: PropTypes.array.isRequired,
  optionalFiles: PropTypes.array.isRequired
};
