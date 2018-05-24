import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';
import sinon from 'sinon';

import MessageAttachments from '../../../components/compose/MessageAttachments';

const props = {
  onClose: () => {},
  cssClass: 'cssClass',
  files: [
    {
      name: 'fileName',
      size: 1000000,
    }
  ],
};

describe('<MessageAttachments>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<MessageAttachments {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(<MessageAttachments {...props}/>);

    expect(tree.props.className).to.equal(`msg-attachments ${props.cssClass}`);
  });

  it('should render attachments', () => {
    const tree = SkinDeep.shallowRender(<MessageAttachments {...props}/>);

    expect(tree.subTree('MessageUploadedAttachment')).to.be.ok;
  });

  it('should handle deletion correctly', () => {
    const onClose = sinon.spy();
    const messageAttachments = ReactTestUtils.renderIntoDocument(
      <MessageAttachments
        {...props }
        onClose={onClose}/>
    );

    messageAttachments.handleAttachmentDelete({
      currentTarget: {
        dataset: {
          args: '{"attachment": 0}',
        }
      }
    });

    expect(onClose.calledWith(0)).to.be.true;
  });
});
