import React from 'react';

import { transformForSubmit } from '../../common/schemaform/helpers';

export function directDepositDescription() {
  return (
    <div>
      <p>VA makes payments only through direct deposit, also called electronic funds transfer (EFT). The only exception is for participants in the Post-Vietnam Era Veterans’ Educational Assistance Program (VEAP).</p>

      <p>If you don’t have a bank account, VA will pay you through the Direct Express® Debit MasterCard®. Apply for a Direct Express® Debit MasterCard® at <a href="https://www.usdirectexpress.com/" target="_blank">www.usdirectexpress.com</a> or by calling <a href="tel:18003331795">1-800-333-1795</a>. To request a waiver, contact the Department of Treasury Electronic Solution Center at <a href="tel:18882242950">1-888-224-2950</a>.</p>
    </div>
  );
}

export function transform(formConfig, form) {
  const formData = transformForSubmit(formConfig, form);
  return JSON.stringify({
    educationBenefitsClaim: {
      form: formData
    }
  });
}

export const benefitsEligibilityBox = (
  <div className="usa-alert usa-alert-info">
    <div className="usa-alert-body">
      <ul>
        <li>You may be eligible for more than 1 education benefit program.</li>
        <li>You can only get payments from 1 program at a time.</li>
        <li>You can’t get more than 48 months of benefits under any combination of VA education programs.</li>
      </ul>
    </div>
  </div>
);

export const benefitsRelinquishmentLabels = {
  unknown: 'I’m only eligible for the Post-9/11 GI Bill',
  chapter30: 'Montgomery GI Bill (MGIB-AD, Chapter 30)',
  chapter1606: 'Montgomery GI Bill Selected Reserve (MGIB-SR, Chapter 1606)',
  chapter1607: 'Reserve Educational Assistance Program (REAP, Chapter 1607)'
};

export const benefitsRelinquishmentWarning = (
  <div>
    <p>Because you chose to apply for your Post-9/11 benefit, you have to relinquish (give up) 1 other benefit you may be eligible for.</p>
    <p><strong>Your decision is irrevocable</strong> (you can’t change your mind).</p>
    <br/>
  </div>
);

export const benefitsRelinquishedDescription = (
  <span>
    <br/>
    If you have questions or don’t understand the choice, talk to a specialist at 1-888-GI-BILL-1 (<a href="tel:+18884424551">1-888-442-4551</a>), Monday &#8211; Friday, 8:00 a.m. &#8211; 7:00 p.m. (ET).
  </span>
);

export const reserveKickerWarning = (
  <div className="usa-alert usa-alert-warning usa-content secondary">
    <div className="usa-alert-body">
      <span>You can only transfer a kicker from a benefit that you relinquish (give up). You chose to relinquish <strong>MGIB-SR</strong> so you won’t get your Active Duty kicker.</span>
    </div>
  </div>
);
