import React from 'react';
import PropTypes from 'prop-types';

import {
  getAlertContent,
  getStatusContents,
  getNextEvents,
  ALERT_TYPES,
  APPEAL_TYPES,
  EVENT_TYPES,
  STATUS_TYPES
} from '../utils/appeals-v2-helpers';

import Timeline from '../components/appeals-v2/Timeline';
import CurrentStatus from '../components/appeals-v2/CurrentStatus';
import AlertsList from '../components/appeals-v2/AlertsList';
import WhatsNext from '../components/appeals-v2/WhatsNext';
import Docket from '../components/appeals-v2/Docket';

/**
 * AppealsV2StatusPage is in charge of the layout of the status page
 */
const AppealsV2StatusPage = ({ appeal, fullName }) => {
  const {
    events, alerts, status, docket, incompleteHistory, aod,
    active: appealIsActive,
    type: appealType
  } = appeal.attributes;
  const currentStatus = getStatusContents(status.type, status.details, fullName);
  const nextEvents = getNextEvents(status.type, status.details);

  // TODO: This will change. We'll be getting the date from the docket object in the api.
  const form9Event = events.find(e => e.type === EVENT_TYPES.form9, null);

  // Presumably we just won't even show the docket without this event, but that needs to be
  //  verified first. For now, we'll just make sure form9 event exists first.
  const form9Date = form9Event && form9Event.date;

  // Gates the What's Next and Docket chunks
  const hideDocketStatusTypes = [
    STATUS_TYPES.pendingSoc,
    STATUS_TYPES.pendingForm9,
    STATUS_TYPES.decisionInProgress,
    STATUS_TYPES.bvaDevelopment
  ];
  const hideDocketAppealTypes = [
    APPEAL_TYPES.reconsideration,
    APPEAL_TYPES.cue
  ];
  const shouldShowDocket = appealIsActive &&
    !hideDocketStatusTypes.includes(status.type) &&
    !hideDocketAppealTypes.includes(appealType);

  const filteredAlerts = alerts.filter(a => a.type !== ALERT_TYPES.cavcOption);
  const afterNextAlerts = (
    <div>
      {alerts
        .filter(a => a.type === ALERT_TYPES.cavcOption)
        .map((a, i) => {
          const alert = getAlertContent(a, appealIsActive);
          return (
            <div key={`after-next-alert-${i}`}>
              <h2>{alert.title}</h2>
              <div>{alert.description}</div>
            </div>
          );
        })
      }
    </div>
  );

  return (
    <div>
      <Timeline events={events} missingEvents={incompleteHistory}/>
      <CurrentStatus
        title={currentStatus.title}
        description={currentStatus.description}
        isClosed={!appealIsActive}/>
      <AlertsList alerts={filteredAlerts} appealIsActive/>
      {appealIsActive && <WhatsNext nextEvents={nextEvents}/>}
      {shouldShowDocket && <Docket {...docket} aod={aod} form9Date={form9Date} appealType={appealType}/>}
      {!appealIsActive && <div className="closed-appeal-notice">This appeal is now closed</div>}
      {afterNextAlerts}
    </div>
  );
};

AppealsV2StatusPage.propTypes = {
  appeal: PropTypes.shape({
    attributes: PropTypes.shape({
      events: PropTypes.array,
      alerts: PropTypes.array,
      status: PropTypes.shape({
        type: PropTypes.string,
        details: PropTypes.object,
      }).isRequired,
      docket: PropTypes.shape({
        total: PropTypes.number.isRequired,
        ahead: PropTypes.number.isRequired,
        eta: PropTypes.string.isRequired
      })
    }).isRequired,
  }),
  fullName: PropTypes.shape({
    first: PropTypes.string,
    middle: PropTypes.string,
    last: PropTypes.string,
  })
};

export default AppealsV2StatusPage;
