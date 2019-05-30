import React from 'react';

export default function DowntimeNotificationWrapper({ status, children }) {
  return <div className="downtime-notification row-padded" data-status={status}>{children}</div>;
}
