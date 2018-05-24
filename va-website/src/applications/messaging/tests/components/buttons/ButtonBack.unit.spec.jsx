import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import ButtonBack from '../../../components/buttons/ButtonBack';

const props = {
  url: 'www.vets.gov',
};

describe('<ButtonBack>', () => {
  it('should render correctly', () => {
    const tree = SkinDeep.shallowRender(<ButtonBack {...props}/>);

    expect(tree.getRenderOutput()).to.exist;
  });

  it('should have the expected classname', () => {
    const tree = SkinDeep.shallowRender(<ButtonBack {...props}/>);

    expect(tree.props.className).to.equal('msg-btn-back');
  });
});
