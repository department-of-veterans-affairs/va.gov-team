import React from 'react';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
import moment from 'moment';

import { focusElement } from '../../../platform/utilities/ui';

import VeteranIDCard from '../components/VeteranIDCard';

const scroller = Scroll.scroller;
const scrollToTop = () => {
  scroller.scrollTo('topScrollElement', window.VetsGov.scroll || {
    duration: 500,
    delay: 0,
    smooth: true,
  });
};

class ConfirmationPage extends React.Component {
  componentDidMount() {
    focusElement('.confirmation-page-title');
    scrollToTop();
  }

  render() {
    const { form, userSignedIn } = this.props;
    // If someone refreshes this page after submitting a form and it loads
    // without an empty response object, we don't want to throw errors
    const {
      first: firstName = '',
      middle: middleName = '',
      last: lastName = '',
      suffix = ''
    } = form.data.veteranFullName;

    const { serviceBranch } = form.data;

    // temporarily hide verified confirmation page design w/ temp card
    const verified = false;

    const response = form.submission.response || {};
    const submittedAt = moment();

    const veteranFullNameStr =
      `${firstName.toUpperCase()} ${middleName.toUpperCase()} ${lastName.toUpperCase()} ${suffix.toUpperCase()}` // upper case name
        .replace(/ +(?= )/g, ''); // remove extra spaces from absent name parts

    return (
      <div>
        <p><strong>We’ve received your application.</strong> Thank you for applying for a Veteran ID Card.<br/>
          We process applications and print cards in the order we receive them.</p>

        <h2 className="schemaform-confirmation-section-header">What happens after I apply?</h2>
        {verified && userSignedIn && <div>
          <p>We’ll send you emails updating you on the status of your application. You can also print this page for your records. You should receive your Veteran ID Card by mail in about 60 days.<br/>
            In the meantime, you can print a temporary digital Veteran ID Card.</p>
          <div className="id-card-preview">
            {!!response.photo && <VeteranIDCard
              veteranFullName={veteranFullNameStr}
              veteranBranchCode={serviceBranch}
              caseId={response.caseId}
              veteranPhotoUrl={response.photo}/>}
          </div>
          <button type="button" className="va-button-link" onClick={() => window.print()}>Print your temporary Veteran ID Card.</button>
        </div>}
        {(!verified || !userSignedIn) && <div>
          <p>We’ll review your application to verify your eligibility. If you’re eligible for a Veteran ID Card, you should receive your card by mail in about 60 days.<br/>
            We’ll send you emails updating you on the status of your application. You can also print this page for your records.</p>
          <p>To be eligible for a Veteran ID Card, you must have separated under honorable conditions. If you have an other than honorable discharge, you can apply for an upgrade or correction.<br/>
            <a href="/discharge-upgrade-instructions" target="_blank">Find out how to apply for a discharge upgrade</a>.</p>
          <p>You can use any of these forms of ID to get the same business and restaurant discounts while you wait for your card:</p>
          <ul>
            <li>A Veteran Health Identification Card (VHIC)</li>
            <li>A Department of Defense (DoD) Identification Card—either a Common Access Card (CAC) or a Uniformed Services ID Card</li>
            <li>A Veterans Proof of Service Letter or Card</li>
          </ul>
        </div>}
        <div className="inset">
          <h3 className="schemaform-confirmation-claim-header">Veteran ID Card claim</h3>
          <span>for {firstName} {middleName} {lastName} {suffix}</span>
          <ul className="claim-list">
            <li>
              <strong>Confirmation number</strong><br/>
              <span>{response.caseNumber}</span>
            </li>
            <li>
              <strong>Date received</strong><br/>
              <span>{submittedAt.format('MMM D, YYYY')}</span>
            </li>
          </ul>
        </div>
        <div className="confirmation-guidance-container">
          <h4 className="confirmation-guidance-heading">Need help?</h4>
          <p className="confirmation-guidance-message">If you have questions, call <a href="tel:+1-855-673-4357">1-855-673-4357</a>, Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET). For Telecommunication Relay Services, dial <a href="tel:711">711</a>.</p>
        </div>
        <div className="row form-progress-buttons schemaform-back-buttons">
          <div className="small-6 usa-width-one-half medium-6 columns">
            <a href="/">
              <button className="usa-button-primary">Go Back to Vets.gov</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    form: state.form,
    userSignedIn: state.user.login.currentlyLoggedIn
  };
}

export default connect(mapStateToProps)(ConfirmationPage);
export { ConfirmationPage };
