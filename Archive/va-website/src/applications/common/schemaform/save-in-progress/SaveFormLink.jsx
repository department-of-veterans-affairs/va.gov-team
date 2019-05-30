import React from 'react';
import Scroll from 'react-scroll';
import PropTypes from 'prop-types';
import recordEvent from '../../../../platform/monitoring/record-event';

import { SAVE_STATUSES, saveErrors } from './actions';
import { focusElement } from '../../../../platform/utilities/ui';

const Element = Scroll.Element;
const scroller = Scroll.scroller;
const scrollToTop = () => {
  scroller.scrollTo('saveFormLinkTop', window.VetsGov.scroll || {
    duration: 500,
    delay: 0,
    smooth: true
  });
};

class SaveFormLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpened: false
    };

    this.loginAttemptInProgress = false;
  }

  componentDidMount() {
    if (saveErrors.has(this.props.savedStatus)) {
      scrollToTop();
      focusElement('.schemaform-save-error');
    }
  }

  componentWillReceiveProps(newProps) {
    const loginAttemptCompleted = this.props.showLoginModal === true
      && newProps.showLoginModal === false
      && this.loginAttemptInProgress;

    if (loginAttemptCompleted && newProps.user.login.currentlyLoggedIn) {
      this.loginAttemptInProgress = false;
      this.saveFormAfterLogin();
    } else if (loginAttemptCompleted && !newProps.user.login.currentlyLoggedIn) {
      this.loginAttemptInProgress = false;
    }
  }

  handleSave() {
    const {
      formId,
      version,
      data
    } = this.props.form;
    const returnUrl = this.props.locationPathname;
    this.props.saveAndRedirectToReturnUrl(formId, data, version, returnUrl);
  }

  saveFormAfterLogin = () => {
    recordEvent({
      event: `${this.props.form.trackingPrefix}sip-login-before-save`
    });
    this.handleSave();
  }

  saveForm = () => {
    if (this.props.user.login.currentlyLoggedIn) {
      this.handleSave();
    } else {
      this.openLoginModal();
    }
  }

  openLoginModal = () => {
    this.loginAttemptInProgress = true;
    this.props.toggleLoginModal(true);
  }

  render() {
    const { savedStatus } = this.props.form;

    const saveLinkMessage = this.props.user.login.currentlyLoggedIn
      ? 'Finish this application later'
      : 'Save and finish this application later';

    return (
      <div style={{ display: this.props.children ? 'inline' : null }}>
        <Element name="saveFormLinkTop"/>
        {saveErrors.has(savedStatus) &&
          <div role="alert" className="usa-alert usa-alert-error no-background-image schemaform-save-error">
            {savedStatus === SAVE_STATUSES.failure &&
              'We’re sorry. Something went wrong when saving your form. If you’re on a secure and private computer, you can leave this page open and try saving your form again in a few minutes. If you’re on a public computer, you can continue to fill out your form, but it won’t automatically save as you fill it out.'}
            {savedStatus === SAVE_STATUSES.clientFailure &&
              'We’re sorry, but we’re unable to connect to Vets.gov. Please check that you’re connected to the Internet and try again.'}
            {savedStatus === SAVE_STATUSES.noAuth &&
              <span>Sorry, you’re signed out. Please <button className="va-button-link" onClick={this.openLoginModal}>sign in</button> again to save your application.</span>}
          </div>
        }
        {savedStatus !== SAVE_STATUSES.noAuth &&
          <span><button type="button" className="va-button-link schemaform-sip-save-link" onClick={this.saveForm}>{this.props.children || saveLinkMessage}</button>.</span>}
      </div>
    );
  }
}

SaveFormLink.propTypes = {
  locationPathname: PropTypes.string.isRequired,
  form: PropTypes.shape({
    formId: PropTypes.string.isRequired,
    version: PropTypes.number.isRequired,
    data: PropTypes.object.isRequired,
    trackingPrefix: PropTypes.string.isRequired,
    savedStatus: PropTypes.string.isRequired
  }).isRequired,
  user: PropTypes.object.isRequired,
  showLoginModal: PropTypes.bool.isRequired,
  toggleLoginModal: PropTypes.func.isRequired,
};

export default SaveFormLink;
