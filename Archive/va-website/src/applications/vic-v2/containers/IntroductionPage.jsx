import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';

import { focusElement } from '../../../platform/utilities/ui';
import FormTitle from '../../common/schemaform/components/FormTitle';
import SaveInProgressIntro, { introActions, introSelector } from '../../common/schemaform/save-in-progress/SaveInProgressIntro';
import { hasSavedForm } from '../helpers';

const { animateScroll: scroll } = Scroll;

class IntroductionPage extends React.Component {
  componentDidMount() {
    focusElement('.va-nav-breadcrumbs-list');
  }

  componentDidUpdate(prevProps) {
    const { savedForms } = this.props.saveInProgress.user.profile;
    const { formId } = this.props.saveInProgress;
    const notPreviouslyLoggedIn = !prevProps.saveInProgress.user.login.currentlyLoggedIn;
    if (notPreviouslyLoggedIn && hasSavedForm(savedForms, formId)) {
      focusElement('[id="2-continueButton"]', { preventScroll: true });
      scroll.scrollToTop(window.VetsGov.scroll || {
        duration: 500,
        delay: 2,
        smooth: true,
      });
    }
  }

  goForward = () => {
    this.props.router.push(this.props.route.pageList[1].path);
  }

  render() {
    const { user } = this.props.saveInProgress;
    const idProofed = user.profile.services && user.profile.services.some(service => service === 'identity-proofed');
    const signedIn = user.login.currentlyLoggedIn;
    const accountBenefits = (
      <ul>
        <li>You can get your card sooner because we can confirm your Veteran status more quickly.</li>
        <li>We can prefill part of your application based on your account details.</li>
        <li>You can save your form in progress, and come back later to finish filling it out.</li>
      </ul>
    );
    const idProofingReqs = (
      <ul>
        <li>A smartphone (or a landline or mobile phone and a computer with an Internet connection)</li>
        <li>Your Social Security number</li>
        <li>Proof of your identity (which could be a driver’s license, a passport, or the ability to answer questions based on private and public data like your credit report)</li>
      </ul>
    );

    return (
      <div className="schemaform-intro">
        <FormTitle title="Apply for a Veteran ID Card"/>
        <SaveInProgressIntro
          prefillEnabled={this.props.route.formConfig.prefillEnabled}
          pageList={this.props.route.pageList}
          startText="Start the VIC Application"
          resumeOnly
          {...this.props.saveInProgressActions}
          {...this.props.saveInProgress}>
      Please complete the Veteran ID Card form to apply for a card.
        </SaveInProgressIntro>
        <h4>Follow the steps below to apply for a Veteran ID Card.</h4>
        <div className="process schemaform-process schemaform-process-sip">
          <ol>
            <li className="process-step list-one">
              <div><h5>Prepare</h5></div>
              <div><h6>When you apply, be sure to have these on hand:</h6></div>
              <ul>
                <li>Your Social Security number</li>
                <li>A digital copy of your DD214, DD256, DD257, or NGB22 that you can upload. This could be a .pdf or other photo file format, like a .jpeg or .png</li>
                <li>A digital color photo of yourself</li>
              </ul>
              <div className="vic-intro-indent">
                <div><h6>The photo has to follow all the standards listed here. It must:</h6></div>
                <ul>
                  <li>Show a full front view of your face and neck (with no hat, head covering, or headphones covering or casting shadows on your hairline or face), <strong>and</strong></li>
                  <li>Be cropped from your shoulders up (much like a passport photo), <strong>and</strong></li>
                  <li>Show you with your eyes open and a neutral expression, <strong>and</strong></li>
                  <li>Be taken in clothing you’d wear for a driver’s license photo, <strong>and</strong></li>
                  <li>Be a square size and have a white or plain-color background (with no scenery or other people in the photo), <strong>and</strong></li>
                  <li>Show what you look like now (a photo taken sometime in the last 10 years), <strong>and</strong></li>
                  <li>Be in a .jpeg, .png, .bmp, or .tiff file format</li>
                </ul>
                <h6>Examples of good ID photos</h6>
                <img className="example-photo" alt="placeholder" src="/img/example-photo-1.png"/>
                <img className="example-photo" alt="placeholder" src="/img/example-photo-2.png"/>
                <p>
                  <a href="/veteran-id-card/how-to-upload-photo" target="_blank">Learn more about uploading a photo for your Veteran ID Card</a>.
                </p>
              </div>
            </li>
            {!signedIn && <li className="process-step list-two">
              <div><h5>Sign In and Verify Your Identity</h5></div>
              <p>You have a choice for how you complete this application.</p>
              <h6>Choice 1: Sign in to Vets.gov and verify your identity</h6>
              <p>Sign in to Vets.gov with either your existing My Health<em>e</em>Vet or DS Logon account (the same one you use for eBenefits or MilConnect) or an ID.me account.</p>
              <p>If you don’t have an account on Vets.gov, you can create one using ID.me, our Veteran-owned, trusted technology partner that provides the strongest identity verification system available.</p>
              <p>When you’re signed in, we can verify your identity to make sure you’re you. This also helps to keep your information safe, and prevent fraud and identity theft.</p>
              <p>Verifying your identity is a one-time process that’ll take about 5-10 minutes. Once you’ve gone through
      the identity-proofing process, you won't need to do it again. To verify your identity through ID.me, you’ll need:</p>
              {idProofingReqs}
              <p>In addition to providing extra security measures, when you’re signed in to your account, your application process can go more smoothly. Here’s why:</p>
              {accountBenefits}
              <h6>Choice 2: Apply without signing in</h6>
              <p>You can complete the application without signing in, but it’ll take us longer to verify your identity. This will delay a decision on your application. The fastest way to get your application processed is to sign in with a My Health<em>e</em>Vet, DS Logon, or ID.me account.</p>
            </li>}
            {signedIn && !idProofed && <li className="process-step list-two">
              <div><h5>Verify Your Identity</h5></div>
              <p>After you gather the documents needed to apply, we suggest you verify your identity as an extra
security measure to make sure only you can access your Veteran ID Card. To do this, you’ll need to
use ID.me, our Veteran-owned, trusted technology partner that provides the strongest identity
verification system available.</p>
              <p>If you signed in using your My Health<em>e</em>Vet or DS Logon account, we’ll connect your account to Vets.gov through ID.me. To verify your identity through ID.me, you’ll need:</p>
              {idProofingReqs}
              <p>Verifying your identity is a one-time process that’ll take about 5-10 minutes. Once you’ve gone through the identity-proofing process, you won't need to do it again.</p>
              <p>In addition to providing extra security measures, when you’re signed in to your account, your application process can go more smoothly. Here’s why:</p>
              {accountBenefits}
            </li>}
            {signedIn && idProofed && <li className="process-step list-two">
              <div><h5>Sign In</h5></div>
              <p>We’re able to process your application faster since you’re signed in to your account.</p> Other benefits to being signed in include:
              {accountBenefits}
            </li>}
            <li className="process-step list-three">
              <div><h5>Apply</h5></div>
              <p>Complete this Veteran ID Card application.</p>
              <p>After submitting the form, you’ll get a confirmation message. You can print this for your records.</p>
            </li>
            <li className="process-step list-four">
              <div><h5>VA Review</h5></div>
              <p>We process applications in the order we receive them.</p>
              <p>We’ll review your application to check your eligibility. We may contact you if we have any questions or need more information.</p>
            </li>
            <li className="process-step list-five">
              <div><h5>Decision</h5></div>
              <p>Once we approve your application, you should receive your Veteran ID Card by mail in about 60 days.</p>
            </li>
          </ol>
        </div>
        <h2 className="help-heading">Ready to get started?</h2>
        {signedIn && !idProofed && <div>
          <p><strong>Verify your identity before you apply for a Veteran ID Card.</strong><br/>
            <a className="usa-button usa-button-primary" href="/verify?next=%2Fveteran-id-card%2Fapply">Verify Your Identity</a>
          </p>
          <strong>Start the Veteran ID Card application without signing in.</strong>
        </div>}
        {!signedIn && <div>
          <p><strong>Sign in or create an account before you apply for a Veteran ID Card.</strong>
            <button className="usa-button usa-button-primary" onClick={() => this.props.saveInProgressActions.toggleLoginModal(true)}>Sign In or Create an Account</button>
          </p>
          <strong>Start the Veteran ID Card application without signing in.</strong>
        </div>}
        <SaveInProgressIntro
          buttonOnly
          pageList={this.props.route.pageList}
          startText="Start the Veteran ID Card Application"
          {...this.props.saveInProgressActions}
          {...this.props.saveInProgress}/>
        {(!signedIn || !idProofed) && <p><a href="/faq">Get more information about signing in to Vets.gov</a>.</p>}
        <a href="/privacy">Read the Vets.gov Privacy Policy</a>
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
