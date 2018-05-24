import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import MessageUploadedAttachment from '../../../components/compose/MessageUploadedAttachment';

const props = {
  attachmentIndex: 0,
  fileName: 'fileName',
  fileSize: '1000',
  cssClass: 'cssClass',
  onClose: () => {}
};

describe('<MessageUploadedAttachment>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<MessageUploadedAttachment {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(<MessageUploadedAttachment {...props}/>);

    expect(tree.props.className).to.equal(`msg-attachment ${props.cssClass}`);
  });

  it('should render the expected text', () => {
    const tree = SkinDeep.shallowRender(<MessageUploadedAttachment {...props}/>);

    expect(tree.subTree('.msg-attachment-name').text()).to.equal(props.fileName);
    expect(tree.subTree('.msg-attachment-size').text()).to.equal(`(${props.fileSize})`);
  });
});
