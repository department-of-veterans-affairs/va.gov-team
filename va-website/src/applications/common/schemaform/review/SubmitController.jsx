import React from 'react';
import Raven from 'raven-js';
import PropTypes from 'prop-types';
import SubmitButtons from './SubmitButtons';
import PrivacyAgreement from '../../../../platform/forms/components/PrivacyAgreement';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { isValidForm } from '../validation';
import { getActivePages } from '../../../../platform/forms/helpers';
import {
  createPageListByChapter,
  expandArrayPages,
} from '../helpers';

import recordEvent from '../../../../platform/monitoring/record-event';
import {
  setPrivacyAgreement,
  setSubmission,
  submitForm
} from '../actions';

class SubmitController extends React.Component {

  componentWillReceiveProps(nextProps) {
    const nextStatus = nextProps.form.submission.status;
    const previousStatus = this.props.form.submission.status;
    if (nextStatus !== previousStatus && nextStatus === 'applicationSubmitted') {
      const newRoute = `${nextProps.formConfig.urlPrefix}confirmation`;
      this.props.router.push(newRoute);
    }
  }

  goBack = () => {
    const {
      form,
      pageList,
      router
    } = this.props;

    const eligiblePageList = getActivePages(pageList, form.data);
    const expandedPageList = expandArrayPages(eligiblePageList, this.props.form.data);

    router.push(expandedPageList[expandedPageList.length - 2].path);
  }

  handleSubmit = () => {
    const {
      form,
      formConfig,
      pagesByChapter,
      privacyAgreementAccepted,
      trackingPrefix
    } = this.props;

    const {
      isValid,
      errors
    } = isValidForm(form, pagesByChapter);

    if (isValid) {
      this.props.submitForm(formConfig, form);
    } else {
      // validation errors in this situation are not visible, so we’d
      // like to know if they’re common
      if (privacyAgreementAccepted) {
        recordEvent({
          event: `${trackingPrefix}-validation-failed`,
        });
        Raven.captureMessage('Validation issue not displayed', {
          extra: {
            errors,
            prefix: trackingPrefix
          }
        });
        this.props.setSubmission('status', 'validationError');
      }
      this.props.setSubmission('hasAttemptedSubmit', true);
    }
  }

  render() {
    const {
      privacyAgreementAccepted,
      renderErrorMessage,
      showPrivacyAgreementError,
      submission
    } = this.props;
    return (
      <div>
        <p><strong>Note:</strong> According to federal law, there are criminal penalties, including a fine and/or imprisonment for up to 5 years, for withholding information or for providing incorrect information. (See 18 U.S.C. 1001)</p>
        <PrivacyAgreement
          required
          onChange={this.props.setPrivacyAgreement}
          checked={privacyAgreementAccepted}
          showError={showPrivacyAgreementError}/>
        <SubmitButtons
          onBack={this.goBack}
          onSubmit={this.handleSubmit}
          submission={submission}
          renderErrorMessage={renderErrorMessage}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const {
    formConfig,
    pageList,
    renderErrorMessage
  } = ownProps;
  const router = ownProps.router;

  const form = state.form;
  const pagesByChapter = createPageListByChapter(formConfig);
  const trackingPrefix = formConfig.trackingPrefix;
  const submission = form.submission;
  const showPrivacyAgreementError = submission.hasAttemptedSubmit;
  const privacyAgreementAccepted = form.data.privacyAgreementAccepted;

  return {
    form,
    formConfig,
    pagesByChapter,
    pageList,
    privacyAgreementAccepted,
    renderErrorMessage,
    router,
    submission,
    showPrivacyAgreementError,
    trackingPrefix
  };
}

const mapDispatchToProps = {
  setPrivacyAgreement,
  setSubmission,
  submitForm
};

SubmitController.propTypes = {
  form: PropTypes.object.isRequired,
  formConfig: PropTypes.object.isRequired,
  pagesByChapter: PropTypes.object.isRequired,
  pageList: PropTypes.array.isRequired,
  privacyAgreementAccepted: PropTypes.bool.isRequired,
  renderErrorMessage: PropTypes.func,
  router: PropTypes.object.isRequired,
  setPrivacyAgreement: PropTypes.func.isRequired,
  setSubmission: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  submission: PropTypes.object.isRequired,
  trackingPrefix: PropTypes.string.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubmitController));

// for tests
export { SubmitController };
