import React from 'react';
import { connect } from 'react-redux';

import recordEvent from '../../../platform/monitoring/record-event';
import DowntimeNotification, { services } from '../../../platform/monitoring/DowntimeNotification';
import RequiredLoginView from '../../../platform/user/authorization/components/RequiredLoginView';
import RequiredVeteranView from '../components/RequiredVeteranView';
import EmailCapture from './EmailCapture';

function createVicSettings() {
  // vicInitialAuthStatus is used as a flag so that a user who already had the rate limit applied and allowed through
  // as an unauthorized user won't be rate limited again as an authorized user after logging in and potentially blocked.
  const disableRateLimitedAuth = window.sessionStorage.getItem('vicDisableRateLimitedAuth');
  const fromGlobal = window.settings.vic;
  const randomizer = Math.random();

  return {
    serviceRateLimitedUnauthed: randomizer > fromGlobal.rateLimitUnauthed,
    serviceRateLimitedAuthed: !disableRateLimitedAuth && randomizer > fromGlobal.rateLimitAuthed
  };
}

class VeteranIDCard extends React.Component {
  componentWillReceiveProps(nextProps) {
    // Once the login logic is all done...
    // This will occur even for unauthenticated users and should only occur once.
    if (this.props.user.profile.loading && !nextProps.user.profile.loading) {
      const userProfile = nextProps.user.profile;
      const { serviceRateLimitedAuthed, serviceRateLimitedUnauthed } = this.props.vicSettings;

      if (nextProps.user.login.currentlyLoggedIn) {
        if (serviceRateLimitedAuthed) {
          recordEvent({ event: 'vic-authenticated-ratelimited' });
          this.renderEmailCapture = true;
          if (userProfile.veteranStatus === 'NOT_FOUND') {
            recordEvent({ events: 'vic-emis-lookup-failed' });
          } else if (userProfile.veteranStatus === 'SERVER_ERROR') {
            recordEvent({ events: 'vic-emis-error' });
          }
        } else {
          recordEvent({ event: 'vic-authenticated' });
        }
      } else {
        if (serviceRateLimitedUnauthed) {
          recordEvent({ event: 'vic-unauthenticated-ratelimited' });
          this.renderEmailCapture = true;
        } else {
          // Set the flag that the user was already rate limited and allowed to pass through as an unauthorized
          // user so that the serviceRateLimitedAuthed won't also be applied.
          window.sessionStorage.setItem('vicDisableRateLimitedAuth', 'true');
          recordEvent({ event: 'vic-unauthenticated' });
        }
      }
    }
  }

  render() {
    if (this.renderEmailCapture) {
      return <EmailCapture/>;
    }

    return (
      <div>
        <RequiredLoginView
          verify
          serviceRequired="id-card"
          user={this.props.user}>
          <DowntimeNotification appTitle="Veteran ID Card application" dependencies={[services.vic]}>
            <RequiredVeteranView userProfile={this.props.user.profile}>
              {this.props.children}
            </RequiredVeteranView>
          </DowntimeNotification>
        </RequiredLoginView>
      </div>
    );
  }
}

VeteranIDCard.defaultProps = {
  vicSettings: createVicSettings()
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(VeteranIDCard);
export { VeteranIDCard };
