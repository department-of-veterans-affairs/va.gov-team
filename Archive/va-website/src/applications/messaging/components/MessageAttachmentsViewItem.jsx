import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { apiRequest } from '../utils/helpers';

class MessageAttachmentsViewItem extends React.Component {
  constructor(props) {
    super(props);
    this.downloadAttachment = this.downloadAttachment.bind(this);
    this.downloadUrl = null;
    this.state = { downloading: false };
  }

  downloadAttachment(event) {
    event.preventDefault();

    if (this.state.downloading) return;

    if (this.downloadUrl) {
      window.open(this.downloadUrl, '_blank');
      return;
    }

    this.setState({ downloading: true });
    const requestUrl = this.props.url;
    apiRequest(
      requestUrl,
      null,
      response => {
        response.blob().then(blob => {
          const downloadUrl = URL.createObjectURL(blob);
          this.downloadUrl = downloadUrl;
          this.setState({ downloading: false });
          window.open(this.downloadUrl, '_blank');
        });
      },
      () => { this.setState({ downloading: false }); }
    );
  }

  render() {
    const iconClass = classNames({
      fa: true,
      'fa-paperclip': !this.state.downloading,
      'fa-spinner': this.state.downloading,
      'fa-pulse': this.state.downloading,
      'msg-attachment-icon': true
    });

    let loadingMessage;
    if (this.state.downloading) {
      loadingMessage = <span className="usa-sr-only">Loading...</span>;
    }

    return (
      <li>
        <a onClick={this.downloadAttachment} href={this.props.url} className="msg-attachment-item">
          <i className={iconClass}></i>
          {loadingMessage}
          {this.props.name}
        </a>
      </li>
    );
  }
}

MessageAttachmentsViewItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};

export default MessageAttachmentsViewItem;
