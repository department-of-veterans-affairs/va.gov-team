import React from 'react';
import recordEvent from '../../../../platform/monitoring/record-event';

import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';

import AccountVerification from './AccountVerification';
import LoginSettings from './LoginSettings';
import MultifactorMessage from './MultifactorMessage';
import TermsAndConditions from './TermsAndConditions';

class AccountMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'show-acct-mvi-alert': true,
    };
  }

  dismissMVIError = () => {
    this.setState({
      'show-acct-mvi-alert': false,
    });
    localStorage.setItem('hide-acct-mvi-alert', true);
  }

  renderMVIError() {
    if (this.props.profile.veteranStatus === 'OK') {
      return null;
    }

    return (
      <AlertBox
        content={<div>
          <h4 className="usa-alert-heading">We’re having trouble matching your information to our Veteran records</h4>
          <p>We’re sorry. We’re having trouble matching your information to our Veteran records, so we can’t give you access to tools for managing your health and benefits.</p>
          <p>If you’d like to use these tools on Vets.gov, please contact your nearest VA medical center. Let them know you need to verify the information in your records, and update it as needed. The operator, or a patient advocate, can connect with you with the right person who can help.</p>
          <p><a href="/facilities">Find your nearest VA Medical Center</a></p>
        </div>}
        onCloseAlert={this.dismissMVIError}
        isVisible={this.state['show-acct-mvi-alert'] && !localStorage.getItem('hide-acct-mvi-alert')}
        status="warning"/>
    );
  }

  render() {
    const {
      profile: {
        loa,
        multifactor,
        verified
      },
      terms
    } = this.props;

    return (
      <div>
        <AccountVerification loa={loa}/>
        {this.renderMVIError()}
        <MultifactorMessage multifactor={multifactor}/>
        <LoginSettings/>
        <TermsAndConditions terms={terms} verified={verified}/>
        <h4>Have questions about signing in to Vets.gov?</h4>
        <p>
          Get answers to frequently asked questions about how to sign in, common issues with verifying your identity, and your privacy and security on Vets.gov.<br/>
          <a href="/faq" onClick={() => recordEvent({ event: 'account-navigation', 'account-action': 'view-link', 'account-section': 'vets-faqs' })}>Go to Vets.gov FAQs</a>
        </p>
      </div>
    );
  }
}

export default AccountMain;
