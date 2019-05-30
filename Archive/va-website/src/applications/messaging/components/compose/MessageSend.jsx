import PropTypes from 'prop-types';
import React from 'react';

import {
  validateFileSize,
  validateNumAttachments,
  validateTotalFileSize
} from '../../utils/validations.js';

import ButtonDelete from '../buttons/ButtonDelete';
import MessageAddAttachment from './MessageAddAttachment';

class MessageSend extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttachmentsChange = this.handleAttachmentsChange.bind(this);
  }

  handleAttachmentsChange(domEvent) {
    const input = domEvent.target;
    let hasError = null;

    if (window.File && window.FileList) {
      if (input.files.length) {
        const files = Array.from(input.files);

        if (validateNumAttachments(files, this.props.maxFiles)) {
          hasError = { type: 'tooMany' };
        } else if (validateFileSize(files, this.props.maxFileSize) || validateTotalFileSize(files, this.props.maxTotalFileSize)) {
          hasError = { type: 'tooLarge' };
        }

        if (hasError) {
          this.props.onAttachmentsError(hasError);
        } else {
          this.props.onAttachmentUpload(files);
        }
      }
    }
  }

  renderExtraActionButtons() {
    if (this.props.disabled) {
      return null;
    }

    return (
      <span>
        <MessageAddAttachment
          cssClass="msg-attach"
          allowedMimeTypes={this.props.allowedMimeTypes}
          id="msg-attachments-input"
          label="Attach a file"
          name="messageAttachments"
          onChange={this.handleAttachmentsChange}/>
        <ButtonDelete
          className="va-icon-link"
          onClick={this.props.onDelete}/>
      </span>
    );
  }

  render() {
    const isDisabled = this.props.disabled;
    const spinnerIcon = this.props.sendingMessage && <i className="fa fa-spinner fa-spin"/>;

    return (
      <div className="msg-send-group">
        <div className="msg-send-buttons">
          <button
            disabled={isDisabled}
            type="button"
            onClick={this.props.onSend}>{spinnerIcon} Send</button>
          <button
            disabled={isDisabled}
            className="usa-button-secondary msg-btn-save"
            type="button"
            value="save"
            onClick={this.props.onSave}>Save As Draft</button>
        </div>
        {this.renderExtraActionButtons()}
      </div>
    );
  }
}

MessageSend.propTypes = {
  allowedMimeTypes: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  maxFiles: PropTypes.number,
  maxFileSize: PropTypes.number,
  maxTotalFileSize: PropTypes.number,
  onAttachmentUpload: PropTypes.func.isRequired,
  onAttachmentsError: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  sendingMessage: PropTypes.bool
};

export default MessageSend;
