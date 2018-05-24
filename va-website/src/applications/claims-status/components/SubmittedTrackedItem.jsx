import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import { truncateDescription, hasBeenReviewed, getItemDate } from '../utils/helpers';

export default function SubmittedTrackedItem({ item }) {
  const closed = item.type.startsWith('never_received') || item.status === 'NO_LONGER_REQUIRED';
  const reviewed = hasBeenReviewed(item);
  return (
    <div className="submitted-file-list-item">
      <h3 className="submission-file-type">{item.displayName}</h3>
      <p className="submission-description">{truncateDescription(item.description)}</p>
      {item.documents
        ? item.documents.map((doc, index) => (
          <div key={index} className="submission-description">
            <span className="claim-item-label">File:</span> {doc.filename}<br/>
            <span className="claim-item-label">Type:</span> {doc.fileType}
          </div>)
        )
        : null}
      {closed &&
        <div>
          <span className="submission-status">No longer needed</span>
        </div>}
      {!closed && reviewed &&
        <div>
          <span className="submission-status reviewed-file"><i className="fa fa-check-circle submission-icon"></i>Reviewed by VA</span>
          <span className="submission-date reviewed-file">{moment(getItemDate(item)).format('MMM D, YYYY')}</span>
        </div>}
      {!closed && !reviewed &&
        <div>
          <span className="submission-status">Submitted</span>
          <span className="submission-date">{moment(getItemDate(item)).format('MMM D, YYYY')}{' (pending)'}</span>
        </div>}
    </div>
  );
}

SubmittedTrackedItem.propTypes = {
  item: PropTypes.object.isRequired
};
