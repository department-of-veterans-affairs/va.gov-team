import React from 'react';

class AddingDetails extends React.Component {
  render() {
    return (
      <div className="usa-alert usa-alert-info no-background-image claims-alert-status">
        <h4 className="claims-alert-header">We’re adding your details</h4>
        We’ve received your claim and are still adding some of your information. Check back soon to see the complete details of your claim.
      </div>
    );
  }
}

export default AddingDetails;
