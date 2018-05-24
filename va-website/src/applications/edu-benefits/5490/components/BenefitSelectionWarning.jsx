import React from 'react';

export default function BenefitSelectionWarning(chapter, relationship) {
  let warningText = '';
  if (chapter === 'chapter33') {
    // Fry
    if (relationship === 'child') {
      warningText = 'I understand that I am choosing to receive Fry Scholarship benefits instead of DEA benefits for which I am currently eligible based on the death of the qualifying individual on this application. I understand that even after this choice I will continue to be eligible for DEA benefits if the eligibility is based on the death of the qualifying individual on this application, based on a parent who has a permanent and total service-connected disability, or based on any other criteria as listed in 38 U.S.C. § 3501(a)(1).';
    } else {
      // spouse
      warningText = 'I understand that I am choosing to receive Fry Scholarship benefits instead of any DEA benefits for which I am currently eligible. This includes DEA benefits based on the death of the qualifying individual on this application, based on the death of any other individuals not listed on this application, based on a spouse who has a permanent and total service-connected disability, or based on any other criteria as listed in 38 U.S.C. § 3501(a)(1).';
    }
  } else {
    // DEA
    if (relationship === 'child') {
      warningText = 'I understand that I am choosing to receive DEA benefits instead of any Fry Scholarship benefits based on the death of the qualifying individual on this application. I understand that even after this choice I will continue to be eligible for Fry Scholarship benefits if the eligibility is based on the death of the qualifying individual on this application.';
    } else {
      // spouse
      warningText = 'I understand that I am choosing to receive DEA benefits instead of any Fry Scholarship benefits for which I am currently eligible. This includes Fry Scholarship benefits based on the death of the qualifying individual on this application, as well as, Fry Scholarship benefits based on the death of any other individuals not listed on this application.';
    }
  }
  return (
    <div className="usa-alert usa-alert-warning usa-content edu-warning-single-line">
      <div className="usa-alert-body">
        {warningText}
      </div>
    </div>
  );
}
