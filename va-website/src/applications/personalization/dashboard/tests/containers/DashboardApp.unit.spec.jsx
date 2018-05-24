import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import { DashboardApp } from '../../containers/DashboardApp';


const props = {
  profile: {}
};

describe('<DashboardApp>', () => {
  it('should render', () => {
    window.localStorage = {
      getItem: () => {}
    };

    const tree = SkinDeep.shallowRender(<DashboardApp {...props}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.be.ok;
  });
});
