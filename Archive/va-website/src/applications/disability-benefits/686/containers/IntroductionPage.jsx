import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { focusElement } from '../../../../platform/utilities/ui';
import OMBInfo from '@department-of-veterans-affairs/formation/OMBInfo';
import FormTitle from '../../../common/schemaform/components/FormTitle';
import SaveInProgressIntro, { introActions, introSelector } from '../../../common/schemaform/save-in-progress/SaveInProgressIntro';
import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';

class IntroductionPage extends React.Component {
  componentDidMount() {
    focusElement('.va-nav-breadcrumbs-list');
  }
  alertContent = () => {
    return (
      <div>
        <h3>Why do I need to declare a dependent</h3>
        <p>If you're getting disability compensation and have a 30% or higher disability rating, you can add a dependent to your disability claim. Adding a dependent to your claim could make you eligible for a higher disability payment.</p>
        <h3>When do I need to declare a dependent?</h3>
        <p>You need to let VA know when something changes in the status of your dependents that could affect their eligibility for benefits. Changes in status could include in the birth or adoption of a child, if you get married or divorced, if your child becomes seriously disabled, or if your child is over 18 years old and not attending school.</p>
      </div>
    );
  }
  render() {
    return (
      <div className="schemaform-intro">
        <FormTitle title="Apply to add a dependent to your VA benefits"/>
        <p>Equal to VA Form 21-686c (Application for Declaration of Status of Dependents).</p>
        <SaveInProgressIntro
          prefillEnabled={this.props.route.formConfig.prefillEnabled}
          messages={this.props.route.formConfig.savedFormMessages}
          pageList={this.props.route.pageList}
          startText="Start the Declaration of Dependents Application"
          {...this.props.saveInProgressActions}
          {...this.props.saveInProgress}>
          Please complete the 686 form to apply for declaration of status of dependents.
        </SaveInProgressIntro>
        <h4>Follow the steps below to add a dependent to your VA benefits.</h4>
        <div className="process schemaform-process">
          <ol>
            <li className="process-step list-one">
              <div><h5>Prepare</h5></div>
              <div><h6>When you apply, be sure to have these on hand.</h6></div>
              <ul>
                <li>Your Social Security number</li>
                <li>The Veteran's current and previous marriage details. If the Veteran's spouse was married before, please include this information too.</li>
                <li>Details about the Veteran's unmarried child, include their name, Social Security number, and date of birth</li>
              </ul>
              <p><strong>If you're claiming a dependent who's between the ages of 18 and 23 and attending school,</strong> you'll also need to fill out and turn in a Request for Approval of School Attendance (VA Form 21-764).</p>
              <div>
                <a href="https://www.vba.va.gov/pubs/forms/VBA-21-674-ARE.pdf">Download VA Form 21-674.</a>
              </div>
              <ul><AlertBox content={this.alertContent()} isVisible status="info"/></ul>
              <br/>
              <div><h6>What if I need help filling out my application?</h6></div>
              <ul><p>An accredited representative, like a Veterans Service Officer (VSO), can help you fill out your claim.</p>
                <div><a href="/disability-benefits/apply/help/index.html">Get help filing your claim.</a></div></ul>
            </li>
            <li className="process-step list-two">
              <div><h5>Apply</h5></div>
              <p>Complete this declaration of status of dependents form.</p>
              <p>After submitting the form, you’ll get a confirmation message. You can print this for your records.</p>
            </li>
            <li className="process-step list-three">
              <div><h5>VA Review</h5></div>
              <p>We process applications in the order we receive them. We may contact you if we have questions or need more information.</p>
            </li>
            <li className="process-step list-four">
              <div><h5>Decision</h5></div>
              <p>You'll get a notice in the mail once we've processed your claim.</p>
            </li>
          </ol>
        </div>
        <SaveInProgressIntro
          buttonOnly
          messages={this.props.route.formConfig.savedFormMessages}
          pageList={this.props.route.pageList}
          startText="Start the Declaration of Dependents Application"
          {...this.props.saveInProgressActions}
          {...this.props.saveInProgress}/>
        <div className="omb-info--container" style={{ paddingLeft: '0px' }}>
          <OMBInfo resBurden={15} ombNumber="2900-0043" expDate="06/30/2020"/>
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
