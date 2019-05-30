/* eslint-disable camelcase */
import React from 'react';

export const systemDownMessage = (
  <div className="row" id="systemDownMessage">
    <div className="small-12 columns">
      <div className="react-container">
        <h3>Sorry, our system is temporarily down while we fix a few things. Please try again later.</h3>
        <a href="/" className="usa-button-primary">Go Back to Vets.gov</a>
      </div>
    </div>
  </div>
);

export const unableToFindRecordWarning = (
  <div id="recordNotFound">
    <div className="small-12 columns">
      <div className="react-container">
        <h3>We weren't able to find your records.</h3>
        <h4>Please call <a href="tel:855-574-7286">1-855-574-7286</a>, TTY: <a href="tel:18008778339">1-800-877-8339</a>, Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET).</h4>
      </div>
    </div>
  </div>
);

export const mhvAccessError = (
  <div id="mhv-access-error">
    <div className="small-12 columns">
      <div className="react-container">
        <h4>We can't give you access to this tool right now.</h4>
        <div>
          <p>
            This could be for one of a few different reasons:
          </p>
          <ol>
            <li>
              <strong>Have you never received care at a VA
              facility?</strong> Only VA patients can use this tool.
            </li>
            <li>
              <strong>Do you need a different My Health<em>e</em>Vet account
              type?</strong> You may need a higher level of access to use this
              tool. Learn about the different account types on
              the <a href="https://www.myhealth.va.gov/mhv-portal-web/upgrading-your-my-healthevet-account-through-in-person-or-online-authentication" target="_blank">
              My Health<em>e</em>Vet website.</a>
            </li>
            <li>
              <strong>Did you forget to accept My Health<em>e</em>Vet's terms and
              conditions?</strong> You need to log in to My Health<em>e</em>Vet
              and accept their terms and conditions.
            </li>
          </ol>
          <p>
            If none of these reasons applies to you, please call the Vets.gov Help Desk at 1-855-574-7286, TTY: 1-800-877-8339. We're here Monday – Friday, 8:00 a.m. – 8:00 p.m. (ET).
          </p>
        </div>
      </div>
    </div>
  </div>
);
