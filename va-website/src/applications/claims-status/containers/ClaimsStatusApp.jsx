import React from 'react';
import { connect } from 'react-redux';

import RequiredLoginView from '../../../platform/user/authorization/components/RequiredLoginView';
import ClaimsAppealsUnavailable from '../components/ClaimsAppealsUnavailable';

// This needs to be a React component for RequiredLoginView to pass down
// the isDataAvailable prop, which is only passed on failure.
function AppContent({ children, isDataAvailable }) {
  const canUseApp = isDataAvailable === true || typeof isDataAvailable === 'undefined';
  return (
    <div className="claims-status-content">
      {!canUseApp && <ClaimsAppealsUnavailable/>}
      {canUseApp &&
        <div>
          {children}
        </div>}
    </div>
  );
}

class ClaimsStatusApp extends React.Component {
  render() {
    return (
      <RequiredLoginView
        verify
        serviceRequired={['evss-claims', 'appeals-status']}
        user={this.props.user}>
        <AppContent>
          {this.props.children}
        </AppContent>
      </RequiredLoginView>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(ClaimsStatusApp);

export { ClaimsStatusApp, AppContent };
