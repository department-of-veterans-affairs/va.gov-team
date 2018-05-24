/* eslint-disable jsx-a11y/label-has-for */
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { allowedMimeTypes, composeMessage } from '../../config';
import * as validations from '../../utils/validations';
import MessageWriteGroup from '../compose/MessageWriteGroup';

class ReplyForm extends React.Component {
  render() {
    const reply = this.props.reply;

    const detailsClass = classNames({
      'msg-reply-details': true,
      opened: !this.props.detailsCollapsed
    });

    const replyDetails = (
      <div
        className={detailsClass}
        onClick={this.props.toggleDetails}>
        <div className="msg-reply-detail">
          <label>Reply to:</label> {this.props.recipient}
        </div>
        <div className="msg-reply-detail">
          <label>Subject line:</label> {this.props.subject}
        </div>
      </div>
    );

    return (
      <form id="msg-reply">
        {replyDetails}
        <MessageWriteGroup
          disabled={this.props.disabled}
          allowedMimeTypes={allowedMimeTypes}
          errorMessage={validations.isValidMessageBody(reply.body) ? undefined : composeMessage.errors.message}
          files={reply.attachments}
          maxFiles={composeMessage.attachments.maxNum}
          maxFileSize={composeMessage.attachments.maxSingleFile}
          maxTotalFileSize={composeMessage.attachments.maxTotalFiles}
          onAttachmentsClose={this.props.onAttachmentsClose}
          onAttachmentUpload={this.props.onAttachmentUpload}
          onAttachmentsError={this.props.onAttachmentsError}
          onDelete={this.props.toggleConfirmDelete}
          onTextChange={this.props.onBodyChange}
          onSave={this.props.onSaveReply}
          onSend={this.props.onSendReply}
          messageText={reply.body}
          placeholder={composeMessage.placeholders.message}/>
      </form>
    );
  }
}

ReplyForm.propTypes = {
  disabled: PropTypes.bool,
  detailsCollapsed: PropTypes.bool,
  recipient: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  reply: PropTypes.shape({
    body: PropTypes.shape({
      value: PropTypes.string,
      dirty: PropTypes.bool
    }),
    attachments: PropTypes.array
  }).isRequired,

  onAttachmentsClose: PropTypes.func,
  onAttachmentUpload: PropTypes.func,
  onAttachmentsError: PropTypes.func,
  onBodyChange: PropTypes.func,
  onSaveReply: PropTypes.func.isRequired,
  onSendReply: PropTypes.func.isRequired,
  toggleConfirmDelete: PropTypes.func,
  toggleDetails: PropTypes.func
};

export default ReplyForm;
