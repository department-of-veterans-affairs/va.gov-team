import React from 'react';

class ClaimsUnauthorized extends React.Component {
  render() {
    return (
      <div className="usa-alert usa-alert-warning claims-unavailable">
        <div className="usa-alert-body">
          <h4 className="claims-alert-header">Sorry, your session has expired</h4>
          <p className="usa-alert-text">
            You may need to refresh the page and sign in again.
          </p>
        </div>
      </div>
    );
  }
}

export default ClaimsUnauthorized;
