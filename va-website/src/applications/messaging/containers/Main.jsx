import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import classNames from 'classnames';

import ErrorView from '../components/ErrorView';
import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';

import {
  closeAdvancedSearch,
  closeAttachmentsModal,
  closeCreateFolderModal,
  createFolderAndMoveMessage,
  createNewFolder,
  fetchFolders,
  fetchRecipients,
  openCreateFolderModal,
  setNewFolderName,
  toggleFolderNav,
  toggleManagedFolders
} from '../actions';

import ButtonClose from '../components/buttons/ButtonClose';
import ComposeButton from '../components/ComposeButton';
import FolderNav from '../components/FolderNav';
import ModalAttachments from '../components/compose/ModalAttachments';
import ModalCreateFolder from '../components/ModalCreateFolder';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleFolderChange = this.handleFolderChange.bind(this);
    this.handleFolderNameChange = this.handleFolderNameChange.bind(this);
    this.handleSubmitCreateNewFolder = this.handleSubmitCreateNewFolder.bind(this);
    this.loadApp = this.loadApp.bind(this);
  }

  componentDidMount() {
    this.loadApp();
  }

  loadApp() {
    const { folders, recipients } = this.props;
    if (!folders || !folders.length) { this.props.fetchFolders(); }
    if (!recipients) { this.props.fetchRecipients(); }
  }

  handleFolderChange() {
    if (this.props.isVisibleAdvancedSearch) {
      this.props.closeAdvancedSearch();
    }
  }

  handleFolderNameChange(field) {
    this.props.setNewFolderName(field);
  }

  handleSubmitCreateNewFolder(folderName) {
    const messageId = this.props.createFolderModal.messageId;

    if (messageId !== undefined) {
      this.props.createFolderAndMoveMessage(folderName, messageId);
    } else {
      this.props.createNewFolder(folderName);
    }
  }

  render() {
    const loading = this.props.loading;

    if (loading.folders || loading.recipients) {
      return <LoadingIndicator message="Loading your application..."/>;
    }

    if (!this.props.folders || !this.props.folders.length || !this.props.recipients) {
      return (
        <ErrorView errors={this.props.errors}>
          <p>
            The application failed to load.
            Click <a onClick={this.loadApp}>here</a> to try again.
          </p>
        </ErrorView>
      );
    }

    if (loading.deletingFolder) {
      return <LoadingIndicator message="Deleting your folder..."/>;
    }

    if (loading.deletingMessage) {
      return <LoadingIndicator message="Deleting your message..."/>;
    }

    if (loading.movingMessage) {
      return <LoadingIndicator message="Moving your message..."/>;
    }

    if (loading.savingDraft) {
      return <LoadingIndicator message="Saving your message..."/>;
    }

    const navClass = classNames({
      opened: this.props.nav.visible
    });

    return (
      <ErrorView errors={this.props.errors}>
        <div id="messaging-main">
          <div id="messaging-nav" className={navClass}>
            <ButtonClose
              className="messaging-folder-nav-close"
              onClick={this.props.toggleFolderNav}/>
            <ComposeButton/>
            <FolderNav
              currentFolderId={this.props.currentFolderId}
              folders={this.props.folders}
              isExpanded={this.props.nav.foldersExpanded}
              onToggleFolders={this.props.toggleManagedFolders}
              onCreateNewFolder={this.props.openCreateFolderModal}
              onFolderChange={this.handleFolderChange}
              toggleFolderNav={this.props.toggleFolderNav}/>
          </div>
          <div id="messaging-content" aria-live="assertive">
            {this.props.children}
          </div>
          <ModalAttachments
            cssClass="messaging-modal"
            text={this.props.attachmentsModal.message.text}
            title={this.props.attachmentsModal.message.title}
            id="messaging-add-attachments"
            onClose={this.props.closeAttachmentsModal}
            visible={this.props.attachmentsModal.visible}/>
          <ModalCreateFolder
            cssClass="messaging-modal"
            folders={this.props.folders}
            id="messaging-create-folder"
            loading={loading.creatingFolder}
            onClose={this.props.closeCreateFolderModal}
            onValueChange={this.handleFolderNameChange}
            onSubmit={this.handleSubmitCreateNewFolder}
            visible={this.props.createFolderModal.visible}
            newFolderName={this.props.createFolderModal.newFolderName}/>
        </div>
      </ErrorView>
    );
  }
}

Main.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = (state) => {
  const msgState = state.health.msg;

  const folders = [];
  msgState.folders.data.items.forEach(v => {
    folders.push(v);
  });

  const currentFolderId = _.get(msgState.folders.ui.lastRequestedFolder, 'id', 0);

  return {
    attachmentsModal: msgState.modals.attachments,
    createFolderModal: msgState.modals.createFolder,
    currentFolderId,
    folders,
    isVisibleAdvancedSearch: msgState.search.advanced.visible,
    loading: msgState.loading,
    errors: msgState.errors.errors,
    nav: msgState.folders.ui.nav,
    recipients: msgState.recipients.data,
  };
};

const mapDispatchToProps = {
  closeAdvancedSearch,
  closeAttachmentsModal,
  closeCreateFolderModal,
  createFolderAndMoveMessage,
  createNewFolder,
  fetchFolders,
  fetchRecipients,
  openCreateFolderModal,
  setNewFolderName,
  toggleFolderNav,
  toggleManagedFolders
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
