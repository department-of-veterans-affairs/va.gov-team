import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { intersection } from 'lodash';

import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import AlertBox from '@department-of-veterans-affairs/formation/AlertBox';

import {
  addDraftAttachments,
  clearDraft,
  deleteDraftAttachment,
  deleteMessage,
  fetchFolder,
  fetchRecipients,
  fetchThread,
  fetchThreadMessage,
  moveMessageToFolder,
  openAttachmentsModal,
  openMoveToNewFolderModal,
  saveDraft,
  sendMessage,
  toggleConfirmDelete,
  toggleConfirmSave,
  toggleMessageCollapsed,
  toggleMessagesCollapsed,
  toggleReplyDetails,
  toggleThreadForm,
  toggleThreadMoveTo,
  updateDraft
} from '../actions';

import Message from '../components/Message';
import NoticeBox from '../components/NoticeBox';
import ThreadHeader from '../components/ThreadHeader';
import ModalConfirmDelete from '../components/compose/ModalConfirmDelete';
import ModalConfirmSave from '../components/compose/ModalConfirmSave';
import NewMessageForm from '../components/forms/NewMessageForm';
import ReplyForm from '../components/forms/ReplyForm';

export class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.apiFormattedDraft = this.apiFormattedDraft.bind(this);
    this.getCurrentFolder = this.getCurrentFolder.bind(this);
    this.handleConfirmDraftSave = this.handleConfirmDraftSave.bind(this);
    this.handleDraftDelete = this.handleDraftDelete.bind(this);
    this.handleDraftSave = this.handleDraftSave.bind(this);
    this.handleDraftSend = this.handleDraftSend.bind(this);
    this.handleMessageDelete = this.handleMessageDelete.bind(this);
    this.makeHeader = this.makeHeader.bind(this);
    this.makeThread = this.makeThread.bind(this);
    this.makeForm = this.makeForm.bind(this);
  }

  componentDidMount() {
    const { folder, loading, redirect } = this.props;

    if (redirect) {
      const redirectOptions = {
        pathname: redirect.url,
        state: { preserveAlert: true }
      };

      if (redirect.allowBack) {
        this.context.router.push(redirectOptions);
      } else {
        this.context.router.replace(redirectOptions);
      }

      return;
    }

    const currentFolder = this.getCurrentFolder();
    const shouldFetchFolder =
      !loading.folder &&
      folder.attributes.folderId !== currentFolder.folderId;

    // If the folder hasn’t been fetched yet, it should be fetched in order for
    // (1) pagination to work properly and display the correct numbers and
    // (2) redirects after certain operations to go to the proper folder.
    if (shouldFetchFolder) {
      this.props.fetchFolder(currentFolder.folderId);
    }

    if (!loading.thread) {
      this.props.fetchThread(+this.props.params.messageId);
    }
  }

  componentDidUpdate() {
    const { lastRequestedId, loading, isNewMessage, recipients } = this.props;

    if (!loading.thread) {
      const shouldFetchRecipients =
        !loading.recipients && isNewMessage && !recipients;

      if (shouldFetchRecipients) {
        this.props.fetchRecipients();
      }

      const requestedId = +this.props.params.messageId;
      const shouldFetchMessage = requestedId !== lastRequestedId;

      if (shouldFetchMessage) {
        this.props.fetchThread(requestedId);
      }
    }
  }

  getCurrentFolder() {
    // Get current folder based on the URL.
    const folderName = this.props.params.folderName;
    const folder = this.props.folders.get(folderName);
    return folder;
  }

  apiFormattedDraft() {
    const draft = this.props.draft;

    return {
      attachments: draft.attachments,
      body: draft.body.value,
      category: draft.category.value,
      messageId: draft.messageId,
      recipientId: +draft.recipient.value,
      replyMessageId: draft.replyMessageId,
      subject: draft.subject.value
    };
  }

  handleDraftDelete() {
    this.props.toggleConfirmDelete();
    this.props.clearDraft();

    if (this.props.isSavedDraft) {
      this.props.deleteMessage(this.props.message.messageId);
    }
  }

  handleConfirmDraftSave() {
    if (this.props.modals.saveConfirm.visible) {
      this.props.toggleConfirmSave();
    }

    this.props.saveDraft(this.apiFormattedDraft());
  }

  handleDraftSave() {
    if (this.props.draft.attachments.length) {
      this.props.toggleConfirmSave();
    } else {
      this.handleConfirmDraftSave();
    }
  }

  handleDraftSend() {
    this.props.sendMessage(this.apiFormattedDraft());
  }

  handleMessageDelete() {
    this.props.deleteMessage(this.props.message.messageId);
  }

  makeHeader() {
    const {
      folder,
      isNewMessage,
      isSavedDraft,
      message,
      messagesCollapsed,
      moveToOpened,
      thread
    } = this.props;

    if (!folder || !message) {
      return null;
    }

    const folderMessages = folder.messages;

    // Find the current message’s position
    // among the messages in the current folder.
    const currentIndex = folderMessages.findIndex((folderMessage) => {
      return folderMessage.messageId === message.messageId;
    });

    // TODO: Enable navigating to messages outside of the current page.
    const handleMessageSelect = (messageNumber) => {
      const index = messageNumber - 1;
      const selectedId = folderMessages[index].messageId;
      this.context.router.push(`/${this.props.params.folderName}/${selectedId}`);
    };

    // If the message is a draft, the delete button should prompt, since the
    // draft would get deleted entirely instead of being moved to a folder.
    const deleteMessageHandler = isSavedDraft
      ? this.props.toggleConfirmDelete
      : this.handleMessageDelete;

    const folders = [];
    this.props.folders.forEach(v => {
      folders.push(v);
    });

    return (
      <ThreadHeader
        currentFolder={this.getCurrentFolder()}
        currentMessageNumber={currentIndex + 1}
        folderMessageCount={folderMessages.length}
        folders={folders}
        isNewMessage={isNewMessage}
        message={message}
        messagesCollapsed={(messagesCollapsed.size > 0)}
        moveToIsOpen={moveToOpened}
        onChooseFolder={this.props.moveMessageToFolder}
        onCreateFolder={this.props.openMoveToNewFolderModal}
        onDeleteMessage={deleteMessageHandler}
        onMessageSelect={handleMessageSelect}
        onToggleThread={this.props.toggleMessagesCollapsed}
        onToggleMoveTo={this.props.toggleThreadMoveTo}
        threadMessageCount={thread.length + 1}/>
    );
  }

  makeThread() {
    const { message, messagesCollapsed, thread } = this.props;

    let threadMessages;
    let currentMessage;

    if (thread) {
      threadMessages = thread.map((threadMessage) => {
        const isCollapsed =
          messagesCollapsed.has(threadMessage.messageId);

        return (
          <Message
            key={threadMessage.messageId}
            attrs={threadMessage}
            isCollapsed={isCollapsed}
            onToggleCollapsed={this.props.toggleMessageCollapsed}
            fetchMessage={this.props.fetchThreadMessage}/>
        );
      });
    }


    if (message) {
      currentMessage = <Message attrs={message}/>;
    }

    return (
      <div className="messaging-thread-messages">
        {threadMessages}
        {currentMessage}
      </div>
    );
  }

  makeForm(disabled = false) {
    const { draft, isNewMessage, message, recipients } = this.props;
    let form;

    if (isNewMessage) {
      form = (
        <NewMessageForm
          message={draft}
          recipients={recipients}
          onAttachmentsClose={this.props.deleteDraftAttachment}
          onAttachmentUpload={this.props.addDraftAttachments}
          onAttachmentsError={this.props.openAttachmentsModal}
          onBodyChange={this.props.updateDraft.bind(null, 'body')}
          onCategoryChange={this.props.updateDraft.bind(null, 'category')}
          onFetchRecipients={this.props.fetchRecipients}
          onRecipientChange={this.props.updateDraft.bind(null, 'recipient')}
          onSaveMessage={this.handleDraftSave}
          onSendMessage={this.handleDraftSend}
          onSubjectChange={this.props.updateDraft.bind(null, 'subject')}
          toggleConfirmDelete={this.props.toggleConfirmDelete}/>
      );
    } else if (message) {
      form = (
        <ReplyForm
          disabled={disabled}
          detailsCollapsed={this.props.replyDetailsCollapsed}
          recipient={message.senderName}
          subject={message.subject}
          reply={draft}
          onAttachmentsClose={this.props.deleteDraftAttachment}
          onAttachmentUpload={this.props.addDraftAttachments}
          onAttachmentsError={this.props.openAttachmentsModal}
          onBodyChange={this.props.updateDraft.bind(null, 'body')}
          onSaveReply={this.handleDraftSave}
          onSendReply={this.handleDraftSend}
          toggleConfirmDelete={this.props.toggleConfirmDelete}
          toggleDetails={this.props.toggleReplyDetails}/>
      );
    }

    return form;
  }

  renderHealthCareTeamNotice(shouldShow) {
    if (shouldShow) {
      return (
        <AlertBox
          content={<div>
            <h4 className="usa-alert-heading">Health care team has changed</h4>
            <p>
              You are no longer associated with this health care team and cannot reply to this message. Please contact the help desk at <a href="tel:855-574-7286">1-855-574-7286</a>, TTY: <a href="tel:18008778339">1-800-877-8339</a>, Monday &#8211; Friday, 8:00 a.m. &#8211; 8:00 p.m. (ET) if you have any questions.
            </p>
          </div>}
          isVisible
          status="warning"/>
      );
    }
    return null;
  }

  render() {
    const { isFormVisible, isNewMessage, isSavedDraft, loading, recipients, thread: threadMessages, message, draft } = this.props;

    if (isNewMessage && loading.recipients) {
      return <LoadingIndicator message="Loading your application..."/>;
    }

    if (loading.thread) {
      return <LoadingIndicator message="Loading your message..."/>;
    }

    if (!this.props.message) {
      const lastRequestedId = this.props.lastRequestedId;

      if (lastRequestedId !== null) {
        const reloadMessage = () => {
          this.props.fetchThread(lastRequestedId);
        };

        return (
          <p>
            Could not retrieve the message.&nbsp;
            <a onClick={reloadMessage}>Click here to try again.</a>
          </p>
        );
      }

      return <p>Sorry, this message does not exist.</p>;
    }

    // check if any senderIds are valid recipients
    const disabled = !loading.recipients && intersection(
      recipients.map(e => e.value),
      threadMessages.map(t => t.senderId).concat(
        [message.senderId, Number(draft.recipient.value)]
      )
    ).length > 0;

    const header = this.makeHeader();
    const thread = this.makeThread();
    const form = this.makeForm(disabled);

    const threadClass = classNames({
      'messaging-thread-content': true,
      opened: !isFormVisible
    });

    const formClass = classNames({
      'messaging-thread-form': true,
      opened: isFormVisible
    });

    return (
      <div>
        <div className={threadClass}>
          {header}
          {thread}
          <div className="messaging-thread-form-trigger">
            <button
              className="usa-button"
              type="button"
              onClick={this.props.toggleThreadForm}>
              {isSavedDraft ? 'Edit draft' : 'Reply'}
            </button>
          </div>
        </div>
        <div className={formClass}>
          <div
            id="messaging-content-header"
            className="messaging-thread-header">
            <a
              className="messaging-cancel-link"
              onClick={this.props.toggleThreadForm}>
              Cancel
            </a>
            <h3>{isNewMessage ? 'Edit draft' : 'Reply'}</h3>
            <button
              className="messaging-send-button"
              type="button"
              onClick={this.handleDraftSend}
              disabled={!this.props.draft.body.value.length}>
              Send
            </button>
          </div>
          {this.renderHealthCareTeamNotice(disabled)}
          {form}
        </div>
        {!disabled && <NoticeBox/>}
        <ModalConfirmDelete
          cssClass="messaging-modal"
          onClose={this.props.toggleConfirmDelete}
          onDelete={this.handleDraftDelete}
          visible={this.props.modals.deleteConfirm.visible}/>
        <ModalConfirmSave
          cssClass="messaging-modal"
          onClose={this.props.toggleConfirmSave}
          onSave={this.handleConfirmDraftSave}
          visible={this.props.modals.saveConfirm.visible}/>
      </div>
    );
  }
}

