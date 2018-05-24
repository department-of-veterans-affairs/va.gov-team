import React from 'react';

class AppealsUnavailable extends React.Component {
  render() {
    return (
      <div className="usa-alert usa-alert-warning claims-unavailable">
        <div className="usa-alert-body">
          <h4 className="claims-alert-header">Appeal status is unavailable</h4>
          <p className="usa-alert-text">
            Vets.gov is having trouble loading appeals information at this time. Please check back again in a hour.
            Please note: You are still able to review claims information.
          </p>
        </div>
      </div>
    );
  }
}

export default AppealsUnavailable;
