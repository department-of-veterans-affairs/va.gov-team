import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { MessagingWidget } from '../../containers/MessagingWidget';

const props = {
  canAccessMessaging: true,
  messages: [
    {
      messageId: 123,
      category: 'APPOINTMENTS',
      subject: 'Scheduling An Appointment',
      body: 'Testing 123.',
      attachment: false,
      sentDate: '2016-12-21T05:54:26.000Z',
      senderId: 456,
      senderName: 'Clinician',
      recipientId: 789,
      recipientName: 'Veteran',
      readReceipt: 'UNREAD'
    },
    {
      messageId: 123,
      category: 'APPOINTMENTS',
      subject: 'Scheduling An Appointment',
      body: 'Testing 123.',
      attachment: false,
      sentDate: '2016-12-21T05:54:26.000Z',
      senderId: 456,
      senderName: 'Clinician',
      recipientId: 789,
      recipientName: 'Veteran',
      readReceipt: 'READ'
    },
  ],
};

describe('<MessagingWidget>', () => {
  it('should not render if messaging is inaccessible', () => {
    const tree = SkinDeep.shallowRender(<MessagingWidget/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.equal(null);
  });

  it('should render if messaging is accessible', () => {
    const tree = SkinDeep.shallowRender(<MessagingWidget {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.be.ok;
  });

  it('should render only unread messages', () => {
    const tree = SkinDeep.shallowRender(<MessagingWidget {...props}/>);
    const messageRows = tree.dive(['.msg-table-list', 'table', 'tbody']).everySubTree('.messaging-message-row');
    expect(messageRows.length).to.equal(1);
  });

  it('should render empty state properly', () => {
    const tree = SkinDeep.shallowRender(<MessagingWidget { ...{ canAccessMessaging: true }}/>);
    const emptyState = tree.dive(['p']);
    expect(emptyState.text()).to.have.string('You don’t have any unread messages from your health care team.');
  });
});
