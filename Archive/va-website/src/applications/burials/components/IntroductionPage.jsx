import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { focusElement } from '../../../platform/utilities/ui';
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
    return (
      <div className="schemaform-intro">
        <FormTitle title="Apply for burial benefits"/>
        <p>Equal to VA Form 21P-530 (Application for Burial Benefits).</p>
        <SaveInProgressIntro
          prefillEnabled={this.props.route.formConfig.prefillEnabled}
          pageList={this.props.route.pageList}
          startText="Start the Burial Benefits Application"
          {...this.props.saveInProgressActions}
          {...this.props.saveInProgress}>
          Please complete the 21P-530 form to apply for burial benefits.
        </SaveInProgressIntro>
        <div className="process schemaform-process schemaform-process-sip">
          <h4>Follow the steps below to apply for burial benefits.</h4>
          <ol>
            <li className="process-step list-one">
              <div><h5>Prepare</h5></div>
              <div><h6><a href="/burials-and-memorials/survivor-and-dependent-benefits/burial-costs/">Find out if you qualify for a burial allowance</a>.</h6></div>
              <br/>
              <div><h6>To fill out this application, you’ll need information about the deceased Veteran, including their:</h6></div>
              <ul>
                <li>Social Security number or VA file number (required)</li>
                <li>Date and place of birth (required)</li>
                <li>Date and place of death (required)</li>
                <li>Military status and history</li>
              </ul>
              <div><h6>You may need to upload:</h6></div>
              <ul>
                <li>A copy of the deceased Veteran’s DD214 or other separation documents</li>
                <li>A copy of the Veteran’s death certificate</li>
                <li>Documentation for transportation costs (if you’re claiming costs for the transportation of the Veteran’s remains)</li>
              </ul>
              <p><strong>What if I need help filling out my application?</strong> An accredited representative, like a Veterans Service Officer (VSO), can help you fill out your claim. <a href="/disability-benefits/apply/help/index.html">Get help filing your claim</a>.</p>
              <h6>Learn about other survivor and dependent benefits</h6>
              <p>If you’re the survivor or dependent of a Veteran who died in the line of duty or from a service-related illness, you may be able to get a benefit called <a href="/burials-and-memorials/survivor-and-dependent-benefits/compensation/">Dependency and Indemnity Compensation</a>.</p>
            </li>
            <li className="process-step list-two">
              <div><h5>Apply</h5></div>
              <p>Complete an Application for Burial Benefits (VA Form 21P-530).<br/><a href="https://www.vba.va.gov/pubs/forms/VBA-21P-530-ARE.pdf">Download VA Form 21P-530</a>.</p>
              <p>Mail the application and other paperwork to your local regional benefit office.<br/><a href="/facilities">Find your local regional benefit office</a>.</p>
              <div>
                <p>Complete this burial benefits form.</p>
                <p>After submitting the form, you’ll get a confirmation message. You can print this for your records.</p>
              </div>
            </li>
            <li className="process-step list-three">
              <div><h5>VA Review</h5></div>
              <p>We process claims in the order we receive them.</p>
              <p>We’ll let you know by mail if we need more information.</p>
            </li>
            <li className="process-step list-four">
              <div><h5>Decision</h5></div>
              <p>After we process your claim, you’ll get a notice in the mail about the decision.</p>
            </li>
          </ol>
        </div>
        <SaveInProgressIntro
          buttonOnly
          pageList={this.props.route.pageList}
          startText="Start the Burial Benefits Application"
          {...this.props.saveInProgressActions}
          {...this.props.saveInProgress}/>
        <div className="omb-info--container" style={{ paddingLeft: '0px' }}>
          <OMBInfo resBurden={15} ombNumber="2900-0003" expDate="04/30/2020"/>
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
