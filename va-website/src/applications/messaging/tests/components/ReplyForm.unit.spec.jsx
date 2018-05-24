import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import ReplyForm from '../../components/forms/ReplyForm';

const props = {
  reply: {
    body: {},
    attachments: [],
  },
  recipient: '',
  subject: '',
  onAttachmentsClose: () => {},
  onSaveReply: () => {},
  onSendReply: () => {},
};

describe('<ReplyForm>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(
      <ReplyForm {...props}/>
    );

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected id', () => {
    const tree = SkinDeep.shallowRender(
      <ReplyForm {...props}/>
    );
    expect(tree.props.id).to.equal('msg-reply');
  });
});
