import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { AccountApp } from '../../containers/AccountApp';

describe('<AccountApp>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(<AccountApp/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.be.ok;
  });
});
