import React, { Component } from 'react';
import { isEmpty, compact } from 'lodash';
import moment from 'moment';

import StatsBar from './StatsBar';

export default class AccessToCare extends Component {
  render() {
    const { facility } = this.props;

    if (!facility) {
      return null;
    }

    if (facility.attributes.facilityType !== 'va_health_facility') {
      return null;
    }

    const healthFeedbackAttrs = facility.attributes.feedback.health;

    if (isEmpty(compact(
      [
        healthFeedbackAttrs.primaryCareUrgent,
        healthFeedbackAttrs.specialtyCareUrgent,
        healthFeedbackAttrs.primaryCareRoutine,
        healthFeedbackAttrs.specialtyCareRoutine,
      ]
    ))) { return null; }

    const renderStat = (label, value) => {
      if (!value) return null;

      return (
        <div>
          <p><strong>{label}</strong></p>
          <StatsBar percent={value * 100}/>
        </div>
      );
    };

    return (
      <div className="mb2">
        <h4 className="highlight">Veteran-reported Satisfaction Scores</h4>
        <div className="mb2">
          <p>Current as of <strong>{moment(healthFeedbackAttrs.effectiveDate, 'YYYY-MM-DD').format('MMMM Do, YYYY')}</strong></p>
          <p>Veteran-reported satisfaction scores come from the Consumer Assessment of Health and Systems survey, which measures satisfaction of nearly 150,000 Veterans across the U.S. every 6 months.</p>
          <h4>Urgent care appointments</h4>
          <p>% of Veterans who say they usually or always get an appointment when they need care right away</p>
          <div className="mb2">
            {renderStat('Primary care at this location', healthFeedbackAttrs.primaryCareUrgent)}
          </div>
          <div className="mb2">
            {renderStat('Specialty care at this location', healthFeedbackAttrs.specialtyCareUrgent)}
          </div>

          <h4>Routine care appointments</h4>
          <p>% of Veterans who say they usually or always get an appointment when they need it</p>
          <div className="mb2">
            {renderStat('Primary care at this location', healthFeedbackAttrs.primaryCareRoutine)}
          </div>
          <div className="mb2">
            {renderStat('Specialty care at this location', healthFeedbackAttrs.specialtyCareRoutine)}
          </div>
        </div>
      </div>
    );
  }
}
