import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Link } from 'react-router';

import SortableTable from '@department-of-veterans-affairs/formation/SortableTable';
import { formattedDate } from '../../../messaging/utils/helpers';

import recordEvent from '../../../../platform/monitoring/record-event';
import {
  fetchFolder,
  fetchRecipients,
} from '../../../messaging/actions';

function recordDashboardClick(product) {
  return () => {
    recordEvent({
      event: 'dashboard-navigation',
      'dashboard-action': 'view-link',
      'dashboard-product': product,
    });
  };
}

class MessagingWidget extends React.Component {
  componentDidMount() {
    this.props.fetchRecipients();
    this.props.fetchFolder(0, { page: 1, sort: '-sent_date' });
  }

  render() {
    const fields = [
      { label: 'From', value: 'senderName', nonSortable: true },
      { label: 'Subject line', value: 'subject', nonSortable: true },
      { label: '', value: 'hasAttachment', nonSortable: true },
      { label: 'Date', value: 'sentDate', nonSortable: true }
    ];

    const makeMessageLink = (content, id) => {
      return <Link href={`/health-care/messaging/inbox/${id}`}>{content}</Link>;
    };

    let { messages } = this.props;
    const { recipients, canAccessMessaging } = this.props;

    if (!canAccessMessaging || (recipients && recipients.length === 0)) {
      // do not show widget if user is not a VA patient
      // or if user does not have access to messaging
      return null;
    }

    let content;
    messages = messages || [];

    messages = messages.filter(message => {
      return message.readReceipt !== 'READ';
    });

    const data = messages.map(message => {
      const id = message.messageId;
      const rowClass = classNames({
        'messaging-message-row': true
      });

      const attachmentIcon = message.attachment ? (<i className="fa fa-paperclip" aria-label="Message has an attachment"></i>) : null;

      return {
        id,
        rowClass,
        hasAttachment: attachmentIcon,
        recipientName: makeMessageLink(message.recipientName, id),
        senderName: makeMessageLink(message.senderName, id),
        subject: makeMessageLink(message.subject, id),
        sentDate: makeMessageLink(formattedDate(message.sentDate), id)
      };
    });

    if (messages && messages.length > 0) {
      content = (
        <SortableTable
          className="usa-table-borderless va-table-list msg-table-list"
          data={data}
          currentSort={this.props.sort}
          fields={fields}/>
      );
    } else {
      content = <p>You don’t have any unread messages from your health care team.</p>;
    }

    return (
      <div id="msg-widget">
        <h2>Check Secure Messages</h2>
        {content}
        <p><Link href="/health-care/messaging" onClick={recordDashboardClick('view-all-messages')}>View all your secure messages</Link>.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const msgState = state.health.msg;
  const folder = msgState.folders.data.currentItem;
  const profileState = state.user.profile;
  const canAccessMessaging = profileState.services.includes('messaging');

  const { attributes, messages, pagination, sort } = folder;

  return {
    attributes,
    loading: msgState.loading,
    messages,
    recipients: msgState.recipients.data,
    sort,
    pagination,
    canAccessMessaging,
  };
};

const mapDispatchToProps = {
  fetchFolder,
  fetchRecipients,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagingWidget);
export { MessagingWidget };
