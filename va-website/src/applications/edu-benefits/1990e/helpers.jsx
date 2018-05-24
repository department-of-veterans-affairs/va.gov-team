import React from 'react';

import { transformForSubmit } from '../../common/schemaform/helpers';

export function transform(formConfig, form) {
  const formData = transformForSubmit(formConfig, form);
  return JSON.stringify({
    educationBenefitsClaim: {
      form: formData
    }
  });
}

export function eligibilityDescription() {
  return (
    <div className="usa-alert usa-alert-warning usa-content edu-benefits-alert">
      <div className="usa-alert-body">
        <ul>
          <li>You may be eligible for more than 1 education benefit program.</li>
          <li>You can only get payments from 1 program at a time.</li>
          <li>You can’t get more than 48 months of benefits under any combination of VA education programs.</li>
          <li>If you are unsure of what benefit has been transferred to you, please contact your Sponsor.</li>
        </ul>
      </div>
    </div>
  );
}

export const benefitsLabels = {
  chapter33: <p>Post-9/11 GI Bill (Chapter 33)</p>,
  chapter30: <p>Montgomery GI Bill (MGIB-AD, Chapter 30)</p>,
};
