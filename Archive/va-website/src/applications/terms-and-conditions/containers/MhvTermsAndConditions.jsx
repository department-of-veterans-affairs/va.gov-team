import React from 'react';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
import appendQuery from 'append-query';

import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';

import recordEvent from '../../../platform/monitoring/record-event';
import { getScrollOptions } from '../../../platform/utilities/ui';

import {
  acceptTerms,
  fetchLatestTerms,
  fetchTermsAcceptance
} from '../actions';

const ScrollElement = Scroll.Element;
const scroller = Scroll.scroller;

const TERMS_NAME = 'mhvac';

const unagreedBannerProps = {
  headline: 'Using Vets.gov Health Tools',
  content: 'Before you can use the health tools on Vets.gov, you’ll need to read and agree to the Terms and Conditions below. This will give us your permission to show you your VA medical information on this site.',
  status: 'warning'
};

export class MhvTermsAndConditions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAgreementChecked: false,
      isSubmitted: false,
      showAcceptedMessage: false,
      showCanceledMessage: false
    };
  }

  componentDidMount() {
    this.props.fetchLatestTerms(TERMS_NAME);
    if (sessionStorage.userToken) { this.props.fetchTermsAcceptance(TERMS_NAME); }
  }

  componentDidUpdate(prevProps) {
    if (this.state.isSubmitted && !prevProps.accepted && this.props.accepted) {
      this.handleAcceptanceSuccess();
    }
  }

  redirect = () =>  {
    const redirectUrl = this.props.location.query.tc_redirect;
    if (redirectUrl) {
      const newUrl = appendQuery(redirectUrl, { tc_accepted: true }); // eslint-disable-line camelcase
      window.location.replace(newUrl);
    }
  }

  handleAgreementCheck = () => {
    this.setState({ isAgreementChecked: !this.state.isAgreementChecked });
    recordEvent({
      event: 'account-navigation',
      'account-action': 'agree-check',
      'account-section': 'terms'
    });
  }

  handleAcceptanceSuccess = () => {
    this.setState({ showAcceptedMessage: true }, () => {
      scroller.scrollTo('banner', getScrollOptions());
      recordEvent({ event: 'account-terms-transaction' });
      this.redirect();
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isSubmitted: true }, () => {
      this.props.acceptTerms(TERMS_NAME);
    });
    recordEvent({
      event: 'account-navigation',
      'account-action': 'update-button',
      'account-section': 'terms'
    });
  }

  handleCancel = (e) => {
    e.preventDefault();
    this.setState({ showCanceledMessage: true }, () => {
      scroller.scrollTo('banner', getScrollOptions());
    });
    recordEvent({
      event: 'account-navigation',
      'account-action': 'cancel-button',
      'account-section': 'terms'
    });
  }

  handleCloseBanner = () => {
    this.setState({
      showAcceptedMessage: false,
      showCanceledMessage: false
    });
  }

  renderBanner = () => {
    let bannerProps = null;

    if (this.state.showAcceptedMessage) {
      bannerProps = {
        headline: 'You’ve accepted the Terms and Conditions for using Vets.gov health tools',
        content: '',
        status: 'success'
      };
    } else if (this.state.showCanceledMessage) {
      bannerProps = unagreedBannerProps;
    }

    return bannerProps && (
      <ScrollElement name="banner">
        <AlertBox
          {...bannerProps}
          isVisible
          onCloseAlert={this.handleCloseBanner}/>
      </ScrollElement>
    );
  }

  renderAgreementSection = () => {
    const shouldHideSection =
      !this.props.user.loggedIn ||
      !this.props.user.verified ||
      this.props.accepted;

    if (shouldHideSection) { return null; }

    const yesCheckbox = (
      <div>
        <input
          type="checkbox"
          id="agreement-checkbox"
          value="yes"
          checked={this.state.isAgreementChecked}
          onChange={this.handleAgreementCheck}/>
        <label
          className="agreement-label"
          htmlFor="agreement-checkbox">
          {this.props.attributes.yesContent}
        </label>
      </div>
    );

    const submitButton = (
      <button
        className="usa-button submit-button"
        disabled={!this.state.isAgreementChecked}>
        Submit
      </button>
    );

    const cancelButton = (
      <button
        className="usa-button usa-button-secondary"
        type="button"
        onClick={this.handleCancel}>
        Cancel
      </button>
    );

    return (
      <div>
        {yesCheckbox}
        <div className="tc-buttons">
          {submitButton}
          {cancelButton}
        </div>
      </div>
    );
  }

  /* eslint-disable react/no-danger */
  renderTermsAndConditions = () => {
    if (this.props.errors) {
      return (
        <AlertBox
          headline="We failed to process the terms and conditions"
          content="We’re sorry. Something went wrong on our end. Please try again later."
          isVisible
          status="error"/>
      );
    }

    const { loading } = this.props;

    if (loading.acceptance && this.state.isSubmitted) {
      return <LoadingIndicator setFocus message="Accepting terms and conditions..."/>;
    }

    if (loading.tc || loading.acceptance) {
      return <LoadingIndicator setFocus message="Loading terms and conditions..."/>;
    }

    const { title, headerContent, termsContent } = this.props.attributes;

    const header = !this.props.accepted &&  (
      <div>
        {
          !this.state.showCanceledMessage && (
            <div className="usa-alert usa-alert-info no-background-image">
              <h3>{unagreedBannerProps.headline}</h3>
              <p>{unagreedBannerProps.content}</p>
            </div>
          )
        }
        <div className="va-introtext" dangerouslySetInnerHTML={{ __html: headerContent }}/>
        <h3>Terms and Conditions</h3>
      </div>
    );

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{title}</h1>
        {header}
        <hr/>
        <div dangerouslySetInnerHTML={{ __html: termsContent }}/>
        <hr/>
        {this.renderAgreementSection()}
      </form>
    );
  }
  /* eslint-enable react/no-danger */

  render() {
    return (
      <main className="terms-and-conditions">
        <div className="container">
          <div className="row primary">
            {this.renderBanner()}
            <div className="columns small-12" role="region" aria-label="Terms and Conditions">
              {this.renderTermsAndConditions()}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.termsAndConditions,
  user: {
    loggedIn: state.user.login.currentlyLoggedIn,
    verified: state.user.profile.verified
  }
});

const mapDispatchToProps = {
  acceptTerms,
  fetchLatestTerms,
  fetchTermsAcceptance
};

export default connect(mapStateToProps, mapDispatchToProps)(MhvTermsAndConditions);
