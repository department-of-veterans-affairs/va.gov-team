import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { focusElement } from '../../../../platform/utilities/ui';
import OMBInfo from '@department-of-veterans-affairs/formation/OMBInfo';
import FormTitle from '../../../common/schemaform/components/FormTitle';
import SaveInProgressIntro, {
  introActions,
  introSelector
} from '../../../common/schemaform/save-in-progress/SaveInProgressIntro';

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
        <FormTitle title="Apply for educational and vocational counseling"/>
        <p>
          Equal to VA Form 28-8832 (Educational/Vocational Counseling
          Application).
        </p>
        <SaveInProgressIntro
          prefillEnabled={this.props.route.formConfig.prefillEnabled}
          pageList={this.props.route.pageList}
          startText="Start the VR&E Application"
          {...this.props.saveInProgressActions}
          {...this.props.saveInProgress}>
          Please complete the Chapter 36 form to apply for benefits
        </SaveInProgressIntro>
        <div className="process schemaform-process schemaform-process-sip">
          <h4>
            Follow the steps below to apply for educational and vocational
            counseling.
          </h4>
          <ol>
            <li className="process-step list-one">
              <div>
                <h5>Prepare</h5>
              </div>
              <div>
                <h6>
                  To fill out this application, you’ll need your or your
                  sponsor’s:
                </h6>
              </div>
              <ul>
                <li>Social Security number or VA file number (required)</li>
                <li>Date of birth</li>
                <li>Military status and service history</li>
              </ul>
              <div>
                <h6>
                  If you’re not on active duty, you may also need a copy of
                  your:
                </h6>
              </div>
              <ul>
                <li>Discharge papers (DD214 or other separation documents)</li>
              </ul>
              <p>
                <strong>What if I need help filling out my application?</strong>{' '}
                An accredited representative with a Veterans Service
                Organization (VSO) can help you fill out your claim.{' '}
                <a href="/disability-benefits/apply/help/index.html">
                  Get help filing your claim
                </a>.
              </p>
            </li>
            <li className="process-step list-two">
              <div>
                <h5>Apply</h5>
              </div>
              <p>Complete this educational and vocational counseling form.</p>
              <p>
                After submitting the form, you’ll get a confirmation message.
                You can print this for your records.
              </p>
            </li>
            <li className="process-step list-three">
              <div>
                <h5>VA Review</h5>
              </div>
              <p>We process claims in the order we receive them.</p>
              <p>We’ll let you know by mail if we need more information.</p>
            </li>
            <li className="process-step list-four">
              <div>
                <h5>Decision</h5>
              </div>
              <p>
                If you’re eligible for educational and vocational counseling
                benefits, we’ll invite you to meet with a Vocational
                Rehabilitation Counselor (VRC). Your VRC will work with you to
                map out a career path.
              </p>
            </li>
          </ol>
        </div>
        <SaveInProgressIntro
          buttonOnly
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
