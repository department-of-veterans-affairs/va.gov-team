import React from 'react';
import Raven from 'raven-js';
import moment from 'moment';
import environment from '../../platform/utilities/environment';
import { transformForSubmit } from '../common/schemaform/helpers';

function replacer(key, value) {
  // if the containing object has a name, we’re in the national guard object
  // and we want to keep addresses no matter what
  if (!this.name && typeof value !== 'undefined' && typeof value.country !== 'undefined' &&
    (!value.street || !value.city || (!value.postalCode && !value.zipcode))) {
    return undefined;
  }

  // clean up empty objects, which we have no reason to send
  if (typeof value === 'object') {
    const fields = Object.keys(value);
    if (fields.length === 0 || fields.every(field => value[field] === undefined)) {
      return undefined;
    }
  }

  return value;
}

function checkStatus(guid) {
  const userToken = window.sessionStorage.userToken;
  const headers = {
    'Content-Type': 'application/json',
    'X-Key-Inflection': 'camel',
  };

  if (userToken) {
    headers.Authorization = `Token token=${userToken}`;
  }
  return fetch(`${environment.API_URL}/v0/pension_claims/${guid}`, {
    headers,
    mode: 'cors'
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(res);
    }).catch(res => {
      if (res instanceof Error) {
        Raven.captureException(res);
        Raven.captureMessage('vets_pension_poll_client_error');

        // keep polling because we know they submitted earlier
        // and this is likely a network error
        return Promise.resolve();
      }

      // if we get here, it's likely that we hit a server error
      return Promise.reject(res);
    });
}

const POLLING_INTERVAL = 1000;

function pollStatus({ guid, confirmationNumber, regionalOffice }, onDone, onError) {
  setTimeout(() => {
    checkStatus(guid)
      .then(res => {
        if (!res || res.data.attributes.state === 'pending') {
          pollStatus({ guid, confirmationNumber, regionalOffice }, onDone, onError);
        } else if (res.data.attributes.state === 'success') {
          const response = res.data.attributes.response || { confirmationNumber, regionalOffice };
          onDone(response);
        } else {
          // needs to start with this string to get the right message on the form
          throw new Error(`vets_server_error_pensions: status ${res.data.attributes.state}`);
        }
      })
      .catch(onError);
  }, window.VetsGov.pollTimeout || POLLING_INTERVAL);
}

function transform(formConfig, form) {
  const formData = transformForSubmit(formConfig, form, replacer);
  return JSON.stringify({
    pensionClaim: {
      form: formData
    },
    // can’t use toISOString because we need the offset
    localTime: moment().format('Y-MM-DD[T]kk:mm:ssZZ')
  });
}

export function submit(form, formConfig) {
  const userToken = window.sessionStorage.userToken;
  const headers = {
    'Content-Type': 'application/json',
    'X-Key-Inflection': 'camel',
  };

  if (userToken) {
    headers.Authorization = `Token token=${userToken}`;
  }

  const body = transform(formConfig, form);

  return fetch(`${environment.API_URL}/v0/pension_claims`, {
    body,
    headers,
    method: 'POST',
    mode: 'cors'
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }).then(resp => {
    const { guid, confirmationNumber, regionalOffice } = resp.data.attributes;
    return new Promise((resolve, reject) => {
      pollStatus({ guid, confirmationNumber, regionalOffice }, response => {
        window.dataLayer.push({
          event: `${formConfig.trackingPrefix}-submission-successful`,
        });
        return resolve(response);
      }, error => reject(error));
    });
  }).catch(respOrError => {
    if (respOrError instanceof Response) {
      if (respOrError.status === 429) {
        const error = new Error('vets_throttled_error_pensions');
        error.extra = parseInt(respOrError.headers.get('x-ratelimit-reset'), 10);

        return Promise.reject(error);
      }
    }
    return Promise.reject(respOrError);
  });
}

export const employmentDescription = <p className="pension-employment-desc">Please tell us about all of your employment, including self-employment, <strong>from one year before you became disabled</strong> to the present.</p>;

export function isMarried(form = {}) {
  return ['Married', 'Separated'].includes(form.maritalStatus);
}

const numberToWords = {
  0: 'First',
  1: 'Second',
  2: 'Third',
  3: 'Fourth',
  4: 'Fifth',
  5: 'Sixth',
  6: 'Seventh',
  7: 'Eighth',
  8: 'Ninth',
  9: 'Tenth'
};

export function getMarriageTitle(index) {
  const desc = numberToWords[index];

  return desc ? `${desc} marriage` : `Marriage ${index + 1}`;
}

