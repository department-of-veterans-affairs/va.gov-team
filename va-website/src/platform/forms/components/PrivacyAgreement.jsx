import PropTypes from 'prop-types';
import React from 'react';
import ErrorableCheckbox from '@department-of-veterans-affairs/formation/ErrorableCheckbox';

export default function PrivacyAgreement({ onChange, checked, showError }) {
  return (
    <div>
      <ErrorableCheckbox required
        checked={checked}
        onValueChange={onChange}
        name="privacyAgreement"
        errorMessage={showError && !checked ? 'You must accept the privacy policy before continuing' : undefined}
        label={<span>I have read and accept the <a target="_blank" href="/privacy/">privacy policy</a></span>}/>
    </div>
  );
}

PrivacyAgreement.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
};
