import React from 'react';
import { connect } from 'react-redux';

import RequiredLoginView from '../../../platform/user/authorization/components/RequiredLoginView';

class IDCardBetaEnrollment extends React.Component {

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
  return { user: state.user };
};

export default connect(mapStateToProps)(IDCardBetaEnrollment);
export { IDCardBetaEnrollment };
