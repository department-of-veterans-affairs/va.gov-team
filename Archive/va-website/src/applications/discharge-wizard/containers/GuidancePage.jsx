import { connect } from 'react-redux';
import React from 'react';
import moment from 'moment';
import recordEvent from '../../../platform/monitoring/record-event';

import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';
import CarefulConsiderationStatement from '../components/CarefulConsiderationStatement';
import { branchOfService, board, formData, venueAddress } from '../utils';
import { venueWarning, upgradeVenueWarning } from '../config';

class GuidancePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    localStorage.setItem('dw-viewed-guidance', true);
    localStorage.setItem('dw-formValues', JSON.stringify(this.props.formValues));

    if (sessionStorage.getItem('dw-session-started')) {
      sessionStorage.removeItem('dw-session-started');
    } else {
      this.props.router.push('/');
    }

    const el = document.getElementById('dw-home-link');
    if (el) {
      el.focus();
    }

    window.scrollTo(0, 0);
  }

  handleFAQToggle = (e) => {
    e.preventDefault();
    recordEvent({ event: 'discharge-upgrade-faq-toggle' });
    this.setState({
      [e.target.name]: !this.state[e.target.name],
    });
  }

  handlePrint(e) {
    e.preventDefault();
    recordEvent({ event: 'discharge-upgrade-print' });
    if (window.print) {
      window.print();
    }
  }

  renderResultSummary() {
    const forReconsideration = this.props.formValues['10_prevApplicationType'] === '3' && this.props.formValues['11_failureToExhaust'] !== '1';
    return `Based on your answers, you need to complete Department of Defense (DoD) Form ${formData(this.props.formValues).num} and send it to the ${board(this.props.formValues).name} for the ${branchOfService(this.props.formValues['1_branchOfService'])}${forReconsideration ? ' for reconsideration' : ''}`;
  }

  renderOptionalStep() {
    const validReason = ['1', '2'].indexOf(this.props.formValues['4_reason']) > -1;
    const dischargeYear = parseInt(this.props.formValues['2_dischargeYear'], 10);
    const validYear = dischargeYear >= 2001 && dischargeYear <= 2009;

    if (validReason && validYear) {
      return (
        <div className="feature">
          <h4>(Optional): Apply to the Physical Disability Board of Review (PDBR)</h4>
          <p>
            If you believe your disability rating for TBI, PTSD, or mental health conditions is too low, consider applying to the Physical Disability Board of Review (PDBR). The DoD created the PDBR specifically to review appeals about low disability ratings for Veterans discharged between 2001 and 2009. Some Veterans discharged during this period of time received lower disability ratings than they deserved, especially if they suffered from TBI, PTSD, or other mental health conditions. If you were discharged during this period of time and previously received a disability rating of 20% or lower, you’re eligible to apply to the PDBR for review. The PDBR does not issue discharge upgrades and cannot review conditions not listed in your military record before your separation. But, if the PDBR finds that your disability rating was unjustly low, it may help you make your case to upgrade your discharge. <a target="_blank" href="https://health.mil/PDBR">Learn more about PBDR reviews</a>. <a target="_blank" href="https://health.mil/Military-Health-Topics/Conditions-and-Treatments/Physical-Disability/Disability-Evaluation/Physical-Disability-Board-of-Review/PDBR-Application-Process">Apply for a PBDR review</a>.
          </p>
        </div>
      );
    }
    return null;
  }

  renderStepOne() {
    const questionOneResponse = this.props.formValues['4_reason'];
    const specReason = ['1', '2', '4'].indexOf(questionOneResponse) > -1;
    const boardToSubmit = board(this.props.formValues);
    /* eslint-disable quote-props */
    const reasons = {
      '1': {
        name: 'PTSD or other mental health conditions',
        type: 'condition',
      },
      '2': {
        name: 'TBI',
        type: 'condition',
      },
      '4': {
        name: 'sexual assault',
        type: 'experience',
      },
    };
    /* eslint-enable quote-props */

    const strongCaseTips = () => {
      if (specReason) {
        return (
          <div>
            <span>For discharges related to {reasons[questionOneResponse].name}, be sure to answer these questions to make the strongest case:</span>
            <ul>
              <li>
                Did you have {reasons[questionOneResponse].type === 'experience' ? 'an' : 'a'} {reasons[questionOneResponse].type} that may explain or contribute to the discharge?
              </li>
              <li>
                Did that {reasons[questionOneResponse].type} {questionOneResponse === '4' ? 'happen' : 'start or get worse'} during your military service?
              </li>
              <li>
                Why does the {reasons[questionOneResponse].type} directly explain or contribute to the discharge?
              </li>
              <li>
                Why does the {reasons[questionOneResponse].type} carry more weight than any other reasons you may have been discharged for?
              </li>
            </ul>
          </div>
        );
      }
      return null;
    };

    const dd214Tips = (
      <ul>
        <li>Pay special attention to item 6, which asks for the reason for your change. Here you should explain why you need a new DD214, including any problems you face when you have to show both the DD214 and the DD215. You may want to consider attaching additional pages to fully answer this question.</li>
      </ul>
    );

    const nonDd2014Tips = (
      <ul>
        <li>Pay special attention to item 6, which asks for the reason for your change. Most Veterans attach additional pages to answer this question. {strongCaseTips()}</li>
        {this.props.formValues['10_prevApplicationType'] === '3' && <li>Because you’re applying for reconsideration of a previous application, you’ll need to enter the previous application number in Item 6b. <strong>Note:</strong> You’re generally only eligible for reconsideration if you have new evidence to present that wasn’t available when you applied last time. Make sure you’re clear about exactly what that new evidence is. Additionally, changes in DoD policy, like the new consideration guidelines for PTSD, TBI, and sexual assault or harassment, can qualify you for reconsideration.</li>}
        {this.props.formValues['4_reason'] === '4' && <li>
          Note: For upgrades related to sexual assault or harassment, you do not need to prove the original assault or harassment occurred—meaning if you didn’t file charges or report the incident, you can still apply for an upgrade. The important part of your application is where you explain the impact of the incident on your service. For example, detail how the incident caused a decrease in your productivity, or was the reason for PTSD.
        </li>}
        {boardToSubmit.abbr !== 'DRB' && <li>Item 8 asks for the date when you discovered the error or injustice you‘re asking the Board to address. If it‘s been more than 3 years since you found this error or injustice, you‘ll need to include a reason why the Board should consider your application. Examples of good reasons include new evidence you‘ve found to support your claim, or recent changes in policy (like liberal consideration for PTSD, TBI, or military sexual assault or harassment). These kinds of reasons will make it more likely for the Board to decide in your favor. The 3-year time limit isn‘t a strict rule, so don‘t let it keep you from applying if you think you have a strong case.</li>}
        {boardToSubmit.abbr !== 'DRB' && <li>Item 10 asks if you‘re willing to appear in person before the Board in Washington, DC. The Board rarely asks Veterans to appear in person, but if you say you‘re willing to do so, it may help show how serious you are about your case.</li>}
        {boardToSubmit.abbr === 'DRB' && this.props.formValues['10_prevApplicationType'] !== '1' && <li>You can request either a Documentary Review or Personal Appearance Review from the Discharge Review Board (DRB). If your case is especially complicated and requires detailed explanation, you <strong>may</strong> have more success with a Personal Appearance Review. Note that you‘ll have to pay your travel costs if you make a personal appearance. Documentary Reviews are generally faster, so we recommend you begin with this type of review. Also, if you‘re denied in a Documentary Review, you can then appeal through a Personal Appearance Review. But you can’t request Documentary Review after a Personal Appearance Review.</li>}
        {boardToSubmit.abbr === 'DRB' && this.props.formValues['10_prevApplicationType'] === '1' && <li>The DRB allows you to request either a Documentary Review or a Personal Appearance Review. Because your application was already denied during a Documentary Review, you must apply for a Personal Appearance Review in Washington, DC. Note that you will have to pay your travel costs if you make a personal appearance.</li>}
      </ul>
    );

    const form = formData(this.props.formValues);
    return (
      <li className="list-group-item">
        <div>
          <h4>Download and fill out DoD Form {form.num}</h4>
          <p>
            Important tips for completing Form {form.num}:
          </p>
          {this.props.formValues['4_reason'] === '8' ? dd214Tips : nonDd2014Tips}
          <a target="_blank" href={form.link} rel="external" className="usa-button-primary usa-button" ref={(el) => { this.downloadFormBtn = el; }}>Download Form {form.num}</a>
          <AlertBox
            content={<div>
              <h4 className="usa-alert-heading">Need help preparing your application?</h4>
              <p>The process of preparing a discharge upgrade or correction application can be a lot of work and can take a long time. Although many Veterans are successful on their own, you may want to consider finding someone to advocate for you in this process. Try a Veterans Service Organization (VSO), search online for a lawyer who may provide services for low or no cost, or ask other Veterans for recommendations. <a target="_blank" href="https://www.benefits.va.gov/vso/varo.asp">Find a VSO near you</a>.</p>
            </div>}
            isVisible
            status="warning"/>
        </div>
      </li>
    );
  }

  renderStepTwo() {
    if (this.props.formValues['4_reason'] === '8') {
      return null;
    }

    const boardToSubmit = board(this.props.formValues);
    let militaryRecordInfo;
    if (parseInt(this.props.formValues['2_dischargeYear'], 10) >= 1997) {
      militaryRecordInfo = <p>You can get your complete military personnel record (your Official Military Personnel File, or OMPF) online. <a target="_blank" href="https://www.dpris.dod.mil/veteranaccess.html">Get your military personnel record.</a></p>;
    } else {
      militaryRecordInfo = <p>You can make a request online or by mail to get your complete military personnel record (your Official Military Personnel File, or OMPF) mailed to you. If at first you get only some of the available records, you should request the full set of records. <a target="_blank" href="https://www.archives.gov/veterans/military-service-records">Get your military personnel record.</a></p>;
    }

    let specificTypeInstruction;
    switch (this.props.formValues['4_reason']) {
      case '1':
        specificTypeInstruction = 'you suffered from symptoms of PTSD or mental health conditions while in the service';
        break;
      case '2':
        specificTypeInstruction = 'you suffered from symptoms of TBI while in the service';
        break;
      case '3':
        if (this.props.formValues['5_dischargeType'] === '2') {
          specificTypeInstruction = 'your character of discharge was due only to your sexual orientation and not to bad conduct';
        }
        break;
      case '4':
        specificTypeInstruction = 'the conduct that led to your discharge stemmed from military sexual assault and not other factors';
        break;
      default:
    }

    return (
      <li className="list-group-item">
        <div>
          <h4>Add supporting information</h4>
          <p>
            To improve your chances of success, also include as many of the below documents as you can.
          </p>
          <ul>
            <li><strong>Military Record</strong>: In most cases, your records will be important to the Board’s decision. The Board may not have easy access to your military records, especially if you served many years ago, so we strongly recommend you submit any relevant documents yourself. {boardToSubmit.abbr !== 'DRB' ? <span>Note that the {boardToSubmit.abbr} is required to help you collect evidence if you can demonstrate you made a reasonable attempt to get your records but you didn’t succeed.</span> : null} {militaryRecordInfo} {specificTypeInstruction && <p>Remember, you should try to prove that {specificTypeInstruction}. Submit any documents from this record that help support your case for a discharge upgrade.</p>}</li>
            {this.renderMedicalRecordInfo()}
            <li><strong>“Buddy Statements” or Other References From Service</strong>: On top of military records, you can attach statements from friends or colleagues you knew while in the service, or other individuals with direct knowledge of your time in the military. The content of the letter is more important than who it comes from, as long as the writer’s opinion is credible and they know you well. The writer should state how they learned about the facts or opinions they’re writing about. The letters may include statements about your achievements in the military, positive relationships you formed in the military, why your discharge may be unjust or incorrect, and your good deeds during that time.</li>
            <li><strong>Testaments of Achievements Since Service</strong>: You may decide to add information about what you have achieved in your life since your discharge, particularly if your discharge involved any issues related to drugs, alcohol, or bad behavior. This can be in the form of a letter from an employer or community leader, evidence of successful drug treatment, or copies of certificates and degrees. The DoD will soon release more specific information about achievements since service, but, for now, add any achievements you would like to call out.</li>
          </ul>
        </div>
      </li>
    );
  }

  renderMedicalRecordInfo() {
    if (['1', '2', '4'].indexOf(this.props.formValues['4_reason']) > -1) {
      let requestQuestion;
      if (parseInt(this.props.formValues['2_dischargeYear'], 10) >= 1992) {
        requestQuestion = <a target="_blank" href="https://www.archives.gov/st-louis/military-personnel/ompf-background.html">Find out how to request your military medical records.</a>;
      } else {
        requestQuestion = <span>Your <strong>military medical records</strong> will be included with the VA medical records you request.</span>;
      }

      return (
        <li>
          <strong>Medical Records</strong>: In most cases, the Board won’t have easy access to your medical records, so you should submit any relevant documents yourself.
          <ul>
            <li>You can request your <strong>VA medical records</strong> by submitting VA Form 10-5345 to your local VA Medical Center. <a target="_blank" href="https://www.va.gov/vaforms/medical/pdf/vha-10-5345-fill.pdf">Download VA Form 10-5345.</a></li>
            <li>{requestQuestion}</li>
            <li>You can also submit <strong>medical records from a private practice doctor</strong>—contact your doctor’s office to get the records you need.</li>
          </ul>
        </li>
      );
    }
    return null;
  }

  renderStepThree() {
    const reasonCode = this.props.formValues['4_reason'];
    const noPrevApp = this.props.formValues['8_prevApplication'] === '2';
    const prevAppType = this.props.formValues['10_prevApplicationType'];
    const prevAppYear = this.props.formValues['9_prevApplicationYear'];
    const dischargeYear = this.props.formValues['2_dischargeYear'];
    const dischargeMonth = this.props.formValues['3_dischargeMonth'] || 1;
    const oldDischarge = moment().diff(moment([dischargeYear, dischargeMonth]), 'years', true) > 15;

    const boardToSubmit = board(this.props.formValues);

    let boardExplanation;
    let onlineSubmissionMsg;

    if (reasonCode === '8' && prevAppType !== '3') {
      boardExplanation = 'the Discharge Review Board (DRB). The DRB was the Board that granted your previous upgrade request, so you must apply to them for a new DD214.';
      if (oldDischarge) {
        boardExplanation = `the ${boardToSubmit.name}. The Board handles all cases from 15 or more years ago.`;
      }
    } else if (reasonCode === '8' && prevAppType === '3') {
      boardExplanation = `the ${boardToSubmit.name}. The ${boardToSubmit.abbr} was the Board that granted your previous upgrade request, so you must apply to them for a new DD214.`;
    } else if (prevAppYear === '1' && boardToSubmit.abbr === 'DRB') {
      boardExplanation = `the Discharge Review Board (DRB) for the ${this.props.formValues['1_branchOfService']}. In general, the DRB does not handle appeals for previously denied applications. However, because new rules have recently come out regarding discharges like yours, the Boards may treat your application as a new case. If possible, review the new policies and state in your application how the change in the policy is relevant to your case. If the DRB decides that the new rules don’t apply to your situation, you will likely have to send an appeal to a different Board.`;
    } else if (this.props.formValues['11_failureToExhaust'] && boardToSubmit.abbr === 'DRB') {
      boardExplanation = `the Discharge Review Board (DRB) for the ${this.props.formValues['1_branchOfService']}. The ${boardToSubmit.name} previously rejected your application because you did not apply to the DRB first. For applications like yours, the ${boardToSubmit.abbr} can review only cases that have already been rejected by the DRB. The DRB is a panel of commissioned officers, or a mix of senior non-commissioned officers (NCOs) and officers. The deadline to apply to the DRB is 15 years after your date of discharge. After this time period, you must apply to a different board.`;
    } else if (prevAppType === '2') {
      boardExplanation = `the ${boardToSubmit.abbr} for the ${branchOfService(this.props.formValues['1_branchOfService'])} to appeal that decision. This is because your application was denied by the Discharge Review Board (DRB) on a Personal Appearance Review.`;
    } else if (prevAppType === '3' && this.props.formValues['11_failureToExhaust'] !== '1') {
      boardExplanation = `the ${boardToSubmit.abbr}. This is because, if you’ve applied before, you must re-apply to the ${boardToSubmit.abbr} for reconsideration.`;
    } else if ((noPrevApp || (['1', '4'].indexOf(prevAppType) > -1) || prevAppYear === '1') && oldDischarge) {
      boardExplanation = `the ${boardToSubmit.abbr} for the ${branchOfService(this.props.formValues['1_branchOfService'])}. This is because the Board handles all cases from 15 or more years ago.`;
    } else if (this.props.formValues['7_courtMartial'] === '1') {
      boardExplanation = `the ${boardToSubmit.abbr} for the ${branchOfService(this.props.formValues['1_branchOfService'])}. This is because your discharge was the result of a general court-martial.`;
    } else if (reasonCode === '5' || this.props.formValues['6_intention'] === '1') {
      boardExplanation = `the ${boardToSubmit.abbr} for the ${branchOfService(this.props.formValues['1_branchOfService'])}. This is because you want to change information other than your characterization of discharge, re-enlistment code, separation code, and narrative reason for discharge.`;
    } else if (boardToSubmit.abbr === 'DRB') {
      boardExplanation = `the Discharge Review Board (DRB) for the ${branchOfService(this.props.formValues['1_branchOfService'])}. The DRB is a panel of commissioned officers, or a combination of senior non-commissioned officers (NCOs) and officers. The deadline to apply to the DRB is 15 years after your date of discharge; after this time period, you must apply to a different board. ${prevAppType === '1' ? 'Because your application was rejected by the DRB on Documentary Review, you must apply for a Personal Appearance Review.' : ''}`;
    }

    if (boardToSubmit.abbr === 'DRB' && this.props.formValues['1_branchOfService'] === 'army') {
      onlineSubmissionMsg = <p>You can also submit this information online at ACTSOnline. <a target="_blank" href="http://actsonline.army.mil/">Visit ACTSOnline to submit your information</a>.</p>;
    } else {
      onlineSubmissionMsg = <p>Unfortunately, there isn’t a way to submit this form online.</p>;
    }

    return (
      <li className="list-group-item">
        <div>
          <h4>Mail your completed form and all supporting materials</h4>
          <p>There are a number of different boards that handle discharge upgrades and corrections. Based on your answers on the previous page, you need to apply to {boardExplanation}</p>
          {prevAppYear === '1' && ['BCNR', 'BCMR'].includes(board(this.props.formValues).abbr) ? <p>Your last application was made before the release of DoD guidance related to discharges like yours. As a result, the Board may treat your application as a new case. If possible, review the new policies and state in your application how the change in policy is relevant to your case.</p> : null}
          <p>
            Mail your completed form and all supporting documents to the {boardToSubmit.abbr} at:
          </p>
          {venueAddress(this.props.formValues)}
          {onlineSubmissionMsg}
          <a href="#" onClick={this.handlePrint}>Print this page</a>
        </div>
      </li>
    );
  }

  renderAddlInstructions() {
    return (
      <div>
        <div className="usa-accordion accordion-container">
          <ul className="usa-unstyled-list">
            <li itemScope itemType="http://schema.org/Question">
              <button className="usa-button-unstyled usa-accordion-button" aria-controls="dbq1" itemProp="name" name="q1" aria-expanded={!!this.state.q1} onClick={this.handleFAQToggle}>What happens after I send in my application?</button>
              <div id="dbq1" className="usa-accordion-content" itemProp="acceptedAnswer" itemScope itemType="http://schema.org/Answer" aria-hidden={!this.state.q1}>
                <div itemProp="text">
                  <p>The Board reviews nearly all applications within 18 months. You can continue to submit supporting documentation until the Board has reviewed your application.</p>
                  <p>If your application is successful, the Board will direct your service personnel office to issue you either a DD215, which contains updates to the DD214, or an entirely new DD214. If you get a new DD214, <a target="_blank" href="https://www.dpris.dod.mil/veteranaccess.html">request a copy</a>.</p>
                  <p>If your appeal results in raising your discharge to honorable, you’ll immediately be considered an eligible Veteran to VA, and you can apply for VA benefits and services. For now, you may still apply for VA eligibility by <a target="_blank" href="https://www.benefits.va.gov/BENEFITS/docs/COD_Factsheet.pdf">requesting a Character of Discharge review</a>.</p>
                </div>
              </div>
            </li>
            <li itemScope itemType="http://schema.org/Question">
              <button className="usa-button-unstyled usa-accordion-button" aria-controls="dbq2" itemProp="name" name="q2" aria-expanded={!!this.state.q2} onClick={this.handleFAQToggle}>Can I get VA benefits without a discharge upgrade?</button>
              <div id="dbq2" className="usa-accordion-content" itemProp="acceptedAnswer" itemScope itemType="http://schema.org/Answer" aria-hidden={!this.state.q2}>
                <div itemProp="text">
                  <p>
                    Even with a less than honorable discharge, you may be able to access some VA benefits through the Character of Discharge review process. When you apply for VA benefits, we’ll review your record to determine if your service was “honorable for VA purposes.” This review can take up to a year. Please provide us with documents supporting your case, similar to the evidence you’d send with an application to upgrade your discharge.
                  </p>
                  <p>You may want to consider finding someone to advocate on your behalf, depending on the complexity of your case. A lawyer or Veterans Service Organization (VSO) can collect and submit supporting documents for you. <a href="https://www.benefits.va.gov/vso/varo.asp">Find a VSO near you.</a></p>
                  <p><strong>Note:</strong> You can ask for a VA Character of Discharge review while at the same time applying for a discharge upgrade from the Department of Defense (DoD) or the Coast Guard.</p>
                  <p>If you experienced sexual assault or harassment while in the military, or need mental health services related to PTSD or other mental health conditions linked to your service, you may qualify immediately for VA health benefits, even without a VA Character of Discharge review or a discharge upgrade.</p>
                  <p>Learn more about:</p>
                  <ul>
                    <li><a href="https://www.vets.gov/health-care/health-conditions/military-sexual-trauma/">VA health benefits for Veterans who have experienced military sexual trauma</a></li>
                    <li><a href="https://www.vets.gov/health-care/health-conditions/mental-health/">VA health benefits for Veterans with mental health conditions</a></li>
                    <li><a href="https://www.vets.gov/health-care/health-conditions/mental-health/ptsd/">VA health benefits for Veterans with PTSD</a></li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <h4>Additional Resources</h4><hr/>
        {this.renderAdditionalResources()}
        <p>
          <strong>Please note:</strong> This information was created based on how you answered the questions on the previous page. This information will not be specific to someone with different answers to the questions.
        </p>
      </div>
    );
  }

  renderAdditionalResources() {
    const serviceBranch = this.props.formValues['1_branchOfService'];

    return (
      <ul>
        <li><a target="_blank" href="/health-care/health-conditions/military-sexual-trauma/">VA health benefits for Veterans who experience military sexual trauma</a></li>
        <li><a target="_blank" href="/health-care/health-conditions/mental-health/">VA health benefits for Veterans with mental health conditions</a></li>
        <li><a target="_blank" href="/health-care/health-conditions/mental-health/ptsd/">VA health benefits for Veterans with PTSD</a></li>
        <li><a target="_blank" href="https://www.benefits.va.gov/BENEFITS/docs/COD_Factsheet.pdf">VA Guidance on Character of Discharge Reviews</a></li>
        {serviceBranch === 'army' && <li><a target="_blank" href="http://arba.army.pentagon.mil">Army Review Boards Agency</a></li>}
        {serviceBranch === 'army' && board(this.props.formValues).abbr === 'DRB' && <li><a target="_blank" href="http://arba.army.pentagon.mil/adrb-overview.html">Army Discharge Review Board</a></li>}
        {serviceBranch === 'army' && board(this.props.formValues).abbr === 'BCMR' && <li><a target="_blank" href="http://arba.army.pentagon.mil/abcmr-overview.html">Army Board for Correction of Military Records</a></li>}
        {['navy', 'marines'].includes(serviceBranch) && <li><a target="_blank" href="http://www.secnav.navy.mil/mra/CORB/pages/ndrb/default.aspx">Naval Discharge Review Board</a></li>}
        {serviceBranch === 'airForce' && board(this.props.formValues).abbr === 'BCMR' && <li><a target="_blank" href="http://www.afpc.af.mil/Board-for-Correction-of-Military-Records/">Air Force Board for Correction of Military Records</a></li>}
        {serviceBranch === 'coastGuard' && board(this.props.formValues).abbr === 'BCMR' && <li><a target="_blank" href="https://www.uscg.mil/Resources/legal/BCMR/">Coast Guard Board for Correction of Military Records</a></li>}
        {serviceBranch === 'coastGuard' && board(this.props.formValues).abbr === 'DRB' && <li><a target="_blank" href="https://www.uscg.mil/Resources/Legal/DRB.aspx/">Coast Guard Discharge Review Board</a></li>}
      </ul>
    );
  }

  renderDischargeWarning() {
    const boardToSubmit = board(this.props.formValues);
    const prevAppType = this.props.formValues['7_courtMartial'];

    const alertContent = (
      <p>Because you answered that you’re not sure if your discharge was the outcome of a general court-martial, it’s important for you to check your military records. The results below are for Veterans who have discharges that are administrative or the result of a special or summary court-martial.</p>
    );

    return (
      <AlertBox
        content={alertContent}
        isVisible={(boardToSubmit.abbr === 'DRB') && prevAppType === '3'}
        status="warning"/>
    );
  }

  renderApplicationWarning() {
    const prevAppType = this.props.formValues['10_prevApplicationType'];
    const reason = this.props.formValues['4_reason'];

    const alertContent = (
      <p>Because you answered that you weren’t sure where you applied for an upgrade before, it’s important for you to check your records. The instructions below are for Veterans who had a successful upgrade application reviewed by the {branchOfService(this.props.formValues['1_branchOfService'])} Discharge Review Board (DRB).</p>
    );

    return (
      <AlertBox
        content={alertContent}
        isVisible={(reason === '8') && prevAppType === '3'}
        status="warning"/>
    );
  }

  renderVenueWarnings() {
    const { formValues } = this.props;
    const prevAppType = formValues['10_prevApplicationType'];
    const reason = formValues['4_reason'];
    const dischargeYear = formValues['2_dischargeYear'];
    const dischargeMonth = formValues['3_dischargeMonth'] || 1;
    const oldDischarge = moment().diff(moment([dischargeYear, dischargeMonth]), 'years', true) >= 15;

    return (
      <div>
        <AlertBox
          content={venueWarning}
          isVisible={prevAppType === '4' && reason !== '8'}
          status="warning"/>
        <AlertBox
          content={upgradeVenueWarning}
          isVisible={prevAppType === '4' && reason === '8' && !oldDischarge}
          status="warning"/>
      </div>
    );
  }

  render() {
    return (
      <div className="dw-guidance">
        <h1>Your Steps for Upgrading Your Discharge</h1>
        <div className="medium-8">
          <div className="va-introtext">
            <p>
              {this.renderResultSummary()}.
            </p>
          </div>
          <CarefulConsiderationStatement formValues={this.props.formValues}/>
          {this.renderVenueWarnings()}
          {this.renderDischargeWarning()}
          {this.renderApplicationWarning()}
          {this.renderOptionalStep()}
          <ul className="vertical-list-group more-bottom-cushion numbered">
            {this.renderStepOne()}
            {this.renderStepTwo()}
            {this.renderStepThree()}
          </ul>
          {this.renderAddlInstructions()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formValues: state.dischargeWizard.form,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GuidancePage);
