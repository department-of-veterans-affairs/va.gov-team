import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Scroll from 'react-scroll';

import recordEvent from '../../../../platform/monitoring/record-event';
import { removeSavedForm } from '../actions';

import FormList from '../components/FormList';
import MessagingWidget from './MessagingWidget';
import ClaimsAppealsWidget from './ClaimsAppealsWidget';
import PrescriptionsWidget from './PrescriptionsWidget';

import RequiredLoginView from '../../../../platform/user/authorization/components/RequiredLoginView';
import DowntimeNotification, { services } from '../../../../platform/monitoring/DowntimeNotification';
import Modal from '@department-of-veterans-affairs/formation/Modal';
import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';

import profileManifest from '../../va-profile/manifest.json';
import accountManifest from '../../account/manifest.json';

const scroller = Scroll.animateScroll;
const scrollToTop = () => {
  scroller.scrollTo(0, {
    duration: 500,
    delay: 0,
    smooth: true,
  });
};

moment.updateLocale('en', {
  meridiem: (hour) => {
    if (hour < 12) {
      return 'a.m.';
    }
    return 'p.m.';
  },
  monthsShort: [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'June',
    'July',
    'Aug.',
    'Sept.',
    'Oct.',
    'Nov.',
    'Dec.'
  ]
});

function recordDashboardClick(product, actionType = 'view-link') {
  return () => {
    recordEvent({
      event: 'dashboard-navigation',
      'dashboard-action': actionType,
      'dashboard-product': product,
    });
  };
}

class DashboardApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalDismissed: false,
      'show-loa-alert': true,
      'show-mvi-alert': true,
    };
  }

  componentDidMount() {
    scrollToTop();
  }

  dismissModal = () => {
    this.setState({
      modalDismissed: true,
    });
  }

  dismissAlertBox = (name) => {
    return () => {
      this.setState({
        [`show-${name}-alert`]: false,
      });
      window.localStorage.setItem(`hide-${name}-alert`, true);
    };
  }

  renderDowntimeNotification = (downtime, children) => {
    switch (downtime.status) {
      case 'downtimeApproaching':
        return (
          <div className="downtime-notification row-padded" data-status={status}>
            <Modal id="downtime-approaching-modal"
              title="Some parts of your homepage will be down for maintenance soon"
              status="info"
              onClose={this.dismissModal}
              visible={!this.state.modalDismissed}>
              <p>We’ll be making updates to some tools and features on {downtime.startTime.format('MMMM Do')} between {downtime.startTime.format('LT')} and {downtime.endTime.format('LT')} If you have trouble using parts of the dashboard during that time, please check back soon.</p>
              <button type="button" className="usa-button-secondary" onClick={this.dismissModal}>Continue</button>
            </Modal>
            {children}
          </div>
        );
      default:
        return children;
    }
  }

  renderWidgetDowntimeNotification = (appName, sectionTitle) => {
    return (downtime, children) => {
      switch (downtime.status) {
        case 'down':
          return (
            <div>
              <h2>{sectionTitle}</h2>
              <AlertBox
                content={<div>
                  <h4 className="usa-alert-heading">{appName} is down for maintenance</h4>
                  <p>We’re making some updates to our {appName.toLowerCase()} tool. We’re sorry it’s not working right now and hope to be finished by {downtime.startTime.format('MMMM Do')}, {downtime.endTime.format('LT')}. Please check back soon.</p>
                </div>}
                isVisible
                status="warning"/>
            </div>
          );
        default:
          return children;
      }
    };
  }

  renderEmptyStateLinks() {
    return (
      <div>
        <h2>Explore Our Most Used Benefits</h2>

        <ul className="va-nav-linkslist-list">
          <li>
            <a href="/disability-benefits/" onClick={recordDashboardClick('disability-benefits')}>
              <h4 className="va-nav-linkslist-title">Disability Benefits</h4>
              <p className="va-nav-linkslist-description">Apply for disability compensation and other benefits for conditions related to your military service.</p>
            </a>
          </li>
          <li>
            <a href="/health-care/" onClick={recordDashboardClick('health-care')}>
              <h4 className="va-nav-linkslist-title">Health Care Benefits</h4>
              <p className="va-nav-linkslist-description">Apply for VA health care, find out how to access services, and manage your health and benefits online.</p>
            </a>
          </li>
          <li>
            <a href="/education/" onClick={recordDashboardClick('education-benefits')}>
              <h4 className="va-nav-linkslist-title">Education Benefits</h4>
              <p className="va-nav-linkslist-description">Apply for and manage benefits that help you pay for college and training programs.</p>
            </a>
          </li>
          <li>
            <a href="/disability-benefits/" onClick={recordDashboardClick('disability-benefits')}>
              <h4 className="va-nav-linkslist-title">Disability Benefits</h4>
              <p className="va-nav-linkslist-description">Apply for disability compensation and other benefits for conditions related to your military service.</p>
            </a>
          </li>
        </ul>
      </div>
    );
  }

  renderLOAPrompt() {
    if (this.props.profile.verified) {
      return null;
    }

    return (
      <AlertBox
        content={<div>
          <h4 className="usa-alert-heading">Verify your identity to access more Vets.gov tools and features</h4>
          <p>When you verify your identity, you can use Vets.gov to do things like track your claims, refill your prescriptions, and download your VA benefit letters.</p>
          <a className="usa-button-primary" href="/verify">Verify Your Identity</a>
          <p><a href="/faq#verifying-your-identity">Learn about how to verify your identity</a></p>
        </div>}
        onCloseAlert={this.dismissAlertBox('loa')}
        isVisible={this.state['show-loa-alert'] && !window.localStorage.getItem('hide-loa-alert')}
        status="info"/>
    );
  }

  renderMVIWarning() {
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
        onCloseAlert={this.dismissAlertBox('mvi')}
        isVisible={this.state['show-mvi-alert'] && !window.localStorage.getItem('hide-mvi-alert')}
        status="warning"/>
    );
  }

  render() {
    const availableWidgetsCount = [
      this.props.canAccessClaims,
      this.props.canAccessRx,
      this.props.canAccessMessaging,
      this.props.canAccessAppeals,
    ].filter(e => e).length;

    const view = (
      <div className="row user-profile-row">
        <div className="usa-width-two-thirds medium-8 small-12 columns">
          <h1>Your Homepage</h1>
          <div className="va-introtext">
            <p>Access the tools and information you’ll need to track and manage your VA benefits and communications.</p>
          </div>
          <div>
            <FormList
              userProfile={this.props.profile}
              removeSavedForm={this.props.removeSavedForm}
              savedForms={this.props.profile.savedForms}/>

            {this.renderLOAPrompt()}
            {this.renderMVIWarning()}

            <ClaimsAppealsWidget/>

            <DowntimeNotification appTitle="messaging" dependencies={[services.mvi, services.mhv]} render={this.renderWidgetDowntimeNotification('Secure messaging', 'Track Secure Messages')}>
              <MessagingWidget/>
            </DowntimeNotification>

            <DowntimeNotification appTitle="rx" dependencies={[services.mvi, services.mhv]} render={this.renderWidgetDowntimeNotification('prescription refill', 'Refill Prescriptions')}>
              <PrescriptionsWidget/>
            </DowntimeNotification>
          </div>
          {(availableWidgetsCount === 0) && this.renderEmptyStateLinks()}
          <div>
            <h2>Manage Your Health and Benefits</h2>

            <ul className="va-nav-linkslist-list">
              <li>
                <a href="/health-care/schedule-an-appointment/" onClick={recordDashboardClick('schedule-appointment')}>
                  <h4 className="va-nav-linkslist-title">Schedule a VA Appointment</h4>
                  <p className="va-nav-linkslist-description">Find out how to make a doctor’s appointment with a member of your VA health care team online or by phone.</p>
                </a>
              </li>
              <li>
                <a href="/education/gi-bill/post-9-11/ch-33-benefit" onClick={recordDashboardClick('post-911')}>
                  <h4 className="va-nav-linkslist-title">Check Post-9/11 GI Bill Benefits</h4>
                  <p className="va-nav-linkslist-description">View and print your statement of benefits.</p>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Request your Records</h2>

            <ul className="va-nav-linkslist-list">
              <li>
                <a href="/discharge-upgrade-instructions/" onClick={recordDashboardClick('apply-discharge')}>
                  <h4 className="va-nav-linkslist-title">How to Apply for a Discharge Upgrade</h4>
                  <p className="va-nav-linkslist-description">Answer a series of questions to get customized step-by-step instructions on how to apply for a discharge upgrade or correction.</p>
                </a>
              </li>
              <li>
                <a href="/health-care/health-records/" onClick={recordDashboardClick('health-records')}>
                  <h4 className="va-nav-linkslist-title">Get Your VA Health Records</h4>
                  <p className="va-nav-linkslist-description">View, download, and print your VA health records.</p>
                </a>
              </li>
              <li>
                <a href="/download-va-letters/" onClick={recordDashboardClick('download-letters')}>
                  <h4 className="va-nav-linkslist-title">Download Your VA Letters</h4>
                  <p className="va-nav-linkslist-description">Access and download benefit letters and documents proving your status online.</p>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2>View Your Profile</h2>
            <p>Review your contact, personal, and military service information—and find out how to make any needed updates or corrections.<br/>
              <a className="usa-button-primary" href={profileManifest.rootUrl} onClick={recordDashboardClick('view-your-profile', 'view-button')}>View Your Profile</a>
            </p>

            <h2>Manage Your Account</h2>
            <p>View your current account settings—and find out how to update them as needed to access more site tools or add extra security to your account.<br/>
              <a className="usa-button-primary" href={accountManifest.rootUrl} onClick={recordDashboardClick('view-your-account-settings', 'view-button')}>View Your Account Settings</a>
            </p>
          </div>
        </div>
      </div>
    );

    return (
      <div name="topScrollElement">
        <RequiredLoginView
          authRequired={3}
          serviceRequired={['evss-claims', 'appeals-status', 'user-profile']}
          user={this.props.user}>
          <DowntimeNotification appTitle="user dashboard" dependencies={[services.mvi, services.mhv, services.appeals]} render={this.renderDowntimeNotification}>
            {view}
          </DowntimeNotification>
        </RequiredLoginView>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const userState = state.user;
  const profileState = userState.profile;
  const canAccessRx = profileState.services.includes('rx');
  const canAccessMessaging = profileState.services.includes('messaging');
  const canAccessAppeals = profileState.services.includes('appeals-status');
  const canAccessClaims = profileState.services.includes('evss-claims');

  return {
    canAccessRx,
    canAccessMessaging,
    canAccessAppeals,
    canAccessClaims,
    profile: profileState,
    user: userState
  };
};

const mapDispatchToProps = {
  removeSavedForm
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardApp);
export { DashboardApp };
