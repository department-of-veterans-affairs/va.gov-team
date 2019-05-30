import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { orderBy } from 'lodash';
import recordEvent from '../../../platform/monitoring/record-event';
import { APPEAL_V2_TYPE } from '../utils/appeals-v2-helpers';

import { getClaimType } from '../utils/helpers';

const appealTypes = ['appeals_status_models_appeals', APPEAL_V2_TYPE];

export default function ClosedClaimMessage({ claims, onClose }) {
  const closedClaims = claims.filter(claim => {
    if (appealTypes.includes(claim.type)) {
      const sixtyDaysAgo = moment().add(-60, 'days').startOf('day');
      const events = orderBy(claim.attributes.events, [e => moment(e.date).unix()], ['desc']);
      const lastEvent = events[0];

      return !claim.attributes.active && moment(lastEvent.date).startOf('day').isAfter(sixtyDaysAgo);
    }

    return !claim.attributes.open
      && moment(claim.attributes.phaseChangeDate).startOf('day').isAfter(moment().add(-30, 'days').startOf('day'));
  }).map(c => {
    if (appealTypes.includes(c.type)) {
      const events = orderBy(c.attributes.events, [e => moment(e.date).unix()], ['desc']);
      return {
        ...c,
        attributes: {
          ...c.attributes,
          dateFiled: events[events.length - 1].date,
          phaseChangeDate: c.attributes.prior_decision_date || events[0].date,
        }
      };
    }

    return c;
  });

  if (!closedClaims.length) {
    return null;
  }

  return (
    <div className="usa-alert usa-alert-warning claims-alert claims-list-alert" role="alert">
      <button className="va-alert-close notification-close" onClick={onClose} aria-label="Close notification">
        <i className="fa fa-close va-alert-close-icon" aria-label="Close icon"></i>
      </button>
      <div className="usa-alert-body">
        <h4 className="usa-alert-title">Recently closed:</h4>
        {closedClaims.map(claim => (
          <p className="usa-alert-text claims-closed-text" key={claim.id}>
            <Link to={appealTypes.includes(claim.type) ? `appeals/${claim.id}/status` : `your-claims/${claim.id}/status`} onClick={() => { recordEvent({ event: 'claims-closed-alert-clicked' }); }}>Your {appealTypes.includes(claim.type) ? 'Compensation Appeal' : getClaimType(claim)} – Received {moment(claim.attributes.dateFiled).format('MMMM D, YYYY')}</Link> has been closed as of {moment(claim.attributes.phaseChangeDate).format('MMMM D, YYYY')}
          </p>
        ))}
      </div>
    </div>
  );
}
