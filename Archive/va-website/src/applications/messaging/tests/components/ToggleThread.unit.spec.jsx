import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import ToggleThread from '../../components/ToggleThread.jsx';

describe('<ToggleThread>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<ToggleThread/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(<ToggleThread/>);

    expect(tree.props.className).to.equal('messaging-toggle-thread');
  });

  it('should have the expected icon classname when expanded', () => {
    const tree = SkinDeep.shallowRender(<ToggleThread/>);

    expect(tree.subTree('.fa-chevron-up')).to.be.ok;
  });

  it('should have the expected icon classname when collapsed', () => {
    const tree = SkinDeep.shallowRender(
      <ToggleThread messagesCollapsed/>
    );
    expect(tree.subTree('.fa-chevron-down')).to.be.ok;
  });

  it('should have the expected action text when expanded', () => {
    const tree = SkinDeep.shallowRender(<ToggleThread/>);

    expect(tree.subTree('span').text()).to.equal('Collapse all');
  });

  it('should have the expected action text when collapsed', () => {
    const tree = SkinDeep.shallowRender(
      <ToggleThread messagesCollapsed/>
    );
    expect(tree.subTree('span').text()).to.equal('Expand all');
  });
});
