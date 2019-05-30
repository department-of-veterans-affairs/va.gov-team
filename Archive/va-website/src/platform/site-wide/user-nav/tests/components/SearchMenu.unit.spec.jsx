import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import SearchMenu from '../../components/SearchMenu.jsx';

describe('<SearchMenu>', () => {
  const props = {
    isOpen: false,
    clickHandler: f => f
  };

  const tree = SkinDeep.shallowRender(<SearchMenu {...props}/>);

  it('should render', () => {
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });
});
