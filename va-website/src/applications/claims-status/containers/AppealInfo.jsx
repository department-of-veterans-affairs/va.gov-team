import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import moment from 'moment';

import Breadcrumbs from '../components/Breadcrumbs';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import AppealNotFound from '../components/appeals-v2/AppealNotFound';
import { getAppealsV2 } from '../actions/index.jsx';
import AppealHeader from '../components/appeals-v2/AppealHeader';
import AppealsV2TabNav from '../components/appeals-v2/AppealsV2TabNav';
import AppealHelpSidebar from '../components/appeals-v2/AppealHelpSidebar';

import {
  EVENT_TYPES,
  isolateAppeal,
  RECORD_NOT_FOUND_ERROR,
  AVAILABLE,
} from '../utils/appeals-v2-helpers';

const appealsDownMessage = (
  <div className="row" id="appealsDownMessage">
    <div className="small-12 columns">
      <div className="react-container">
        <h3>We’re sorry. Something went wrong on our end.</h3>
        <p>Please refresh this page or try again later. If it still doesn’t work, you can call the Vets.gov Help Desk at <a href="tel:+18555747286">1-855-574-7286</a> (TTY: <a href="tel:+18008294833">1-800-829-4833</a>). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. (ET).</p>
      </div>
    </div>
  </div>
);

const recordsNotFoundMessage = (
  <div className="row" id="recordsNotFoundMessage">
    <div className="small-12 columns">
      <div className="react-container">
        <h3>We’re sorry. We can’t find your records in our system.</h3>
        <p>If you think they should be here, please try again later or call the Vets.gov Help Desk at <a href="tel:+18555747286">1-855-574-7286</a> (TTY: <a href="tel:+18008294833">1-800-829-4833</a>). We’re here Monday–Friday, 8:00 a.m.–8:00 p.m. (ET).</p>
      </div>
    </div>
  </div>
);

export class AppealInfo extends React.Component {
  componentDidMount() {
    if (!this.props.appeal) {
      this.props.getAppealsV2();
    }
  }

  createHeading = () => {
    const firstClaim = this.props.appeal.attributes.events.find(a => a.type === EVENT_TYPES.claimDecision);
    const appealDate = firstClaim ? moment(firstClaim.date, 'YYYY-MM-DD').format(' MMMM YYYY') : '';
    return `Appeal of ${appealDate} Claim Decision`;
  }

  render() {
    const { params, appeal, fullName, appealsLoading, appealsAvailability, children } = this.props;
    let appealContent;

    // Availability is determined by whether or not the API returned an appeals array
    // for this user. However, it doesn't speak to whether the appeal that's been
    // requested is available in the array. This is why we have to check for both
    // AVAILABLE status as well as whether or not the appeal exists.
    if (appealsLoading) {
      appealContent = <LoadingIndicator message="Please wait while we load your appeal..."/>;
    } else if (appealsAvailability === AVAILABLE && appeal) {
      // Maybe could simplify this to just check if (appeal) instead
      const claimHeading = this.createHeading();
      appealContent = (
        <div>
          <div>
            <Breadcrumbs>
              <li><Link to="your-claims">Track Your Claims and Appeals</Link></li>
              <li><strong>{claimHeading}</strong></li>
            </Breadcrumbs>
          </div>
          <div className="row">
            <AppealHeader
              heading={claimHeading}
              lastUpdated={appeal.attributes.updated}/>
          </div>
          <div className="row">
            <div className="medium-8 columns">
              <AppealsV2TabNav
                appealId={params.id}/>
              <div className="va-tab-content va-appeals-content">
                {React.Children.map(children, child => React.cloneElement(child, { appeal, fullName }))}
              </div>
            </div>
            <div className="medium-4 columns help-sidebar">
              {appeal && <AppealHelpSidebar location={appeal.attributes.location} aoj={appeal.attributes.aoj}/>}
            </div>
          </div>
        </div>
      );
    } else if (appealsAvailability === AVAILABLE && !appeal) {
      // Yes, we have your appeals. No, the one you requested isn't one of them.
      appealContent = <AppealNotFound/>;
    } else if (appealsAvailability === RECORD_NOT_FOUND_ERROR) {
      appealContent = recordsNotFoundMessage;
    } else {
      // This includes
      //  USER_FORBIDDEN_ERROR,
      //  VALIDATION_ERROR,
      //  BACKEND_SERVICE_ERROR,
      //  FETCH_APPEALS_ERROR
      appealContent = appealsDownMessage;
    }

    return (appealContent);
  }
}

AppealInfo.propTypes = {
  params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  children: PropTypes.node.isRequired,
  appealsLoading: PropTypes.bool.isRequired,
  appeal: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    attributes: PropTypes.object.isRequired,
  }),
  fullName: PropTypes.shape({
    first: PropTypes.string,
    middle: PropTypes.string,
    last: PropTypes.string,
  }),
};

function mapStateToProps(state, ownProps) {
  const { appealsLoading, v2Availability: appealsAvailability } = state.disability.status.claimsV2;
  const { v1ToV2IdMap } = state.disability.status.appeals;
  return {
    appeal: isolateAppeal(state, ownProps.params.id, v1ToV2IdMap),
    appealsLoading,
    appealsAvailability,
    fullName: state.user.profile.userFullName,
  };
}

const mapDispatchToProps = { getAppealsV2 };

export default connect(mapStateToProps, mapDispatchToProps)(AppealInfo);
