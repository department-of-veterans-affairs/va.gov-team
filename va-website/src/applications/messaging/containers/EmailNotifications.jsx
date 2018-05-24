/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import recordEvent from '../../../platform/monitoring/record-event';
import ErrorableRadioButtons from '@department-of-veterans-affairs/formation/ErrorableRadioButtons';
import ErrorableTextInput from '@department-of-veterans-affairs/formation/ErrorableTextInput';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import { makeField } from '../../../platform/forms/fields';

import {
  fetchPreferences,
  savePreferences,
  setNotificationEmail,
  setNotificationFrequency
} from '../actions';

import ModalDiscardChanges from '../components/ModalDiscardChanges';

export class EmailNotifications extends React.Component {
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

  handleSubmit(e) {
    e.preventDefault();
    const {
      emailAddress: { value: emailAddress },
      frequency: { value: frequency }
    } = this.props.preferences;
    this.props.savePreferences({ emailAddress, frequency });
    recordEvent({
      event: 'sm-notification-setting',
      'sm-notify-freq': frequency,
    });
  }

  promptLeavePage(event) {
    const { emailAddress, frequency } = this.props.preferences;
    const isSaveable = emailAddress.dirty || frequency.dirty;
    let message;

    if (isSaveable) {
      message = 'You haven’t saved your changes. Are you sure you want to leave this page without saving?';
      event.returnValue = message; // eslint-disable-line no-param-reassign
    }

    return message;
  }

  renderSaveButtons() {
    const { emailAddress, frequency } = this.props.preferences;
    const isSaveable = emailAddress.dirty || frequency.dirty;

    const saveButtonClass = classNames(
      'usa-button',
      { 'usa-button-disabled': !isSaveable }
    );

    return (
      <div className="msg-notifications-save">
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
    const { isLoadingPreferences, isSavingPreferences } = this.props;

    if (isLoadingPreferences) {
      return (
        <div className="va-tab-content">
          <LoadingIndicator message="Loading your preferences..."/>
        </div>
      );
    }

    if (isSavingPreferences) {
      return (
        <div className="va-tab-content">
          <LoadingIndicator message="Saving your preferences..."/>
        </div>
      );
    }

    const { emailAddress, frequency } = this.props.preferences;
    const isNotified = ['each_message', 'daily'].includes(frequency.value);

    return (
      <div className="va-tab-content">
        <div>
          Receive email notifications of of the arrival of new messages.
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>New message email notification:</label>
          <div className="msg-notifications-inputs">
            <div>
              <input
                id="notifications-on"
                type="radio"
                value="on"
                checked={isNotified}
                onChange={() => this.props.setNotificationFrequency(
                  makeField('each_message', true)
                )}/>
              <label htmlFor="notifications-on">On</label>
              {
                isNotified && <div className="form-expanding-group-open">
                  <ErrorableRadioButtons
                    name="frequency"
                    label=""
                    options={[
                      { label: 'Each message', value: 'each_message' },
                      { label: 'Once a day', value: 'daily' }
                    ]}
                    onValueChange={v => this.props.setNotificationFrequency(v)}
                    value={frequency}/>
                </div>
              }
            </div>
            <div>
              <input
                id="notifications-off"
                type="radio"
                value="off"
                checked={!isNotified}
                onChange={() => this.props.setNotificationFrequency(
                  makeField('none', true)
                )}/>
              <label htmlFor="notifications-off">Off</label>
            </div>
          </div>
          {
            frequency.value !== 'none' &&
            (<ErrorableTextInput
              name="emailAddress"
              label="Send email notifications to:"
              onValueChange={({ value }) =>
                this.props.setNotificationEmail({ value, dirty: true })
              }
              field={emailAddress}/>)
          }
          {this.renderSaveButtons()}
        </form>
        <ModalDiscardChanges
          onClose={() => this.setState({ discardChanges: false })}
          onSubmit={this.props.fetchPreferences}
          visible={this.state.discardChanges}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const msgState = state.health.msg;

  const {
    preferences,
    loading: {
      preferences: isLoadingPreferences,
      savingPreferences: isSavingPreferences
    }
  } = msgState;

  return {
    preferences,
    isLoadingPreferences,
    isSavingPreferences
  };
};

const mapDispatchToProps = {
  fetchPreferences,
  savePreferences,
  setNotificationEmail,
  setNotificationFrequency
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailNotifications);
