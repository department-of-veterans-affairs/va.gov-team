import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import ComposeButton from '../../components/ComposeButton';

describe('<ComposeButton>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<ComposeButton/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected default classname', () => {
    const tree = SkinDeep.shallowRender(<ComposeButton/>);

    expect(tree.props.className).to.equal('messaging-compose-button va-button-primary');
  });

  it('should have the expected classname when disabled', () => {
    const tree = SkinDeep.shallowRender(<ComposeButton disabled/>);

    expect(tree.props.className).to.equal('messaging-compose-button usa-button-disabled');
  });

  it('should render disabled button when disabled', () => {
    const tree = SkinDeep.shallowRender(<ComposeButton disabled/>);

    expect(tree.subTree('button').props.disabled).to.equal(true);
  });
});
