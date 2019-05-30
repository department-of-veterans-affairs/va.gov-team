import React from 'react';
import AdditionalInfo from '@department-of-veterans-affairs/formation/AdditionalInfo';

import { isValidUSZipCode, isValidCanPostalCode } from '../../../platform/forms/address';
import { stateRequiredCountries } from '../../common/schemaform/definitions/address';
import { transformForSubmit } from '../../common/schemaform/helpers';
import cloneDeep from '../../../platform/utilities/data/cloneDeep';
import get from '../../../platform/utilities/data/get';
import set from '../../../platform/utilities/data/set';
import { genderLabels } from '../../../platform/static-data/labels';
import { getDiagnosticCodeName, getDiagnosticText } from './reference-helpers';

const siblings = ['treatments', 'privateRecordReleases', 'privateRecords', 'additionalDocuments'];

import { PREFILL_STATUSES } from '../../common/schemaform/save-in-progress/actions';
import { DateWidget } from '../../common/schemaform/review/widgets';


/*
 * Flatten nested array form data into sibling properties
 *
 * @param {object} data - Form data for a full form, including nested array properties
 */
export function flatten(data) {
  const formData = cloneDeep(data);
  formData.disabilities.forEach((disability, idx) => {
    siblings.forEach(sibling => {
      if (disability[sibling]) {
        formData[sibling] = [];
        formData[sibling][idx] = disability[sibling];
        delete disability[sibling]; // eslint-disable-line no-param-reassign
      }
    });
  });
  return formData;
}


export function transform(formConfig, form) {
  const formData = flatten(transformForSubmit(formConfig, form));
  delete formData.prefilled;
  return JSON.stringify({
    disabilityBenefitsClaim: {
      form: formData
    }
  });
}


export const isPrefillDataComplete = (formData) => {
  const { socialSecurityNumber, vaFileNumber, gender,
    dateOfBirth, servicePeriods } = formData;
  const first = get('fullName.first', formData);
  const last = get('fullName.last', formData);
  const country = get('veteran.mailingAddress.country', formData);
  const addressLine1 = get('veteran.mailingAddress.addressLine1', formData);
  const emailAddress = get('veteran.emailAddress', formData);
  const primaryPhone = get('veteran.primaryPhone', formData);
  const accountType = get('directDeposit.accountType', formData);
  const routingNumber = get('directDeposit.routingNumber', formData);
  const bankName = get('directDeposit.bankName', formData);
  const noBank = get('directDeposit.noBank', formData);
  const hasVeteranDetails = first && last && gender && dateOfBirth && (socialSecurityNumber || vaFileNumber);
  const hasPrimaryAddressInfo = country && addressLine1 && emailAddress && primaryPhone;
  const hasPaymentInfo = noBank || (accountType && routingNumber && bankName);
  const hasMilitaryHistoryInfo = servicePeriods && servicePeriods.length > 0;
  return !!(hasVeteranDetails && hasPrimaryAddressInfo && hasPaymentInfo && hasMilitaryHistoryInfo);
};


export function prefillTransformer(pages, formData, metadata, state) {
  let newData = formData;
  const isPrefilled = state.prefilStatus === PREFILL_STATUSES.success;
  const hasRequiredInformation = isPrefillDataComplete(formData);

  if (isPrefilled && hasRequiredInformation) {
    newData = set('prefilled', true, newData);
  }

  return {
    metadata,
    formData: newData,
    pages
  };
}


export const supportingEvidenceOrientation = (
  <p>
    We’ll now ask you where we can find medical records or evidence about your
    worsened conditions after they were rated. You don’t need to turn in any
    medical records that you’ve already submitted with your original claim. <strong>
      We only need new medical records or other evidence about your condition
      after you got your disability rating.</strong>
  </p>
);

export const evidenceTypeHelp = (
  <AdditionalInfo triggerText="Which should I choose?">
    <h3>Types of evidence</h3>
    <h4>VA medical records</h4>
    <p>If you were treated at a VA medical center or clinic, or by a doctor through the TRICARE health care program, you’ll have VA medical records.</p>
    <h4>Private medical records</h4>
    <p>If you were treated by a private doctor, including a Veteran’s Choice doctor, you’ll have private medical records.
      We’ll need to see those records to make a decision on your claim. A Disability Benefit Questionnaire is an example of a private medical record.</p>
    <h4>Lay statements or other evidence</h4>
    <p>A lay statement is a written statement from family, friends, or coworkers to help support your claim. Lay statement are also called “buddy statements.” In most cases, you only need your medical records to support your disability claim. Some claims, for example, for Posttraumatic Stress Disorder or for military sexual trauma, could benefit from a lay or buddy statement.</p>
  </AdditionalInfo>
);


