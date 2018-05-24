import React from 'react';
import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';

export const fieldFailureMessage = <span>We’re sorry. We can’t access this information right now. Please refresh the page or try again.</span>;

export default function LoadFail({ information }) {
  return (
    <AlertBox
      isVisible
      status="warning"
      content={<div>
        <h3>We can’t access your {information} information right now.</h3>
        <p>We’re sorry. Something went wrong on our end. Please refresh this page or try again later.</p>
      </div>}/>
  );
}
