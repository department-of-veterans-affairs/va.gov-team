import React from 'react';
import Modal from '@department-of-veterans-affairs/formation/Modal';
import serviceStatus from '../config/serviceStatus';
import DowntimeNotificationWrapper from './Wrapper';

class DowntimeApproaching extends React.Component {
  componentDidMount() {
    this.props.initializeDowntimeWarnings();
  }
  render() {
    const {
      startTime,
      endTime,
      appTitle,
      isDowntimeWarningDismissed,
      dismissDowntimeWarning,
      children,
      content
    } = this.props;
    return (
      <DowntimeNotificationWrapper status={serviceStatus.downtimeApproaching}>
        <Modal id="downtime-approaching-modal"
          onClose={dismissDowntimeWarning}
          visible={!isDowntimeWarningDismissed}>
          <h3>The {appTitle} will be down for maintenance soon</h3>
          <p>We’ll be doing some work on the {appTitle} on {startTime.format('MMMM Do')} between {startTime.format('LT')} and {endTime.format('LT')} If you have trouble using this tool during that time, please check back soon.</p>
          <button type="button" className="usa-button-secondary" onClick={dismissDowntimeWarning}>Dismiss</button>
        </Modal>
        {children || content}
      </DowntimeNotificationWrapper>
    );
  }
}

export default DowntimeApproaching;
