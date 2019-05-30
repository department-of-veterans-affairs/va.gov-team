import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { focusElement } from '../../../platform/utilities/ui';
import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';
import OMBInfo from '@department-of-veterans-affairs/formation/OMBInfo';
import FormTitle from '../../common/schemaform/components/FormTitle';
import SaveInProgressIntro, { introActions, introSelector } from '../../common/schemaform/save-in-progress/SaveInProgressIntro';

class IntroductionPage extends React.Component {
  componentDidMount() {
    focusElement('.va-nav-breadcrumbs-list');
  }

  goForward = () => {
    this.props.router.push(this.props.route.pageList[1].path);
  }

  render() {
    const infoBoxContent = (
      <p>
        <strong>You won’t be able to save your work or come back to finish.</strong> So, before you start, it’s a good idea to gather the information and documents you’ll need.
      </p>
    );

    return (
      <div className="schemaform-intro">
        <FormTitle title="Apply for pre-need eligibility determination"/>
        <p>
          Equal to VA Form 40-10007 (Application for Pre-Need Determination of Eligibility for Burial in a VA National Cemetery)
        </p>
        <SaveInProgressIntro
          prefillEnabled={this.props.route.formConfig.prefillEnabled}
          messages={this.props.route.formConfig.savedFormMessages}
          pageList={this.props.route.pageList}
          startText="Start the Pre-need Eligibility Application"
          {...this.props.saveInProgressActions}
          {...this.props.saveInProgress}>
          Please complete the 40-10007 form to apply for pre-need eligibility.
        </SaveInProgressIntro>
        <div className="process schemaform-process">
          <ol>
            <li className="process-step list-one">
              <h5>Prepare</h5>
              <h6>To fill out this application, you’ll need:</h6>
              <ul>
                <li>
                  The name of the VA national cemetery where you’d prefer to be buried. <a href="/facilities/">Find a VA national cemetery</a>.
                </li>
                <li>
                  Service history or the service history of the Servicemember or Veteran who’s sponsoring your application. This includes your or your sponsor’s:
                  <ul>
                    <li>Social Security number (and Military Service Number if it’s different than the Social Security number)</li>
                    <li>VA claim number (if you know it)</li>
                    <li>Date and place of birth</li>
                    <li>Date of death (if the Servicemember or Veteran has died)</li>
                    <li>Military status and history</li>
                  </ul>
                </li>
              </ul>
              <h6>You’ll need to upload:</h6>
              <ul><li>A copy of your or your sponsor’s DD214 or other separation documents</li></ul>
              <h6>Additional information and documents needed for certain applicants:</h6>
              <ul>
                <li>
                  <strong>If you’re applying as the legally married spouse or surviving spouse or the unmarried adult child of a Servicemember or Veteran</strong>, you’ll need your personal information (including Social Security number and date of birth).
                  <br/>
                </li>
                <li>
                  <strong>If you’re applying on behalf of someone else</strong>, you’ll need to upload supporting documents or an affidavit (a written statement of facts confirmed by an oath or affirmation) showing that you’re:
                  <ul>
                    <li>The applicant’s court-appointed representative, <strong>or</strong></li>
                    <li>The applicant’s caregiver (including a spouse or other relative), <strong>or</strong></li>
                    <li>An attorney or agent acting on behalf of the applicant under a durable power of attorney, <strong>or</strong></li>
                    <li>The manager or principal officer of an institution in which the applicant is being cared for</li>
                  </ul>
                </li>
                <li>
                  <strong>If you're applying for an unmarried adult child</strong>, you’ll need to upload supporting documents showing:
                  <ul>
                    <li>Medical evidence of a disability</li>
                    <li>Start date of a disability</li>
                    <li>The child's age when diagnosed with a disability</li>
                  </ul>
                </li>
              </ul>
              <p>
                <strong>What if I need help filling out my application?</strong> An accredited representative, like a Veterans Service Officer (VSO), can help you fill out your claim. <a href="/disability-benefits/apply/help/">Get help filing your claim.</a>
              </p>
              <AlertBox
                content={infoBoxContent}
                isVisible
                status="info"/>
            </li>
            <li className="process-step list-two">
              <h5>Apply</h5>
              <p>Complete this pre-need eligibility determination form.</p>
              <p>After submitting the form, you’ll get a confirmation message. You can print this for your records.</p>
            </li>
            <li className="process-step list-three">
              <h5>VA Review</h5>
              <p>We’ll let you know by mail if we need more information.</p>
            </li>
            <li className="process-step list-four">
              <h5>Decision</h5>
              <p>After we process your claim, you'll get a notice in the mail about the decision.</p>
            </li>
          </ol>
        </div>
        <SaveInProgressIntro
          buttonOnly
          messages={this.props.route.formConfig.savedFormMessages}
          pageList={this.props.route.pageList}
          startText="Start the pre-need eligibility determination application"
          {...this.props.saveInProgressActions}
          {...this.props.saveInProgress}/>
        <div className="omb-info--container">
          <OMBInfo resBurden={20} ombNumber="2900-0784" expDate="11/30/2018"/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    saveInProgress: introSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveInProgressActions: bindActionCreators(introActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroductionPage);

export { IntroductionPage };
