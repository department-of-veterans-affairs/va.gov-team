import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import MessageWriteGroup from '../../../components/compose/MessageWriteGroup';

const props = {
  messageText: {
    value: 'messageTextValue',
  },
  onAttachmentsClose: () => {},
  onAttachmentUpload: () => {},
  onAttachmentsError: () => {},
  onSend: () => {},
  onSave: () => {},
  onDelete: () => {},
  onTextChange: () => {},
  files: []
};

describe('<MessageWriteGroup>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<MessageWriteGroup {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname if no error', () => {
    const tree = SkinDeep.shallowRender(<MessageWriteGroup {...props}/>);

    expect(tree.props.className).to.equal('msg-write-group msg-field');
  });

  it('should have the expected classname if there is an error', () => {
    const tree = SkinDeep.shallowRender(<MessageWriteGroup {...props} errorMessage="errorMessage"/>);

    expect(tree.props.className).to.equal('msg-write-group msg-field msg-compose-error usa-input-error');
  });


  it('should render the expected child elements', () => {
    const tree = SkinDeep.shallowRender(<MessageWriteGroup {...props}/>);

    expect(tree.subTree('MessageWrite')).to.be.ok;
    expect(tree.subTree('MessageAttachments')).to.be.ok;
    expect(tree.subTree('MessageSend')).to.be.ok;
  });
});
