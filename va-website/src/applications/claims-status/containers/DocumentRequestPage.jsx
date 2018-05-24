import React from 'react';
import Scroll from 'react-scroll';
import _ from 'lodash';
import { withRouter, Link } from 'react-router';
import { connect } from 'react-redux';
import DueDate from '../components/DueDate';
import AskVAQuestions from '../components/AskVAQuestions';
import AddFilesForm from '../components/AddFilesForm';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import Notification from '../components/Notification';
import Breadcrumbs from '../components/Breadcrumbs';
import { getClaimType } from '../utils/helpers';
import { scrollToTop, setPageFocus, setUpPage } from '../utils/page';

import {
  addFile,
  removeFile,
  submitFiles,
  resetUploads,
  updateField,
  showMailOrFaxModal,
  cancelUpload,
  getClaimDetail,
  setFieldsDirty,
  clearNotification
} from '../actions/index.jsx';

const scrollToError = () => {
  const options = _.merge({}, window.VetsGov.scroll, { offset: -25 });
  Scroll.scroller.scrollTo('uploadError', options);
};
const Element = Scroll.Element;

class DocumentRequestPage extends React.Component {
  componentDidMount() {
    this.props.resetUploads();
    if (this.props.trackedItem) {
      document.title = `Request for ${this.props.trackedItem.displayName}`;
    } else {
      document.title = 'Document Request';
    }
    if (!this.props.loading) {
      setUpPage();
    } else {
      scrollToTop();
    }
  }
  componentWillReceiveProps(props) {
    if (!props.loading && !props.trackedItem) {
      this.props.router.replace(`/your-claims/${this.props.params.id}/status`);
    }
    if (props.uploadComplete) {
      this.goToFilesPage();
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.message && !prevProps.message) {
      document.querySelector('.claims-alert').focus();
      scrollToError();
    }
    if (!this.props.loading && prevProps.loading) {
      setPageFocus();
    }
  }
  componentWillUnmount() {
    if (!this.props.uploadComplete) {
      this.props.clearNotification();
    }
  }
  goToFilesPage() {
    this.props.getClaimDetail(this.props.claim.id);
    this.props.router.push(`your-claims/${this.props.claim.id}/files`);
  }
  render() {
    let content;

    if (this.props.loading) {
      content = <LoadingIndicator setFocus message="Loading your claim information..."/>;
    } else {
      const trackedItem = this.props.trackedItem;
      const filesPath = `your-claims/${this.props.claim.id}/files`;
      const claimsPath = `your-claims${this.props.claim.attributes.open ? '' : '/closed'}`;
      const message = this.props.message;

      content = (
        <div>
          <div className="row">
            <div className="medium-12 columns">
              <Breadcrumbs>
                <li><Link to={claimsPath}>Your Claims</Link></li>
                <li><Link to={filesPath}>Your {getClaimType(this.props.claim)} Claim</Link></li>
              </Breadcrumbs>
            </div>
          </div>
          <div className="row">
            <div className="usa-width-two-thirds medium-8 columns">
              <div className="claim-container">
                {message &&
                  <div>
                    <Element name="uploadError"/>
                    <Notification title={message.title} body={message.body} type={message.type}/>
                  </div>}
                <h1 className="claims-header">{trackedItem.displayName}</h1>
                {trackedItem.type.endsWith('you_list') ? <DueDate date={trackedItem.suspenseDate}/> : null}
                {trackedItem.type.endsWith('others_list')
                  ? <div className="optional-upload">
                    <p><strong>Optional</strong> - We’ve asked others to send this to us, but you may upload it if you have it.</p>
                  </div>
                  : null}
                <p>{trackedItem.description}</p>
                <AddFilesForm
                  field={this.props.uploadField}
                  progress={this.props.progress}
                  uploading={this.props.uploading}
                  files={this.props.files}
                  showMailOrFax={this.props.showMailOrFax}
                  backUrl={this.props.lastPage || filesPath}
                  onSubmit={() => this.props.submitFiles(
                    this.props.claim.id,
                    this.props.trackedItem,
                    this.props.files
                  )}
                  onAddFile={this.props.addFile}
                  onRemoveFile={this.props.removeFile}
                  onFieldChange={this.props.updateField}
                  onShowMailOrFax={this.props.showMailOrFaxModal}
                  onCancel={this.props.cancelUpload}
                  onDirtyFields={this.props.setFieldsDirty}/>
              </div>
            </div>
            <div className="small-12 usa-width-one-third medium-4 columns help-sidebar">
              <AskVAQuestions/>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div name="topScrollElement"></div>
        {content}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const claimsState = state.disability.status;
  let trackedItem = null;
  if (claimsState.claimDetail.detail) {
    trackedItem = claimsState.claimDetail.detail.attributes.eventsTimeline
      .filter(event => event.trackedItemId === parseInt(ownProps.params.trackedItemId, 10))[0];
  }
  return {
    loading: claimsState.claimDetail.loading,
    claim: claimsState.claimDetail.detail,
    trackedItem,
    files: claimsState.uploads.files,
    uploading: claimsState.uploads.uploading,
    progress: claimsState.uploads.progress,
    uploadError: claimsState.uploads.uploadError,
    uploadComplete: claimsState.uploads.uploadComplete,
    uploadField: claimsState.uploads.uploadField,
    showMailOrFax: claimsState.uploads.showMailOrFax,
    lastPage: claimsState.routing.lastPage,
    message: claimsState.notifications.message
  };
}

const mapDispatchToProps = {
  addFile,
  removeFile,
  submitFiles,
  updateField,
  showMailOrFaxModal,
  cancelUpload,
  getClaimDetail,
  setFieldsDirty,
  resetUploads,
  clearNotification
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DocumentRequestPage));

export { DocumentRequestPage };
