import React from 'react';
import SkinDeep from 'skin-deep';
import { expect } from 'chai';

import MessagingApp from '../../containers/MessagingApp';
import reducer from '../../reducers';
import createCommonStore from '../../../../platform/startup/store';

const store = createCommonStore(reducer);

describe('MessagingApp', () => {
  it('should render', () => {
    const mockRoutes = [{ path: '/test' }];
    const app = (
      <MessagingApp
        store={store}
        location={{ pathname: '/messaging' }}
        route={{ childRoutes: mockRoutes }}/>
    );
    const tree = SkinDeep.shallowRender(app);
    const vdom = tree.getRenderOutput();
    expect(vdom).to.not.be.undefined;
  });
});
