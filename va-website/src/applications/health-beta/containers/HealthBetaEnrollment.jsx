import React from 'react';
import { connect } from 'react-redux';

import RequiredLoginView from '../../../platform/user/authorization/components/RequiredLoginView';

class HealthBetaEnrollment extends React.Component {
  render() {
    return (
      <div>
        <RequiredLoginView
          serviceRequired="user-profile"
          user={this.props.user}>
          {this.props.children}
        </RequiredLoginView>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const hbState = state.healthbeta;
  const { username, stats, loading } = hbState.beta;
  return {
    username,
    stats,
    isLoading: loading,
    user: state.user
  };
};

export default connect(mapStateToProps)(HealthBetaEnrollment);
export { HealthBetaEnrollment };
