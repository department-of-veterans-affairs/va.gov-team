import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { formattedDate } from '../utils/helpers';
import MessageDetails from './MessageDetails';
import MessageAttachmentsView from './MessageAttachmentsView';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleCollapsed = this.handleToggleCollapsed.bind(this);
    this.handleMessageOnKeyPress = this.handleMessageOnKeyPress.bind(this);
  }

  componentDidUpdate() {
    const { attrs, isCollapsed } = this.props;

    const shouldFetchMessage =
      !isCollapsed &&
      attrs.attachment &&
      !attrs.attachments;

    if (shouldFetchMessage) {
      this.props.fetchMessage(attrs.messageId);
    }
  }

  handleToggleCollapsed() {
    if (this.props.onToggleCollapsed) {
      this.props.onToggleCollapsed(this.props.attrs.messageId);
    }
  }

  handleMessageOnKeyPress(e) {
    e.preventDefault();

    if (e.which === 32 || e.which === 13) {
      this.handleToggleCollapsed();
    }
  }

  render() {
    const { attrs, isCollapsed } = this.props;
    const { body, senderName, sentDate } = attrs;

    const messageClass = classNames({
      'messaging-thread-message': true,
      'messaging-thread-message--draft': !sentDate,
      'messaging-thread-message--collapsed': isCollapsed,
      'messaging-thread-message--expanded': !isCollapsed
    });

    let details;
    let headerOnClick;
    let messageOnClick;
    let attachmentsView;

    if (isCollapsed) {
      messageOnClick = this.handleToggleCollapsed;
    } else {
      const { attachment, attachments, recipientName } = attrs;

      details = (
        <div className="messaging-message-recipient">
          to {recipientName}
          <MessageDetails attrs={attrs}/>
        </div>
      );

      headerOnClick = this.handleToggleCollapsed;

      attachmentsView = attachment && (
        <MessageAttachmentsView attachments={attachments}/>
      );
    }

    return (
      <div tabIndex="0" role="button" aria-expanded={!this.props.isCollapsed} onKeyPress={this.handleMessageOnKeyPress} className={messageClass} onClick={messageOnClick}>
        <div
          aria-live="assertive"
          className="messaging-message-header"
          onClick={headerOnClick}>
          <div className="messaging-message-sent-date">
            {sentDate && formattedDate(sentDate, { fromNow: true })}
          </div>
          <div className="messaging-message-sender">
            {senderName}
          </div>
          {details}
        </div>
        <div className="messaging-message-body">
          {body}
        </div>
        {attachmentsView}
      </div>
    );
  }
}

Message.propTypes = {
  attrs: PropTypes.shape({
    messageId: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    attachment: PropTypes.bool.isRequired,
    sentDate: PropTypes.string,
    senderId: PropTypes.number.isRequired,
    senderName: PropTypes.string.isRequired,
    recipientId: PropTypes.number.isRequired,
    recipientName: PropTypes.string.isRequired,
    readReceipt: PropTypes.oneOf(['READ', 'UNREAD'])
  }).isRequired,
  fetchMessage: PropTypes.func,
  isCollapsed: PropTypes.bool,
  onToggleCollapsed: PropTypes.func
};

export default Message;
