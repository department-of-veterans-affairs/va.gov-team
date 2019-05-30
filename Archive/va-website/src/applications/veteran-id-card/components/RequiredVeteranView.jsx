import PropTypes from 'prop-types';
import React from 'react';

import SystemDownView from '@department-of-veterans-affairs/formation/SystemDownView';

class RequiredVeteranView extends React.Component {
  render() {
    let view;
    const serviceAvailable = this.props.userProfile.services.indexOf('id-card') !== -1;

    if (this.props.userProfile.veteranStatus === 'SERVER_ERROR') {
      // If eMIS status is null, show a system down message.
      view = <SystemDownView messageLine1="We’re sorry. We can’t process your request for a Veteran ID Card right now because we can't access your records at the moment. Please try again in a few minutes." messageLine2="If it still doesn’t work, please call the Vets.gov Help Desk at 1-855-574-7286, TTY: 1-800-877-8339. We’re here Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET)."/>;
    } else if (this.props.userProfile.veteranStatus === 'NOT_FOUND') {
      // If eMIS status is "not found", show message that we cannot find the user
      // in our system.
      view = <SystemDownView messageLine1="We’re sorry, but we need more information to process your Veteran ID Card request." messageLine2="Please call the Vets.gov Help Desk at 1-855-574-7286, TTY: 1-800-877-8339. We’re here Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET)."/>;
    } else if (this.props.userProfile.veteranStatus === 'OK') {
      if (!serviceAvailable) {
        // If all above conditions are true and service is still not present in user profile, then user
        // is not eligible due to title 38 status indicator
        view = <SystemDownView messageLine1="We're sorry. We can't proceed with your request for a Veteran ID card because we can't confirm your eligibility right now." messageLine2="Please call the Vets.gov Help Desk at 1-855-574-7286, TTY: 1-800-877-8339. We’re here Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET)."/>;
      } else {
        view = this.props.children;
      }
    }

    return (
      <div>
        {view}
      </div>
    );
  }
}

RequiredVeteranView.propTypes = {
  userProfile: PropTypes.object.isRequired,
};

export default RequiredVeteranView;
