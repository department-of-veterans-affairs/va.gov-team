import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import Scroll from 'react-scroll';

import { focusElement } from '../../../platform/utilities/ui';

const scroller = Scroll.scroller;
const scrollToTop = () => {
  scroller.scrollTo('topScrollElement', {
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
    const form = this.props.form;
    const response = this.props.form.submission.response
      ? this.props.form.submission.response.attributes
      : {};
    const name = form.data.application.claimant.name;
    const submittedAt = moment(form.submission.submittedAt);

    return (
      <div>
        <h3 className="confirmation-page-title">Claim received</h3>
        <p>
          We’ll let you know by mail or phone if we need more information.<br/>
          <i>Please print this page for your records.</i>
        </p>
        <div className="inset">
          <h4>Burial Pre-Need Claim <span className="additional">(Form 40-10007)</span></h4>
          <span>for {name.first} {name.middle} {name.last} {name.suffix}</span>

          {response.trackingNumber && <ul className="claim-list">
            <li>
              <strong>Confirmation number</strong><br/>
              <span>{response.trackingNumber}</span>
            </li>
            <li>
              <strong>Date received</strong><br/>
              <span>{submittedAt.format('MMM D, YYYY')}</span>
            </li>
          </ul>}
        </div>
        <h4>Do you have more documents you need to submit?</h4>
        <p className="mail-or-fax-message">To mail or fax additional documents:</p>
        <ol className="mail-or-fax-steps">
          <li className="mail-or-fax-step">Make copies of the documents.</li>
          <li className="mail-or-fax-step">Make sure you write your name and confirmation number on every page.</li>
          <li className="mail-or-fax-step">Mail or fax them to:
            <div className="mail-fax-address">
              <div>National Cemetery Scheduling Office</div>
              <div>PO Box 510543</div>
              <div>St. Louis, MO 63151</div>
            </div>
            <p>Fax (toll-free): 1-855-840-8299</p>
          </li>
        </ol>
        <div className="confirmation-guidance-container">
          <h4 className="confirmation-guidance-heading">What happens after I apply?</h4>
          <a className="confirmation-guidance-message" href="/burials-and-memorials/pre-need/after-you-apply/">Find out what happens after you apply.</a>
          <h4 className="confirmation-guidance-heading">Need help?</h4>
          <div>
            <p className="confirmation-guidance-message">If you have questions, please call 1-877-222-VETS (<a className="help-phone-number-link" href="tel:+1-877-222-8387">1-877-222-8387</a>), Monday through Friday, 8:00 a.m. to 8:00 p.m. (ET).
            </p>
          </div>
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
