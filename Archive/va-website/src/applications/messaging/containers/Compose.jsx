import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import LoadingIndicator from '@department-of-veterans-affairs/formation/LoadingIndicator';
import { dirtyAllFields } from '../../../platform/forms/fields';
import NoticeBox from '../components/NoticeBox';
import ModalConfirmDelete from '../components/compose/ModalConfirmDelete';
import ModalConfirmSave from '../components/compose/ModalConfirmSave';
import NewMessageForm from '../components/forms/NewMessageForm';
import * as validations from '../utils/validations';

import {
  addComposeAttachments,
  deleteComposeAttachment,
  deleteComposeMessage,
  openAttachmentsModal,
  resetMessage,
  saveDraft,
  sendMessage,
  setMessageField,
  toggleConfirmDelete,
  toggleConfirmSave,
} from '../actions';

export class Compose extends React.Component {
  constructor() {
    super();
    this.apiFormattedMessage = this.apiFormattedMessage.bind(this);
    this.handleConfirmDelete = this.handleConfirmDelete.bind(this);
    this.isValidForm = this.isValidForm.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.saveDraft = this.saveDraft.bind(this);
    this.saveDraftIfNoAttachments = this.saveDraftIfNoAttachments.bind(this);
  }

  componentDidMount() {
    const { redirect } = this.props;
    if (redirect) {
      this.context.router.replace({
        pathname: redirect.url,
        state: { preserveAlert: true }
      });
      return;
    }
    this.props.resetMessage();
  }

  componentDidUpdate() {
    const { redirect } = this.props;
    if (redirect) {
      this.context.router.replace({
        pathname: redirect.url,
        state: { preserveAlert: true }
      });
    }
  }

  apiFormattedMessage() {
    const message = this.props.message;

    return {
      attachments: message.attachments,
      category: message.category.value,
      subject: message.subject.value,
      body: message.body.value,
      recipientId: +message.recipient.value
    };
  }

  dirtyComposeForm() {
    // Dirty all fields in the form object.
    const message = dirtyAllFields(this.props.message);

    // Resets the fields on submit to trigger error messages if applicable.
    this.props.setMessageField('message.recipient', message.recipient);
    this.props.setMessageField('message.category', message.category);
    this.props.setMessageField('message.subject', message.subject);
    this.props.setMessageField('message.body', message.body);

    // return dirtied fields
    return message;
  }

  isValidForm() {
    const message = this.dirtyComposeForm();
    const valid = validations.isValidRecipient(message.recipient) &&
                  validations.isValidCategory(message.category) &&
                  validations.isValidSubject(message.subject) &&
                  validations.isValidMessageBody(message.body);
    return valid;
  }

  sendMessage() {
    if (this.isValidForm()) {
      this.props.sendMessage(this.apiFormattedMessage());
    }
  }

  saveDraft() {
    if (this.props.saveConfirmModal.visible) {
      this.props.toggleConfirmSave();
    }

    this.props.saveDraft(this.apiFormattedMessage());
  }

  saveDraftIfNoAttachments() {
    if (this.props.message.attachments.length) {
      this.props.toggleConfirmSave();
    } else {
      this.saveDraft();
    }
  }

  handleConfirmDelete() {
    this.props.toggleConfirmDelete();
    this.props.deleteComposeMessage();
  }

  render() {
    if (this.props.loading.recipients) {
      return <LoadingIndicator message="Loading your application..."/>;
    }

    return (
      <div>
        <div id="messaging-content-header">
          <a
            className="messaging-cancel-link"
            onClick={this.props.toggleConfirmDelete}>
            Cancel
          </a>
          <h3>New message</h3>
          <button
            className="messaging-send-button"
            type="button"
            onClick={this.sendMessage}
            disabled={!this.props.message.body.value.length}>
            Send
          </button>
        </div>
        <NewMessageForm
          message={this.props.message}
          recipients={this.props.recipients}
          onAttachmentsClose={this.props.deleteComposeAttachment}
          onAttachmentUpload={this.props.addComposeAttachments}
          onAttachmentsError={this.props.openAttachmentsModal}
          onBodyChange={this.props.setMessageField.bind(null, 'message.body')}
          onCategoryChange={this.props.setMessageField.bind(null, 'message.category')}
          onFetchRecipients={this.props.fetchRecipients}
          onRecipientChange={this.props.setMessageField.bind(null, 'message.recipient')}
          onSaveMessage={this.saveDraftIfNoAttachments}
          onSendMessage={this.sendMessage}
          onSubjectChange={this.props.setMessageField.bind(null, 'message.subject')}
          sendingMessage={this.props.loading.sendingMessage}
          toggleConfirmDelete={this.props.toggleConfirmDelete}/>
        <NoticeBox/>
        <ModalConfirmDelete
          cssClass="messaging-modal"
          onClose={this.props.toggleConfirmDelete}
          onDelete={this.handleConfirmDelete}
          visible={this.props.deleteConfirmModal.visible}/>
        <ModalConfirmSave
          cssClass="messaging-modal"
          onClose={this.props.toggleConfirmSave}
          onSave={this.saveDraft}
          visible={this.props.saveConfirmModal.visible}/>
      </div>
    );
  }
}

Compose.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const msgState = state.health.msg;

  return {
    deleteConfirmModal: msgState.modals.deleteConfirm,
    loading: msgState.loading,
    message: msgState.compose.message,
    recipients: msgState.recipients.data,
    redirect: msgState.folders.ui.redirect,
    saveConfirmModal: msgState.modals.saveConfirm
  };
};

const mapDispatchToProps = {
  addComposeAttachments,
  deleteComposeAttachment,
  deleteComposeMessage,
  openAttachmentsModal,
  resetMessage,
  saveDraft,
  sendMessage,
  setMessageField,
  toggleConfirmDelete,
  toggleConfirmSave,
};

export default connect(mapStateToProps, mapDispatchToProps)(Compose);
