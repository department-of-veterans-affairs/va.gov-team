import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import MessageAttachmentsViewItem from '../../components/MessageAttachmentsViewItem';

const props = {
  name: 'fileName',
  url: 'fileUrl',
};

describe('<MessageAttachmentsViewItem>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<MessageAttachmentsViewItem {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected default icon classname', () => {
    const tree = SkinDeep.shallowRender(<MessageAttachmentsViewItem {...props}/>);

    expect(tree.subTree('i').props.className).to.equal('fa fa-paperclip msg-attachment-icon');
  });

  it('should handle download correctly when URL is provided', () => {
    // mock out apiRequest function
    const windowOpen = sinon.spy();
    global.window = { open: windowOpen };

    const messageAttachmentsViewItem = ReactTestUtils.renderIntoDocument(
      <MessageAttachmentsViewItem {...props }/>
    );
    // set downloadURL to avoid running actual apiRequest
    messageAttachmentsViewItem.downloadUrl = props.url;

    messageAttachmentsViewItem.downloadAttachment({ preventDefault: () => {} });

    expect(windowOpen.calledWith(props.url, '_blank')).to.be.true;
  });
});
