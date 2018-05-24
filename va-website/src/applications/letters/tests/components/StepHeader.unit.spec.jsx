import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import StepHeader from '../../components/StepHeader.jsx';

const defaultProps = {
  name: 'First step of the process',
  current: '3',
  steps: '6'
};

describe('<StepHeader>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<StepHeader {...defaultProps}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.exist;
  });

  it('should format step header', () => {
    const tree = SkinDeep.shallowRender(<StepHeader {...defaultProps}/>);
    expect(tree.subTree('.form-process-step').text()).to.equal('3');
    expect(tree.subTree('.form-process-total').text()).to.equal('of 6');
    expect(tree.subTree('.section-content').text()).to.contain('First step of the process');
  });
});

