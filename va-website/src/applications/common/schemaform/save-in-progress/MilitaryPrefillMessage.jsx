import React from 'react';
import PrefillMessage from './PrefillMessage';

export default function MilitaryPrefillMessage(props) {
  return (
    <PrefillMessage {...props}>
      We’ve prefilled some of your military service details from your account. If you need to correct anything, you can edit the form fields below.
    </PrefillMessage>
  );
}
