import React from 'react';
import { get, omit, merge } from 'lodash/fp';
import Raven from 'raven-js';

import dateRangeUI from '../../common/schemaform/definitions/dateRange';
import fullNameUI from '../../common/schemaform/definitions/fullName';
import ssnUI from '../../common/schemaform/definitions/ssn';
import TextWidget from '../../common/schemaform/widgets/TextWidget';
import ServicePeriodView from '../components/ServicePeriodView';
import { serviceLabels } from './labels';
import { stringifyFormReplacer, filterViewFields } from '../../common/schemaform/helpers';
import environment from '../../../platform/utilities/environment';
import * as autosuggest from '../../common/schemaform/definitions/autosuggest';

export const nonRequiredFullNameUI = omit('required', fullNameUI);

export const contactInfoDescription = (
  <div className="usa-alert usa-alert-info no-background-image">
    <p>We may contact you by phone if we need more information about your application.</p>
    <p>You can also provide your email address to receive updates about new openings in VA national cemeteries or other burial benefits.</p>
  </div>
);

export const authorizedAgentDescription = (
  <div className="usa-alert usa-alert-info no-background-image">
    <p>A preparer may sign for an individual who’s:</p>
    <ul>
      <li>Under 18 years of age, <strong>or</strong></li>
      <li>Is mentally incompetent, <strong>or</strong></li>
      <li>Is physically unable to sign the application</li>
    </ul>
    <p>If you’re the preparer of this application, please provide your contact information.</p>
  </div>
);

export const veteranRelationshipDescription = (
  <div className="usa-alert usa-alert-info no-background-image">You’re applying as the <strong>Servicemember or Veteran</strong> whose military status and history will be used to decide if you qualify for burial in a VA national cemetery.</div>
);

export const spouseRelationshipDescription = (
  <div className="usa-alert usa-alert-info no-background-image">You’re applying as the <strong>legally married spouse or surviving spouse</strong> of the Servicemember or Veteran who’s sponsoring this application. First, we’ll ask for your information as the applicant. Then, we’ll ask for your sponsor’s information.</div>
);

export const childRelationshipDescription = (
  <div className="usa-alert usa-alert-info no-background-image">You’re applying as the <strong>unmarried adult child</strong> of the Servicemember or Veteran who’s sponsoring this application. First, we’ll ask for your information as the applicant. Then, we’ll ask for your sponsor’s information. You’ll also need to provide supporting documents with information about your disability.</div>
);

export const otherRelationshipDescription = (
  <div className="usa-alert usa-alert-info no-background-image">You’re applying on <strong>behalf</strong> of the Servicemember or Veteran who’s sponsoring this application. First, we’ll ask for your information as the applicant. Then, we’ll ask for your sponsor’s information.</div>
);

export const sponsorMilitaryStatusDescription = (
  <div className="usa-alert usa-alert-info no-background-image">If you’re not sure what your sponsor’s status is—or if it isn’t listed here—don’t worry. You can upload supporting documents showing your sponsor’s service history later in this application.</div>
);

export const desiredCemeteryNoteDescription = (
  <div className="usa-alert usa-alert-info no-background-image">
    <strong>Please note:</strong> This doesn’t guarantee you’ll be buried in your preferred cemetery. We’ll try to fulfill your wishes, but will assign a gravesite in a cemetery with available space at the time of need.
  </div>
);

export function isVeteran(item) {
  return get('application.claimant.relationshipToVet', item) === '1';
}

export function isSpouse(item) {
  return get('application.claimant.relationshipToVet', item) === '2';
}

export function isUnmarriedChild(item) {
  return get('application.claimant.relationshipToVet', item) === '3';
}

export function isAuthorizedAgent(item) {
  return get('application.applicant.applicantRelationshipToClaimant', item) === 'Authorized Agent/Rep';
}

export function requiresSponsorInfo(item) {
  const sponsor = item['view:sponsor'];
  return sponsor === undefined || sponsor === 'Other';
}

export function formatName(name) {
  const { first, middle, last, suffix } = name;
  return (first || last) && `${first} ${middle ? `${middle} ` : ''}${last}${suffix ? `, ${suffix}` : ''}`;
}

export function claimantHeader({ formData }) {
  const name = formatName(formData.claimant.name);
  return (
    <h4 className="highlight">{name}</h4>
  );
}

