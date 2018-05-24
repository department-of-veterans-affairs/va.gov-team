import { expect } from 'chai';
import React from 'react';
import SkinDeep from 'skin-deep';

import ButtonMove from '../../../components/buttons/ButtonMove';

const props = {
  onClick: () => {},
};

describe('<ButtonMove>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<ButtonMove {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(<ButtonMove {...props}/>);

    expect(tree.props.className).to.equal('messaging-move');
  });
});
