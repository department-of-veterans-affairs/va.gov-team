import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';

import { focusElement } from '../../../platform/utilities/ui';
import { benefitsLabels } from '../labels';

const scroller = Scroll.scroller;
const scrollToTop = () => {
  scroller.scrollTo('topScrollElement', {
    duration: 500,
    delay: 0,
    smooth: true,
  });
};

class ConfirmationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
  }

  componentDidMount() {
    focusElement('.confirmation-page-title');
    scrollToTop();
  }

  toggleExpanded = (e) => {
    e.preventDefault();
    this.setState({ isExpanded: !this.state.isExpanded });
  }

  render() {
    const form = this.props.form;
    const response = form.submission.response
      ? form.submission.response
      : {};
    const { 'view:claimedBenefits': benefits,
      claimantFullName: claimantName,
      veteranFullName: veteranName } = form.data;
    const hasDocuments = form.data.deathCertificate || form.data.transportationReceipts;
    const { deathCertificate, transportationReceipts } = form.data;

    const submittedAt = moment(form.submission.submittedAt);
    const offset = submittedAt.isDST() ? '-0500' : '-0600';

    return (
      <div>
        <h3 className="confirmation-page-title">Claim submitted</h3>
        <p>We process claims in the order we receive them. Please print this page for your records.</p>
        <p>
          We may contact you for more information or documents.
        </p>
        <div className="inset">
          <h4>Burial Benefit Claim <span className="additional">(Form 21P-530)</span></h4>
          <span>for {claimantName.first} {claimantName.middle} {claimantName.last} {claimantName.suffix}</span>

          <ul className="claim-list">
            <li>
              <strong>Confirmation number</strong><br/>
              <span>{response.confirmationNumber}</span>
            </li>
            <li>
              <strong>Date submitted</strong><br/>
              <span>{submittedAt.utcOffset(offset).format('MMM D, YYYY h:mm a [CT]')}</span>
            </li>
            <li>
              <strong>Deceased Veteran</strong><br/>
              <span>{veteranName.first} {veteranName.middle} {veteranName.last} {veteranName.suffix}</span>
            </li>
            <li>
              <strong>Benefits claimed</strong><br/>
              {_.map(benefits, (isRequested, benefitName) => isRequested && <p key={benefitName}>{benefitsLabels[benefitName]}</p>)}
            </li>
            {hasDocuments && <li>
              <strong>Documents uploaded</strong><br/>
              {deathCertificate && <p>Death certificate: 1 file</p>}
              {transportationReceipts && <p>Transportation documentation: {transportationReceipts.length} {transportationReceipts.length > 1 ? 'files' : 'file'}</p>}
            </li>}
            <li>
              <strong>Your claim was sent to</strong><br/>
              <address className="schemaform-address-view">{_.map(response.regionalOffice, (line, index) => <p key={index}>{line}</p>)}</address>
            </li>
          </ul>
        </div>
        <div className="confirmation-guidance-container">
          <h4 className="confirmation-guidance-heading">Need help?</h4>
          <p className="confirmation-guidance-message">If you have questions, call <a href="tel:+1-800-827-1000">1-800-827-1000</a>, Monday &#8211; Friday, 8:00 a.m. &#8211; 9:00 p.m. (ET). Please have your Social Security number or VA file number ready. For Telecommunication Relay Services, dial <a href="tel:711">711</a>.</p>
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
    form: state.form
  };
}

export default connect(mapStateToProps)(ConfirmationPage);
export { ConfirmationPage };
