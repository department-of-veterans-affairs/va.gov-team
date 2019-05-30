import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';

import { getServiceAvailability } from '../actions/post-911-gib-status';
import { SERVICE_AVAILABILITY_STATES } from '../utils/constants';

export class IntroPage extends React.Component {
  constructor(props) {
    super(props);
    // Make the api request
    this.props.getServiceAvailability();
  }


  getContent() {
    let content;
    switch (this.props.serviceAvailability) {
      case SERVICE_AVAILABILITY_STATES.unrequested: {
        // This is never actually even seen
        content = (<div></div>);
        break;
      }
      case SERVICE_AVAILABILITY_STATES.pending: {
        content = <LoadingIndicator message="Please wait while we check if the tool is available."/>;
        break;
      }
      case SERVICE_AVAILABILITY_STATES.up: {
        // TODO: Determine whether h2 is right--accessibility-wise, it is, but it's larger than the design
        content = (
          <div>
            <h2>How can I check if I have Post-9/11 GI Bill benefits?</h2>
            <p>The Post-9/11 GI Bill Benefits tool is available for you during these hours, Sunday through Friday, 6:00 a.m. to 10:00 p.m. (ET), and Saturday 6:00 a.m. to 7:00 p.m. (ET).</p>
            <Link id="viewGIBS" to="status" className="usa-button va-button-primary">View Your GI Bill Benefits</Link>
            <h2>What if I have trouble accessing my benefit statement?</h2>
            <p>If you're having trouble accessing the tool during the hours above, please try again. If it still doesn't work, please call the Vets.gov Help Desk at 1-855-574-7286.</p>
          </div>
        );
        break;
      }
      case SERVICE_AVAILABILITY_STATES.down:
      default: {
        content = (
          <div className="usa-alert usa-alert-warning">
            <div className="usa-alert-body">
              <h3>The Post-9/11 GI Bill Benefits tool is down for maintenance right now</h3>
              <p className="usa-alert-text">You can use the Post-9/11 GI Bill Benefits tool Sunday through Friday, 6:00 a.m. to 10:00 p.m. (ET), and Saturday 6:00 a.m. to 7:00 p.m. (ET). We do regular maintenance on the tool outside of these hours, and during that time you won't be able to use it.</p>
            </div>
          </div>
        );
      }
    }

    return content;
  }


  render() {
    const content = this.getContent();
    return (
      <div className="row">
        <div className="medium-8 columns">
          <h1>Post-9/11 GI Bill Statement of Benefits</h1>
          <p>
            If you served on active duty after September 10, 2001, you and your dependents may qualify for Post-9/11 GI Bill education benefits. These benefits can help cover all or some of the costs for school or training. Find out how to check if you have any Post-9/11 GI Bill benefits—and how to track the amount of time you have left to use for your education or training.
          </p>
          {content}
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { serviceAvailability } = state.post911GIBStatus;
  return {
    serviceAvailability
  };
};

const mapDispatchToProps = {
  getServiceAvailability
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroPage);

