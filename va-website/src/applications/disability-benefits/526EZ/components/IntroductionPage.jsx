import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import { focusElement } from '../../../../platform/utilities/ui';
import OMBInfo from '@department-of-veterans-affairs/formation/OMBInfo';
import FormTitle from '../../../common/schemaform/components/FormTitle';
import { introActions, introSelector } from '../../../common/schemaform/save-in-progress/SaveInProgressIntro';
import { toggleLoginModal } from '../../../../platform/site-wide/user-nav/actions';

import formConfig from '../config/form';
import { submitIntentToFile } from '../actions';
import FormStartControls from './FormStartControls';

class IntroductionPage extends React.Component {
  componentDidMount() {
    focusElement('.va-nav-breadcrumbs-list');
  }

  hasSavedForm = () => {
    const { saveInProgress: { user } } = this.props;
    return user.profile && user.profile.savedForms
      .filter(f => moment.unix(f.metadata.expires_at).isAfter())
      .find(f => f.form === this.props.formId);
  }

  updateITFStatus = (ITFStatus) => {
    this.setState({ ITFStatus });
  }

  beforeStartForm = () => {
    this.props.submitIntentToFile(formConfig, this.updateITFStatus);
  }

  authenticate = (e) => {
    e.preventDefault();
    this.props.toggleLoginModal(true);
  }

  render() {
    const { saveInProgress: { user } } = this.props;
    const ITFStatus = this.state ? this.state.ITFStatus : undefined;

    return (
      <div className="schemaform-intro">
        <FormTitle title="Apply for increased disability compensation"/>
        <p>Equal to VA Form 21-526EZ (Application for Disability Compensation and Related Compensation Benefits).</p>
        <FormStartControls
          pathname={this.props.location.pathname}
          user={user}
          authenticate={this.authenticate}
          ITFStatus={ITFStatus}
          {...this.props}
          beforeStartForm={this.beforeStartForm}/>
        <h4>Follow the steps below to apply for increased disability compensation.</h4>
        <div className="process schemaform-process">
          <ol>
            <li className="process-step list-one">
              <div><h5>Prepare</h5></div>
              <div><h6>When you apply for a disability increase, be sure to have these on hand:</h6></div>
              <ul>
                <li>Your Social Security number</li>
                <li>VA medical and hospital records that show your claimed disability has gotten worse</li>
                <li>Private medical and hospital records that show your claimed disability has gotten worse</li>
              </ul>
              <p>In some situations you may need to turn in additional forms to support your claim. For example, you’ll need to fill out another form if you’re claiming a dependent or requesting aid and attendance benefits. <a href="#">Learn more about what additional forms you may need to file with your disability claim</a>.</p>
              <p><strong>What if I need help filling out my application?</strong></p>
              <p>An accredited representative, like a Veterans Service Officer (VSO), can help you fill out your claim. </p>
              <p><a href="/disability-benefits/apply/help/index.html">Get help filing your claim</a>.</p>
              <div>
                <div className="usa-alert usa-alert-info schemaform-sip-alert">
                  <div className="usa-alert-body">
                    <p><strong>Disability ratings</strong></p>
                    <p>We assign disability ratings with a severity from 0% to 100% for each disability claim. This rating can change if there are changes in your condition. We’ll decide a claim for increase based on the medical evidence and supporting documents you turn in with your claim.</p>
                    <p><a href="/disability-benefits/eligibility/ratings/">Learn how VA assigns disability ratings</a>.</p>
                  </div>
                </div>
                <br/>
              </div>
            </li>
            <li className="process-step list-two">
              <div><h5>Apply</h5></div>
              <p>Complete this disability compensation benefits form.</p>
              <p>After submitting the form, you’ll get a confirmation message. You can print this for your records.</p>
            </li>
            <li className="process-step list-three">
              <div><h5>VA Review</h5></div>
              <p>We usually process claims within <strong>103 days</strong>.</p>
            </li>
            <li className="process-step list-four">
              <div><h5>Decision</h5></div>
              <p>Once we’ve processed your claim, you’ll get a notice in the mail with our decision.</p>
            </li>
          </ol>
        </div>
        <FormStartControls
          pathname={this.props.location.pathname}
          user={user}
          authenticate={this.authenticate}
          ITFStatus={ITFStatus}
          {...this.props}
          buttonOnly
          beforeStartForm={this.beforeStartForm}/>
        {/* TODO: Remove inline style after I figure out why .omb-info--container has a left padding */}
        <div className="omb-info--container" style={{ paddingLeft: '0px' }}>
          <OMBInfo resBurden={25} ombNumber="2900-0747" expDate="11/30/2017"/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.form,
    saveInProgress: introSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveInProgressActions: bindActionCreators(introActions, dispatch),
    submitIntentToFile: (config, onChange) => {
      dispatch(submitIntentToFile(config, onChange));
    },
    toggleLoginModal: (update) => {
      dispatch(toggleLoginModal(update));
    }
  };
}

IntroductionPage.PropTypes = {
  saveInProgress: PropTypes.object.isRequired,
  toggleLoginModal: PropTypes.func.isRequired,
  verifyUrl: PropTypes.string.isRequired,
  loginUrl: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroductionPage);

export { IntroductionPage };
