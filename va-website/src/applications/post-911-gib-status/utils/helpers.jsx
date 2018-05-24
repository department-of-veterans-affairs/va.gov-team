import React from 'react';
import moment from 'moment';
import { formatDateParsedZoneLong } from '../../../platform/utilities/date';

export function formatPercent(percent) {
  let validPercent = undefined;

  if (!isNaN(parseInt(percent, 10))) {
    validPercent = `${Math.round(percent)}%`;
  }

  return validPercent;
}

export function formatVAFileNumber(n) {
  const number = n || '';
  const lengthOfXString = number.length > 4 ? number.length - 4 : 0;

  return number.replace(number.substring(0, lengthOfXString),
    `${'x'.repeat(lengthOfXString)}-`);
}

export function formatMonthDayFields(field) {
  let displayValue;
  if (field) {
    if (field.days === 1) {
      displayValue = `${field.months} months, ${field.days} day`;
    } else {
      displayValue = `${field.months} months, ${field.days} days`;
    }
  } else {
    displayValue = 'unavailable';
  }
  return displayValue;
}

export const enrollmentHistoryExplanation = {
  standard: (
    <div className="feature">
      <h4>Does something look wrong in your enrollment history?</h4>
      <span>Certain enrollments may not be displayed in this history if:</span>
      <ul>
        <li>Your school made a request to us that’s still in process, <strong>or</strong></li>
        <li>You made a request to us that’s still in process, <strong>or</strong></li>
        <li>You used or are using your benefit for flight, on-the-job, apprenticeship, or correspondence training</li>
      </ul>
    </div>
  ),
  noEnrollmentHistory: (
    <div className="feature">
      <h4>You don’t have any enrollment history</h4>
      <span>Your enrollment history may not be available if:</span>
      <ul>
        <li>You or your school did not yet make a request to us, <strong>or</strong></li>
        <li>You or your school made a request that’s still in process</li>
      </ul>
    </div>
  )
};

export function benefitEndDateExplanation(condition, delimitingDate) {
  switch (condition) {
    case 'activeDuty':
      return (
        <div className="section benefit-end-date">
          <h4>Benefit End Date</h4>
          <div>
            Since you are currently on active duty, your benefits don’t yet have an expiration date.
          </div>
        </div>
      );
    case 'remainingEntitlement':
      return (
        <div className="section benefit-end-date">
          <h4>Benefit End Date</h4>
          <div>
            You have until <strong>{formatDateParsedZoneLong(delimitingDate)}</strong> to use these benefits.
          </div>
        </div>
      );
    default:
      return undefined;
  }
}

export function notQualifiedWarning() {
  return (
    <div className="usa-alert usa-alert-warning usa-content not-qualified">
      <div className="usa-alert-body">
        <h2>Currently Not Qualified</h2>
        <span><strong>Our records show you don’t qualify for the Post-9/11 GI Bill because:</strong></span>
        <ul>
          <li>You haven’t served on active duty for at least 90 days after September 10, 2001, and/or</li>
          <li>Your service component let us know that you didn’t receive an honorable discharge</li>
          <li>If the information in our records is not accurate, please call us at 1-888-GI-BILL-1 (<a href="tel:+18884424551">1-888-442-4551</a>), Monday &#8211; Friday, 8:00 a.m. &#8211; 7:00 p.m. (ET).</li>
        </ul>
        <h5>Resources</h5>
        <ul>
          <li><a target="_blank" href="/education/eligibility/">Check Post-9/11 GI Bill benefits eligibility</a></li>
          <li>If you’re enrolled in education benefits through another chapter (Montgomery GI Bill (MGIB) or Reservists Educational Assistance Program (REAP)), check our <a target="_blank" href="https://www.gibill.va.gov/wave/index.do">Web Automated Verification of Enrollment (W.A.V.E)</a></li>
        </ul>
      </div>
    </div>
  );
}

export function noChapter33BenefitsWarning() {
  return (
    <div id="noChapter33Benefits">
      <header>
        <h1>We couldn’t find your Post-9/11 GI Bill information.</h1>
      </header>
      <div className="usa-alert usa-alert-warning">
        <div className="usa-alert-body">
          <p className="usa-alert-heading">
            <a target="_blank" href="https://www.ebenefits.va.gov/ebenefits/about/feature?feature=post-911-gi-bill-enrollment-status">
            If you’re a dependent, please go to eBenefits to look up your GI Bill information.</a>
          </p>
        </div>
      </div>
      <h2>Need GI Bill help?</h2>
      <hr className="divider"/>
      <p>If you have questions or need help looking up your GI Bill information, please call <span className="gi-phone-nowrap">1-888-GI-BILL-1</span>
      (<a className="gi-phone-nowrap" href="tel:1-888-442-4551">1-888-442-4551</a>), Monday &#8211; Friday, 8:00 a.m. &#8211; 7:00 p.m. (ET).</p>
    </div>
  );
}

export function backendErrorMessage() {
  const date = moment().startOf('day').subtract(30, 'days').format('MMMM DD, YYYY');

  return (
    <div id="backendErrorMessage" className="row">
      <div className="medium-8 columns">
        <h3>We’re sorry. Something went wrong on our end.</h3>
        <p>We’re having trouble finding your Post-9/11 GI Bill statements of benefits right now.</p>
        <p><strong>This could be for 1 of 2 reasons:</strong></p>
        <ul>
          <li>Your application is still being processed. We usually process applications within 30 days. If you applied after {date}, please check back again in a few days.</li>
          <li>The name on your Vets.gov account might not exactly match the name we have in our Post-9/11 GI Bill records. To check the name we have in our records, please call the number below.</li>
        </ul>
        <p>If you think your statement of benefits should be here, please call the Vets.gov Help Desk at <a href="tel:18555747285">1-855-574-7286</a>.</p>
        <a className="usa-button usa-button-primary">Back to Post-9/11 GI Bill</a>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
}

