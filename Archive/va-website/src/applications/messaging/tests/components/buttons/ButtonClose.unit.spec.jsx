import { expect } from 'chai';
import React from 'react';
import SkinDeep from 'skin-deep';

import ButtonClose from '../../../components/buttons/ButtonClose';

describe('<ButtonClose>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<ButtonClose/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(<ButtonClose/>);

    expect(tree.props.className).to.equal('usa-button-unstyled');
  });
});
