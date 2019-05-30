import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import Post911GIBStatusApp from '../../containers/Post911GIBStatusApp';
import reducer from '../../reducers/index.js';
import createCommonStore from '../../../../platform/startup/store';

const store = createCommonStore(reducer);

describe('<Post911GIBStatusApp>', () => {
  it('should render', () => {
    const tree = SkinDeep.shallowRender(
      <Post911GIBStatusApp store={store}/>);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });
});