export const disabilityNameTitle = ({ formData }) => {
  return (
    <legend className="schemaform-block-title schemaform-title-underline">{getDiagnosticCodeName(formData.diagnosticCode)}</legend>
  );
};


export const facilityDescription = ({ formData }) => {
  return (
    <p>Tell us about facilities where VA treated you for {getDiagnosticCodeName(formData.diagnosticCode)}, <strong>after you got your disability rating</strong>.</p>
  );
};


export const treatmentView = ({ formData }) => {
  const { from, to } = formData.treatmentDateRange;

  let treatmentPeriod = '';
  if (from && to) {
    treatmentPeriod = `${from} — ${to}`;
  } else if (from || to) {
    treatmentPeriod = `${(from || to)}`;
  }

  return (
    <div>
      <strong>{formData.treatmentCenterName}</strong><br/>
      {treatmentPeriod}
    </div>
  );
};


export const vaMedicalRecordsIntro = ({ formData }) => {
  return (
    <p>Ok, first we’ll ask about your VA medical records related to your {getDiagnosticCodeName(formData.diagnosticCode)}.</p>
  );
};


export const privateRecordsChoice = ({ formData }) => {
  return (
    <div>
      <h4>About private medical records</h4>
      <p>
        You said you were treated for {getDiagnosticCodeName(formData.diagnosticCode)} by a private
        doctor. If you have those records, you can upload them here, or we can get them for you. If
        you want us to get your records, you’ll need to authorize their release.
      </p>
    </div>
  );
};


export const privateRecordsChoiceHelp = (
  <AdditionalInfo triggerText="Which should I choose?">
    <h4>You upload your medical records</h4>
    <p>
      If you upload a digital copy of all your medical records, we can review
      your claim more quickly. Uploading a digital file works best if you have
      a computer with a fast Internet connection. The digital file could be
      uploaded as a .pdf or other photo file format, like a .jpeg or .png.
    </p>
    <h4>We get your medical records from your doctor</h4>
    <p>
      We can get your medical records for you, but you’ll first need to fill
      out an Authorization to Disclose Information to VA (VA Form 21-4142) so
      we can request your records. Getting your records might take us some
      time, and this could mean it’ll take us longer to make a decision on
      your claim.
    </p>
    <p>
      <a href="https://www.vba.va.gov/pubs/forms/VBA-21-4142-ARE.pdf" target="_blank">
        Download VA Form 21-4142
      </a>.
    </p>
  </AdditionalInfo>
);

const firstOrNextString = (evidenceTypes) => (evidenceTypes['view:vaMedicalRecords'] ? 'next' : 'first');

export const privateMedicalRecordsIntro = ({ formData }) => (
  <p>
    Ok, {firstOrNextString(formData['view:selectableEvidenceTypes'])} we’ll ask about your private
    medical records related to your {getDiagnosticCodeName(formData.diagnosticCode)}.
  </p>
);

export function validatePostalCodes(errors, formData) {
  let isValidPostalCode = true;
  // Checks if postal code is valid
  if (formData.treatmentCenterCountry === 'USA') {
    isValidPostalCode = isValidPostalCode && isValidUSZipCode(formData.treatmentCenterPostalCode);
  }
  if (formData.treatmentCenterCountry === 'CAN') {
    isValidPostalCode = isValidPostalCode && isValidCanPostalCode(formData.treatmentCenterPostalCode);
  }

  // Add error message for postal code if it exists and is invalid
  if (formData.treatmentCenterPostalCode && !isValidPostalCode) {
    errors.treatmentCenterPostalCode.addError('Please provide a valid postal code');
  }
}

export function validateAddress(errors, formData) {
  // Adds error message for state if it is blank and one of the following countries:
  // USA, Canada, or Mexico
  if (stateRequiredCountries.has(formData.treatmentCenterCountry)
    && formData.treatmentCenterState === undefined) {
    // TODO: enable once validation determined
    // && currentSchema.required.length) {
    errors.treatmentCenterState.addError('Please select a state or province');
  }
  const hasAddressInfo = stateRequiredCountries.has(formData.treatmentCenterCountry)
    // TODO: enable once validation determined
    // && !currentSchema.required.length
    && typeof formData.treatmentCenterCity !== 'undefined'
    && typeof formData.treatmentCenterStreet !== 'undefined'
    && typeof formData.treatmentCenterPostalCode !== 'undefined';

  if (hasAddressInfo && typeof formData.treatmentCenterState === 'undefined') {
    errors.treatmentCenterState.addError('Please enter a state or province, or remove other address information.');
  }

  validatePostalCodes(errors, formData);
}

