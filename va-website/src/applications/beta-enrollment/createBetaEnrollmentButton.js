import React from 'react';
import BetaEnrollmentButton from './containers/BetaEnrollmentButton';

/**
 * A helper function for creating new beta-enrollment buttons
 * @param {string} feature the name of the service to be registered into the user's services property once the button is pressed. This service must also be registered in the API.
 * @param {*} returnUrl the URL which the user will be redirected after the service is successfully saved
 */
export default function createBetaEnrollmentButton(feature, returnUrl) {
  return () => {
    return <BetaEnrollmentButton feature={feature} returnUrl={returnUrl}/>;
  };
}
