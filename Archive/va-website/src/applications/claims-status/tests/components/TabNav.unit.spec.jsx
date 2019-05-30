import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import TabNav from '../../components/TabNav';

describe('<TabNav>', () => {
  it('should render three tabs', () => {
    const tree = SkinDeep.shallowRender(
      <TabNav
        id={1}/>
    );

    expect(tree.subTree('.va-tabs').props.children.length).to.equal(3);
    expect(tree.subTree('.va-tabs').props.children[0].props.shortcut).to.equal(1);
  });
});
