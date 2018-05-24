import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

class ClaimsDecision extends React.Component {
  render() {
    const completedDate = this.props.completedDate;
    return (
      <div className="usa-alert usa-alert-info claims-alert-status no-background-image">
        <h4 className="claims-alert-header">Your claim decision is ready</h4>
        <p>{completedDate ? `We finished reviewing your claim on ${moment(completedDate).format('MMM D, YYYY')}. ` : null}
          We sent you a packet by U.S. mail that includes details of the decision on your claim. Please allow 7 to 10 business days for your packet to arrive before contacting a VA call center. If you haven’t received the packet with the full details of your claim decision yet, you can see your rating by going to your disability page in eBenefits. <a href="https://www.ebenefits.va.gov" target="_blank">Check your disability page in eBenefits for your rating</a>.</p>
        <h5 className="claims-paragraph-header">Next steps</h5>
        <p>If you agree with your rating, you don’t need to do anything else.</p>
        <p>If we decided that an issue you claimed wasn’t service connected, and you have new evidence that you haven’t submitted yet, you can ask VA to reopen your claim. <a href="/disability-benefits/apply/claim-types/reopened-claim/" target="_blank">Find out how to reopen your claim</a>.</p>
        <p>Has your condition gotten worse since you filed your claim? You can file a new claim for an increase in disability compensation. <a href="/disability-benefits/apply/claim-types/new-claim/" target="_blank">Find out how to file a new claim</a>.</p>
        <p>If you disagree with the decision on your claim, you can file an appeal. <a href="/disability-benefits/claims-appeal/" target="_blank">Learn more about filing an appeal</a>.</p>
        <p>Are you enrolled in VA health care? If not, you can apply now. <a href="/health-care/apply/" target="_blank">Apply for VA health care</a>.</p>
      </div>
    );
  }
}

ClaimsDecision.propTypes = {
  completedDate: PropTypes.string
};

export default ClaimsDecision;
