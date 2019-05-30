import React from 'react';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';
import moment from 'moment';

import { focusElement } from '../../../../platform/utilities/ui';
import AskVAQuestions from '../../../../platform/forms/components/AskVAQuestions';

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

    const name = formData.veteranFullName || {};

    return (
      <div>
        <h3 className="confirmation-page-title">Claim received</h3>
        <p>
          We’ve received your application. Thank you for applying for vocational rehabilitation benefits.
        </p>
        <div className="confirmation-guidance-container">
          <h4 className="confirmation-guidance-heading">What happens after I apply?</h4>
          <p>We process claims in the order we receive them.</p>
          <p>We may contact you if we have any questions or need more information.</p>
          <p>If you’re eligible for vocational rehabilitation benefits, we’ll invite you to an orientation at your nearest VA regional office and/or out base office.</p>
        </div>
        <p>
          Please print this page for your records.
        </p>
        <div className="inset">
          <h4 className="confirmation-page-inset-title">Vocational Rehabilitation claim <span className="additional">(Form 28-1900)</span></h4>
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
          <p className="confirmation-guidance-message">If you have questions, please call 1-877-222-VETS (1-877-222-8387) and press 2,<br/>Monday — Friday, 8:00 a.m. — 8:00 p.m. (ET).</p>
        </div>
        <div className="row form-progress-buttons schemaform-back-buttons">
          <div className="small-6 usa-width-one-half medium-6 columns">
            <a href="/">
              <button className="usa-button-primary">Go Back to Vets.gov</button>
            </a>
          </div>
        </div>
        <AskVAQuestions>
          <p className="help-talk">Enrollment or Eligibility questions:</p>
          <p className="help-phone-number">
            <a className="help-phone-number-link" href="tel:+1-877-222-8387">1-877-222-8387</a><br/>
            TTY: <a className="help-phone-number-link" href="tel:+18008778339">1-800-877-8339</a><br/>
            Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET)
          </p>
        </AskVAQuestions>
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
