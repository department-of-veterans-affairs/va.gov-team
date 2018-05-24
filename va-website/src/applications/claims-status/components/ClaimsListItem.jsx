import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import { getPhaseDescription, isClaimComplete, getClaimType } from '../utils/helpers';

function listPhase(phase) {
  return (phase === 8) ? 'Closed' : getPhaseDescription(phase);
}

export default function ClaimsListItem({ claim }) {
  const inProgress = !isClaimComplete(claim);
  return (
    <div className="claim-list-item-container">
      <Link className="claim-list-item" to={`your-claims/${claim.id}/status`}>
        <h4 className="claim-list-item-header">{getClaimType(claim)} Claim – Received {moment(claim.attributes.dateFiled).format('MMMM D, YYYY')}</h4>
        <p className="status"><span className="claim-item-label">Status:</span> {listPhase(claim.attributes.phase)}</p>
        <ul className="communications">
          {inProgress && claim.attributes.developmentLetterSent
            ? <li className="claim-list-item-text"><i className="fa fa-envelope claim-list-item-icon"></i>We sent you a development letter</li>
            : null}
          {claim.attributes.decisionLetterSent
            ? <li className="claim-list-item-text"><i className="fa fa-envelope claim-list-item-icon"></i>We sent you a decision letter</li>
            : null}
          {inProgress && claim.attributes.documentsNeeded
            ? <li className="claim-list-item-text"><i className="fa fa-exclamation-triangle claim-list-item-icon"></i>Items need attention</li>
            : null}
        </ul>
        {claim.attributes.phaseChangeDate &&
          <p className="claim-list-item-text"><span className="claim-item-label">Last update:</span> {moment(claim.attributes.phaseChangeDate).format('MMM D, YYYY')}</p>}
      </Link>
    </div>
  );
}

ClaimsListItem.propTypes = {
  claim: PropTypes.object
};
