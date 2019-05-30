import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import MessageSend from '../../../components/compose/MessageSend';

const props = {
  onAttachmentUpload: () => {},
  onAttachmentsError: () => {},
  cssClass: 'cssClass',
  maxFiles: 1,
  maxFileSize: 1000000,
  maxTotalFileSize: 10000000,
  onSave: () => {},
  onSend: () => {},
  onDelete: () => {}
};

describe('<MessageSend>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<MessageSend {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(<MessageSend {...props}/>);

    expect(tree.props.className).to.equal('msg-send-group');
  });

  it('should handle attachments change success correctly', () => {
    // mock window to get past conditionals in change handler
    global.window = { File: true, FileList: true };
    const domEvent = {
      target: {
        files: [
          {
            name: 'fileName',
            size: 1000000,
          }
        ],
      }
    };
    const onAttachmentUpload = sinon.spy();
    const messageAttachments = ReactTestUtils.renderIntoDocument(
      <MessageSend
        {...props }
        onAttachmentUpload={onAttachmentUpload}/>
    );

    messageAttachments.handleAttachmentsChange(domEvent);

    expect(onAttachmentUpload.calledWith(domEvent.target.files)).to.be.true;
  });

  it('should handle attachments change error for too many files', () => {
    // mock window to get past conditionals in change handler
    global.window = { File: true, FileList: true };
    const domEvent = {
      target: {
        files: [
          {
            name: 'fileName',
            size: 500000,
          },
          {
            name: 'fileName2',
            size: 500000,
          }
        ],
      }
    };
    const onAttachmentsError = sinon.spy();
    const messageAttachments = ReactTestUtils.renderIntoDocument(
      <MessageSend
        {...props }
        onAttachmentsError={onAttachmentsError}/>
    );

    messageAttachments.handleAttachmentsChange(domEvent);

    expect(onAttachmentsError.calledWith({ type: 'tooMany' })).to.be.true;
  });

  it('should handle attachments change error for files too large', () => {
    // mock window to get past conditionals in change handler
    global.window = { File: true, FileList: true };
    const domEvent = {
      target: {
        files: [
          {
            name: 'fileName',
            size: 5000000,
          },
        ],
      }
    };
    const onAttachmentsError = sinon.spy();
    const messageAttachments = ReactTestUtils.renderIntoDocument(
      <MessageSend
        {...props }
        onAttachmentsError={onAttachmentsError}/>
    );

    messageAttachments.handleAttachmentsChange(domEvent);

    expect(onAttachmentsError.calledWith({ type: 'tooLarge' })).to.be.true;
  });
});
