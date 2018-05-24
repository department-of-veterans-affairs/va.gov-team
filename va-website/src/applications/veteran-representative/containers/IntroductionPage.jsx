import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { focusElement } from '../../../platform/utilities/ui';
import OMBInfo from '@department-of-veterans-affairs/formation/OMBInfo';
import FormTitle from '../../common/schemaform/components/FormTitle';
import SaveInProgressIntro, { introActions, introSelector } from '../../common/schemaform/save-in-progress/SaveInProgressIntro';

class IntroductionPage extends React.Component {
  componentDidMount() {
    focusElement('.va-nav-breadcrumbs-list');
  }

  render() {
    return (
      <div className="schemaform-intro">
        <FormTitle title="21-22 Appoint Veteran Service Officer as Representative"/>
        <p>Equal to VA Form 21-22 (Appointment of Veterans Service Organization as Claimant's Representative).</p>
        <SaveInProgressIntro
          prefillEnabled={this.props.route.formConfig.prefillEnabled}
          messages={this.props.route.formConfig.savedFormMessages}
          pageList={this.props.route.pageList}
          startText="Start the Application"
          {...this.props.saveInProgressActions}
          {...this.props.saveInProgress}>
          Please complete the 21-22 form to appoint the Veteran Service Organization as your representative.
        </SaveInProgressIntro>
        <h4>Follow the steps below to appoint Veteran Service Organization as your representative.</h4>
        <div className="process schemaform-process">
          <ol>
            <li className="process-step list-one">
              <div><h5>Prepare</h5></div>
              <div><h6>To fill out this application, you’ll need your:</h6></div>
              <ul>
                <li>Social Security number (required)</li>
                <li>VA file number (required)</li>
                <li>Veteran's Insurance number (required)</li>
              </ul>
            </li>
            <li className="process-step list-two">
              <div><h5>Apply</h5></div>
              <p>Complete this veteran representative form.</p>
              <p>After submitting the form, you’ll get a confirmation message. You can print this for your records.</p>
            </li>
          </ol>
        </div>
        <SaveInProgressIntro
          buttonOnly
          messages={this.props.route.formConfig.savedFormMessages}
          pageList={this.props.route.pageList}
          startText="Start the Application"
          {...this.props.saveInProgressActions}
          {...this.props.saveInProgress}/>
        <div className="omb-info--container" style={{ paddingLeft: '0px' }}>
          <OMBInfo resBurden={5} ombNumber="2900-0321" expDate="08-31-2018"/>
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