export function getSpouseMarriageTitle(index) {
  const desc = numberToWords[index];

  return desc ? `Spouse’s ${desc.toLowerCase()} marriage` : `Spouse marriage ${index + 1}`;
}

export function getMarriageTitleWithCurrent(form, index) {
  if (isMarried(form) && (form.marriages.length - 1) === index) {
    return 'Current marriage';
  }

  return getMarriageTitle(index);
}

export const spouseContribution = <span>How much do you <strong>contribute monthly</strong> to your spouse’s support?</span>;

export function fileHelp({ formData }) {
  const hasSchoolChild = (formData.dependents || []).some(child => child.attendingCollege);

  const hasDisabledChild = (formData.dependents || []).some(child => child.disabled);

  return (
    <div>
      <p>Please upload all documentation to support your claim. {(hasSchoolChild || hasDisabledChild) && 'This includes:'}</p>
      <ul>
        {hasSchoolChild &&
          <li>A completed Request for Approval of School Attendance (<a href="https://www.vba.va.gov/pubs/forms/VBA-21-674-ARE.pdf" target="_blank">VA Form 21-674</a>)</li>}
        {hasDisabledChild &&
          <li>Private medical records documenting your child’s disability before the age of 18</li>}
      </ul>
      <p>If you’re claiming for Aid and Attendance or Housebound benefits, this includes:</p>
      <ul>
        <li>A completed Examination for Housebound Status or Permanent Need for Regular Aid and Attendance (<a href="https://www.vba.va.gov/pubs/forms/VBA-21-2680-ARE.pdf" target="_blank">VA Form 21-2680</a>)</li>
        <li>A completed Request for Nursing Home Information in Connection with Claim for Aid and Attendance (<a href="https://www.vba.va.gov/pubs/forms/VBA-21-0779-ARE.pdf" target="_blank">VA Form 21-0779</a>)</li>
      </ul>
      <p>File types you can upload: PDF, JPG, PNG</p>
    </div>
  );
}

export const directDepositWarning = (
  <div className="pension-dd-warning">
    The Department of Treasury requires all federal benefit payments be made by electronic funds transfer (EFT), also called direct deposit. If you don’t have a bank account, you must get your payment through Direct Express Debit MasterCard. To request a Direct Express Debit MasterCard you must apply at <a href="http://www.usdirectexpress.com" target="_blank">www.usdirectexpress.com</a> or by telephone at <a href="tel:8003331795" target="_blank">1-800-333-1795</a>. If you chose not to enroll, you must contact representatives handling waiver requests for the Department of Treasury at <a href="tel:8882242950" target="_blank">1-888-224-2950</a>. They will address any questions or concerns you may have and encourage your participation in EFT.
  </div>
);

export const wartimeWarning = (
  <div className="usa-alert usa-alert-warning no-background-image">
    <div className="usa-alert-text">
      <p><strong>Note:</strong> You have indicated that you did not serve during an <a href="http://www.benefits.va.gov/pension/wartimeperiod.asp" target="_blank"> eligible wartime period</a>. Find out if you still qualify. <a href="/pension/eligibility/" target="_blank">Check your eligibility.</a></p>
    </div>
  </div>
);

const warDates = [
  ['1916-05-09', '1917-04-05'], // Mexican Border Period (May 9, 1916 - April 5, 1917)
  ['1917-04-06', '1918-11-11'], // World War I (April 6, 1917 - November 11, 1918)
  ['1941-12-07', '1946-12-31'], // World War II (December 7, 1941 - December 31, 1946)
  ['1950-06-27', '1955-01-31'], // Korean Conflict (June 27, 1950 - January 31, 1955)
  ['1964-08-05', '1975-05-07'], // Vietnam Era (August 5, 1964 - May 7, 1975)
  ['1990-08-02']// Gulf War (August 2, 1990)
];

export function servedDuringWartime(period) {
  return warDates.some((warTime) => {
    const [warStart, warEnd] = warTime;
    const { from: periodStart, to: periodEnd } = period;

    // If the service period starts before the war ends and finishes after the
    // war begins, they served during a wartime.
    const overlap = moment(periodEnd).isSameOrAfter(warStart) && moment(periodStart).isSameOrBefore(warEnd);
    return warEnd ? overlap : moment(warStart).isSameOrBefore(periodEnd);
  });
}

export const uploadMessage = (
  <div className="usa-alert usa-alert-info">
    <div className="usa-alert-body">
      <div className="usa-alert-text">
        <p>If you have many documents to upload you can mail them to us.</p>
        <p><em>We’ll provide an address after you finish the application.</em></p>
      </div>
    </div>
  </div>
);