export const download4142Notice = (
  <div className="usa-alert usa-alert-warning no-background-image">
    <p>
      Since your doctor has your private medical records, you’ll need to fill
      out an Authorization to Disclose Information to the VA (VA Form 21-4142) so
      we can request your records. You’ll need to fill out a form for each doctor.
    </p>
    <p>
      <a href="https://www.vba.va.gov/pubs/forms/VBA-21-4142-ARE.pdf" target="_blank">
        Download VA Form 21-4142
      </a>.
    </p>
  </div>
);

export const authorizationToDisclose = (
  <div>
    <p>Since your medical records are with your doctor, you’ll need to fill out an Authorization to Disclose
    Information to the VA (VA Form 21-4142) so we can request your records. You’ll need to fill out a form for
    each doctor.</p>
    <p>
      <a href="https://www.vba.va.gov/pubs/forms/VBA-21-4142-ARE.pdf" target="_blank">
        Download VA Form 21-4142
      </a>.
    </p>
    <p>Please print the form, fill it out, and send it to:</p>
    <p className="va-address-block">
      Department of Veterans Affairs<br/>
      Claims Intake Center<br/>
      PO Box 4444<br/>
      Janesville, WI 53547-4444
    </p>
  </div>
);

export const recordReleaseWarning = (
  <div className="usa-alert usa-alert-warning no-background-image">
    <span>Limiting consent means that your doctor can only share records that are
      directly related to your condition. This could add to the time it takes to
      get your private medical records.</span>
  </div>
);

export const documentDescription = () => {
  return (
    <div>
      <p>File upload guidelines:</p>
      <ul>
        <li>File types you can upload: .pdf, .jpeg, or .png</li>
        <li>Maximum file size: 50 MB</li>
      </ul>
      <p><em>Large files can be more difficult to upload with a slow Internet connection</em></p>
    </div>
  );
};

export const additionalDocumentDescription = () => {
  return (
    <div>
      <p>If you have other evidence, like lay or buddy statements, that you would
        like to submit, you can upload them here.</p>
      <p>File upload guidelines:</p>
      <ul>
        <li>File types you can upload: .pdf, .jpeg, or .png</li>
        <li>Maximum file size: 50 MB</li>
      </ul>
      <p><em>Large files can be more difficult to upload with a slow Internet connection</em></p>
    </div>
  );
};

const getVACenterName = (center) => center.treatmentCenterName;

const getPrivateCenterName = (release) => release.privateRecordRelease.treatmentCenterName;

const listifyCenters = (center, idx, list) => {
  const centerName = center.treatmentCenterName ? getVACenterName(center) : getPrivateCenterName(center);
  const notLast = idx < (list.length - 1);
  const justOne = list.length === 1;
  const atLeastThree = list.length > 2;
  return (
    <span key={idx}>
      {!notLast && !justOne && <span className="unstyled-word"> and </span>}
      {centerName}
      {atLeastThree && notLast && ', '}
    </span>
  );
};

export const evidenceSummaryView = ({ formData }) => {
  const {
    vaTreatments,
    privateRecordReleases,
    privateRecords,
    additionalDocuments
  } = formData;
  return (
    <div>
      <ul>
        {vaTreatments &&
        <li>We’ll get your medical records from <span className="treatment-centers">{vaTreatments.map(listifyCenters)}</span>.</li>}
        {privateRecordReleases &&
        <li>We’ll get your private medical records from <span className="treatment-centers">{privateRecordReleases.map(listifyCenters)}</span>.</li>}
        {privateRecords && <li>We have received the private medical records you uploaded.</li>}
        {additionalDocuments &&
        <li>We have received the additional evidence you uploaded:
          <ul>
            {additionalDocuments.map((document, id) => {
              return (<li className="dashed-bullet" key={id}>
                <strong>{document.name}</strong>
              </li>);
            })
            }
          </ul>
        </li>}
      </ul>
    </div>
  );
};

const FullNameViewField = ({ formData }) => {
  const { first, middle, last, suffix } = formData;
  return <strong>{first} {middle} {last} {suffix}</strong>;
};

const SsnViewField = ({ formData }) => {
  const ssn = formData.slice(5);
  const mask = <span>•••-••-</span>;
  return <p>Social Security number: {mask}{ssn}</p>;
};

