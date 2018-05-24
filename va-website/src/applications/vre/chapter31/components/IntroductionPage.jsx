import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { focusElement } from '../../../../platform/utilities/ui';
import SaveInProgressIntro, { introActions, introSelector } from '../../../common/schemaform/save-in-progress/SaveInProgressIntro';
import FormTitle from '../../../common/schemaform/components/FormTitle';
import OMBInfo from '@department-of-veterans-affairs/formation/OMBInfo';

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
        <FormTitle title="Apply for vocational rehabilitation for service-disabled Veterans"/>
        <p>Equal to VA Form 28-1900 (Disabled Veterans Application for Vocational Rehabilitation).</p>
        <SaveInProgressIntro
          prefillEnabled={this.props.route.formConfig.prefillEnabled}
          pageList={this.props.route.pageList}
          startText="Start the VR&E Application"
          {...this.props.saveInProgressActions}
          {...this.props.saveInProgress}/>
        <div className="process schemaform-process schemaform-process-sip">
          <h4>Follow the steps below to apply for vocational rehabilitiation benefits.</h4>
          <ol>
            <li className="process-step list-one">
              <div><h5>Prepare</h5></div>
              <div><h6>To fill out this application, you’ll need your:</h6></div>
              <ul>
                <li>Social Security number or VA file number (required)</li>
                <li>Military status and service history</li>
                <li>Disability rating</li>
              </ul>
              <p><strong>What if I need help filling out my application?</strong><br/>An accredited representative with a Veterans Service Organization (VSO) can help you fill out your claim. <a href="/disability-benefits/apply/help/">Get help filing your claim</a>.</p>
              <p><strong>What if I don’t yet have a service connected disability rating?</strong><br/>You don’t need to wait for a rating to apply for VR&E benefits. <a href="/employment/vocational-rehab-and-employment/apply-vre/">Learn how to apply for VR&E services if you haven’t yet received a service-connected disability rating</a>.</p>
            </li>
            <li className="process-step list-two">
              <div><h5>Apply</h5></div>
              <p>Complete this vocational rehabilitation form.</p>
              <p>After submitting the form, you’ll get a confirmation message. You can print this for your records.</p>
            </li>
            <li className="process-step list-three">
              <div><h5>VA Review</h5></div>
              <p>We process claims in the order we receive them.</p>
              <p>We’ll let you know by mail if we need more information.</p>
            </li>
            <li className="process-step list-four">
              <div><h5>Decision</h5></div>
              <p>If you’re eligible for vocational rehabilitation benefits, we’ll invite you to an orientation session at your nearest VA regional office.</p>
            </li>
          </ol>
        </div>
        <SaveInProgressIntro
          prefillEnabled={this.props.route.formConfig.prefillEnabled}
          pageList={this.props.route.pageList}
          startText="Start the VR&E Application"
          {...this.props.saveInProgressActions}
          {...this.props.saveInProgress}/>
        <div className="omb-info--container" style={{ paddingLeft: '0px' }}>
          <OMBInfo resBurden={15} ombNumber="2900-0154" expDate="12/31/2019"/>
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
