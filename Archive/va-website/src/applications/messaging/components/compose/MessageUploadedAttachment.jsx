import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import ButtonClose from '../buttons/ButtonClose';

class MessageUploadedAttachment extends React.Component {
  render() {
    const cssClass = classNames(
      'msg-attachment',
      this.props.cssClass
    );

    const attachmentIndexData = JSON.stringify({
      attachment: this.props.attachmentIndex
    });

    return (
      <div className={cssClass}>
        <span className="msg-attachment-name">{this.props.fileName}</span>
        <span className="msg-attachment-size">({this.props.fileSize})</span>
        <ButtonClose
          args={attachmentIndexData}
          className="msg-attachment-close"
          onClick={this.props.onClose}/>
      </div>
    );
  }
}

MessageUploadedAttachment.propTypes = {
  attachmentIndex: PropTypes.number.isRequired,
  cssClass: PropTypes.string,
  fileName: PropTypes.string.isRequired,
  fileSize: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default MessageUploadedAttachment;
