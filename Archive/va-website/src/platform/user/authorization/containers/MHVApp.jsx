import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import appendQuery from 'append-query';

import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import { mhvAccessError } from '../../../static-data/error-messages';
import {
  createMHVAccount,
  fetchMHVAccount
} from '../../../../platform/user/profile/actions';

export class MHVApp extends React.Component {
  componentDidMount() {
    const { account } = this.props;

    if (!account.state) {
      this.props.fetchMHVAccount();
    } else {
      this.handleAccountState();
    }
  }

  componentDidUpdate(prevProps) {
    const { account } = this.props;

    const accountStateChanged = prevProps.account.state !== account.state;
    if (accountStateChanged) { this.handleAccountState(); }

    const shouldPollAccount = account.polling && !account.loading && !this.hasAccount();
    if (shouldPollAccount) {
      setTimeout(() => {
        this.props.fetchMHVAccount();
      }, 1000 * account.polledTimes);
    }
  }

  needsTermsAcceptance = () => this.props.account.state === 'needs_terms_acceptance';

  hasAccount = () => ['existing', 'upgraded'].includes(this.props.account.state);

  hasService = () => this.props.availableServices.includes(this.props.serviceRequired);

  isIneligible = () => this.props.account.state === 'ineligible';

  handleAccountState = () => {
    if (this.isIneligible()) { return; }

    if (this.needsTermsAcceptance()) {
      const redirectQuery = { tc_redirect: window.location.pathname }; // eslint-disable-line camelcase
      const termsConditionsUrl = appendQuery('/health-care/medical-information-terms-conditions', redirectQuery);
      window.location.replace(termsConditionsUrl);
    } else if (!this.hasAccount()) {
      this.props.createMHVAccount();
    }
  }

  closeTcAcceptanceMessage = () => {
    this.context.router.replace({
      ...this.props.location,
      query: {
        ...this.props.location.query,
        tc_accepted: undefined // eslint-disable-line camelcase
      }
    });
  }

  renderTcAcceptanceMessage = () => {
    // Use query param to detect redirect from accepting T&C.
    if (!this.props.location.query.tc_accepted) { return null; }

    const alertProps = {
      headline: 'Thank you for accepting the Terms and Conditions for using Vets.gov health tools',
      content: (
        <p>You can now access health tools on Vets.gov.</p>
      ),
      onCloseAlert: this.closeTcAcceptanceMessage
    };

    return <AlertBox isVisible status="success" {...alertProps}/>;
  }

  render() {
    const { account } = this.props;

    if (account.polling) {
      return <LoadingIndicator setFocus message="Creating your MHV account..."/>;
    }

    if (account.loading) {
      return <LoadingIndicator setFocus message="Loading your information..."/>;
    }

    if (account.errors) {
      const alertProps = {
        headline: 'We’re not able to process your MHV account',
        content: (
          <p>
            Please <a onClick={() => { window.location.reload(true); }}>refresh this page</a> or try again later. If this problem persists, please call the Vets.gov Help Desk at <a href="tel:855-574-7286">1-855-574-7286</a>, TTY: <a href="tel:18008778339">1-800-877-8339</a>, Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET).
          </p>
        )
      };

      return <AlertBox isVisible status="error" {...alertProps}/>;
    }

    if (!this.hasService()) { return mhvAccessError; }

    return (
      <div>
        {this.renderTcAcceptanceMessage()}
        {this.props.children}
      </div>
    );
  }
}

MHVApp.propTypes = {
  children: PropTypes.node,
  serviceRequired: PropTypes.oneOf([
    'health-records',
    'messaging',
    'rx'
  ])
};

MHVApp.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const { profile } = state.user;
  const { account } = profile.mhv;
  const availableServices = profile.services;
  return { account, availableServices };
};

const mapDispatchToProps = {
  createMHVAccount,
  fetchMHVAccount
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MHVApp));
