import PropTypes from 'prop-types';
import React from 'react';
import MessageAttachmentsViewItem from './MessageAttachmentsViewItem';
import _ from 'lodash';

class MessageAttachmentsView extends React.Component {
  render() {
    let attachments;

    if (this.props.attachments) {
      attachments = this.props.attachments.map((attachment) => {
        const key = _.uniqueId('msg-attachment-item-');

        return (
          <MessageAttachmentsViewItem
            key={key}
            name={attachment.attributes.name}
            url={attachment.links.download}/>
        );
      });
    } else {
      attachments = <div>Loading...</div>;
    }

    return (
      <div className="msg-attachments-received">
        <h5 className="msg-attachments-received-title">Attachments:</h5>
        <ul className="msg-attachments-received-list">
          {attachments}
        </ul>
      </div>
    );
  }
}

// TODO: Correct this type as necessary
MessageAttachmentsView.propTypes = {
  attachments: PropTypes.array
};

export default MessageAttachmentsView;
