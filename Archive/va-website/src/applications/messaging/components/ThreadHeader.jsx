import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import ButtonBack from './buttons/ButtonBack';
import ButtonDelete from './buttons/ButtonDelete';
import MoveTo from './MoveTo';
import MessageNav from './MessageNav';
import ToggleThread from './ToggleThread';
import { folderUrl } from '../utils/helpers';

class ThreadHeader extends React.Component {
  render() {
    const {
      currentFolder,
      folderMessageCount,
      isNewMessage,
      message,
      threadMessageCount
    } = this.props;

    const folderName = currentFolder.name;
    let messageNav;
    let moveTo;
    let deleteButton;
    let toggleThread;

    if (folderMessageCount) {
      const { currentMessageNumber } = this.props;

      messageNav = (
        <MessageNav
          currentRange={currentMessageNumber}
          messageCount={folderMessageCount}
          onItemSelect={this.props.onMessageSelect}
          itemNumber={currentMessageNumber}
          totalItems={folderMessageCount}/>
      );
    }

    if (threadMessageCount > 1) {
      toggleThread = (
        <ToggleThread
          messagesCollapsed={this.props.messagesCollapsed}
          onClick={this.props.onToggleThread}/>
      );
    }

    // Hide the 'Delete' button for drafts and sent messages,
    // since drafts should only be deletable from the form,
    // and sent messages can’t be deleted.
    // Also hide the 'Move' button for drafts and sent messages,
    // since they can’t be moved to other folders.
    if (folderName !== 'Sent' && folderName !== 'Drafts') {
      deleteButton =
        <ButtonDelete onClick={this.props.onDeleteMessage}/>;

      const { folders, moveToIsOpen } = this.props;

      moveTo = (
        <MoveTo
          currentFolder={currentFolder}
          folders={folders}
          isOpen={moveToIsOpen}
          messageId={message.messageId}
          onChooseFolder={this.props.onChooseFolder}
          onCreateFolder={this.props.onCreateFolder}
          onToggleMoveTo={this.props.onToggleMoveTo}/>
      );
    }

    const titleClass = classNames({
      'messaging-thread-title': true,
      'show-for-small-only': isNewMessage
    });

    const titleSection = (
      <div className={titleClass}>
        <div className="messaging-thread-controls">
          {toggleThread}
          {deleteButton}
        </div>
        <h2 className="messaging-thread-subject">{message.subject}</h2>
      </div>
    );

    return (
      <div className="messaging-thread-header">
        <div className="messaging-thread-nav">
          <ButtonBack url={folderUrl(folderName)}/>
          {messageNav}
          {moveTo}
          {deleteButton}
        </div>
        {titleSection}
      </div>
    );
  }
}

ThreadHeader.propTypes = {
  currentFolder: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  currentMessageNumber: PropTypes.number.isRequired,
  folderMessageCount: PropTypes.number.isRequired,
  folders: PropTypes.arrayOf(
    PropTypes.shape({
      folderId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
      unreadCount: PropTypes.number.isRequired
    })
  ).isRequired,
  isNewMessage: PropTypes.bool,
  message: PropTypes.shape({
    messageId: PropTypes.number,
    subject: PropTypes.string
  }).isRequired,
  messagesCollapsed: PropTypes.bool,
  moveToIsOpen: PropTypes.bool,
  onChooseFolder: PropTypes.func,
  onCreateFolder: PropTypes.func,
  onDeleteMessage: PropTypes.func,
  onMessageSelect: PropTypes.func,
  onToggleThread: PropTypes.func,
  onToggleMoveTo: PropTypes.func,
  threadMessageCount: PropTypes.number
};

export default ThreadHeader;
