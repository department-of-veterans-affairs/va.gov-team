import PropTypes from 'prop-types';
import React from 'react';

import {
  allowedMimeTypes,
  composeMessage,
  messageCategories
} from '../../config';

import * as validations from '../../utils/validations';
import MessageRecipient from '../compose/MessageRecipient';
import MessageSubjectGroup from '../compose/MessageSubjectGroup';
import MessageWriteGroup from '../compose/MessageWriteGroup';

export class NewMessageForm extends React.Component {
  render() {
    const message = this.props.message;
    let recipientsField;

    // Tests the subject group for errors
    const subjectError = validations.isValidSubjectLine(message.category, message.subject);

    if (this.props.recipients && this.props.recipients.length) {
      recipientsField = (
        <MessageRecipient
          errorMessage={validations.isValidRecipient(message.recipient) ? undefined : composeMessage.errors.recipient}
          cssClass="msg-recipient msg-field"
          onValueChange={this.props.onRecipientChange}
          options={this.props.recipients}
          recipient={message.recipient}/>
      );
    } else {
      // When there is no recipients list, it means the request has failed,
      // so allow the user to retry. If the request returned an empty list
      // for some reason, it could indicate a server-side issue.
      const retryLink = !this.props.recipients && (
        <a onClick={this.props.onFetchRecipients}>
          Click here to retry loading recipients.
        </a>
      );

      recipientsField = (
        <p>
          No recipients could be found.&nbsp;
          {retryLink}
        </p>
      );
    }

    return (
      <form
        id="msg-compose"
        onSubmit={(domEvent) => { domEvent.preventDefault(); }}>
        {recipientsField}
        <MessageSubjectGroup
          categories={messageCategories}
          category={message.category}
          cssErrorClass={subjectError.type ? `msg-compose-error--${subjectError.type}` : undefined}
          errorMessage={subjectError.hasError ? composeMessage.errors.subjectLine[subjectError.type] : undefined}
          onCategoryChange={this.props.onCategoryChange}
          onSubjectChange={this.props.onSubjectChange}
          subject={message.subject}
          subjectPlaceholder={composeMessage.placeholders.subject}/>
        <MessageWriteGroup
          allowedMimeTypes={allowedMimeTypes}
          errorMessage={validations.isValidMessageBody(message.body) ? undefined : composeMessage.errors.message}
          files={this.props.message.attachments}
          maxFiles={composeMessage.attachments.maxNum}
          maxFileSize={composeMessage.attachments.maxSingleFile}
          maxTotalFileSize={composeMessage.attachments.maxTotalFiles}
          onAttachmentsClose={this.props.onAttachmentsClose}
          onAttachmentUpload={this.props.onAttachmentUpload}
          onAttachmentsError={this.props.onAttachmentsError}
          onDelete={this.props.toggleConfirmDelete}
          onTextChange={this.props.onBodyChange}
          onSave={this.props.onSaveMessage}
          onSend={this.props.onSendMessage}
          messageText={message.body}
          placeholder={composeMessage.placeholders.message}
          sendingMessage={this.props.sendingMessage}/>
      </form>
    );
  }
}

NewMessageForm.propTypes = {
  message: PropTypes.shape({
    recipient: PropTypes.shape({
      value: PropTypes.string,
      dirty: PropTypes.bool
    }),
    category: PropTypes.shape({
      value: PropTypes.string,
      dirty: PropTypes.bool
    }),
    subject: PropTypes.shape({
      value: PropTypes.string,
      dirty: PropTypes.bool
    }),
    body: PropTypes.shape({
      value: PropTypes.string,
      dirty: PropTypes.bool
    }),
    attachments: PropTypes.array
  }).isRequired,

  recipients: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number }),
      PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string })
    ])),

  onAttachmentsClose: PropTypes.func,
  onAttachmentUpload: PropTypes.func,
  onAttachmentsError: PropTypes.func,
  onBodyChange: PropTypes.func,
  onCategoryChange: PropTypes.func,
  onFetchRecipients: PropTypes.func,
  onRecipientChange: PropTypes.func,
  onSaveMessage: PropTypes.func.isRequired,
  onSendMessage: PropTypes.func.isRequired,
  onSubjectChange: PropTypes.func,
  sendingMessage: PropTypes.bool,
  toggleConfirmDelete: PropTypes.func.isRequired,
};

export default NewMessageForm;
