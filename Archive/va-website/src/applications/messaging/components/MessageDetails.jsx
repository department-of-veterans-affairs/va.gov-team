import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

import { formattedDate } from '../utils/helpers';

class MessageDetails extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCompactDetails = this.toggleCompactDetails.bind(this);
    this.toggleFullDetails = this.toggleFullDetails.bind(this);
    this.state = { expandedCompact: false, expandedFull: false };
  }

  toggleCompactDetails() {
    this.setState({ expandedCompact: !this.state.expandedCompact });
  }

  toggleFullDetails() {
    this.setState({ expandedFull: !this.state.expandedFull });
  }

  render() {
    const {
      category,
      messageId,
      recipientName,
      senderName,
      sentDate,
      subject
    } = this.props.attrs;

    const detailsClass = classNames({
      'messaging-message-details': true,
      'messaging-message-details--compact': this.state.expandedCompact,
      'messaging-message-details--full': this.state.expandedFull
    });

    const sentDateRow = sentDate && (
      <tr>
        <th>Date:</th>
        <td>
          {moment(sentDate).format('ddd, MMM D, YYYY [at] HH:mm')}&nbsp;
          <abbr title="Eastern Standard Time">EST</abbr>
        </td>
      </tr>
    );

    const messageDetails = (
      <div className={detailsClass} aria-expanded={this.state.expandedFull}>
        <table>
          <tbody>
            <tr>
              <th>From:</th>
              <td>{senderName}</td>
            </tr>
            <tr>
              <th>To:</th>
              <td>{recipientName}</td>
            </tr>
            {sentDateRow}
            <tr>
              <th>Message ID:</th>
              <td>{messageId}</td>
            </tr>
            <tr>
              <th>Category:</th>
              <td>{category}</td>
            </tr>
            <tr>
              <th>Subject Line:</th>
              <td>{subject}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    const compactSentDate = sentDate && (
      <span>{formattedDate(sentDate, { fromNow: true })}</span>
    );

    return (
      <div
        className="messaging-message-details-control"
        tabIndex="-1"
        onBlur={() => { this.setState({ expandedFull: false }); }}
        onClick={(e) => e.stopPropagation()}>
        <button
          className="usa-button-unstyled"
          onClick={this.toggleFullDetails}>
          <i className="fa fa-caret-down"></i>
          <span className="usa-sr-only">
            {this.state.expandedFull ? 'Hide details' : 'Details'}
          </span>
        </button>
        <div className="messaging-compact-details-control">
          {compactSentDate}
          <a tabIndex="0" role="button" onClick={this.toggleCompactDetails}>
            {this.state.expandedCompact ? 'Hide details' : 'Details'}
          </a>
        </div>
        {messageDetails}
      </div>
    );
  }
}

MessageDetails.propTypes = {
  attrs: PropTypes.shape({
    messageId: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    sentDate: PropTypes.string,
    senderName: PropTypes.string.isRequired,
    recipientName: PropTypes.string.isRequired,
  }).isRequired,
};

export default MessageDetails;
