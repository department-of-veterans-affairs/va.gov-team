import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import MessageWrite from './MessageWrite';
import MessageSend from './MessageSend';
import MessageAttachments from './MessageAttachments';

class MessageWriteGroup extends React.Component {
  render() {
    const errItemClass = classNames(
      'msg-write-group',
      'msg-field',
      { 'msg-compose-error': !!this.props.errorMessage },
      { 'usa-input-error': !!this.props.errorMessage }
    );

    return (
      <div className={errItemClass}>
        <MessageWrite
          disabled={this.props.disabled}
          cssClass="msg-write"
          errorMessage={this.props.errorMessage}
          onValueChange={this.props.onTextChange}
          placeholder={this.props.placeholder}
          text={this.props.messageText}/>
        <MessageAttachments
          files={this.props.files}
          onClose={this.props.onAttachmentsClose}/>
        <MessageSend
          disabled={!this.props.messageText.value.length || this.props.sendingMessage || this.props.disabled}
          allowedMimeTypes={this.props.allowedMimeTypes}
          attachedFiles={this.props.files}
          maxFiles={this.props.maxFiles}
          maxFileSize={this.props.maxFileSize}
          maxTotalFileSize={this.props.maxTotalFileSize}
          onAttachmentUpload={this.props.onAttachmentUpload}
          onAttachmentsError={this.props.onAttachmentsError}
          onSave={this.props.onSave}
          onSend={this.props.onSend}
          onDelete={this.props.onDelete}
          sendingMessage={this.props.sendingMessage}/>
      </div>
    );
  }
}

MessageWriteGroup.propTypes = {
  disabled: PropTypes.bool,
  allowedMimeTypes: PropTypes.array,
  errorMessage: PropTypes.string,
  files: PropTypes.array,
  maxFiles: PropTypes.number,
  maxFileSize: PropTypes.number,
  maxTotalFileSize: PropTypes.number,
  messageText: PropTypes.shape({
    value: PropTypes.string,
    dirty: PropTypes.bool
  }).isRequired,
  onAttachmentsClose: PropTypes.func,
  onAttachmentUpload: PropTypes.func,
  onAttachmentsError: PropTypes.func,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onSend: PropTypes.func,
  onTextChange: PropTypes.func,
  placeholder: PropTypes.string,
  sendingMessage: PropTypes.bool
};

export default MessageWriteGroup;
