import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

import { formatFileSize } from '../../utils/helpers';

import MessageUploadedAttachment from './MessageUploadedAttachment';

class MessageAttachments extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttachmentDelete = this.handleAttachmentDelete.bind(this);
  }

  handleAttachmentDelete(domEvent) {
    const attachmentIndex = JSON.parse(domEvent.currentTarget.dataset.args).attachment;
    this.props.onClose(attachmentIndex);
  }

  render() {
    const cssClass = classNames(
      'msg-attachments',
      this.props.cssClass
    );

    const files = this.props.files.map((file, index) => {
      const fileSize = formatFileSize(file.size);
      const key = _.uniqueId('msg-att-');

      return (
        <li key={key}>
          <MessageUploadedAttachment
            attachmentIndex={index}
            fileName={file.name}
            fileSize={fileSize}
            onClose={this.handleAttachmentDelete}/>
        </li>
      );
    });

    return (
      <div
        className={cssClass}
        hidden={!this.props.files.length}>
        <div>
          <div className="msg-attachments-title">Attachments:</div>
          <ul className="msg-attachments-list">
            {files}
          </ul>
        </div>
      </div>
    );
  }
}

MessageAttachments.propTypes = {
  cssClass: PropTypes.string,
  files: PropTypes.array.isRequired,
  hidden: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default MessageAttachments;
