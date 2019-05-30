import React from 'react';
import serviceStatus from '../config/serviceStatus';
import DowntimeNotificationWrapper from './Wrapper';

export default function Down({ endTime, appTitle }) {
  let message = <p>We’re making some updates to the {appTitle}. We’re sorry it’s not working right now. Please check back soon.</p>;
  if (endTime) {
    message = (
      <p>We’re making some updates to the {appTitle}. We’re sorry it’s not working right now, and we hope to be finished by {endTime.format('MMMM Do, LT')} Please check back soon.</p>
    );
  }
  return (
    <DowntimeNotificationWrapper status={serviceStatus.down}>
      <div className="usa-content">
        <h3>The {appTitle} is down for maintenance</h3>
        {message}
      </div>
    </DowntimeNotificationWrapper>
  );
}
