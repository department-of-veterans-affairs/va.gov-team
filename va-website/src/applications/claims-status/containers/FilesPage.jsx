import React from 'react';
import { connect } from 'react-redux';

import ClaimDetailLayout from '../components/ClaimDetailLayout';
import AskVAToDecide from '../components/AskVAToDecide';
import AdditionalEvidenceItem from '../components/AdditionalEvidenceItem';
import SubmittedTrackedItem from '../components/SubmittedTrackedItem';
import RequestedFilesInfo from '../components/RequestedFilesInfo';

import { clearNotification } from '../actions/index.jsx';
import { getClaimType } from '../utils/helpers';
import { scrollToTop, setUpPage, isTab, setFocus } from '../utils/page';

const NEED_ITEMS_STATUS = 'NEEDED';
const FIRST_GATHERING_EVIDENCE_PHASE = 3;

class FilesPage extends React.Component {
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
    document.title = this.props.loading ? 'Files - Your Claim' :
      `Files - Your ${getClaimType(this.props.claim)} Claim`;
  }
  render() {
    const { claim, loading, message, synced } = this.props;

    let content = null;
    if (!loading) {
      const showDecision = claim.attributes.phase === FIRST_GATHERING_EVIDENCE_PHASE
        && !claim.attributes.waiverSubmitted;
      const trackedItems = claim.attributes.eventsTimeline.filter(event => event.type.endsWith('_list'));
      const filesNeeded = trackedItems
        .filter(event => event.status === NEED_ITEMS_STATUS && event.type === 'still_need_from_you_list');
      const optionalFiles = trackedItems
        .filter(event => event.status === NEED_ITEMS_STATUS && event.type === 'still_need_from_others_list');
      const documentsTurnedIn = trackedItems
        .filter(event => event.status !== NEED_ITEMS_STATUS || !event.type.startsWith('still_need_from'));

      content = (
        <div>
          {claim.attributes.open &&
            <RequestedFilesInfo
              id={claim.id}
              filesNeeded={filesNeeded}
              optionalFiles={optionalFiles}/>}
          {showDecision && <AskVAToDecide id={this.props.params.id}/>}
          <div className="submitted-files-list">
            <h2 className="claim-file-border">Documents filed</h2>
            {documentsTurnedIn.length === 0
              ? <div><p>You haven’t turned in any documents to VA.</p></div>
              : null}

            {documentsTurnedIn
              .map((item, itemIndex) => (
                item.trackedItemId
                  ? <SubmittedTrackedItem item={item} key={itemIndex}/>
                  : <AdditionalEvidenceItem item={item} key={itemIndex}/>))}
          </div>
        </div>
      );
    }

    return (
      <ClaimDetailLayout
        claim={claim}
        loading={loading}
        clearNotification={this.props.clearNotification}
        currentTab="Files"
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

export default connect(mapStateToProps, mapDispatchToProps)(FilesPage);

export { FilesPage };
