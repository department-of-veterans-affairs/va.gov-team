import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import SubmitRefill from '../../components/SubmitRefill';

const props = {
  text: 'Button text',
};

describe('<SubmitRefill>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<SubmitRefill {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });

  it('should have the expected className', () => {
    const tree = SkinDeep.shallowRender(<SubmitRefill {...props}/>);

    expect(tree.props.className).to.equal('rx-refill-form');
  });

  it('should show the expected button text', () => {
    const tree = SkinDeep.shallowRender(<SubmitRefill {...props}/>);

    expect(tree.subTree('button').text()).to.equal('Button text');
  });
});
