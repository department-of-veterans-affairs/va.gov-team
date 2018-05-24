import React from 'react';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
import moment from 'moment';

import { focusElement } from '../../../../platform/utilities/ui';

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
      ? form.submission.response.attributes
      : {};
    const formData = this.props.form.data || {};

    const name = formData['view:isVeteran']
      ? formData.veteranFullName || {}
      : formData.applicantFullName || {};

    return (
      <div>
        <h3 className="confirmation-page-title">Claim received</h3>
        <p>
          We’ve received your application. Thank you for applying for vocational rehabilitation benefits.<br/>
        </p>
        <p>We usually process claims within a week.</p>
        <div className="confirmation-guidance-container">
          <h4 className="confirmation-guidance-heading">What happens after I apply?</h4>
          <p>We process claims in the order we receive them.</p>
          <p>We may contact you if we have any questions or need more information.</p>
          <p>If you’re eligible for vocational counseling benefits, we’ll invite you to meet with a Vocational Rehabilitation Counselor (VRC). Your VRC will work with you to map out a career path.</p>
        </div>
        <p>
          Please print this page for your records.
        </p>
        <div className="inset">
          <h4 className="confirmation-page-inset-title">Vocational Counseling Claim <span className="additional">(Form 28-8832)</span></h4>
          <span>for {name.first} {name.middle} {name.last} {name.suffix}</span>

          <ul className="claim-list">
            <li>
              <strong>Date received</strong><br/>
              <span>{moment(form.submission.submittedAt).format('MMM D, YYYY')}</span>
            </li>
            <li>
              <strong>Confirmation number</strong><br/>
              <span>{response.confirmationNumber}</span>
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
