import PropTypes from 'prop-types';
import React from 'react';

class MoveToOption extends React.Component {
  render() {
    const { folderName, folderId, messageId } = this.props;
    const folderHtmlId = `msg-move-${messageId}-${folderId}`;

    return (
      <div>
        <input
          className="msg-hidden-radio"
          name="messagingMoveToFolder"
          type="radio"
          id={folderHtmlId}
          value={folderId}/>
        <label
          className="msg-move-to-label"
          htmlFor={folderHtmlId}>{folderName}</label>
      </div>
    );
  }
}

MoveToOption.propTypes = {
  folderName: PropTypes.string,
  folderId: PropTypes.number,
  messageId: PropTypes.number
};

export default MoveToOption;
