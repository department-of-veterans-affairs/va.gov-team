import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import { getNextPagePath } from '../routing';
import { toggleLoginModal } from '../../../../platform/site-wide/user-nav/actions';
import { fetchInProgressForm, removeInProgressForm } from './actions';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import FormStartControls from './FormStartControls';
import { getIntroState } from './selectors';

class SaveInProgressIntro extends React.Component {
  getAlert(savedForm) {
    let alert;
    const { renderSignInMessage, prefillEnabled, verifyRequiredPrefill, verifiedPrefillAlert, unverifiedPrefillAlert } = this.props;
    const { profile, login } = this.props.user;
    const prefillAvailable = this.props.prefillAvailable || !!(profile && profile.prefillsAvailable.includes(this.props.formId)); // TODO: remove first clause once 526 added to list
    if (login.currentlyLoggedIn) {
      if (savedForm) {
        const savedAt = this.props.lastSavedDate
          ? moment(this.props.lastSavedDate)
          : moment.unix(savedForm.last_updated);
        const expirationDate = moment.unix(savedForm.metadata.expires_at).format('M/D/YYYY');

        alert = (
          <div>
            <div className="usa-alert usa-alert-info no-background-image schemaform-sip-alert">
              <div className="schemaform-sip-alert-title">Application status: <strong>In progress</strong></div>
              <div className="saved-form-metadata-container">
                <span className="saved-form-metadata">Last saved on {savedAt.format('M/D/YYYY [at] h:mm a')}</span>
                <div className="expires-container">Your saved application <span className="expires">will expire on {expirationDate}.</span></div>
              </div>
              <div>{this.props.children}</div>
            </div>
            <br/>
          </div>
        );
      } else if (prefillAvailable && !verifiedPrefillAlert) {
        alert = (
          <div>
            <div className="usa-alert usa-alert-info schemaform-sip-alert">
              <div className="usa-alert-body">
                <strong>Note:</strong> Since you’re signed in to your account, we can prefill part of your application based on your account details. You can also save your form in progress, and come back later to finish filling it out.
              </div>
            </div>
            <br/>
          </div>
        );
      } else if (prefillAvailable && verifiedPrefillAlert) {
        alert = verifiedPrefillAlert;
      } else {
        alert = (
          <div>
            <div className="usa-alert usa-alert-info schemaform-sip-alert">
              <div className="usa-alert-body">
                You can save this form in progress, and come back later to finish filling it out.
              </div>
            </div>
            <br/>
          </div>
        );
      }
    } else if (renderSignInMessage) {
      alert = renderSignInMessage(prefillEnabled);
    } else if (prefillEnabled && !verifyRequiredPrefill) {
      alert = (
        <div>
          <div className="usa-alert usa-alert-info schemaform-sip-alert">
            <div className="usa-alert-body">
              <strong>If you’re signed in to your account, your application process can go more smoothly. Here’s why:</strong><br/>
              <ul>
                <li>We can prefill part of your application based on your account details.</li>
                <li>You can save your form in progress, and come back later to finish filling it out. You have 60 days from the date you start or update your application to submit the form. After 60 days, the form won’t be saved, and you’ll need to start over.</li>
              </ul><br/>
              <button className="va-button-link" onClick={() => this.props.toggleLoginModal(true)}>Sign in to your account.</button>
            </div>
          </div>
          <br/>
        </div>
      );
    } else if (prefillEnabled && unverifiedPrefillAlert) {
      alert = unverifiedPrefillAlert;
    } else {
      alert = (
        <div>
          <div className="usa-alert usa-alert-info schemaform-sip-alert">
            <div className="usa-alert-body">
              You can save this form in progress, and come back later to finish filling it out.<br/>
              <button className="va-button-link" onClick={() => this.props.toggleLoginModal(true)}>Sign in to your account.</button>
            </div>
          </div>
          <br/>
        </div>
      );
    }
    return alert;
  }

  getStartPage = () => {
    const { pageList, pathname, saveInProgress: { formData } } = this.props;
    const data = formData || {};
    // pathname is only provided when the first page is conditional
    if (pathname) return getNextPagePath(pageList, data, pathname);
    return pageList[1].path;
  };

  render() {
    const { profile } = this.props.user;
    const startPage = this.getStartPage();
    const savedForm = profile && profile.savedForms
      .filter(f => moment.unix(f.metadata.expires_at).isAfter())
      .find(f => f.form === this.props.formId);
    const prefillAvailable = this.props.prefillAvailable || !!(profile && profile.prefillsAvailable.includes(this.props.formId)); // TODO: remove 1st clause once 526 added to list

    if (profile.loading && !this.props.resumeOnly) {
      return (
        <div>
          <LoadingIndicator message="Checking to see if you have a saved version of this application..."/>
          <br/>
        </div>
      );
    }

    if (this.props.resumeOnly && !savedForm) {
      return null;
    }

    return (
      <div>
        {!this.props.buttonOnly && this.getAlert(savedForm)}
        <FormStartControls
          resumeOnly={this.props.resumeOnly}
          messages={this.props.messages}
          startText={this.props.startText}
          startPage={startPage}
          formId={this.props.formId}
          returnUrl={this.props.returnUrl}
          migrations={this.props.migrations}
          prefillTransformer={this.props.prefillTransformer}
          beforeStartForm={this.props.beforeStartForm}
          fetchInProgressForm={this.props.fetchInProgressForm}
          removeInProgressForm={this.props.removeInProgressForm}
          prefillAvailable={prefillAvailable}
          formSaved={!!savedForm}/>
        {!this.props.buttonOnly && this.props.afterButtonContent}
        <br/>
      </div>
    );
  }
}

SaveInProgressIntro.propTypes = {
  buttonOnly: PropTypes.bool,
  afterButtonContent: PropTypes.element,
  prefillEnabled: PropTypes.bool,
  formId: PropTypes.string.isRequired,
  messages: PropTypes.object,
  migrations: PropTypes.array,
  returnUrl: PropTypes.string,
  lastSavedDate: PropTypes.number,
  user: PropTypes.object.isRequired,
  pageList: PropTypes.array.isRequired,
  saveInProgress: PropTypes.object.isRequired,
  fetchInProgressForm: PropTypes.func.isRequired,
  removeInProgressForm: PropTypes.func.isRequired,
  startText: PropTypes.string,
  pathname: PropTypes.string,
  toggleLoginModal: PropTypes.func.isRequired,
  renderSignInMessage: PropTypes.func,
  verifyRequiredPrefill: PropTypes.bool,
  verifiedPrefillAlert: PropTypes.element,
  unverifiedPrefillAlert: PropTypes.element
};

export const introSelector = getIntroState;

function mapStateToProps(state) {
  return {
    saveInProgress: introSelector(state)
  };
}

export default connect(mapStateToProps)(SaveInProgressIntro);

export { SaveInProgressIntro };

export const introActions = {
  fetchInProgressForm,
  removeInProgressForm,
  toggleLoginModal
};
