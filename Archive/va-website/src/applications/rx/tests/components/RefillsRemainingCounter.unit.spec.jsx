import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import RefillsRemainingCounter from '../../components/RefillsRemainingCounter';

describe('<RefillsRemainingCounter>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<RefillsRemainingCounter/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should have the expected className', () => {
    const tree = SkinDeep.shallowRender(<RefillsRemainingCounter/>);

    expect(tree.props.className).to.equal('rx-prescription-count');
  });

  it('should have the expected className when refills remaining is 0', () => {
    const tree = SkinDeep.shallowRender(<RefillsRemainingCounter remaining={0}/>);

    expect(tree.props.className).to.equal('rx-prescription-count rx-prescription-count-zero');
  });

  it('should show the expected refills remaining count', () => {
    const tree = SkinDeep.shallowRender(<RefillsRemainingCounter remaining={2}/>);

    expect(tree.subTree('.rx-prescription-count-number').text()).to.equal('2');
  });

  it('should show the expected refills remaining text when plural', () => {
    const tree = SkinDeep.shallowRender(<RefillsRemainingCounter remaining={2}/>);

    expect(tree.subTree('.rx-prescription-count-text').text()).to.equal('refills left');
  });

  it('should show the expected refills remaining text when singular', () => {
    const tree = SkinDeep.shallowRender(<RefillsRemainingCounter remaining={1}/>);

    expect(tree.subTree('.rx-prescription-count-text').text()).to.equal('refill left');
  });
});