const VAFileNumberViewField = ({ formData }) => {
  const vaFileNumber = formData.slice(5);
  const mask = <span>•••-••-</span>;
  return <p>VA file number: {mask}{vaFileNumber}</p>;
};

const DateOfBirthViewField = ({ formData }) => {
  return <p>Date of birth: <DateWidget value={formData} options={{ monthYear: false }}/></p>;
};

const GenderViewField = ({ formData }) => <p>Gender: {genderLabels[formData]}</p>;

export const veteranInformationViewField = ({ formData }) => {
  return (
    <div>
      <FullNameViewField formData={formData.fullName}/>
      <SsnViewField formData={formData.socialSecurityNumber}/>
      <VAFileNumberViewField formData={formData.vaFileNumber}/>
      <GenderViewField formData={formData.gender}/>
      <DateOfBirthViewField formData={formData.dateOfBirth}/>
    </div>
  );
};

/**
 * @typedef {Object} Disability
 * @property {String} diagnosticCode
 * @property {String} name
 * @property {String} ratingPercentage
 *
 * @param {Disability} disability
 */
export const disabilityOption = ({ diagnosticCode, name, ratingPercentage }) => {
  // May need to throw an error to Sentry if any of these doesn't exist
  // A valid rated disability *can* have a rating percentage of 0%
  const showRatingPercentage = Number.isInteger(ratingPercentage);

  return (
    <div>
      {diagnosticCode && <h4>{getDiagnosticCodeName(diagnosticCode)}</h4>}
      {name && <p className="diagnostic-text">{getDiagnosticText(name)}</p>}
      {showRatingPercentage && <p>Current rating: <strong>{ratingPercentage}%</strong></p>}
    </div>
  );
};


export const ITFErrorAlert = (
  <div className="usa-alert usa-alert-warning">
    <div className="usa-alert-body">
      <h3>We’re sorry. Your intent to file request didn’t go through. Please try again.</h3>
    </div>
  </div>
);


export const UnauthenticatedAlert = (
  <div>
    <div className="usa-alert usa-alert-info schemaform-sip-alert">
      <div className="usa-alert-body">
        To apply for a disability increase, you’ll need to sign in and verify your account.
      </div>
    </div>
    <br/>
  </div>
);


export const UnverifiedAlert = (
  <div>
    <div className="usa-alert usa-alert-info schemaform-sip-alert">
      <div className="usa-alert-body">
        To apply for a disability increase, you’ll need to verify your account.
      </div>
    </div>
    <br/>
  </div>
);


export const VerifiedAlert =  (
  <div>
    <div className="usa-alert usa-alert-info schemaform-sip-alert">
      <div className="usa-alert-body">
        <strong>Note:</strong> Since you’re signed in to your account and your account is verified, we can prefill part of your application based on your account details. You can also save your form in progress, and come back later to finish filling it out. You have 1 year from the date you start or update your application to submit the form.
      </div>
    </div>
    <br/>
  </div>
);


export const GetFormHelp = () => {
  return (
    <div>
      <p className="help-talk">For help filling out this form, please call:</p>
      <p className="help-phone-number">
        <a className="help-phone-number-link" href="tel:+1-877-222-8387">1-877-222-VETS</a> (<a className="help-phone-number-link" href="tel:+1-877-222-8387">1-877-222-8387</a>)<br/>
        Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET)
      </p>
    </div>
  );
};

export const ITFDescription = (
  <span><strong>Note:</strong> By clicking the button to start the disability application, you’ll declare your intent to file, and this will set the date you can start getting benefits. This intent to file will expire 1 year from the day you start your application.</span>
);

export const VAFileNumberDescription = (
  <div className="additional-info-title-help">
    <AdditionalInfo triggerText="What does this mean?">
      <p>The VA file number is the number used to track your disability claim and evidence through the VA system. For most Veterans, your VA file number is the same as your Social Security number. However, if you filed your first disability claim a long time ago, your VA file number may be a different number.</p>
    </AdditionalInfo>
  </div>
);

const PhoneViewField = ({ formData: phoneNumber, name }) => {
  const isDomestic = phoneNumber.length <= 10;
  const midBreakpoint = isDomestic ? -7 : -8;
  const lastPhoneString = `${phoneNumber.slice(-4)}`;
  const middlePhoneString = `${phoneNumber.slice(midBreakpoint, -4)}-`;
  const firstPhoneString = `${phoneNumber.slice(0, midBreakpoint)}-`;

  const phoneString = `${firstPhoneString}${middlePhoneString}${lastPhoneString}`;
  return (<p><strong>{name}</strong>: {phoneString}</p>);
};

