import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import { getItemDate } from '../utils/helpers';

export default function AdditionalEvidenceItem({ item }) {
  const itemDate = getItemDate(item);
  return (
    <div className="submitted-file-list-item">
      <h3 className="submission-file-type additional-evidence">Additional evidence</h3>
      <p className="submission-description">
        <span className="claim-item-label">File:</span> {item.filename}<br/>
        <span className="claim-item-label">Type:</span> {item.fileType}
      </p>
      <div>
        <strong className="submission-status">Submitted</strong>
        {!!itemDate && <span className="submission-date">{moment(itemDate).format('MMM D, YYYY')}</span>}
      </div>
    </div>
  );
}

AdditionalEvidenceItem.propTypes = {
  item: PropTypes.object.isRequired
};
