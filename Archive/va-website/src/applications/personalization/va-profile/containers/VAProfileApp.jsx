import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  saveField,
  updateFormField,
  openModal,
  clearErrors,
  clearMessage,
  fetchAddressConstants,
  fetchContactInformation,
  fetchHero,
  fetchMilitaryInformation,
  fetchPersonalInformation
} from '../actions';

import RequiredLoginView from '../../../../platform/user/authorization/components/RequiredLoginView';
import DowntimeNotification, { services } from '../../../../platform/monitoring/DowntimeNotification';
import ProfileView from '../components/ProfileView';

class VAProfileApp extends React.Component {
  render() {
    return (
      <div>
        <RequiredLoginView
          authRequired={1}
          serviceRequired="user-profile"
          user={this.props.account}
          loginUrl={this.props.loginUrl}
          verifyUrl={this.props.verifyUrl}>
          <DowntimeNotification appTitle="user profile page" dependencies={[services.mvi, services.emis]}>
            <ProfileView
              user={this.props.account}
              fetchAddressConstants={this.props.fetchAddressConstants}
              fetchContactInformation={this.props.fetchContactInformation}
              fetchHero={this.props.fetchHero}
              fetchMilitaryInformation={this.props.fetchMilitaryInformation}
              fetchPersonalInformation={this.props.fetchPersonalInformation}
              profile={this.props.profile}
              message={{
                content: this.props.profile.message,
                clear: this.props.clearMessage
              }}
              updateActions={this.props.updateActions}
              updateFormFieldActions={this.props.updateFormFieldActions}
              modal={{
                open: this.props.openModal,
                currentlyOpen: this.props.profile.modal,
                formFields: this.props.profile.formFields,
                pendingSaves: this.props.profile.pendingSaves,
                errors: this.props.profile.errors,
                clearErrors: this.props.clearErrors
              }}/>
          </DowntimeNotification>
        </RequiredLoginView>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.user,
    profile: state.vaProfile,
  };
};

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators({
    fetchAddressConstants,
    fetchContactInformation,
    fetchHero,
    fetchMilitaryInformation,
    fetchPersonalInformation,
    openModal,
    clearErrors,
    clearMessage
  }, dispatch);

  actions.updateActions = bindActionCreators(saveField, dispatch);
  actions.updateFormFieldActions = bindActionCreators(updateFormField, dispatch);
  return actions;
};

export default connect(mapStateToProps, mapDispatchToProps)(VAProfileApp);
export { VAProfileApp };
