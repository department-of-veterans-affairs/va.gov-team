import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import classNames from 'classnames';

import recordEvent from '../../../platform/monitoring/record-event';
import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';
import ErrorableRadioButtons from '@department-of-veterans-affairs/formation/ErrorableRadioButtons';
import ErrorableTextInput from '@department-of-veterans-affairs/formation/ErrorableTextInput';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import { makeField } from '../../../platform/forms/fields';

import { closeAlert } from '../actions/alert';

import {
  fetchPreferences,
  savePreferences,
  setNotificationEmail,
  setNotificationFlag
} from '../actions/preferences';

import DiscardChangesModal from '../components/DiscardChangesModal';
import SettingsButton from '../components/SettingsButton';

export class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.promptLeavePage = this.promptLeavePage.bind(this);
    this.renderSaveButtons = this.renderSaveButtons.bind(this);

    this.state = { discardChanges: false };
  }

  componentDidMount() {
    this.props.fetchPreferences();
    this.props.router.setRouteLeaveHook(this.props.route, this.promptLeavePage);
    window.addEventListener('beforeunload', this.promptLeavePage);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.promptLeavePage);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, flag } = this.props;
    this.props.savePreferences({
      emailAddress: email.value,
      rxFlag: flag.value === 'true'
    });
    recordEvent({
      event: 'rx-notification-setting',
      'rx-notify': flag.value,
    });
  }

  promptLeavePage(event) {
    const { email, flag } = this.props;
    const isSaveable = email.dirty || flag.dirty;
    let message;

    if (isSaveable) {
      message = 'You haven’t saved your changes. Are you sure you want to leave this page without saving?';
      event.returnValue = message; // eslint-disable-line no-param-reassign
    }

    return message;
  }

  renderSaveButtons() {
    const { email, flag } = this.props;
    const isSaveable = email.dirty || flag.dirty;

    const saveButtonClass = classNames(
      'usa-button',
      { 'usa-button-disabled': !isSaveable }
    );

    return (
      <div className="rx-notifications-save">
        <button
          className={saveButtonClass}
          disabled={!isSaveable}>
          Save changes
        </button>
        {
          isSaveable &&
          (<button
            className="usa-button-secondary"
            type="button"
            onClick={() => this.setState({ discardChanges: true })}>
            Cancel
          </button>)
        }
      </div>
    );
  }

  render() {
    const { isLoading, isSaving } = this.props;

    if (isLoading) {
      return (
        <div id="rx-settings">
          <LoadingIndicator message="Loading your preferences..."/>
        </div>
      );
    }

    if (isSaving) {
      return (
        <div id="rx-settings">
          <LoadingIndicator message="Saving your preferences..."/>
        </div>
      );
    }

    const { alert, email, flag } = this.props;

    return (
      <div id="rx-settings">
        <AlertBox
          content={alert.content}
          isVisible={alert.visible}
          onCloseAlert={this.props.closeAlert}
          scrollOnShow
          status={alert.status}/>
        <div className="rx-app-title">
          <h1>Settings</h1>
          <SettingsButton/>
        </div>
        <div>
          Receive email notifications of when your prescriptions ship.
        </div>
        <form onSubmit={this.handleSubmit}>
          <ErrorableRadioButtons
            name="notifications"
            label="Prescription refill shipment notification:"
            options={[
              { label: 'On', value: 'true' },
              { label: 'Off', value: 'false' }
            ]}
            onValueChange={v => this.props.setNotificationFlag(v)}
            value={flag}/>
          {
            flag.value !== 'false' &&
            (<ErrorableTextInput
              name="email"
              label="Send email notifications to:"
              onValueChange={({ value }) =>
                this.props.setNotificationEmail(makeField(value, true))
              }
              field={email}/>)
          }
          {this.renderSaveButtons()}
        </form>
        <DiscardChangesModal
          onClose={() => this.setState({ discardChanges: false })}
          onSubmit={this.props.fetchPreferences}
          visible={this.state.discardChanges}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const rxState = state.health.rx;
  const { email, flag, loading, saving } = rxState.preferences;
  return {
    alert: rxState.alert,
    email,
    flag,
    isLoading: loading,
    isSaving: saving
  };
};

const mapDispatchToProps = {
  closeAlert,
  fetchPreferences,
  savePreferences,
  setNotificationEmail,
  setNotificationFlag
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Settings));
