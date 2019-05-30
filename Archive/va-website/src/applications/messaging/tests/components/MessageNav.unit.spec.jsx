import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import MessageNav from '../../components/MessageNav.jsx';

const props = {
  currentRange: 1,
  messageCount: 2,
  onItemSelect: () => {},
  itemNumber: 1,
  totalItems: 2,
};

describe('<MessageNav>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(
      <MessageNav {...props}/>
    );

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(
      <MessageNav {...props}/>
    );
    expect(tree.props.className).to.equal('messaging-message-nav');
  });

  it('render the correct message counts', () => {
    const tree = SkinDeep.shallowRender(
      <MessageNav {...props}/>
    );
    expect(tree.subTree('.messaging-count').text()).to.equal('1 of 2');
  });
});
