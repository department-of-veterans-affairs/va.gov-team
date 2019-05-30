import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import TabNav from '../components/TabNav';
import ClaimSyncWarning from '../components/ClaimSyncWarning';
import AskVAQuestions from '../components/AskVAQuestions';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import AddingDetails from '../components/AddingDetails';
import Notification from '../components/Notification';
import Breadcrumbs from '../components/Breadcrumbs';
import { isPopulatedClaim, getClaimType } from '../utils/helpers';

const MAX_CONTENTIONS = 3;

export default class ClaimDetailLayout extends React.Component {
  render() {
    const { claim, loading, message, clearNotification, currentTab, synced } = this.props;
    const tabs = [
      'Status',
      'Files',
      'Details'
    ];

    let content;
    if (!loading) {
      const claimsPath = `your-claims${claim.attributes.open ? '' : '/closed'}`;
      content = (
        <div>
          <div className="row">
            <div className="medium-12 columns">
              <Breadcrumbs>
                <li><Link to={claimsPath}>Your Claims</Link></li>
              </Breadcrumbs>
            </div>
          </div>
          <div className="row">
            <div className="medium-12 columns">
              {message && <Notification title={message.title} body={message.body} type={message.type} onClose={clearNotification}/>}
              <h1 className="claim-title">Your {getClaimType(claim)} Claim</h1>
              {!synced && <ClaimSyncWarning olderVersion={!synced}/>}
            </div>
          </div>
          <div className="row">
            <div className="usa-width-two-thirds medium-8 columns">
              <div className="claim-container">
                <div className="claim-contentions">
                  <h6 className="claim-contentions-header">What you’ve claimed:</h6>
                  <span>
                    {claim.attributes.contentionList && claim.attributes.contentionList.length
                      ? claim.attributes.contentionList.slice(0, MAX_CONTENTIONS).map(cond => cond.trim()).join(', ')
                      : 'Not available'}
                  </span>
                  {claim.attributes.contentionList && claim.attributes.contentionList.length > MAX_CONTENTIONS
                    ? <span><br/><Link to={`your-claims/${claim.id}/details`}>See all your claimed contentions</Link>.</span>
                    : null}
                </div>
                <TabNav id={this.props.claim.id}/>
                {tabs.map(tab => (
                  <div
                    key={tab}
                    role="tabpanel"
                    id={`tabPanel${tab}`}
                    aria-labelledby={`tab${tab}`}>
                    {currentTab === tab &&
                      <div className="va-tab-content claim-tab-content">
                        {isPopulatedClaim(claim) || !claim.attributes.open ? null : <AddingDetails/>}
                        {this.props.children}
                      </div>
                    }
                  </div>
                ))}
              </div>
            </div>
            <div className="small-12 usa-width-one-third medium-4 columns help-sidebar">
              <AskVAQuestions/>
            </div>
          </div>
        </div>
      );
    } else {
      content = <LoadingIndicator setFocus message="Loading your claim information..."/>;
    }

    return (
      <div>
        <div name="topScrollElement"></div>
        {content}
      </div>
    );
  }
}

ClaimDetailLayout.propTypes = {
  claim: PropTypes.object,
  loading: PropTypes.bool,
  message: PropTypes.object,
  clearNotification: PropTypes.func,
  synced: PropTypes.bool
};
