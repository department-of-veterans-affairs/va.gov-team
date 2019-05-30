import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import Message from '../../components/Message';

const props = {
  attrs: {
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
  fetchMessage: () => {},
  isCollapsed: false,
  onToggleCollapsed: () => {}
};

describe('Message', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<Message {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.exist;
  });

  it('should show details when expanded', () => {
    const tree = SkinDeep.shallowRender(<Message {...props}/>);
    expect(tree.props.className).to.contain('messaging-thread-message--expanded');
    expect(tree.subTree('MessageDetails')).to.be.ok;
  });

  it('should show attachments when expanded', () => {
    const tree = SkinDeep.shallowRender(
      <Message {...props} attrs={{ ...props.attrs, attachment: true }}/>
    );
    expect(tree.props.className).to.contain('messaging-thread-message--expanded');
    expect(tree.subTree('MessageAttachmentsView')).to.be.ok;
  });

  it('should hide details when collapsed', () => {
    const tree = SkinDeep.shallowRender(<Message {...props} isCollapsed/>);
    expect(tree.props.className).to.contain('messaging-thread-message--collapsed');
    expect(tree.subTree('MessageDetails')).to.be.false;
  });

  it('should hide attachments when collapsed', () => {
    const tree = SkinDeep.shallowRender(
      <Message
        {...props}
        attrs={{ ...props.attrs, attachment: true }}
        isCollapsed/>
    );
    expect(tree.props.className).to.contain('messaging-thread-message--collapsed');
    expect(tree.subTree('MessageAttachmentsView')).to.be.false;
  });

  it('should display as a draft when there is no sent date', () => {
    const tree = SkinDeep.shallowRender(
      <Message {...props} attrs={{ ...props.attrs, sentDate: null }}/>
    );
    expect(tree.props.className).to.contain('messaging-thread-message--draft');
    expect(tree.subTree('.messaging-message-sent-date').text()).to.be.empty;
  });

  it('should fetch attachments when they have not been loaded', () => {
    const fetchMessage = sinon.spy();

    const message = ReactTestUtils.renderIntoDocument(
      <Message
        {...props}
        attrs={{ ...props.attrs, attachment: true }}
        fetchMessage={fetchMessage}/>
    );

    message.componentDidUpdate();
    expect(fetchMessage.calledWith(props.attrs.messageId)).to.be.true;
  });

  it('should not fetch attachments after they have already been loaded', () => {
    const fetchMessage = sinon.spy();

    const message = ReactTestUtils.renderIntoDocument(
      <Message
        {...props}
        attrs={{
          ...props.attrs,
          attachment: true,
          attachments: [{
            attributes: { name: 'test_file.png' },
            links: { download: 'http://example.com' }
          }]
        }}
        fetchMessage={fetchMessage}/>
    );

    message.componentDidUpdate();
    expect(fetchMessage.calledWith(props.attrs.messageId)).to.be.false;
  });
});
