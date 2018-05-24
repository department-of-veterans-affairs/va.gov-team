import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import Breadcrumbs from '../../components/Breadcrumbs';

describe('<Breadcrumbs>', () => {
  it('should render first two items', () => {
    const tree = SkinDeep.shallowRender(
      <Breadcrumbs>
        <li>Testing</li>
      </Breadcrumbs>
    );

    const items = tree.everySubTree('li');
    expect(items[0].subTree('a').props.href).to.equal('/');
    expect(items[1].subTree('a').props.href).to.equal('/disability-benefits/');
    expect(items[2].text()).to.equal('Testing');
  });
});
