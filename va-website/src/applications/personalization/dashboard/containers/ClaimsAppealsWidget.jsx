import { connect } from 'react-redux';
import { Link } from 'react-router';
import moment from 'moment';
import React from 'react';

import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import {
  APPEAL_V2_TYPE,
  claimsAvailability,
  appealsAvailability,
} from '../../../claims-status/utils/appeals-v2-helpers';

import {
  getAppealsV2,
  getClaimsV2,
} from '../../../claims-status/actions/index.jsx';
import { scrollToTop } from '../../../claims-status/utils/page';
import recordEvent from '../../../../platform/monitoring/record-event';

import ClaimsUnavailable from '../../../claims-status/components/ClaimsUnavailable';
import AppealsUnavailable from '../../../claims-status/components/AppealsUnavailable';
import ClaimsAppealsUnavailable from '../../../claims-status/components/ClaimsAppealsUnavailable';

import DowntimeNotification, { services } from '../../../../platform/monitoring/DowntimeNotification';
import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';

import ClaimsListItem from '../components/ClaimsListItem';
import AppealListItem from '../components/AppealsListItemV2';

function recordDashboardClick(product) {
  return () => {
    recordEvent({
      event: 'dashboard-navigation',
      'dashboard-action': 'view-link',
      'dashboard-product': product,
    });
  };
}

class ClaimsAppealsWidget extends React.Component {
  componentDidMount() {
    if (this.props.canAccessClaims) {
      this.props.getClaimsV2();
    }

    if (this.props.canAccessAppeals) {
      this.props.getAppealsV2();
    }

    scrollToTop();
  }

  renderListItem(claim) {
    if (claim.type === APPEAL_V2_TYPE) {
      return <AppealListItem key={claim.id} appeal={claim} name={this.props.fullName}/>;
    }

    return <ClaimsListItem claim={claim} key={claim.id}/>;
  }

  renderErrorMessages() {
    const {
      claimsLoading,
      appealsLoading,
      appealsAvailable,
      canAccessAppeals,
      canAccessClaims,
      claimsAvailable,
    } = this.props;

    if (claimsLoading || appealsLoading) {
      return null;
    }

    if (canAccessAppeals && canAccessClaims) {
      if (claimsAvailable !== claimsAvailability.AVAILABLE
          && appealsAvailable !== appealsAvailability.AVAILABLE) {
        return <ClaimsAppealsUnavailable/>;
      }
    }

    if (canAccessClaims && claimsAvailable !== claimsAvailability.AVAILABLE) {
      return <ClaimsUnavailable/>;
    }

    if (canAccessAppeals && appealsAvailable !== appealsAvailability.AVAILABLE) {
      return <AppealsUnavailable/>;
    }

    return null;
  }

  renderWidgetDowntimeNotification = (appName) => {
    return (downtime, children) => {
      switch (downtime.status) {
        case 'down':
          return (
            <div>
              <AlertBox
                content={<div>
                  <h4 className="usa-alert-heading">{appName} is down for maintenance</h4>
                  <p>We’re making some updates to our {appName.toLowerCase()} tool. We’re sorry it’s not working right now and hope to be finished by {downtime.startTime.format('MMMM Do')}, {downtime.endTime.format('LT')}. Please check back soon.</p>
                </div>}
                isVisible
                status="warning"/>
            </div>
          );
        default:
          return children;
      }
    };
  }


  render() {
    const {
      claimsAppealsCount,
      claimsAppealsList,
      claimsLoading,
      appealsLoading,
    } = this.props;

    let content;
    const bothRequestsLoaded = !claimsLoading && !appealsLoading;
    const bothRequestsLoading = claimsLoading && appealsLoading;
    const atLeastOneRequestLoading = claimsLoading || appealsLoading;
    const emptyList = !claimsAppealsList || !claimsAppealsList.length;

    if (bothRequestsLoading || (atLeastOneRequestLoading && emptyList)) {
      content = <LoadingIndicator message="Loading your claims and appeals..." setFocus/>;
    } else {
      if (!emptyList) {
        content = (<div>
          <div className="claim-list">
            {atLeastOneRequestLoading && <LoadingIndicator message="Loading your claims and appeals..."/>}
            {claimsAppealsList.map(claim => this.renderListItem(claim))}
          </div>
        </div>);
      } else if (bothRequestsLoaded) {
        content = <p>We don’t have any new updates for you right now.</p>;
      }
    }

    // hide section if no open/closed claims or appeals
    if (claimsAppealsCount === 0) {
      return null;
    }

    return (
      <div id="claims-widget">
        <h2>Track Claims</h2>
        <div>
          <DowntimeNotification appTitle="claims" dependencies={[services.mhv]} render={this.renderWidgetDowntimeNotification('Claims tracking')}>
            <div/>
          </DowntimeNotification>
          <DowntimeNotification appTitle="appeals" dependencies={[services.appeals]} render={this.renderWidgetDowntimeNotification('Appeals tracking')}>
            <div/>
          </DowntimeNotification>
          {this.renderErrorMessages()}
          {content}
          <p><Link href="/track-claims" onClick={recordDashboardClick('view-all-claims')}>View all your claims and appeals</Link>.</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const claimsState = state.disability.status;
  const claimsRoot = claimsState.claims;
  const claimsV2Root = claimsState.claimsV2;
  const profileState = state.user.profile;
  const canAccessAppeals = profileState.services.includes('appeals-status');
  const canAccessClaims = profileState.services.includes('evss-claims');

  const claimsAppealsCount = claimsV2Root.appeals
    .concat(claimsV2Root.claims).length;

  const claimsAppealsList = claimsV2Root.appeals
    .concat(claimsV2Root.claims).filter(c => {
      let updateDate;
      if (c.type === 'evss_claims') {
        updateDate = (c.attributes.phaseChangeDate || c.attributes.updatedAt);
      } else {
        updateDate = c.attributes.updated;
      }

      return updateDate && moment(updateDate).isAfter(moment().endOf('day').subtract(30, 'days'));
    });

  return {
    appealsAvailable: claimsV2Root.v2Availability,
    claimsAvailable: claimsV2Root.claimsAvailability,
    claimsLoading: claimsV2Root.claimsLoading,
    appealsLoading: claimsV2Root.appealsLoading,
    claimsAppealsCount,
    claimsAppealsList,
    consolidatedModal: claimsRoot.consolidatedModal,
    show30DayNotice: claimsRoot.show30DayNotice,
    synced: claimsState.claimSync.synced,
    canAccessAppeals,
    canAccessClaims,
  };
};

const mapDispatchToProps = {
  getAppealsV2,
  getClaimsV2,
};

export default connect(mapStateToProps, mapDispatchToProps)(ClaimsAppealsWidget);
export { ClaimsAppealsWidget };
