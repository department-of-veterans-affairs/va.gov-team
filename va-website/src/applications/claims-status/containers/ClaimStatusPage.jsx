import React from 'react';
import { connect } from 'react-redux';
import NeedFilesFromYou from '../components/NeedFilesFromYou';
import ClaimsDecision from '../components/ClaimsDecision';
import ClaimComplete from '../components/ClaimComplete';
import ClaimsTimeline from '../components/ClaimsTimeline';
import ClaimDetailLayout from '../components/ClaimDetailLayout';
import { setUpPage, isTab, scrollToTop, setFocus } from '../utils/page';
import { itemsNeedingAttentionFromVet, getClaimType, getCompletedDate } from '../utils/helpers';

import { clearNotification } from '../actions/index.jsx';

class ClaimStatusPage extends React.Component {
  componentDidMount() {
    this.setTitle();

    if (!isTab(this.props.lastPage)) {
      if (!this.props.loading) {
        setUpPage();
      } else {
        scrollToTop();
      }
    } else {
      setFocus('.va-tab-trigger--current');
    }
  }
  componentDidUpdate(prevProps) {
    if (!this.props.loading && prevProps.loading && !isTab(this.props.lastPage)) {
      setUpPage(false);
    }
    if (this.props.loading !== prevProps.loading) {
      this.setTitle();
    }
  }
  componentWillUnmount() {
    this.props.clearNotification();
  }
  setTitle() {
    document.title = this.props.loading ? 'Status - Your Claim' :
      `Status - Your ${getClaimType(this.props.claim)} Claim`;
  }
  render() {
    const { claim, loading, message, synced } = this.props;

    let content = null;
    if (!loading) {
      const phase = claim.attributes.phase;
      const filesNeeded = itemsNeedingAttentionFromVet(claim.attributes.eventsTimeline);
      const showDocsNeeded = !claim.attributes.decisionLetterSent &&
        claim.attributes.open &&
        claim.attributes.documentsNeeded &&
        filesNeeded > 0;

      content = (
        <div>
          {showDocsNeeded
            ? <NeedFilesFromYou claimId={claim.id} files={filesNeeded}/>
            : null}
          {claim.attributes.decisionLetterSent && !claim.attributes.open ? <ClaimsDecision completedDate={getCompletedDate(claim)}/> : null}
          {!claim.attributes.decisionLetterSent && !claim.attributes.open ? <ClaimComplete completedDate={getCompletedDate(claim)}/> : null}
          {phase !== null && claim.attributes.open
            ? <ClaimsTimeline
              id={claim.id}
              estimatedDate={claim.attributes.maxEstDate}
              phase={phase}
              currentPhaseBack={claim.attributes.currentPhaseBack}
              everPhaseBack={claim.attributes.everPhaseBack}
              events={claim.attributes.eventsTimeline}/>
            : null}
        </div>
      );
    }

    return (
      <ClaimDetailLayout
        claim={claim}
        loading={loading}
        clearNotification={this.props.clearNotification}
        currentTab="Status"
        message={message}
        synced={synced}>
        {content}
      </ClaimDetailLayout>
    );
  }
}

function mapStateToProps(state) {
  const claimsState = state.disability.status;
  return {
    loading: claimsState.claimDetail.loading,
    claim: claimsState.claimDetail.detail,
    message: claimsState.notifications.message,
    lastPage: claimsState.routing.lastPage,
    synced: claimsState.claimSync.synced
  };
}

const mapDispatchToProps = {
  clearNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(ClaimStatusPage);

export { ClaimStatusPage };
