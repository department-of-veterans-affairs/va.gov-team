import React from 'react';
import Raven from 'raven-js';
import { connect } from 'react-redux';

import RequiredLoginView from '../../../platform/user/authorization/components/RequiredLoginView';
import DowntimeNotification, { services } from '../../../platform/monitoring/DowntimeNotification';

const UNREGISTERED_ERROR = 'vets_letters_user_unregistered';

// This needs to be a React component for RequiredLoginView to pass down
// the isDataAvailable prop, which is only passed on failure.
export class AppContent extends React.Component {
  constructor(props) {
    super(props);
    if (props.isDataAvailable === false) {
      Raven.captureException(new Error(UNREGISTERED_ERROR));
      this.state = { errorLogged: true };
    } else {
      this.state = { errorLogged: false };
    }
  }

  componentWillReceiveProps(nextProps) {
    // only log isDataAvailable error if one isn't already logged
    if (nextProps.isDataAvailable === false && !this.state.errorLogged) {
      Raven.captureException(new Error(UNREGISTERED_ERROR));
      this.setState({ errorLogged: true });
    }
  }

  render() {
    const unregistered = this.props.isDataAvailable === false;
    let view;

    if (unregistered) {
      view = (
        <h4>
          We weren’t able to find information about your VA letters.
          If you think you should be able to access this information, please call the Vets.gov Help Desk at <a href="tel:855-574-7286">1-855-574-7286</a>, TTY: <a href="tel:18008778339">1-800-877-8339</a>, Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET).
        </h4>
      );
    } else {
      view = this.props.children;
    }

    return (
      <div className="usa-grid">
        {view}
      </div>
    );
  }
}

export class LettersApp extends React.Component {
  render() {
    return (
      <RequiredLoginView
        verify
        serviceRequired="evss-claims"
        user={this.props.user}>
        <DowntimeNotification appTitle="Letters Generator" dependencies={[services.evss]}>
          <AppContent>
            <div>
              {this.props.children}
            </div>
          </AppContent>
        </DowntimeNotification>
      </RequiredLoginView>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(LettersApp);
