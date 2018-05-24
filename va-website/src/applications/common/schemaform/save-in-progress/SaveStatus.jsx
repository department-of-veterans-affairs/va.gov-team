import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

import SignInLink from '../../../../platform/forms/components/SignInLink';
import { SAVE_STATUSES, saveErrors } from './actions';

class SaveStatus extends React.Component {
  render() {
    const { form, isLoggedIn, showLoginModal, toggleLoginModal } = this.props;

    let savedAtMessage;
    if (form.lastSavedDate) {
      const savedAt = moment(form.lastSavedDate);
      savedAtMessage = ` Last saved at ${savedAt.format('M/D/YYYY [at] h:mm a')}`;
    } else {
      savedAtMessage = '';
    }

    const savedStatus = form.autoSavedStatus;

    const hasError = saveErrors.has(savedStatus) &&
      ((savedStatus === SAVE_STATUSES.noAuth && !isLoggedIn) || savedStatus !== SAVE_STATUSES.noAuth);

    const signInLink = (
      <SignInLink
        className="va-button-link"
        isLoggedIn={isLoggedIn}
        showLoginModal={showLoginModal}
        toggleLoginModal={toggleLoginModal}>Sign in to save your form in progress</SignInLink>
    );

    return (
      <div>
        {savedStatus === SAVE_STATUSES.success && <div className="panel saved-success-container">
          <i className="fa fa-check-circle saved-success-icon"></i>Application has been saved.{savedAtMessage}
        </div>}
        {savedStatus === SAVE_STATUSES.pending && <p className="saved-form-autosaving">Saving...</p>}
        {hasError &&
          <div role="alert" className="usa-alert usa-alert-error no-background-image schemaform-save-error">
            {savedStatus === SAVE_STATUSES.clientFailure &&
              'We’re sorry. We’re unable to connect to Vets.gov. Please check that you’re connected to the Internet, so we can save your form in progress.'}
            {savedStatus === SAVE_STATUSES.failure &&
              'We’re sorry, but we’re having some issues and are working to fix them. You can continue filling out the form, but it will not be automatically saved as you fill it out.'}
            {!isLoggedIn && savedStatus === SAVE_STATUSES.noAuth &&
              <span>Sorry, you’re no longer signed in. {signInLink}.</span>}
          </div>}
      </div>
    );
  }
}


SaveStatus.propTypes = {
  form: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

export default SaveStatus;
