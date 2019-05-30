import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';

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

export class ConfirmationPage extends React.Component {
  componentDidMount() {
    focusElement('.schemaform-title > h1');
    scrollToTop();
  }

  render() {
    const { submission, data } = this.props.form;

    const {
      confirmationNumber,
      timestamp
    } = submission.response || {};
    const {
      first,
      middle,
      last,
      suffix
    } = data.veteranFullName || {};

    return (
      <div>
        <h3 className="confirmation-page-title">Your claim has been submitted.</h3>
        <p>We process applications in the order we receive them. Please print this page for your records. We may contact you if we have questions or need more information.</p>
        <p><strong>If your dependent is a child in school between the ages of 18 and 23 years old,</strong> you’ll need to also fill out a Request for Approval of School Attendance (VA Form 21-674).</p>
        <a href="https://www.vets.gov">Download VA Form 21-674.</a>
        <div className="confirmation-guidance-container">
          <h4 className="confirmation-guidance-heading">What happens after I apply?</h4>
          <p>You’ll get a notice in the mail, once we’ve processed your claim.</p>
        </div>
        <div className="inset">
          <h4>Declaration of Dependents Claim <span className="additional">(Form 21-686c)</span></h4>
          <span>For {first} {middle} {last} {suffix}</span>

          {confirmationNumber && <ul className="claim-list">
            <li>
              <strong>Confirmation number</strong><br/>
              <span>{confirmationNumber}</span>
            </li>
            <li>
              <strong>Date submitted</strong><br/>
              <span>{moment(timestamp).format('MM/DD/YYYY')}</span>
            </li>
          </ul>}
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
