import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import HelpMenu from '../../components/HelpMenu.jsx';

describe('<HelpMenu>', () => {
  const props = {
    isOpen: false,
    clickHandler: f => f
  };

  const tree = SkinDeep.shallowRender(<HelpMenu {...props}/>);

  it('should render', () => {
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });
});
