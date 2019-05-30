import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import recordEvent from '../../../../platform/monitoring/record-event';
import { getPhaseDescription, isClaimComplete, getClaimType } from '../../../claims-status/utils/helpers';

function listPhase(phase) {
  return (phase === 8) ? 'Closed' : getPhaseDescription(phase);
}

function handleViewClaim() {
  recordEvent({
    event: 'dashboard-navigation',
    'dashboard-action': 'view-button',
    'dashboard-product': 'view-claim',
  });
}

export default function ClaimsListItem({ claim }) {
  const inProgress = !isClaimComplete(claim);
  return (
    <div className="claim-list-item-container">
      <h3 className="claim-list-item-header-v2">{getClaimType(claim)} Claim – Received {moment(claim.attributes.dateFiled).format('MMMM D, YYYY')}</h3>
      <p className="status"><span className="claim-item-label">{moment(claim.attributes.phaseChangeDate).format('MMM D')} - Update: </span> {listPhase(claim.attributes.phase)}</p>
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
      <Link className="usa-button usa-button-primary" href={`/track-claims/your-claims/${claim.id}/status`} onClick={handleViewClaim}>View claim <i className="fa fa-chevron-right"/></Link>
    </div>
  );
}

ClaimsListItem.propTypes = {
  claim: PropTypes.object
};
