import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';
import { mfa } from '../../../platform/user/authentication/utilities';
import PersonalizationBetaInvite from '../components/PersonalizationBetaInvite';

class UserDataSection extends React.Component {
  renderTermsConditions = () => {
    const termsConditionsUrl = '/health-care/medical-information-terms-conditions';
    let content;

    if (this.props.terms.accepted) {
      content = (
        <p>You’ve accepted the latest <a href={termsConditionsUrl}>Terms and Conditions for Medical Information</a>.</p>
      );
    } else {
      content = (
        <div>
          <div className="usa-alert usa-alert-info no-background-image">
            <p><strong>Want to use Vets.gov health tools to do things like refill your VA prescriptions?</strong></p>
            <p>To get started, you’ll need to read and agree to the <a href={termsConditionsUrl}>Terms and Conditions for Medical Information</a>. This will give us your permission to show you your VA medical information on this site.</p>
          </div>
          <p>Once you agree to these Terms and Conditions, you’ll be able to use Vets.gov health tools to:</p>
          <ul>
            <li>Refill your VA prescriptions</li>
            <li>Download your VA health records</li>
            <li>Share secure messages with your health care team</li>
          </ul>
          <p>Go to the <a href={termsConditionsUrl}>Terms and Conditions for Health Tools</a></p>
        </div>
      );
    }

    return (
      <div>
        <h4 className="section-header">Terms and Conditions</h4>
        <div className="info-container">
          {content}
        </div>
      </div>
    );
  }

  renderMultifactorMessage = () => {
    if (this.props.profile.multifactor) { return null; }

    const headline = 'Add extra security to your account';
    const content = (
      <div>
        <p>For additional protection, we encourage you to add a second security step for signing in to your account.</p>
        <button className="usa-button usa-button-secondary" onClick={mfa}>Add security step</button>
      </div>
    );

    return (
      <p>
        <AlertBox
          headline={headline}
          content={content}
          isVisible
          status="warning"/>
      </p>
    );
  }

  render() {
    const {
      profile: {
        dob,
        email,
        gender,
        verified
      },
      name: {
        first: firstName,
        middle: middleName,
        last: lastName
      }
    } = this.props;

    let content;
    const name = `${firstName || ''} ${middleName || ''} ${lastName || ''}`;

    if (verified) {
      content = (
        <span>
          <p><span className="label">Name:</span>{_.startCase(_.toLower(name))}</p>
          <p><span className="label">Birth sex:</span>{`${gender === 'F' ? 'Female' : 'Male'}`}</p>
          <p><span className="label">Date of birth:</span>{moment(`${dob}`).format('MMM D, YYYY')}</p>
        </span>
      );
    }

    return (
      <div className="profile-section">
        <h4 className="section-header">Account information</h4>
        <div className="info-container">
          {content}
          <p><span className="label">Email address:</span> {email}</p>
          {this.renderMultifactorMessage()}
          {!verified && <p><span className="label"><a href="/verify?next=/profile">Verify your identity</a> to access more services you may be eligible for.</span></p>}
          <p>Want to change your email, password, or other account settings?<br/>
            <a href="https://wallet.id.me/settings" target="_blank">Go to ID.me to manage your account</a>
          </p>
          <PersonalizationBetaInvite profile={this.props.profile}/>
        </div>
        {verified && this.renderTermsConditions()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const userState = state.user;
  return {
    login: userState.login,
    name: userState.profile.userFullName,
    profile: userState.profile,
    terms: userState.profile.mhv.terms
  };
};

export default connect(mapStateToProps)(UserDataSection);
export { UserDataSection };
