import React from 'react';
import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';
import { serviceStatus } from '../../../../platform/monitoring/DowntimeNotification';

function DowntimeBanner({ downtime, section }) {
  return (
    <AlertBox
      status="warning"
      isVisible
      content={
        <div>
          <h3>We can’t show your {section} information right now.</h3>
          <p>We’re sorry. The system that handles {section} information is down for maintenance right now. We hope to be finished with our work by {downtime.startTime.format('MMMM Do')}, {downtime.endTime.format('LT')}. Please check back soon.</p>
        </div>
      }/>
  );
}

function handleDowntimeForSection(section) {
  return (downtime, children) => {
    if (downtime.status === serviceStatus.down) {
      return <DowntimeBanner section={section} downtime={downtime}/>;
    }
    return children;
  };
}

export { handleDowntimeForSection };

export default DowntimeBanner;