export function transform(formConfig, form) {
  // Copy over sponsor data if the claimant is the veteran.
  const populateSponsorData = (application) => {
    return isVeteran({ application }) ?
      merge(application, {
        veteran: {
          address: application.claimant.address,
          currentName: application.claimant.name,
          dateOfBirth: application.claimant.dateOfBirth,
          ssn: application.claimant.ssn,
          isDeceased: 'no',
          serviceName: application.veteran.serviceName || application.claimant.name
        }
      }) : application;
  };

  // Copy over preparer data if the claimant is the applicant.
  const populatePreparerData = (application) => {
    return !isAuthorizedAgent({ application }) ?
      merge(application, {
        applicant: {
          mailingAddress: application.claimant.address,
          name: application.claimant.name
        }
      }) : application;
  };

  // Copy over veteran data if a sponsor is filling out the form
  const populateVeteranData = (application) => {
    return merge(application, {
      veteran: {
        serviceName: application.veteran.serviceName || application.veteran.currentName
      },
      applicant: {
        applicantEmail: application.claimant.email,
        applicantPhoneNumber: application.claimant.phoneNumber
      }
    });
  };

  const application = [
    populateSponsorData,
    populatePreparerData,
    populateVeteranData,
    filterViewFields
  ].reduce((result, func) => func(result), form.data.application);

  // const formCopy = set('application', application, Object.assign({}, form));
  // const formData = transformForSubmit(formConfig, formCopy);

  return JSON.stringify({ application }, stringifyFormReplacer);

  /* Transformation for multiple applicants.
   *
   *  const matchClaimant = name => a => formatName(a.claimant.name) === name;
   *
   *  formCopy.applications = formCopy.applications.map(application => {
   *    // Fill in veteran info that veterans didn't need to enter separately.
   *    if (isVeteran(application)) {
   *      return merge(application, {
   *        veteran: {
   *          address: application.claimant.address,
   *          currentName: application.claimant.name,
   *          dateOfBirth: application.claimant.dateOfBirth,
   *          ssn: application.claimant.ssn,
   *          isDeceased: 'no'
   *        }
   *      });
   *    }
   *
   *    // Fill in veteran info in each application
   *    // where the sponsor is another claimant.
   *    const sponsorName = application['view:sponsor'];
   *    if (sponsorName !== 'Other') {
   *      const veteranApplication = form.applications.find(matchClaimant(sponsorName));
   *      const veteran = set('isDeceased', 'no', veteranApplication.veteran);
   *      return set('veteran', veteran, application);
   *    }
   *
   *    return application;
   *  });
   *
   *  // Fill in applicant info in each application
   *  // if the applicant is another claimant.
   *  const applicantName = form['view:preparer'];
   *  if (applicantName !== 'Other') {
   *    const applicantApplication = form.applications.find(matchClaimant(applicantName));
   *    const { address, email, name, phoneNumber } = applicantApplication.claimant;
   *    formCopy.applications = formCopy.applications.map(application => set('applicant',  {
   *      applicantEmail: email,
   *      applicantPhoneNumber: phoneNumber,
   *      applicantRelationshipToClaimant: application.claimant.ssn === applicantApplication.claimant.ssn ? 'Self' : 'Authorized Agent/Rep',
   *      completingReason: '',
   *      mailingAddress: address,
   *      name
   *    }, application));
   *  }
   *
   */
}

export const fullMaidenNameUI = merge(fullNameUI, {
  maiden: { 'ui:title': 'Maiden name' },
});

export class GetFormHelp extends React.Component {
  render() {
    return (
      <div>
        <p className="help-talk">For other benefit-related questions, please call VA Benefits and Services:</p>
        <p className="help-phone-number">
          <a className="help-phone-number-link" href="tel:+1-800-827-1000">1-800-827-1000</a><br/>
          Monday - Friday, 8:00 a.m. - 9:00 p.m. (ET)<br/>
          For Telecommunications Relay Service (TRS): dial <a className="help-phone-number-link" href="tel:711">711</a>
        </p>

        <p className="help-talk">For questions about eligibility for burial in a VA national cemetery, please call the National Cemetery Scheduling Office:</p>
        <p className="help-phone-number">
          <a className="help-phone-number-link" href="tel:+1-800-535-1117">1-800-535-1117</a><br/>
          7 days a week, 8:00 a.m. - 7:30 p.m. (ET)<br/>
          Select option 3 to speak to someone in Eligibility
        </p>
      </div>
    );
  }
}

class SSNWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = { val: props.value };
  }

  handleChange = (val) => {
    // Insert dashes if they are missing.
    // Keep if value is valid and formatted with dashes.
    // Set empty value to undefined.
    const formattedSSN = (
      (val && /^\d{9}$/.test(val)) ?
        `${val.substr(0, 3)}-${val.substr(3, 2)}-${val.substr(5)}` :
        val
    ) || undefined;

    this.setState({ val }, () => {
      this.props.onChange(formattedSSN);
    });
  }

  render() {
    return <TextWidget {...this.props} value={this.state.val} onChange={this.handleChange}/>;
  }
}

// Modify default uiSchema for SSN to insert any missing dashes.
export const ssnDashesUI = merge(ssnUI, { 'ui:widget': SSNWidget });

export const veteranUI = {
  militaryServiceNumber: {
    'ui:title': 'Military Service number (if you have one that’s different than your Social Security number)'
  },
  vaClaimNumber: {
    'ui:title': 'VA claim number (if known)',
    'ui:errorMessages': {
      pattern: 'Your VA claim number must be between 7 to 9 digits'
    }
  },
  placeOfBirth: {
    'ui:title': 'Place of birth'
  },
  gender: {
    'ui:title': 'Gender',
    'ui:widget': 'radio'
  },
  maritalStatus: {
    'ui:title': 'Marital status',
    'ui:widget': 'radio',
    'ui:options': {
      labels: {
        single: 'Single',
        separated: 'Separated',
        married: 'Married',
        divorced: 'Divorced',
        widowed: 'Widowed'
      }
    }
  },
  militaryStatus: {
    'ui:title': 'Current military status (You can add more service history information later in this application.)',
    'ui:options': {
      labels: {
        A: 'Active Duty',
        I: 'Death Related to Inactive Duty Training',
        D: 'Died on Active Duty',
        S: 'Reserve/National Guard',
        R: 'Retired',
        E: 'Retired Active Duty',
        O: 'Retired Reserve/National Guard',
        V: 'Veteran',
        X: 'Other'
      }
    }
  }
};

export const serviceRecordsUI = {
  'ui:title': 'Service periods',
  'ui:description': 'Please record all periods of service',
  'ui:options': {
    viewField: ServicePeriodView,
    itemName: 'Service Period'
  },
  items: {
    'ui:order': ['serviceBranch', '*'],
    serviceBranch: autosuggest.uiSchema('Branch of service', null, {
      'ui:options': {
        labels: serviceLabels
      }
    }),
    dateRange: dateRangeUI(
      'Service start date',
      'Service end date',
      'Service start date must be after end date'
    ),
    dischargeType: {
      'ui:title': 'Discharge character of service',
      'ui:options': {
        labels: {
          1: 'Honorable',
          2: 'General',
          3: 'Entry Level Separation/Uncharacterized',
          4: 'Other Than Honorable',
          5: 'Bad Conduct',
          6: 'Dishonorable',
          7: 'Other'
        }
      }
    },
    highestRank: {
      'ui:title': 'Highest rank attained'
    },
    nationalGuardState: {
      'ui:title': 'State (for National Guard Service only)',
      'ui:options': {
        hideIf: (formData, index) => !(['AG', 'NG'].includes(formData.application.veteran.serviceRecords[index].serviceBranch))
      }
    }
  }
};

export const militaryNameUI = {
  application: {
    veteran: {
      'view:hasServiceName': {
        'ui:title': 'Did you serve under another name?',
        'ui:widget': 'yesNo'
      },
      serviceName: merge(nonRequiredFullNameUI, {
        'ui:options': {
          expandUnder: 'view:hasServiceName'
        },
      })
    }
  }
};

export function getCemeteries() {
  return fetch(`${environment.API_URL}/v0/preneeds/cemeteries`, {
    headers: {
      'X-Key-Inflection': 'camel'
    },
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res);
    }

    return res.json();
  }).then(res => {
    const options = res.data.map(item => ({
      label: item.attributes.name,
      id: item.id
    }));

    return options;
  }).catch(res => {
    if (res instanceof Error) {
      Raven.captureException(res);
      Raven.captureMessage('vets_preneed_cemeteries_error');
    }

    // May change this to a reject later, depending on how we want
    // to surface errors in autosuggest field
    return Promise.resolve([]);
  });
}
