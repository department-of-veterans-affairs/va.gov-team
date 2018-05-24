import React from 'react';
import Scroll from 'react-scroll';
import { withRouter, Link } from 'react-router';
import { connect } from 'react-redux';
import AskVAQuestions from '../components/AskVAQuestions';
import AddFilesForm from '../components/AddFilesForm';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import Notification from '../components/Notification';
import EvidenceWarning from '../components/EvidenceWarning';
import Breadcrumbs from '../components/Breadcrumbs';
import { getClaimType } from '../utils/helpers';
import { scrollToTop, setPageFocus, setUpPage } from '../utils/page';
import { getScrollOptions } from '../../../platform/utilities/ui';

import {
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
} from '../actions/index.jsx';

const scrollToError = () => {
  const options = getScrollOptions({ offset: -25 });
  Scroll.scroller.scrollTo('uploadError', options);
};
const Element = Scroll.Element;

class AdditionalEvidencePage extends React.Component {
  componentDidMount() {
    this.props.resetUploads();
    document.title = 'Additional Evidence';
    if (!this.props.loading) {
      setUpPage();
    } else {
      scrollToTop();
    }
  }
  componentWillReceiveProps(props) {
    if (props.uploadComplete) {
      this.goToFilesPage();
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.message && !prevProps.message) {
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
      const claim = this.props.claim;
      const filesPath = `your-claims/${claim.id}/files`;
      const claimsPath = `your-claims${claim.attributes.open ? '' : '/closed'}`;
      const message = this.props.message;

      content = (
        <div>
          <div className="row">
            <div className="medium-12 columns">
              <Breadcrumbs>
                <li><Link to={claimsPath}>Your Claims</Link></li>
                <li><Link to={filesPath}>Your {getClaimType(claim)} Claim</Link></li>
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
                <h1 className="claims-header">Additional evidence</h1>
                <EvidenceWarning/>
                <AddFilesForm
                  field={this.props.uploadField}
                  progress={this.props.progress}
                  uploading={this.props.uploading}
                  files={this.props.files}
                  showMailOrFax={this.props.showMailOrFax}
                  backUrl={this.props.lastPage || filesPath}
                  onSubmit={() => this.props.submitFiles(
                    this.props.claim.id,
                    null,
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

function mapStateToProps(state) {
  const claimsState = state.disability.status;
  return {
    loading: claimsState.claimDetail.loading,
    claim: claimsState.claimDetail.detail,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdditionalEvidencePage));

export { AdditionalEvidencePage };
