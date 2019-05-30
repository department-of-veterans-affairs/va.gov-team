import React from 'react';
import PrefillMessage from '../../common/schemaform/save-in-progress/PrefillMessage';

export default function IdentifyFieldsWarning({ formData, formContext }) {
  if (formContext.prefilled && formData.processAsIdProofed) {
    return (
      <div className="usa-alert usa-alert-warning schemaform-prefill-message">
        <div className="usa-alert-body">
          <h4 className="usa-alert-title">We’ve started your form for you</h4>
          We’ve already filled in some of this form based on information you gave us. To protect your identity, we’ll do an additional review of your application if you change or edit your name, date of birth, or Social Security number on this page. This means it could take us longer to approve your Veteran ID Card application.
        </div>
      </div>
    );
  } else if (formContext.prefilled) {
    return <PrefillMessage/>;
  }

  return null;
}
