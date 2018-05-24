import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { TabItem } from '../../components/TabItem';

describe('<TabItem>', () => {
  it('should render tab', () => {
    const tree = SkinDeep.shallowRender(
      <TabItem
        shortcut={1}
        tabpath="Some path"
        title="Title"/>
    );

    expect(tree.subTree('IndexLink').props['aria-controls']).to.equal('tabPanelTitle');
    expect(tree.subTree('IndexLink').props.to).to.equal('Some path');
  });

  it('should use id if present', () => {
    const tree = SkinDeep.shallowRender(
      <TabItem
        shortcut={1}
        tabpath="Some path"
        id="TitleHere"
        title="Title Here"/>
    );

    expect(tree.subTree('IndexLink').props['aria-controls']).to.equal('tabPanelTitleHere');
    expect(tree.subTree('IndexLink').props.id).to.equal('tabTitleHere');
    expect(tree.subTree('IndexLink').props.to).to.equal('Some path');
  });
});