Thread.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const msgState = state.health.msg;
  const folder = msgState.folders.data.currentItem;
  const message = msgState.messages.data.message;
  const draft = msgState.messages.data.draft;

  const isSavedDraft = message && !message.sentDate;
  const isNewMessage = draft.replyMessageId === undefined;

  return {
    draft,
    folder,
    folders: msgState.folders.data.items,
    isFormVisible: msgState.messages.ui.formVisible,
    isNewMessage,
    isSavedDraft,
    lastRequestedId: msgState.messages.ui.lastRequestedId,
    loading: msgState.loading,
    message,
    messagesCollapsed: msgState.messages.ui.messagesCollapsed,
    modals: msgState.modals,
    moveToOpened: msgState.messages.ui.moveToOpened,
    recipients: msgState.recipients.data,
    redirect: msgState.folders.ui.redirect,
    replyDetailsCollapsed: msgState.messages.ui.replyDetailsCollapsed,
    thread: msgState.messages.data.thread
  };
};

const mapDispatchToProps = {
  addDraftAttachments,
  clearDraft,
  deleteDraftAttachment,
  deleteMessage,
  fetchFolder,
  fetchRecipients,
  fetchThread,
  fetchThreadMessage,
  moveMessageToFolder,
  openAttachmentsModal,
  openMoveToNewFolderModal,
  saveDraft,
  sendMessage,
  toggleConfirmDelete,
  toggleConfirmSave,
  toggleMessageCollapsed,
  toggleMessagesCollapsed,
  toggleThreadMoveTo,
  toggleReplyDetails,
  toggleThreadForm,
  updateDraft
};

export default connect(mapStateToProps, mapDispatchToProps)(Thread);