export const aidAttendanceEvidence = (
  <div>
    <div className="usa-alert usa-alert-info no-background-image">
      <div className="usa-alert-body">
        <div className="usa-alert-text">
          <p><strong>If you’re claiming non-service-connected pension benefits with Aid and Attendance benefits</strong>, your supporting documents must show that you:</p>
          <ul>
            <li>Have corrected vision of 5/200 or less in both eyes, <strong>or</strong></li>
            <li>Have contraction of the concentric visual field to 5 degrees or less, <strong>or</strong></li>
            <li>Are a patient in a nursing home due to the loss of mental or physical abilities, <strong>or</strong></li>
            <li>Need another person to help you with daily activities like bathing, eating, dressing, adjusting prosthetic devices, or protecting you from the hazards of your environment, <strong>or</strong></li>
            <li>Are bedridden and have to spend most of the day in bed because of your disability</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="usa-alert usa-alert-info no-background-image">
      <div className="usa-alert-body">
        <div className="usa-alert-text">
          <p><strong>If you’re claiming for increased disability pension benefits based on being housebound</strong>, your supporting documents must show that you:</p>
          <ul>
            <li>Have a single permanent disability that’s 100% disabling, and you’re confined to your home, <strong>or</strong></li>
            <li>Have a disability (rated 60% or higher) in addition to the disability that qualifies you for a pension</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
);

export const disabilityDocs = (
  <div className="usa-alert usa-alert-warning">
    <div className="usa-alert-body">
      <div className="usa-alert-text">You’ll need to provide all private medical records for your child’s disability.</div>
    </div>
  </div>
);

export const schoolAttendanceWarning = (
  <div className="usa-alert usa-alert-warning">
    <div className="usa-alert-body">
      <div className="usa-alert-text">Since your child is between 18 and 23 years old, you’ll need to fill out a Request for Approval of School Attendance (<a href="https://www.vba.va.gov/pubs/forms/VBA-21-674-ARE.pdf" target="_blank">VA Form 21-674</a>). <strong>You can send us this form later.</strong></div>
    </div>
  </div>
);

export const marriageWarning = (
  <div className="usa-alert usa-alert-warning">
    <div className="usa-alert-body">
      <h4 className="usa-alert-heading">Recognition of marriages</h4>
      <div className="usa-alert-text">
        <p>If you’re certifying you are married for VA benefits, your marriage must be recognized by the place you and your spouse lived at the time of your marriage, or where you and your spouse lived at the time you filed your claim (or a later date when you qualified for benefits).</p>
        <p>Additional information on VA-recognized marriage is at <a href="http://www.va.gov/opa/marriage">www.va.gov/opa/marriage</a>.</p>
      </div>
    </div>
  </div>
);

export const fdcWarning = (
  <div className="usa-alert usa-alert-info no-background-image">
    <div className="usa-alert-body">
      <div className="usa-alert-text">Your application will be submitted as a fully developed claim.</div>
    </div>
  </div>
);

export const noFDCWarning = (
  <div className="usa-alert usa-alert-info no-background-image">
    <div className="usa-alert-body">
      <div className="usa-alert-text">Your application doesn’t qualify for the Fully Developed Claim (FDC) program. We’ll review your claim through the standard claim process. Please turn in any information to support your claim as soon as you can to the address provided after you finish the application.</div>
    </div>
  </div>
);

export const expeditedProcessDescription = (
  <div>
    <h5>Fully developed claim program</h5>
    <p>If you have uploaded all the supporting documentation you have and any forms for additional benefits, you can apply using the Fully Developed Claim (FDC) program.</p>
    <a href="/pension/apply/fully-developed-claim/" target="_blank">Learn more about the FDC program</a>.
  </div>
);

export const dependentWarning = (
  <div className="usa-alert usa-alert-warning">
    <div className="usa-alert-body">
      <div className="usa-alert-text">Your child won’t qualify as a dependent unless they’re in school or disabled.</div>
    </div>
  </div>
);

export const dependentsMinItem = (
  <span>If you are claiming child dependents, <strong>you must add at least one</strong> here.</span>
);

export const expectedIncomeDescription = (
  <span>Any income you didn’t already report in this form that you expect to receive in the next 12 months</span>
);

export const spouseExpectedIncomeDescription = (
  <span>Any income you didn’t already report in this form that your spouse expects to receive in the next 12 months</span>
);

export const dependentExpectedIncomeDescription = (
  <span>Any income you didn’t already report in this form that your dependent expects to receive in the next 12 months</span>
);