const EmailViewField = ({ formData, name }) => {
  return (<p><strong>{name}</strong>: {formData}</p>);
};

const EffectiveDateViewField = ({ formData }) => {
  return (
    <p>
      Effective Date: <DateWidget value={formData} options={{ monthYear: false }}/>
    </p>
  );
};

const AddressViewField = ({ formData }) => {
  const {
    addressLine1, addressLine2, addressLine3, city, state,
    zipCode, militaryStateCode, militaryPostOfficeTypeCode
  } = formData;
  let zipString;
  let stateString;
  let cityString;
  if (zipCode) {
    const firstFive = zipCode.slice(0, 5);
    const lastChunk = zipCode.length > 5 ? `-${zipCode.slice(5)}` : '';
    zipString = `${firstFive}${lastChunk}`;
  }
  if (city || militaryPostOfficeTypeCode) {
    cityString = `${city},` || `${militaryPostOfficeTypeCode},`;
  }
  if (state || militaryStateCode) {
    stateString = `${state}` || `${militaryStateCode}`;
  }
  return (
    <div>
      {addressLine1 && <p>{addressLine1}</p>}
      {addressLine2 && <p>{addressLine2}</p>}
      {addressLine3 && <p>{addressLine3}</p>}
      <p>{cityString} {stateString} {zipString}</p>
    </div>
  );
};

export const PrimaryAddressViewField = ({ formData }) => {
  const {
    mailingAddress, primaryPhone, secondaryPhone,
    emailAddress, forwardingAddress
  } = formData;
  return (
    <div>
      <AddressViewField formData={mailingAddress}/>
      {primaryPhone && (
        <PhoneViewField formData={primaryPhone} name="Primary phone"/>
      )}
      {secondaryPhone && (
        <PhoneViewField formData={secondaryPhone} name="Secondary phone"/>
      )}
      {emailAddress && (
        <EmailViewField formData={emailAddress} name="Email address"/>
      )}
      {formData['view:hasForwardingAddress'] && (
        <AddressViewField formData={forwardingAddress}/>
      )}
      {formData.effectiveDate && (
        <EffectiveDateViewField formData={forwardingAddress.effectiveDate}/>
      )}
    </div>
  );
};


export const specialCircumstancesDescription = (
  <p>To help us better understand your situation, please tell us if
      any of the below situations apply to you. <strong>Are you:</strong></p>
);


export const FDCDescription = (
  <div>
    <h5>Fully developed claim program</h5>
    <p>
      You can apply using the Fully Developed Claim (FDC) program if
      you’ve uploaded all the supporting documents or supplemental
      forms needed to support your claim.
    </p>
    <a href="/pension/apply/fully-developed-claim/" target="_blank">
      Learn more about the FDC program
    </a>.
  </div>
);


export const FDCWarning = (
  <div className="usa-alert usa-alert-info no-background-image">
    <div className="usa-alert-body">
      <div className="usa-alert-text">
        Since you’ve uploaded all your supporting documents, your
        claim will be submitted as a fully developed claim.
      </div>
    </div>
  </div>
);


export const noFDCWarning = (
  <div className="usa-alert usa-alert-info no-background-image">
    <div className="usa-alert-body">
      <div className="usa-alert-text">
        Since you’ll be sending in additional documents later,
        your application doesn’t qualify for the Fully Developed
        Claim program. We’ll review your claim through the
        standard claim process. Please turn in any information to
        support your claim as soon as you can.
      </div>
    </div>
  </div>
);

const evidenceTypesDescription = (disabilityName) => {
  return (
    <p>What supporting evidence do you have that shows how your {disabilityName} <strong>has worsened since VA rated your disability</strong>?</p>
  );
};

export const getEvidenceTypesDescription = (form, index) => {
  return evidenceTypesDescription(getDiagnosticCodeName(form.disabilities[index].diagnosticCode));
};

/**
 * If user chooses private medical record supporting evidence, he/she has a choice
 * to either upload PMRs directly or fill out a 4142. Here, we determine if the user
 * chose the 4142 option for any of his/her disabilities
 * @param {array} disabilities
 * @returns {boolean} true if user selected option to fill out 4142 on their own
 */
export const get4142Selection = (disabilities) => {
  return disabilities.reduce((selected, disability) => {
    if (selected === true) {
      return true;
    }

    const {
      'view:selected': viewSelected,
      'view:uploadPrivateRecords': viewUploadPMR
    } = disability;
    if (viewSelected === true && viewUploadPMR === 'no') {
      return true;
    }
    return false;
  }, false);
};
