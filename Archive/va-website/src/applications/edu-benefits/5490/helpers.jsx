import _ from 'lodash/fp';

import React from 'react';
import { transformForSubmit } from '../../common/schemaform/helpers';

export function transform(formConfig, form) {
  // Clone the form in so we don’t modify the original...because of reasons FP
  const newForm = _.cloneDeep(form);

  const formData = transformForSubmit(formConfig, newForm);
  return JSON.stringify({
    educationBenefitsClaim: {
      form: formData
    }
  });
}

export const relationshipLabels = {
  child: 'Child, stepchild, adopted child',
  spouse: 'Spouse or surviving spouse',
};

export const highSchoolStatusLabels = {
  graduated: 'Graduated from high school',
  graduationExpected: 'Expect to graduate from high school',
  neverAttended: 'Never attended high school',
  discontinued: 'Discontinued or stopped high school',
  ged: 'Awarded GED'
};

export const benefitsRelinquishedInfo = (
  <span>
    While receiving DEA or FRY scholarship benefits you may not receive payments of Dependency and Indemnity Compensation (DIC) or Pension and you may not be claimed as a dependent in a Compensation claim. If you are unsure of this decision it is strongly encouraged you talk with a VA counselor.
  </span>
);

export const benefitsRelinquishedWarning = (
  <div className="usa-alert usa-alert-warning usa-content">
    <div className="usa-alert-body">
      I certify that I understand the effects that this election to receive DEA or FRY scholarship benefits will have on my eligibility for DIC payments, and I elect to receive the selected scholarship benefit on the above date.
    </div>
  </div>
);

export const benefitsDisclaimerSpouse = (
  <p>
    IMPORTANT: If you qualify for both the Survivors’ and Dependents’ Educational Assistance (DEA, Chapter 35) program and the Marine Gunnery Sergeant John David Fry Scholarship (Fry Scholarship, Chapter 33), you need to pick one or the other. You must give up entitlement to the benefit that you’re not applying for. <strong>You can’t retain eligibility for both programs at the same time</strong>.
  </p>
);

export const benefitsDisclaimerChild = (
  <p>
    IMPORTANT: If you qualify for both the Survivors’ and Dependents’ Educational Assistance (DEA, Chapter 35) program and the Marine Gunnery Sergeant John David Fry Scholarship (Fry Scholarship, Chapter 33), you need to pick one or the other. You must give up entitlement to the benefit that you’re not applying for (but only for the entitlement arising from the same event). <strong>You can't retain eligibility for both programs based on the same event</strong>.
  </p>
);
