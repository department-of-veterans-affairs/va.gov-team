import React from 'react';
import { connect } from 'react-redux';
import recordEvent from '../../../platform/monitoring/record-event';

import Modal from '@department-of-veterans-affairs/formation/Modal';
import {
  changePageV2,
  getAppealsV2,
  getClaimsV2,
  hide30DayNotice,
  showConsolidatedMessage,
  sortClaims
} from '../actions/index.jsx';
import {
  APPEAL_V2_TYPE,
  claimsAvailability,
  appealsAvailability,
  sortByLastUpdated,
  getVisibleRows,
} from '../utils/appeals-v2-helpers';
import ClaimsUnavailable from '../components/ClaimsUnavailable';
// import ClaimsUnauthorized from '../components/ClaimsUnauthorized';
import ClaimsAppealsUnavailable from '../components/ClaimsAppealsUnavailable';
import AppealsUnavailable from '../components/AppealsUnavailable';
import AskVAQuestions from '../components/AskVAQuestions';
import ConsolidatedClaims from '../components/ConsolidatedClaims';
import FeaturesWarning from '../components/FeaturesWarning';
import ClaimsListItem from '../components/appeals-v2/ClaimsListItemV2';
import AppealListItem from '../components/appeals-v2/AppealListItemV2';
import NoClaims from '../components/NoClaims';
import Pagination from '@department-of-veterans-affairs/formation/Pagination';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import ClosedClaimMessage from '../components/ClosedClaimMessage';
import { scrollToTop, setUpPage, setPageFocus } from '../utils/page';
import Breadcrumbs from '../components/Breadcrumbs';

class YourClaimsPageV2 extends React.Component {
  constructor(props) {
    super(props);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    document.title = 'Track Claims: Vets.gov';
    if (this.props.canAccessClaims) {
      this.props.getClaimsV2();
    }

    if (this.props.canAccessAppeals) {
      this.props.getAppealsV2();
    }

    if (this.props.claimsLoading && this.props.appealsLoading) {
      scrollToTop();
    } else {
      setUpPage();
    }
  }

  // componentWillReceiveProps(newProps) {
  // an initial sort needs to happen in componentDidMount
  // }

  componentDidUpdate(prevProps) {
    if (!this.props.loading && prevProps.loading) {
      setPageFocus();
    }
  }

  changePage(page) {
    this.props.changePageV2(page);
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
      // claimsAuthorized
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

    // TO-DO: Figure out if this is still something we want
    // if (canAccessClaims) {
    //   if (claimsAvailable !== claimsAvailability.AVAILABLE) {
    //     return <ClaimsUnavailable/>;
    //   } else if (!claimsAuthorized) {
    //     return <ClaimsUnauthorized/>;
    //   }
    // }

    if (canAccessClaims && claimsAvailable !== claimsAvailability.AVAILABLE) {
      return <ClaimsUnavailable/>;
    }

    if (canAccessAppeals && appealsAvailable !== appealsAvailability.AVAILABLE) {
      return <AppealsUnavailable/>;
    }

    return null;
  }

  render() {
    const {
      list,
      pages,
      page,
      claimsLoading,
      appealsLoading,
      show30DayNotice,
    } = this.props;

    let content;
    const bothRequestsLoaded = !claimsLoading && !appealsLoading;
    const bothRequestsLoading = claimsLoading && appealsLoading;
    const atLeastOneRequestLoading = claimsLoading || appealsLoading;
    const emptyList = !list || !list.length;
    if (bothRequestsLoading || (atLeastOneRequestLoading && emptyList)) {
      content = <LoadingIndicator message="Loading your claims and appeals..." setFocus/>;
    } else {
      if (!emptyList) {
        content = (<div>
          {show30DayNotice && <ClosedClaimMessage claims={list} onClose={this.props.hide30DayNotice}/>}
          <div className="claim-list">
            {atLeastOneRequestLoading && <LoadingIndicator message="Loading your claims and appeals..."/>}
            {list.map(claim => this.renderListItem(claim))}
            <Pagination page={page} pages={pages} onPageSelect={this.changePage}/>
          </div>
        </div>);
      } else if (!this.props.canAccessClaims && bothRequestsLoaded) {
        content = <NoClaims/>;
      }

      content = (<div className="va-tab-content">{content}</div>);
    }

    return (
      <div className="claims-container">
        <Breadcrumbs/>
        <div className="row">
          <div className="small-12 usa-width-two-thirds medium-8 columns">
            <div className="row">
              <div className="small-12 columns">
                <h1 className="claims-container-title">Track Your Compensation Appeals and Claims</h1>
              </div>
              <div className="small-12 columns">
                {this.renderErrorMessages()}
              </div>
            </div>
            <p>
              <a href className="claims-combined" onClick={(evt) => {
                evt.preventDefault();
                recordEvent({
                  event: 'claims-consolidated-modal',
                });
                this.props.showConsolidatedMessage(true);
              }}>Find out why we sometimes combine claims.</a>
            </p>
            {content}
            <Modal
              onClose={() => true}
              visible={this.props.consolidatedModal}
              hideCloseButton
              id="consolidated-claims"
              contents={<ConsolidatedClaims onClose={() => this.props.showConsolidatedMessage(false)}/>}/>
          </div>
          <div className="small-12 usa-width-one-third medium-4 columns help-sidebar">
            <FeaturesWarning/>
            <AskVAQuestions/>
            <div>
              <h2 className="help-heading">Can’t find your appeal?</h2>
              <p>
                If you submitted a Notice of Disagreement for an appeal within the last 3 months,
                VA might still be processing your appeal. For more information, contact your Veterans
                Service Organization or representative.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const claimsState = state.disability.status;
  const claimsRoot = claimsState.claims;
  const claimsV2Root = claimsState.claimsV2; // this is where all the meat is for v2
  const profileState = state.user.profile;
  const canAccessAppeals = profileState.services.includes('appeals-status');
  const canAccessClaims = profileState.services.includes('evss-claims');
  // TO-DO: Implement with reselect to save cycles
  const sortedList = claimsV2Root.appeals
    .concat(claimsV2Root.claims)
    .sort(sortByLastUpdated);
  const list = getVisibleRows(sortedList, claimsV2Root.page);

  return {
    appealsAvailable: claimsV2Root.v2Availability,
    claimsAvailable: claimsV2Root.claimsAvailability,
    // claimsAuthorized: claimsState.claimSync.authorized,
    claimsLoading: claimsV2Root.claimsLoading,
    appealsLoading: claimsV2Root.appealsLoading,
    list,
    page: claimsV2Root.page,
    pages: claimsV2Root.pages,
    sortProperty: claimsRoot.sortProperty,
    consolidatedModal: claimsRoot.consolidatedModal,
    show30DayNotice: claimsRoot.show30DayNotice,
    synced: claimsState.claimSync.synced,
    canAccessAppeals,
    canAccessClaims,
    fullName: state.user.profile.userFullName
  };
}

const mapDispatchToProps = {
  getAppealsV2,
  getClaimsV2,
  changePageV2,
  sortClaims,
  showConsolidatedMessage,
  hide30DayNotice
};

export default connect(mapStateToProps, mapDispatchToProps)(YourClaimsPageV2);

export { YourClaimsPageV2 };
